export const SHOW_NOTIFICATION: string = 'SHOW_NOTIFICATION'

export const showNotificationAction = (
    payload: IShowNotificationPayload
): IShowNotificationAction => ({
    type: SHOW_NOTIFICATION,
    payload,
})

export interface IShowNotificationPayload {
    notificationType: 'success' | 'info' | 'warning' | 'error'
    message: string
    description: string
}

export interface IShowNotificationAction {
    type: string
    payload: IShowNotificationPayload
}
