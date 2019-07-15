import { ActionsObservable, ofType } from 'redux-observable'
import { IDependencies } from '../../lib/Module'

import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { create } from '../../lib/init-apollo'
import { getEvent } from '../../queries/Module'
import {
    verifyEmail as verifyEmailMutation,
    emailSubscribe as emailSubscribeMutation,
    regenerateEmailVerificationCode as regenerateMutation,
} from '../../queries/User'
import { verifyEmail } from '../../queries/__generated__/verifyEmail'
import {
    emailSubscribe,
    emailSubscribeVariables,
} from '../../queries/__generated__/emailSubscribe'
import { from, of, forkJoin } from 'rxjs'
import { filter, mergeMap, tap, switchMap, map } from 'rxjs/operators'
import { regenerateEmailVerificationCode } from '../../queries/__generated__/regenerateEmailVerificationCode'

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

export const emailSubscribeEpic = (
    action$: ActionsObservable<IEmailSubscribeAction>,
    { getState }: any,
    { apolloClient }: IDependencies
) =>
    action$.pipe(
        filter(x => x.type === EMAIL_SUBSCRIBE),
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
        mergeMap(({ data: { subscribe: { hash } } }) =>
            from(
                new Promise<{
                    data: { output: IEmailSubscribeOutput }
                }>((resolve, reject) => {
                    create(
                        {},
                        {
                            getToken: () => 'DUMMYVERIFICATIONTOKEN',
                            // hostName: getState().app.hostName,
                        }
                    )
                        .subscribe({
                            query: getEvent,
                            variables: { hash },
                        })
                        .subscribe({
                            error: (err: Error) => reject(err),
                            next: (data: {
                                data: {
                                    output: IEmailSubscribeOutput
                                }
                            }) => resolve(data),
                        })
                })
            )
        ),
        tap(() => apolloClient.resetStore()),
        mergeMap(({ data: { output } }) =>
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

export const verifyEmailEpic = (
    action$: ActionsObservable<IVerifyEmailAction>,
    { getState }: any,
    { apolloClient }: IDependencies
) =>
    action$.pipe(
        filter(x => x.type === VERIFY_EMAIL),
        switchMap(({ code, callback }: IVerifyEmailAction) =>
            from(
                apolloClient.mutate<verifyEmail>({
                    mutation: verifyEmailMutation,
                    variables: {
                        code,
                    },
                })
            ).pipe(
                mergeMap(({ data: { verifyEmail: { hash } } }) =>
                    from(
                        new Promise<{ data: { output: IVerifyEmailOutput } }>(
                            (resolve, reject) => {
                                create(
                                    {},
                                    {
                                        getToken: () =>
                                            'DUMMYVERIFICATIONTOKEN',
                                        // hostName: getState().app.hostName,
                                    }
                                )
                                    .subscribe({
                                        query: getEvent,
                                        variables: { hash },
                                    })
                                    .subscribe({
                                        error: (err: Error) => reject(err),
                                        next: (data: {
                                            data: {
                                                output: IVerifyEmailOutput
                                            }
                                        }) => resolve(data),
                                    })
                            }
                        )
                    )
                ),
                mergeMap(({ data: { output } }) =>
                    output && output.childHashes
                        ? forkJoin(
                              output.childHashes.map(
                                  hash =>
                                      new Promise((resolve, reject) =>
                                          create(
                                              {},
                                              {
                                                  getToken: () =>
                                                      'DUMMYVERIFICATIONTOKEN',
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
                                                          output: {
                                                              hash: string
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
                tap(callback)
            )
        )
    )

export const resendEmailVerificationEpic = (
    action$: ActionsObservable<IResendEmailVerificationAction>,
    _: any,
    { apolloClient }: IDependencies
) =>
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
