import { ActionsObservable } from 'redux-observable'
import { filter, map, ignoreElements } from 'rxjs/operators'
import { notification } from 'antd'

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

const openNotificationWithIcon = ({
    notificationType,
    message,
    description,
}: IShowNotificationPayload): void =>
    notification[notificationType]({
        placement: 'topLeft',
        message,
        description,
    })

export default (action$: ActionsObservable<IShowNotificationAction>) =>
    action$.pipe(
        filter(action => action.type === SHOW_NOTIFICATION),
        map(({ payload }) => openNotificationWithIcon(payload)),
        ignoreElements()
    )
