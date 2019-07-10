import { getOwnProfile } from '../../queries/User'
import { filter, mergeMap, map } from 'rxjs/operators'
import {
    getMyProfile,
    getMyProfile_getMyProfile,
} from '../../queries/__generated__/getMyProfile'
import { ActionsObservable } from 'redux-observable'
import { IDependencies } from '../Module'
export const SET_USER_DETAILS: string = 'SET_USER_DETAILS'
export const FETCH_USER_DETAILS: string = 'FETCH_USER_DETAILS'

type IFetchUserDetailsPayload = {
    parsedToken: string
}

interface ISetUserDetailsPayload {
    user: getMyProfile_getMyProfile
}

export interface IFetchUserDetailsAction {
    type: string
    payload: IFetchUserDetailsPayload
}

export interface ISetUserDetailsAction {
    type: string
    payload: ISetUserDetailsPayload
}

export const fetchUserDetailsAction = (
    payload: IFetchUserDetailsPayload
): IFetchUserDetailsAction => ({
    type: FETCH_USER_DETAILS,
    payload,
})

export const setUserDetailsAction = (
    payload: ISetUserDetailsPayload
): ISetUserDetailsAction => ({
    type: SET_USER_DETAILS,
    payload,
})

export default (
    action$: ActionsObservable<IFetchUserDetailsAction>,
    _: any,
    { apolloClient }: IDependencies
) =>
    action$.pipe(
        filter(action => action.type === FETCH_USER_DETAILS),
        mergeMap(() =>
            apolloClient.query<getMyProfile>({
                query: getOwnProfile,
                variables: {},
            })
        ),
        map(({ data: { getMyProfile } }) =>
            getMyProfile ? setUserDetailsAction({ user: getMyProfile }) : null
        )
    )
