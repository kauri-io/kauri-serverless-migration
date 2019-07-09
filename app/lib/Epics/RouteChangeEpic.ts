// import Router from 'next/router'
import { ActionsObservable } from 'redux-observable'
import { filter, ignoreElements, map } from 'rxjs/operators'

export const ROUTE_CHANGE: string = 'ROUTE_CHANGE'
type IRouteChangePayload = string

interface IRouteChangeAction {
    type: string
    payload: IRouteChangePayload
}

export const routeChange = (payload: IRouteChangePayload): any => {
    if (
        window.location.href.indexOf('redirected=true') !== -1 &&
        payload === 'back'
    ) {
        // return Router.pushRoute("/"); // TODO figure out how to do route change
    } else {
        // return payload === "back" ? Router.back() : Router.pushRoute(payload);
    }
}

export const routeChangeAction = (
    payload: IRouteChangePayload
): IRouteChangeAction => ({
    type: ROUTE_CHANGE,
    payload,
})

export default (action$: ActionsObservable<IRouteChangeAction>) =>
    action$.pipe(
        filter(action => action.type === ROUTE_CHANGE),
        map(({ payload }) => routeChange(payload)),
        ignoreElements()
    )
