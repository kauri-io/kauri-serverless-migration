import { showNotificationAction } from './Epics/ShowNotificationEpic'
import { tail, compose, head, toUpper } from 'ramda'

type ValidateOnSubmit = (
    validateForm: any,
    showNotification: typeof showNotificationAction,
    callback?: any
) => void
const validateOnSubmit: ValidateOnSubmit = (
    validateForm,
    showNotification,
    callback
) =>
    validateForm().then((errors: { [errKey: string]: string | unknown }) => {
        const capitalize = (s: string) =>
            compose<string, string, string>(toUpper, head)(s) + tail(s)

        if (Object.keys(errors).length > 0) {
            return Object.keys(errors).map((errKey, i) => {
                if (typeof errors[errKey] === 'string') {
                    showNotification({
                        description: errors[errKey] as string,
                        message: `${capitalize(errKey)}`,
                        notificationType: 'error',
                    })
                } else {
                    ;(errors[errKey] as [
                        { [nestedErrors: string]: string }
                    ]).map(nestedErrors => {
                        Object.values(nestedErrors).map(err =>
                            showNotification({
                                description: err,
                                message: `${capitalize(errKey)} ${i + 1}`,
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
