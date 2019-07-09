import { ActionsObservable } from 'redux-observable'
import { filter, ignoreElements, map } from 'rxjs/operators'
import { Modal } from 'antd'

const { confirm } = Modal

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger'

export const SHOW_CONFIRMATION_MODAL: string = 'SHOW_CONFIRMATION_MODAL'

interface IShowConfirmationModalAction {
    type: string
    payload: IShowConfirmationModalPayload
}

type IShowConfirmationModalPayload = {
    title: string
    content: string
    onOk: () => any
    onCancel: () => any
    okType?: ButtonType
}

const showConfirmationModal = (payload: IShowConfirmationModalPayload) =>
    confirm(payload)
export const showConfirmationModalAction = (
    payload: IShowConfirmationModalPayload
): IShowConfirmationModalAction => ({
    type: SHOW_CONFIRMATION_MODAL,
    payload,
})

export default (
    action$: ActionsObservable<IShowConfirmationModalAction>,
    _: any
) =>
    action$.pipe(
        filter(action => action.type === SHOW_CONFIRMATION_MODAL),
        map(({ payload }) => showConfirmationModal(payload)),
        ignoreElements()
    )
