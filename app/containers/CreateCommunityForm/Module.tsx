import { ofType, Epic } from 'redux-observable'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

import {
    createCommunityVariables,
    createCommunity,
} from '../../queries/__generated__/createCommunity'
import {
    updateCommunity,
    updateCommunityVariables,
} from '../../queries/__generated__/updateCommunity'
import {
    createCommunityMutation,
    updateCommunityMutation,
    prepareCreateCommunityQuery,
    prepareSendInvitationQuery,
    sendInvitationMutation,
} from '../../queries/Community'
import { CommunityPermissionInput } from '../../__generated__/globalTypes'
import { from, of, throwError, merge, forkJoin } from 'rxjs'
import {
    switchMap,
    tap,
    mergeMap,
    catchError,
    combineAll,
} from 'rxjs/operators'
import {
    prepareSendInvitation,
    prepareSendInvitationVariables,
} from '../../queries/__generated__/prepareSendInvitation'
import {
    sendInvitation,
    sendInvitationVariables,
} from '../../queries/__generated__/sendInvitation'
import { path } from 'ramda'
import {
    prepareCreateCommunityVariables,
    prepareCreateCommunity,
} from '../../queries/__generated__/prepareCreateCommunity'
import { getCommunityURL } from '../../lib/getURLs'

interface ICommunityCreatedCommandOutput {
    error?: string
}

interface ICreateCommunityCommandOutput {
    id: string
    transactionHash: string
    error: string | undefined
}

type IUpdateCommunityCommandOutput = ICreateCommunityCommandOutput

export interface ICreateCommunityAction {
    callback: () => void
    payload: Pick<
        createCommunityVariables,
        | 'name'
        | 'description'
        | 'avatar'
        | 'website'
        | 'tags'
        | 'social'
        | 'attributes'
        | 'invitations'
    >
    type: 'CREATE_COMMUNITY'
}

export interface IInvitationsPayload {
    invitations: Array<{
        email: string
        role: CommunityPermissionInput
        secret: string
    }>
}

export interface IUpdateCommunityAction {
    callback: () => void
    payload: updateCommunityVariables & IInvitationsPayload
    type: 'UPDATE_COMMUNITY'
}

interface ICommunityCreatedPayload {
    transactionHash: string
}

export interface ICommunityCreatedAction {
    payload: ICommunityCreatedPayload
    type: 'COMMUNITY_CREATED'
}

export interface ICommunityUpdatedAction {
    payload: {}
    type: 'COMMUNITY_UPDATED'
}

const CREATE_COMMUNITY = 'CREATE_COMMUNITY'

const COMMUNITY_CREATED = 'COMMUNITY_CREATED'
const COMMUNITY_UPDATED = 'COMMUNITY_UPDATED'

const UPDATE_COMMUNITY = 'UPDATE_COMMUNITY'

export const createCommunityAction = (
    payload: Pick<
        createCommunityVariables,
        | 'name'
        | 'description'
        | 'avatar'
        | 'website'
        | 'tags'
        | 'social'
        | 'attributes'
        | 'invitations'
    >,
    callback: () => void
): ICreateCommunityAction => ({
    callback,
    payload,
    type: CREATE_COMMUNITY,
})

export const communityCreatedAction = (
    payload: ICommunityCreatedPayload
): ICommunityCreatedAction => ({
    payload,
    type: COMMUNITY_CREATED,
})

export const communityUpdatedAction = (): ICommunityUpdatedAction => ({
    payload: {},
    type: COMMUNITY_UPDATED,
})

export const updateCommunityAction = (
    payload: updateCommunityVariables & IInvitationsPayload,
    callback: () => void
): IUpdateCommunityAction => ({
    callback,
    payload,
    type: UPDATE_COMMUNITY,
})

export interface IPrepareSendInvitationQueryResult {
    messageHash: string
    attributes: {
        secret: string
    }
}

export interface ISendInvitationCommandOutput {
    hash: string
}

export const communityCreatedEpic: Epic<
    ICommunityCreatedAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloSubscriber }) =>
    action$.pipe(
        ofType(COMMUNITY_CREATED),
        switchMap(({ payload }) =>
            from(
                apolloSubscriber<ICommunityCreatedCommandOutput>(
                    payload.transactionHash,
                    'MemberAdded'
                )
            ).pipe(
                mergeMap(({ data: { getEvent: { output: { error } } } }) =>
                    error
                        ? throwError(new Error('Submission error'))
                        : of(
                              showNotificationAction({
                                  description: `Your community has been created! You can start adding articles and collections now!`,
                                  message: 'Community Created',
                                  notificationType: 'success',
                              })
                          )
                ),
                tap(() => {
                    window.location.reload()
                }),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again',
                            message: 'Submission error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

export const createCommunityEpic: Epic<
    ICreateCommunityAction,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber, personalSign }) =>
    action$.pipe(
        ofType(CREATE_COMMUNITY),
        switchMap(actions =>
            path<string>(['value', 'app', 'user', 'status'])(state$) !==
            'EMAIL_VERIFIED'
                ? of(
                      showNotificationAction({
                          description: `Sorry but you need to verify your email address then refresh before creating your community!`,
                          message: 'Verify your email address',
                          notificationType: 'error',
                      })
                  )
                : from(
                      apolloClient.query<
                          prepareCreateCommunity,
                          prepareCreateCommunityVariables
                      >({
                          query: prepareCreateCommunityQuery,
                          variables: actions.payload,
                      })
                  ).pipe(
                      // tap(console.log),
                      switchMap(({ data }) =>
                          from(
                              personalSign(
                                  path<string>([
                                      'prepareCreateCommunity',
                                      'messageHash',
                                  ])(data) || ''
                              )
                          ).pipe(
                              mergeMap(signature =>
                                  apolloClient.mutate<
                                      createCommunity,
                                      createCommunityVariables
                                  >({
                                      mutation: createCommunityMutation,
                                      variables: {
                                          ...actions.payload,
                                          invitations:
                                              path<any[]>([
                                                  'prepareCreateCommunity',
                                                  'attributes',
                                                  'invitations',
                                              ])(data) || [],
                                          signature,
                                      },
                                  })
                              ),
                              // tap(console.log),
                              mergeMap(({ data }) =>
                                  apolloSubscriber<
                                      ICreateCommunityCommandOutput
                                  >(
                                      path<string>(['createCommunity', 'hash'])(
                                          data
                                      ) || ''
                                  )
                              ),
                              // tap(console.log),
                              tap(
                                  () =>
                                      typeof actions.callback === 'function' &&
                                      actions.callback()
                              ),
                              mergeMap(
                                  ({
                                      data: {
                                          getEvent: {
                                              output: {
                                                  id,
                                                  transactionHash,
                                                  error,
                                              },
                                          },
                                      },
                                  }) =>
                                      error
                                          ? throwError(
                                                new Error('Submission error')
                                            )
                                          : merge(
                                                of(
                                                    showNotificationAction({
                                                        description: `Your community is being created! Once this is completed (within a few minutes), you will be able to add articles and collections`,
                                                        message:
                                                            'Creating Community',
                                                        notificationType:
                                                            'info',
                                                    })
                                                ),
                                                of(
                                                    communityCreatedAction({
                                                        transactionHash,
                                                    })
                                                ),
                                                of(
                                                    routeChangeAction(
                                                        getCommunityURL({
                                                            name:
                                                                actions.payload
                                                                    .name,
                                                            id,
                                                        }).href
                                                    )
                                                )
                                            )
                              ),
                              tap(() => apolloClient.resetStore()),
                              catchError(err => {
                                  console.error(err)
                                  return of(
                                      showNotificationAction({
                                          description: 'Please try again',
                                          message: 'Submission error',
                                          notificationType: 'error',
                                      })
                                  )
                              })
                          )
                      ),
                      tap(() => apolloClient.resetStore()),
                      catchError(err => {
                          console.error(err)
                          return of(
                              showNotificationAction({
                                  description: 'Please try again',
                                  message: 'Submission error',
                                  notificationType: 'error',
                              })
                          )
                      })
                  )
        ),
        catchError(err => {
            console.error(err)
            return of(
                showNotificationAction({
                    description: 'Please try again',
                    message: 'Submission error',
                    notificationType: 'error',
                })
            )
        })
    )

export const updateCommunityEpic: Epic<
    IUpdateCommunityAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber, personalSign }) =>
    action$.pipe(
        ofType(UPDATE_COMMUNITY),
        switchMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<updateCommunity, updateCommunityVariables>({
                    mutation: updateCommunityMutation,
                    variables: payload,
                })
            )
                // ,tap(() => console.log(actions.payload))
                // ,tap(console.log)
                .pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<IUpdateCommunityCommandOutput>(
                            path<string>(['editCommunity', 'hash'])(data) || ''
                        )
                    ),
                    // ,tap(console.log)
                    switchMap(() =>
                        payload.invitations.length
                            ? forkJoin(
                                  payload.invitations.map(invitation =>
                                      apolloClient.query<
                                          prepareSendInvitation,
                                          prepareSendInvitationVariables
                                      >({
                                          query: prepareSendInvitationQuery,
                                          variables: {
                                              id: payload.id,
                                              invitation,
                                          },
                                      })
                                  )
                              ).pipe(
                                  // ,tap(console.log)
                                  mergeMap(prepareSendInvitationsResults =>
                                      prepareSendInvitationsResults.map(
                                          ({ data }, invitationIndex) =>
                                              from(
                                                  personalSign(
                                                      path<string>([
                                                          'prepareSendInvitation',
                                                          'messageHash',
                                                      ])(data) || ''
                                                  )
                                              ).pipe(
                                                  mergeMap(signedSignature =>
                                                      apolloClient.mutate<
                                                          sendInvitation,
                                                          sendInvitationVariables
                                                      >({
                                                          mutation: sendInvitationMutation,
                                                          variables: {
                                                              id: payload.id,
                                                              invitation: {
                                                                  email:
                                                                      payload
                                                                          .invitations[
                                                                          invitationIndex
                                                                      ].email,
                                                                  role:
                                                                      payload
                                                                          .invitations[
                                                                          invitationIndex
                                                                      ].role,
                                                                  secret:
                                                                      path<
                                                                          string
                                                                      >([
                                                                          'prepareSendInvitation',
                                                                          'attributes',
                                                                          'secret',
                                                                      ])(
                                                                          data
                                                                      ) || '',
                                                              },
                                                              signature: signedSignature,
                                                          },
                                                      })
                                                  ),
                                                  mergeMap(
                                                      ({
                                                          data: {
                                                              sendInvitation: sendInvitationResult,
                                                          },
                                                      }: any) =>
                                                          apolloSubscriber<
                                                              ISendInvitationCommandOutput
                                                          >(
                                                              sendInvitationResult.hash
                                                          )
                                                  )
                                              )
                                      )
                                  ),
                                  combineAll(),
                                  // tap(signedSignatures =>
                                  //     console.log(
                                  //         'signedSignatures combined',
                                  //         signedSignatures
                                  //     )
                                  // )
                                  mergeMap(() =>
                                      merge(
                                          of(
                                              showNotificationAction({
                                                  description: `The community's details have been updated!`,
                                                  message: 'Community updated',
                                                  notificationType: 'success',
                                              })
                                          ),
                                          of(communityUpdatedAction()),
                                          of(
                                              routeChangeAction(
                                                  getCommunityURL({
                                                      id: payload.id,
                                                      name: payload.name,
                                                  }).href
                                              )
                                          )
                                      )
                                  ),
                                  tap(() => apolloClient.resetStore()),
                                  tap(
                                      () =>
                                          typeof callback === 'function' &&
                                          callback()
                                  ),
                                  catchError(err => {
                                      console.error(err)
                                      return of(
                                          showNotificationAction({
                                              description: 'Please try again',
                                              message: 'Submission error',
                                              notificationType: 'error',
                                          })
                                      )
                                  })
                              )
                            : merge(
                                  of(
                                      showNotificationAction({
                                          description: `The community's details have been updated!`,
                                          message: 'Community updated',
                                          notificationType: 'success',
                                      })
                                  ),
                                  of(communityUpdatedAction()),
                                  of(
                                      routeChangeAction(
                                          getCommunityURL({
                                              id: payload.id,
                                              name: payload.name,
                                          }).href
                                      )
                                  )
                              ).pipe(tap(() => apolloClient.resetStore()))
                    )
                )
        )
    )
