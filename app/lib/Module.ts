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
    apolloSubscriber: <T>(
      hash: string,
      filterName?: string
    ) => Promise<{ data: { output: T } }>;
    apolloChildHashesSubscriber: <T>(
      childHashes: string[]
    ) => Array<Promise<{ data: { output: T } }>>;
    web3PersonalSign: any
    web3GetNetwork: any
    getGasPrice: any
    personalSign: (data: string) => Promise<string>
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

export interface ICommunity {
    role: string
    community: {
        id: string
        name: string
        members: Array<{
            id: string
            role: string
        }>
    }
}

export interface IReduxState {
    app: {
        hostName?: string
        user?: {
            id: string
            avatar: string
            username: string
            communities: ICommunity[]
            status: string // [NOT_REGISTERED|CREATED]EMAIL_VERIFIED]
        }
    }
    modal: {
        isModalOpen: boolean
    }
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

const initialState: IReduxState = {
    app: {},
    modal: {
        isModalOpen: false,
    },
}

const handlers = {
    [SET_NAVCOLOR_OVERRIDE]: (
        state: IReduxState,
        action: ISetNavcolorOverrideAction
    ) => ({
        ...state,
        navcolorOverride: action.payload,
    }),
    [SHOW_NOTIFICATION]: (state: IReduxState) => state,
    [SHOW_CONFIRMATION_MODAL]: (state: IReduxState) => state,
    [SET_HOSTNAME]: (state: IReduxState, action: ISetHostNameAction) =>
        typeof action.payload.hostName === 'string'
            ? { ...state, hostName: action.payload.hostName }
            : state,
    [SET_USER_ID]: (state: IReduxState, action: ISetUserIdAction) =>
        typeof action.userId === 'string'
            ? { ...state, userId: action.userId }
            : state,
    [SET_USER_DETAILS]: (
        state: IReduxState,
        action: ISetUserDetailsAction
    ) => ({
        ...state,
        user: action.payload,
    }),
    [HIDE_INTRO_BANNER_SUCCESS]: (state: IReduxState) => ({
        ...state,
        showIntroBanner: false,
    }),
    [TOGGLE_MODAL]: (state: IReduxState, action: IToggleModalAction) =>
        (typeof action.modalTitle === 'string' ||
            typeof action.modalTitle === 'object') &&
        typeof action.modalChildren === 'object' &&
        typeof action.onOk === 'function' &&
        typeof action.onCancel === 'function' &&
        typeof action.footer === 'object'
            ? {
                  ...state,
                  modalOpen: !state.modal.isModalOpen,
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
