import { Observable } from "rxjs";
import createReducer from "./createReducer";

const SET_HOSTNAME = "SET_HOSTNAME"
const FETCH_USER_DETAILS = "FETCH_USER_DETAILS"
const ROUTE_CHANGE = "ROUTE_CHANGE"

interface IRouteChangeAction {
  type: string,
  payload: string,
};


export const routeChangeAction = (
  payload: string
): any => ({
  type: ROUTE_CHANGE,
  payload,
});

export const routeChangeEpic = (
  action$: Observable<IRouteChangeAction>,
  _: any
) =>
  action$
    .ofType(ROUTE_CHANGE)
    .do(({ payload }) => routeChange(payload))
    .ignoreElements();

export const routeChange = (payload: string): any => {
  if (
    window.location.href.indexOf("redirected=true") !== -1 &&
    payload === "back"
  ) {
    return Router.pushRoute("/");
  } else {
    return payload === "back" ? Router.back() : Router.pushRoute(payload);
  }
};

const initialState: IReduxState = {
  app: {
    hostName: 'kauri.io',
    user: null,
  },
  modal: {
    isModalOpen: false
  }
};

export interface IReduxState {
  app: {
    hostName: string;
    user: {
      id: string;
      avatar: string;
      username: string;
      status: string; // [NOT_REGISTERED|CREATED]EMAIL_VERIFIED]
    } | null;
  };
  modal: {
    isModalOpen: boolean;
  };
}

export const setHostNameAction = (
  payload: {
    hostName: string;
  }
) => ({
  type: SET_HOSTNAME,
  payload,
});

export const fetchUserDetailsAction = (
  payload: FetchUserDetailsPayload
): FetchUserDetailsAction => ({
  type: FETCH_USER_DETAILS,
  payload,
});

export const userDetailsEpic = (
  action$: Observable<FetchUserDetailsAction>,
  { getState }: any,
  { fetch, apolloClient }: Dependencies
) =>
  action$
    .ofType(FETCH_USER_DETAILS)
    .take(1)
    .mergeMap(({ payload: { parsedToken } }) =>
      apolloClient.query({
        query: getMyProfile,
        variables: {},
      })
    )
    .map(({ data: { getMyProfile } }) => getMyProfile)
    .map(user => setUserDetailsAction(user));


const handlers = {
  // [SHOW_NOTIFICATION]: (state: State, action: Action) => state,
  // [SHOW_CONFIRMATION_MODAL]: (state: State, action: Action) => state,
  [SET_HOSTNAME]: (state: IReduxState, action) =>
    typeof action.payload.hostName === "string"
      ? { ...state, hostName: action.payload.hostName }
      : state,
  // [SET_USER_ID]: (state: State, action: Action) =>
  //   typeof action.userId === "string"
  //     ? { ...state, userId: action.userId }
  //     : state,
  // [SET_USER_DETAILS]: (state: State, action: Action) => ({
  //   ...state,
  //   user: action.payload,
  // }),
  // [HIDE_INTRO_BANNER_SUCCESS]: (state: State, action: Action) => ({
  //   ...state,
  //   showIntroBanner: false,
  // }),
  // [TOGGLE_MODAL]: (state: State, action: Action) =>
  //   (typeof action.modalTitle === "string" ||
  //     typeof action.modalTitle === "object") &&
  //   typeof action.modalChildren === "object" &&
  //   typeof action.onOk === "function" &&
  //   typeof action.onCancel === "function" &&
  //   typeof action.footer === "object"
  //     ? {
  //       ...state,
  //       modalOpen: !state.modalOpen,
  //       modalTitle: action.modalTitle,
  //       modalChildren: action.modalChildren,
  //       onOk: action.onOk,
  //       onCancel: action.onCancel,
  //       footer: action.footer,
  //     }
  //     : {
  //       ...state,
  //       modalOpen: false,
  //       modalTitle: null,
  //       modalChildren: null,
  //       onOk: () => {},
  //       onCancel: () => {},
  //       footer: null,
  //     },
    };

export default createReducer(initialState, handlers);
