import { Observable } from "rxjs";
// import { notification, Modal } from "antd";
import cookie from "cookie";
import Router from 'next/router'
import createReducer from "./createReducer";
import { getOwnProfile as getMyProfile } from "../queries/User";

// const { confirm } = Modal;

type ButtonType = "primary" | "ghost" | "dashed" | "danger";

type INotificationType = "success" | "info" | "warning" | "error";

interface IUser {
  address: string,
  userId: string,
  username: string,
};

interface IDependencies {
  apolloClient: any,
  smartContracts: any,
  web3: any,
  fetch: any,
  apolloSubscriber: any,
  web3PersonalSign: any,
  web3GetNetwork: any,
  getGasPrice: any,
  driverJS: any,
  personalSign: any,
};

interface IShowNotificationPayload {
  notificationType: INotificationType,
  message: string,
  description: string,
};

type IShowConfirmationModalPayload = {
  title: string,
  content: string,
  onOk: () => any,
  onCancel: () => any,
  okType?: ButtonType,
};

type ISetHostNamePayload = {
  hostName: string,
};

type IFetchUserDetailsPayload = {
  parsedToken: string,
};

interface ISetUserDetailsPayload {
  user: IUser,
};

type IRouteChangePayload  = string;

interface IFetchUserDetailsAction {
  type: string,
  payload: IFetchUserDetailsPayload,
};

interface ISetUserDetailsAction {
  type: string,
  payload: ISetUserDetailsPayload,
};

interface IToggleModalPayload {
  modalTitle?: string,
  modalChildren?: any,
  onOk?: () => any,
  onCancel?: () => any,
  footer?: any,
};

type ISetNavcolorOverridePayload = string;

interface IToggleModalAction {
  type: string,
  modalTitle?: string | any,
  modalChildren?: any,
  onOk?: () => any,
  onCancel?: () => any,
  footer?: any,
};

interface IShowNotificationAction {
  type: string,
  payload: IShowNotificationPayload,
};

interface IShowConfirmationModalAction {
  type: string,
  payload: IShowConfirmationModalPayload,
};

interface IRouteChangeAction {
  type: string,
  payload: IRouteChangePayload,
};

interface ISetUserIdAction {
  type: string,
  userId?: string,
};

interface IHideIntroBannerAction {
  type: string,
};

interface ISetHostNameAction {
  type: string,
  payload: ISetHostNamePayload,
};

interface ISetNavcolorOverrideAction {
  type: string,
  payload: ISetNavcolorOverridePayload,
};

type State = {
  userId?: string,
  modalTitle?: string,
  modalOpen: boolean,
  onOk?: () => any,
  onCancel?: () => any,
  showIntroBanner: boolean,
  funds: number,
};

export const openNotificationWithIcon = ({
  // notificationType, message, description
}: IShowNotificationPayload): void =>
  // notification[notificationType]({
  //   placement: "topLeft",
  //   message,
  //   description,
  // });
  console.log('notification')

export const showConfirmationModal = (
  // payload: IShowConfirmationModalPayload
): void => console.log('confirmation') // confirm(payload);

export const routeChange = (payload: IRouteChangePayload): any => {
  if (
    window.location.href.indexOf("redirected=true") !== -1 &&
    payload === "back"
  ) {
    // return Router.pushRoute("/"); // TODO figure out how to do route change
  } else {
    // return payload === "back" ? Router.back() : Router.pushRoute(payload);
  }
};


export const SET_USER_DETAILS: string = "SET_USER_DETAILS";

export const SET_HOSTNAME: string = "SET_HOSTNAME";

export const SHOW_NOTIFICATION: string = "SHOW_NOTIFICATION";

export const SHOW_CONFIRMATION_MODAL: string = "SHOW_CONFIRMATION_MODAL";

export const ROUTE_CHANGE: string = "ROUTE_CHANGE";

export const SET_USER_ID: string = "SET_USER_ID";

export const TOGGLE_MODAL: string = "TOGGLE_MODAL";

export const FETCH_USER_DETAILS: string = "FETCH_USER_DETAILS";

export const SET_NAVCOLOR_OVERRIDE: string = "SET_NAVCOLOR_OVERRIDE";

export const HIDE_INTRO_BANNER: string = "HIDE_INTRO_BANNER";

export const HIDE_INTRO_BANNER_SUCCESS: string = "HIDE_INTRO_BANNER_SUCCESS";

export const showNotificationAction = (
  payload: IShowNotificationPayload
): IShowNotificationAction => ({
  type: SHOW_NOTIFICATION,
  payload,
});

export const showConfirmationModalAction = (
  payload: IShowConfirmationModalPayload
): IShowConfirmationModalAction => ({
  type: SHOW_CONFIRMATION_MODAL,
  payload,
});

export const routeChangeAction = (
  payload: IRouteChangePayload
): IRouteChangeAction => ({
  type: ROUTE_CHANGE,
  payload,
});

export const fetchUserDetailsAction = (
  payload: IFetchUserDetailsPayload
): IFetchUserDetailsAction => ({
  type: FETCH_USER_DETAILS,
  payload,
});

export const setUserDetailsAction = (
  payload: ISetUserDetailsPayload
): ISetUserDetailsAction => ({
  type: SET_USER_DETAILS,
  payload,
});

export const hideIntroBannerAction = (): IHideIntroBannerAction => ({
  type: HIDE_INTRO_BANNER,
});

export const setHostNameAction = (
  payload: ISetHostNamePayload
): ISetHostNameAction => ({
  type: SET_HOSTNAME,
  payload,
});

export const setNavcolorOverrideAction = (
  payload: ISetNavcolorOverridePayload
): ISetNavcolorOverrideAction => ({
  type: SET_NAVCOLOR_OVERRIDE,
  payload,
});

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
});

// export const userDetailsEpic = (
//   action$: Observable<IFetchUserDetailsAction>,
//   {},
//   { apolloClient }: IDependencies

// ) =>
//   action$
//     .ofType(FETCH_USER_DETAILS)
//     .take(1)
//     .mergeMap(() =>
//       apolloClient.query({
//         query: getMyProfile,
//         variables: {},
//       })
//     )
//     .map(({ data: { getMyProfile } }) => getMyProfile)
//     .map(user => setUserDetailsAction(user));

// export const showNotificationEpic = (
//   action$: Observable<IShowNotificationAction>,
//   _: any,
// ) =>
//   action$
//     .ofType(SHOW_NOTIFICATION)
//     .do(openNotificationWithIcon)
//     .ignoreElements();

// export const showConfirmationModalEpic = (
//   action$: Observable<IShowConfirmationModalAction>,
//   _: any,
// ) =>
//   action$
//     .ofType(SHOW_CONFIRMATION_MODAL)
//     .take(1)
//     .do(showConfirmationModal)
//     .ignoreElements();

// export const routeChangeEpic = (
//   action$: Observable<IRouteChangeAction>,
//   _: any,
// ) =>
//   action$
//     .ofType(ROUTE_CHANGE)
//     .do(({ payload }) => routeChange(payload))
//     .ignoreElements();

// export const hideIntroBannerEpic = (
//   action$: Observable<IHideIntroBannerAction>,
//   _: any,
// ) =>
//   action$
//     .ofType(HIDE_INTRO_BANNER)
//     .do(() => {
//       document.cookie = cookie.serialize("HIDE_INTRO_BANNER", "true", {
//         maxAge: 30 * 24 * 60 * 60 * 60, // 30 days
//       });
//     })
//     .mapTo({ type: HIDE_INTRO_BANNER_SUCCESS });

const initialState: State = {
  modalOpen: false,
  onOk: () => {},
  onCancel: () => {},
  showIntroBanner: true,
  funds: 0,
};

const handlers = {
  [SET_NAVCOLOR_OVERRIDE]: (state: State, action: ISetNavcolorOverrideAction) => ({
    ...state,
    navcolorOverride: action.payload,
  }),
  [SHOW_NOTIFICATION]: (state: State) => state,
  [SHOW_CONFIRMATION_MODAL]: (state: State) => state,
  [SET_HOSTNAME]: (state: State, action: ISetHostNameAction) =>
    typeof action.payload.hostName === "string"
      ? { ...state, hostName: action.payload.hostName }
      : state,
  [SET_USER_ID]: (state: State, action: ISetUserIdAction) =>
    typeof action.userId === "string"
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
    (typeof action.modalTitle === "string" ||
      typeof action.modalTitle === "object") &&
    typeof action.modalChildren === "object" &&
    typeof action.onOk === "function" &&
    typeof action.onCancel === "function" &&
    typeof action.footer === "object"
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
};

export default createReducer(initialState, handlers);
