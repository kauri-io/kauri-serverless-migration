import { showNotificationAction } from './Epics/ShowNotificationEpic'

type ValidateOnSubmit = (
    validateForm: any,
    showNotification: typeof showNotificationAction,
    callback: any
) => void
const validateOnSubmit: ValidateOnSubmit = (
    validateForm,
    showNotification,
    callback
) =>
    validateForm().then((errors: { [errKey: string]: string | unknown }) => {
        const capitalize = (str: string) => {
            const cap = str.toLowerCase()
            cap.charAt(0).toUpperCase()
            return cap
        }

        if (Object.keys(errors).length > 0) {
            return Object.keys(errors).map((errKey, i) => {
                if (typeof errors[errKey] === 'string') {
                    showNotification({
                        description: errors[errKey] as string,
                        message: `${capitalize(errKey)} Validation error!`,
                        notificationType: 'error',
                    })
                } else {
                    ;(errors[errKey] as [
                        { [nestedErrors: string]: string }
                    ]).map(nestedErrors => {
                        Object.values(nestedErrors).map(err =>
                            showNotification({
                                description: err,
                                message: `${capitalize(errKey)} ${i +
                                    1} Validation error!`,
                                notificationType: 'error',
                            })
                        )
                    })
                }
            })
        } else {
            return typeof callback === 'function' && setTimeout(callback, 300)
        }
    })

export default validateOnSubmit
