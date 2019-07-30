import { ActionsObservable, ofType, Epic } from 'redux-observable'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

import { createCommunityVariables } from '../../queries/__generated__/createCommunity'
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

interface ICommunityCreatedCommandOutput {
    error?: string
}

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
                mergeMap(({ data: { output: { error } } }) =>
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

export const createCommunityEpic = (
    action$: ActionsObservable<ICreateCommunityAction>,
    state,
    { apolloClient, apolloSubscriber, personalSign }
) =>
    action$.pipe(
        ofType(CREATE_COMMUNITY),
        switchMap(actions =>
            state.app.user.status !== 'EMAIL_VERIFIED'
                ? of(
                      showNotificationAction({
                          description: `Sorry but you need to verify your email address then refresh before creating your community!`,
                          message: 'Verify your email address',
                          notificationType: 'error',
                      })
                  )
                : from(
                      apolloClient.query({
                          query: prepareCreateCommunityQuery,
                          variables: actions.payload,
                      })
                  ).pipe(
                      tap(console.log),
                      switchMap(
                          ({
                              data: {
                                  prepareCreateCommunity: prepareCreateCommunityResult,
                              },
                          }) =>
                              from<string>(
                                  prepareCreateCommunityResult &&
                                      personalSign(
                                          prepareCreateCommunityResult.messageHash
                                      )
                              ).pipe(
                                  mergeMap(signature =>
                                      apolloClient.mutate({
                                          mutation: createCommunityMutation,
                                          variables: {
                                              ...(actions as ICreateCommunityAction)
                                                  .payload,
                                              invitations:
                                                  prepareCreateCommunityResult &&
                                                  prepareCreateCommunityResult
                                                      .attributes.invitations,
                                              signature,
                                          },
                                      })
                                  ),
                                  tap(console.log),
                                  mergeMap(
                                      ({ data: { createCommunity: result } }) =>
                                          apolloSubscriber(result.hash)
                                  ),
                                  tap(console.log),
                                  tap(
                                      () =>
                                          typeof actions.callback ===
                                              'function' && actions.callback()
                                  ),
                                  mergeMap(
                                      ({
                                          data: {
                                              output: {
                                                  id,
                                                  transactionHash,
                                                  error,
                                              },
                                          },
                                      }) =>
                                          error
                                              ? throwError(
                                                    new Error(
                                                        'Submission error'
                                                    )
                                                )
                                              : merge(
                                                    of(
                                                        (showNotificationAction as any)(
                                                            {
                                                                description: `Your community is being created! Once this is completed (within a few minutes), you will be able to add articles and collections`,
                                                                message:
                                                                    'Creating Community',
                                                                notificationType:
                                                                    'info',
                                                            }
                                                        )
                                                    ),
                                                    of(
                                                        communityCreatedAction({
                                                            transactionHash,
                                                        })
                                                    ),
                                                    of(
                                                        routeChangeAction(
                                                            `/community/${id}/community-created`
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

export const updateCommunityEpic = (
    action$: ActionsObservable<IUpdateCommunityAction>,
    {},
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
) =>
    action$.pipe(
        ofType(UPDATE_COMMUNITY),
        switchMap(actions =>
            from(
                apolloClient.mutate<updateCommunity, updateCommunityVariables>({
                    mutation: updateCommunityMutation,
                    variables: actions.payload,
                })
            ).pipe(
                tap(() => console.log(actions.payload)),
                tap(console.log),
                mergeMap(({ data: { editCommunity: result } }) =>
                    apolloSubscriber(result.hash)
                ),
                tap(console.log),
                switchMap(
                    () =>
                        actions.payload.invitations.length
                            ? forkJoin(
                                  actions.payload.invitations.map(invitation =>
                                      apolloClient.query<
                                          prepareSendInvitation,
                                          prepareSendInvitationVariables
                                      >({
                                          query: prepareSendInvitationQuery,
                                          variables: {
                                              id: actions.payload.id,
                                              invitation,
                                          },
                                      })
                                  )
                              ).pipe(
                                  mergeMap(prepareSendInvitationsResults =>
                                      prepareSendInvitationsResults.map(
                                          (
                                              {
                                                  data: {
                                                      prepareSendInvitation: result,
                                                  },
                                              },
                                              invitationIndex
                                          ) =>
                                              from(
                                                  personalSign(
                                                      (result &&
                                                          result.messageHash) ||
                                                          ''
                                                  )
                                              ).pipe(
                                                  mergeMap(signedSignature =>
                                                      apolloClient.mutate<
                                                          sendInvitation,
                                                          sendInvitationVariables
                                                      >({
                                                          mutation: sendInvitationMutation,
                                                          variables: {
                                                              id:
                                                                  actions
                                                                      .payload
                                                                      .id,
                                                              invitation: {
                                                                  email:
                                                                      actions
                                                                          .payload
                                                                          .invitations[
                                                                          invitationIndex
                                                                      ].email,
                                                                  role:
                                                                      actions
                                                                          .payload
                                                                          .invitations[
                                                                          invitationIndex
                                                                      ].role,
                                                                  secret:
                                                                      (result &&
                                                                          result
                                                                              .attributes
                                                                              .secret) ||
                                                                      '',
                                                              },
                                                              signature: signedSignature,
                                                          },
                                                      })
                                                  ),
                                                  tap(console.log),
                                                  mergeMap(
                                                      ({
                                                          data: {
                                                              sendInvitation: sendInvitationResult,
                                                          },
                                                      }) =>
                                                          apolloSubscriber(
                                                              sendInvitationResult.hash
                                                          )
                                                  )
                                              )
                                      )
                                  ),
                                  combineAll(),
                                  tap(signedSignatures =>
                                      console.log(
                                          'signedSignatures combined',
                                          signedSignatures
                                      )
                                  ),
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
                                                  `/community/${
                                                      (actions as IUpdateCommunityAction)
                                                          .payload.id
                                                  }/community-updated`
                                              )
                                          )
                                      )
                                  ),
                                  tap(() => apolloClient.resetStore()),
                                  tap(
                                      () =>
                                          typeof actions.callback ===
                                              'function' && actions.callback()
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
                                          `/community/${
                                              (actions as IUpdateCommunityAction)
                                                  .payload.id
                                          }/community-updated`
                                      )
                                  )
                              ),
                    tap(() => apolloClient.resetStore())
                )
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
