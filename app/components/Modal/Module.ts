export interface ICloseModalAction {
    type: 'CLOSE_MODAL'
}

export interface IOpenModalPayload {
    children: React.ReactElement<any>
}

export interface IOpenModalAction {
    type: 'OPEN_MODAL'
    payload: IOpenModalPayload
}

const CLOSE_MODAL = 'CLOSE_MODAL'
const OPEN_MODAL = 'OPEN_MODAL'

export const closeModalAction = (): ICloseModalAction => ({
    type: CLOSE_MODAL,
})

export const openModalAction = (
    payload: IOpenModalPayload
): IOpenModalAction => ({
    payload,
    type: OPEN_MODAL,
})

export interface IModalState {
    isModalOpen: boolean
    children: React.ReactElement<any> | undefined
}

const initialState: IModalState = {
    children: undefined,
    isModalOpen: false,
}

type Action = ICloseModalAction | IOpenModalAction

export default (state: IModalState = initialState, action: Action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return { ...state, isModalOpen: false }
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
                children: action.payload.children,
            }
        default:
            return state
    }
}
