import { getOwnProfile, saveUserMutation } from '../../queries/User'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { IDependencies, IReduxState } from '../../lib/Module'
import analytics from '../../lib/analytics'
import { merge, of, from, throwError } from 'rxjs'
import { Epic, ofType } from 'redux-observable'
import { switchMap, catchError, tap, mergeMap } from 'rxjs/operators'
import { path } from 'ramda'
import {
    saveUser,
    saveUserVariables,
} from '../../queries/__generated__/saveUser'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'
import { getProfileURL } from '../../lib/getURLs'
export interface ISaveUserDetailActionType {
    type: string
    payload: any
    callback: any
}

const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS'

export const saveUserDetailsAction = (payload: any, callback?: any) => ({
    type: SAVE_USER_DETAILS,
    payload,
    callback,
})

export const saveUserDetailsEpic: Epic<
    ISaveUserDetailActionType,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(SAVE_USER_DETAILS),
        switchMap(
            ({
                payload: {
                    username,
                    title,
                    avatar,
                    website,
                    email,
                    name,
                    social,
                    subscriptions,
                    redirectURL,
                },
                callback,
            }) =>
                from(
                    apolloClient.mutate<saveUser, saveUserVariables>({
                        mutation: saveUserMutation,
                        variables: {
                            username,
                            avatar,
                            website,
                            email,
                            title,
                            name,
                            social,
                            subscriptions,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ error: string | undefined | null }>(
                            path<string>(['saveUser', 'hash'])(data) || ''
                        )
                    ),
                    tap(console.log),
                    mergeMap(({ data: { getEvent: { output } } }) => {
                        if (typeof output.error === 'string') {
                            return throwError(output.error)
                        } else {
                            return apolloClient.query<getMyProfile>({
                                query: getOwnProfile,
                                variables: {},
                                fetchPolicy: 'network-only',
                            })
                        }
                    }),
                    tap(() =>
                        analytics.track('Edit Profile', {
                            category: 'user_actions',
                        })
                    ),
                    tap(() => callback && callback(false)),
                    mergeMap(() => {
                        let newRedirectURL
                        if (typeof redirectURL === 'string') {
                            newRedirectURL =
                                redirectURL.indexOf('https://') !== -1
                                    ? redirectURL + '?redirected=true'
                                    : redirectURL
                        } else {
                            newRedirectURL = state$.value.app.user
                                ? getProfileURL(state$.value.app.user).as
                                : '/'
                        }
                        return merge(
                            of(routeChangeAction(newRedirectURL)),
                            of({
                                type: 'UPDATE_USER_SUCCESS',
                            }),
                            of(
                                showNotificationAction({
                                    notificationType: 'success',
                                    message: 'Submission Successful',
                                    description:
                                        'You have successfully updated your profile',
                                })
                            )
                        )
                    }),
                    catchError(err => {
                        console.log(err)
                        const notificationPayload = err.includes(
                            'already uses this email'
                        )
                            ? {
                                  notificationType: 'error' as any,
                                  message: 'Submission error',
                                  description:
                                      'A user already uses this email!',
                              }
                            : {
                                  notificationType: 'error' as any,
                                  message: 'Submission error',
                                  description: 'Please try again',
                              }
                        return of(showNotificationAction(notificationPayload))
                    })
                )
        )
    )
