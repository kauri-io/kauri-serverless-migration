import createReducer from './createReducer'
import {
    SET_USER_DETAILS,
    ISetUserDetailsAction,
} from './Epics/FetchUserDetailsEpic'
import {
    SHOW_NOTIFICATION,
    IShowNotificationAction,
    IShowNotificationPayload,
} from './Epics/ShowNotificationEpic'
import { ApolloClient } from 'apollo-client'

export interface IDependencies {
    apolloClient: ApolloClient<{}>
    smartContracts: any
    web3: any
    fetch: any
    apolloSubscriber: <T>(
        hash: string,
        filterName?: string
    ) => Promise<{ data: { getEvent: { output: T, status: string } } }>
    apolloChildHashesSubscriber: <T>(
        childHashes: string[]
    ) => Array<Promise<{ data: { output: T } }>>
    web3GetNetwork: any
    getGasPrice: () => Promise<number>
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
        notification?: IShowNotificationPayload
        hostName?: string
        user?: {
            id: string
            avatar: string
            dateCreated: string
            username: string
            name: string
            email: string
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
    [SHOW_NOTIFICATION]: (
        state: IReduxState,
        action: IShowNotificationAction
    ) => ({
        ...state,
        notification: {
            ...action.payload,
            type: action.payload.notificationType,
        },
    }),
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
        user: action.payload.user,
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
