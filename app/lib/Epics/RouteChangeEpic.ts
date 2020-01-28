import Router from 'next/router'
import { Epic } from 'redux-observable'
import { filter, ignoreElements, map } from 'rxjs/operators'

export const ROUTE_CHANGE: string = 'ROUTE_CHANGE'
type IRouteChangePayload = string

export interface IRouteChangeAction {
    type: string
    payload: IRouteChangePayload
}

export const routeChange = (payload: IRouteChangePayload, as?: string): any => {
    if (
        window.location.href.indexOf('redirected=true') !== -1 &&
        payload === 'back'
    ) {
        return Router.push('/')
    } else {
        return payload === 'back' ? Router.back() : Router.push(payload, as)
    }
}

export const routeChangeAction = (
    payload: IRouteChangePayload
): IRouteChangeAction => ({
    type: ROUTE_CHANGE,
    payload,
})

const routeChangeEpic: Epic<IRouteChangeAction, any> = action$ =>
    action$.pipe(
        filter(action => action.type === ROUTE_CHANGE),
        map(({ payload }) => routeChange(payload)),
        ignoreElements()
    )

export default routeChangeEpic
