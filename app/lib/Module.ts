import createReducer from './createReducer'
import {
    SET_USER_DETAILS,
    ISetUserDetailsAction,
} from './Epics/FetchUserDetailsEpic'
import { SHOW_NOTIFICATION } from './Epics/ShowNotificationEpic'
import { HIDE_INTRO_BANNER_SUCCESS } from './Epics/HideIntroBannerEpic'
import { SHOW_CONFIRMATION_MODAL } from './Epics/ShowConfirmationModalEpic'
import { ApolloClient } from 'apollo-client'

export interface IDependencies {
    apolloClient: ApolloClient<{}>
    smartContracts: any
    web3: any
    fetch: any
    apolloSubscriber: any
    web3PersonalSign: any
    web3GetNetwork: any
    getGasPrice: any
    personalSign: any
}

type ISetHostNamePayload = {
    hostName: string
}
interface IToggleModalPayload {
    modalTitle?: string
    modalChildren?: any
    onOk?: () => any
    onCancel?: () => any
    footer?: any
}

type ISetNavcolorOverridePayload = string

interface IToggleModalAction {
    type: string
    modalTitle?: string | any
    modalChildren?: any
    onOk?: () => any
    onCancel?: () => any
    footer?: any
}

interface ISetUserIdAction {
    type: string
    userId?: string
}

interface ISetHostNameAction {
    type: string
    payload: ISetHostNamePayload
}

interface ISetNavcolorOverrideAction {
    type: string
    payload: ISetNavcolorOverridePayload
}

type State = {
    userId?: string
    modalTitle?: string
    modalOpen: boolean
    onOk?: () => any
    onCancel?: () => any
    showIntroBanner: boolean
    funds: number
}

export const SET_HOSTNAME: string = 'SET_HOSTNAME'

export const SET_USER_ID: string = 'SET_USER_ID'

export const TOGGLE_MODAL: string = 'TOGGLE_MODAL'

export const SET_NAVCOLOR_OVERRIDE: string = 'SET_NAVCOLOR_OVERRIDE'

export const setHostNameAction = (
    payload: ISetHostNamePayload
): ISetHostNameAction => ({
    type: SET_HOSTNAME,
    payload,
})

export const setNavcolorOverrideAction = (
    payload: ISetNavcolorOverridePayload
): ISetNavcolorOverrideAction => ({
    type: SET_NAVCOLOR_OVERRIDE,
    payload,
})

export const ItoggleModalAction = ({
    modalTitle,
    modalChildren,
    onOk,
    onCancel,
    footer,
}: IToggleModalPayload): IToggleModalAction => ({
    type: TOGGLE_MODAL,
    modalTitle,
    modalChildren,
    onOk,
    onCancel,
    footer,
})

const initialState: State = {
    modalOpen: false,
    onOk: () => {},
    onCancel: () => {},
    showIntroBanner: true,
    funds: 0,
}

const handlers = {
    [SET_NAVCOLOR_OVERRIDE]: (
        state: State,
        action: ISetNavcolorOverrideAction
    ) => ({
        ...state,
        navcolorOverride: action.payload,
    }),
    [SHOW_NOTIFICATION]: (state: State) => state,
    [SHOW_CONFIRMATION_MODAL]: (state: State) => state,
    [SET_HOSTNAME]: (state: State, action: ISetHostNameAction) =>
        typeof action.payload.hostName === 'string'
            ? { ...state, hostName: action.payload.hostName }
            : state,
    [SET_USER_ID]: (state: State, action: ISetUserIdAction) =>
        typeof action.userId === 'string'
            ? { ...state, userId: action.userId }
            : state,
    [SET_USER_DETAILS]: (state: State, action: ISetUserDetailsAction) => ({
        ...state,
        user: action.payload,
    }),
    [HIDE_INTRO_BANNER_SUCCESS]: (state: State) => ({
        ...state,
        showIntroBanner: false,
    }),
    [TOGGLE_MODAL]: (state: State, action: IToggleModalAction) =>
        (typeof action.modalTitle === 'string' ||
            typeof action.modalTitle === 'object') &&
        typeof action.modalChildren === 'object' &&
        typeof action.onOk === 'function' &&
        typeof action.onCancel === 'function' &&
        typeof action.footer === 'object'
            ? {
                  ...state,
                  modalOpen: !state.modalOpen,
                  modalTitle: action.modalTitle,
                  modalChildren: action.modalChildren,
                  onOk: action.onOk,
                  onCancel: action.onCancel,
                  footer: action.footer,
              }
            : {
                  ...state,
                  modalOpen: false,
                  modalTitle: null,
                  modalChildren: null,
                  onOk: () => {},
                  onCancel: () => {},
                  footer: null,
              },
}

export default createReducer(initialState, handlers)
