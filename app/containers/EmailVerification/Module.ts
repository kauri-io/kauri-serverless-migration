import { ofType, Epic } from 'redux-observable'
import { IDependencies, IReduxState } from '../../lib/Module'

import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { getEvent } from '../../queries/Module'
import {
    verifyEmail as verifyEmailMutation,
    emailSubscribe as emailSubscribeMutation,
    regenerateEmailVerificationCode as regenerateMutation,
} from '../../queries/User'
import {
    verifyEmail,
    verifyEmailVariables,
} from '../../queries/__generated__/verifyEmail'
import {
    emailSubscribe,
    emailSubscribeVariables,
} from '../../queries/__generated__/emailSubscribe'
import { from, of, forkJoin } from 'rxjs'
import { mergeMap, tap, switchMap, map, catchError } from 'rxjs/operators'
import { regenerateEmailVerificationCode } from '../../queries/__generated__/regenerateEmailVerificationCode'
import initApollo from '../../lib/init-apollo'
import { path } from 'ramda'
import cookie from 'cookie'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

interface IVerifyEmailAction {
    callback: any
    code: string
    type: 'VERIFY_EMAIL'
}

const VERIFY_EMAIL = 'VERIFY_EMAIL'

const EMAIL_SUBSCRIBE = 'EMAIL_SUBSCRIBE'

export const emailSubscribeAction = (
    emailAddress: string,
    callback: any
): IEmailSubscribeAction => ({
    callback,
    emailAddress,
    type: EMAIL_SUBSCRIBE,
})

export const verifyEmailAction = (
    code: string,
    callback: any
): IVerifyEmailAction => ({
    callback,
    code,
    type: VERIFY_EMAIL,
})

export const emailVerifiedAction = () => ({
    type: 'EMAIL_VERIFIED',
})

export const emailVerificationFail = () => ({
    type: 'EMAIL_VERIFICATION_FAIL',
})

interface IResendEmailVerificationAction {
    type: string
}

export const resendEmailVerificationAction = () => ({
    type: 'SEND_EMAIL_VERIFICATION',
})

export const emailSubscribedAction = () => ({
    type: 'EMAIL_SUBSCRIBED',
})

export const emailSubscribedFail = () => ({
    type: 'EMAIL_SUBSCRIBE_FAIL',
})

interface IVerifyEmailOutput {
    childHashes: string[]
}

interface IEmailSubscribeAction {
    callback: any
    emailAddress: string
    type: 'EMAIL_SUBSCRIBE'
}

interface IEmailSubscribeOutput {
    commandResult: string
}

export const emailSubscribeEpic: Epic<
    IEmailSubscribeAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient }) =>
    action$.pipe(
        ofType(EMAIL_SUBSCRIBE),
        switchMap(({ emailAddress }: IEmailSubscribeAction) =>
            from(
                apolloClient.mutate<emailSubscribe, emailSubscribeVariables>({
                    mutation: emailSubscribeMutation,
                    variables: {
                        emailAddress,
                        subscriptions: { newsletter: true },
                    },
                })
            )
        ),
        mergeMap(({ data }) =>
            from(
                new Promise<{
                    data: { getEvent: { output: IEmailSubscribeOutput } }
                }>((resolve, reject) => {
                    initApollo(
                        {},
                        {
                            getToken: () =>
                                cookie.parse(
                                    global.document && global.document.cookie
                                )['TOKEN'],
                        }
                    )
                        .subscribe({
                            query: getEvent,
                            variables: {
                                hash: path<string>(['subscribe', 'hash'], data),
                            },
                        })
                        .subscribe({
                            error: (err: Error) => reject(err),
                            next: (data: {
                                data: {
                                    getEvent: {
                                        output: IEmailSubscribeOutput
                                    }
                                }
                            }) => resolve(data),
                        })
                })
            )
        ),
        tap(() => apolloClient.resetStore()),
        mergeMap(({ data: { getEvent: { output } } }) =>
            output && output.commandResult
                ? of(
                      showNotificationAction({
                          description:
                              'Please check your email inbox and confirm email newsletter subscription!',
                          message: 'Confirm your email newsletter subscription',
                          notificationType: 'success',
                      })
                  )
                : of(emailVerificationFail())
        )
    )

export const verifyEmailEpic: Epic<
    IVerifyEmailAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient }) =>
    action$.pipe(
        ofType(VERIFY_EMAIL),
        switchMap(({ code, callback }: IVerifyEmailAction) =>
            from(
                apolloClient.mutate<verifyEmail, verifyEmailVariables>({
                    mutation: verifyEmailMutation,
                    variables: {
                        code,
                    },
                })
            ).pipe(
                mergeMap(({ data }) =>
                    from(
                        new Promise<{
                            data: { getEvent: { output: IVerifyEmailOutput } }
                        }>((resolve, reject) => {
                            initApollo(
                                {},
                                {
                                    getToken: () =>
                                        cookie.parse(
                                            global.document &&
                                                global.document.cookie
                                        )['TOKEN'],
                                }
                            )
                                .subscribe({
                                    query: getEvent,
                                    variables: {
                                        hash: path(
                                            ['verifyEmail', 'hash'],
                                            data
                                        ),
                                    },
                                })
                                .subscribe({
                                    error: (err: Error) => reject(err),
                                    next: (data: {
                                        data: {
                                            getEvent: {
                                                output: IVerifyEmailOutput
                                            }
                                        }
                                    }) => resolve(data),
                                })
                        })
                    )
                ),
                mergeMap(({ data: { getEvent: { output } } }) =>
                    output && output.childHashes
                        ? forkJoin(
                              output.childHashes.map(
                                  hash =>
                                      new Promise((resolve, reject) =>
                                          initApollo(
                                              {},
                                              {
                                                  getToken: () =>
                                                      cookie.parse(
                                                          global.document &&
                                                              global.document
                                                                  .cookie
                                                      )['TOKEN'],
                                              }
                                          )
                                              .subscribe({
                                                  query: getEvent,
                                                  variables: { hash },
                                              })
                                              .subscribe({
                                                  error: (err: Error) =>
                                                      reject(err),
                                                  next: (data: {
                                                      data: {
                                                          getEvent: {
                                                              output: {
                                                                  hash: string
                                                              }
                                                          }
                                                      }
                                                  }) => resolve(data),
                                              })
                                      )
                              )
                          ).pipe(
                              map(() => emailVerifiedAction()),
                              tap(() => apolloClient.resetStore())
                          )
                        : of(emailVerificationFail())
                ),
                tap(callback),
                catchError(() => of(routeChangeAction('/500')))
            )
        )
    )

export const resendEmailVerificationEpic: Epic<
    IResendEmailVerificationAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient }) =>
    action$.pipe(
        ofType('SEND_EMAIL_VERIFICATION'),
        mergeMap(() =>
            apolloClient.mutate<regenerateEmailVerificationCode>({
                mutation: regenerateMutation,
                variables: {},
            })
        ),
        map(() =>
            showNotificationAction({
                description: 'Verification email sent!',
                message: 'Email sent',
                notificationType: 'success',
            })
        )
    )
