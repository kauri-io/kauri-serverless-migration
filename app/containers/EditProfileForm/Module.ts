import { saveUserDetails, getOwnProfile } from '../../queries/User'
import { showNotificationAction, IShowNotificationPayload } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { IDependencies } from '../../lib/Module'
import analytics from '../../lib/analytics'
import { merge, of, from, throwError } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import { filter, switchMap, catchError, tap, mergeMap } from 'rxjs/operators'

export type SaveUserDetailActionType = {
    type: string
    payload: any
    callback: any
}

export const saveUserDetailsAction = (payload: any, callback?: any) => ({
    type: 'SAVE_USER_DETAILS',
    payload,
    callback,
})

export const saveUserDetailsEpic = (
    action$: ActionsObservable<SaveUserDetailActionType>,
    { getState }: any,
    { apolloClient, smartContracts, web3, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        filter(x => x.type === 'SAVE_USER_DETAILS'),
        switchMap(
            ({
                payload: {
                    username,
                    title,
                    avatar,
                    website,
                    email,
                    name,
                    twitter,
                    github,
                    subscriptions,
                    redirectURL,
                },
                callback,
            }) =>
                from(
                    apolloClient.mutate({
                        mutation: saveUserDetails,
                        variables: {
                            username,
                            avatar,
                            website,
                            email,
                            title,
                            name,
                            social: (twitter || github) && {
                                twitter,
                                github,
                            },
                            subscriptions,
                        },
                    })
                ).pipe(
                    tap(() => callback && callback(true)),
                    mergeMap(
                        ({
                            data: {
                                saveUser: { hash },
                            },
                        }: {
                            data: { saveUser: { hash: string } }
                        }) => apolloSubscriber(hash)
                    ),
                    mergeMap(({ data: { output } }) => {
                        if (typeof output.error === 'string') {
                            return throwError(output.error)
                        } else {
                            return of({
                                type: 'UPDATE_USER_SUCCESS',
                            }).pipe(
                                tap(() =>
                                    analytics.track('Edit Profile', {
                                        category: 'user_actions',
                                    })
                                ),
                                tap(() => callback && callback(false)),
                                mergeMap(() =>
                                    apolloClient.query({
                                        query: getOwnProfile,
                                        variables: {},
                                        fetchPolicy: 'network-only',
                                    })
                                ),
                                mergeMap(() => {
                                    let newRedirectURL
                                    if (typeof redirectURL === 'string') {
                                        newRedirectURL =
                                            redirectURL.indexOf('https://') !==
                                            -1
                                                ? redirectURL +
                                                  '?redirected=true'
                                                : redirectURL
                                    } else {
                                        newRedirectURL = `/public-profile/${
                                            getState().app.user.id
                                        }`
                                    }

                                    return merge(
                                        of(routeChangeAction(newRedirectURL)),
                                        of(
                                            showNotificationAction({
                                                notificationType: 'success',
                                                message:
                                                    'Submission Successful',
                                                description:
                                                    'You have successfully updated your profile',
                                            })
                                        ),
                                        catchError(err => {
                                            console.error(err)
                                            return of(
                                                showNotificationAction({
                                                    notificationType: 'error',
                                                    message: 'Submission error',
                                                    description: 'Please try again',
                                                })
                                            )
                                        })
                                    )
                                })

                            )
                        }
                    }),
                    catchError(err => {
                        console.error(err)
                        const notificationPayload = err.includes(
                            'already uses this email'
                        )
                            ? {
                                  notificationType: 'error',
                                  message: 'Submission error',
                                  description:
                                      'A user already uses this email!',
                              }
                            : {
                                  notificationType: 'error',
                                  message: 'Submission error',
                                  description: 'Please try again',
                              }
                        return of(showNotificationAction(notificationPayload as IShowNotificationPayload))
                    })
                )
        )
    )
