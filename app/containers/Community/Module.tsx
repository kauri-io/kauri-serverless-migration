import { Epic, ActionsObservable, ofType } from 'redux-observable'
import { tail, compose, head, toUpper } from 'ramda'
import { IReduxState, IDependencies } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import analytics from '../../lib/analytics'
import {
    curateCommunityResourcesMutation,
    approveResourceMutation,
    removeResourceMutation,
    prepareSendInvitationQuery,
    sendInvitationMutation,
    prepareAcceptInvitationQuery,
    acceptInvitationMutation,
    prepareRevokeInvitationQuery,
    revokeInvitationMutation,
    prepareRemoveMemberQuery,
    removeMemberMutation,
    changeMemberRoleMutation,
    prepareChangeMemberRoleQuery,
    resendInvitationMutation,
    initiateArticleTransferMutation,
} from '../../queries/Community'
import {
    curateCommunityResourcesVariables,
    curateCommunityResources,
} from '../../queries/__generated__/curateCommunityResources'
import {
    approveResourceVariables,
    approveResource,
} from '../../queries/__generated__/approveResource'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import { path } from 'ramda'

import {
    sendInvitation,
    sendInvitationVariables,
} from '../../queries/__generated__/sendInvitation'
import {
    prepareSendInvitation,
    prepareSendInvitationVariables,
} from '../../queries/__generated__/prepareSendInvitation'
import {
    prepareAcceptInvitationVariables,
    prepareAcceptInvitation,
} from '../../queries/__generated__/prepareAcceptInvitation'
import {
    acceptInvitation,
    acceptInvitationVariables,
} from '../../queries/__generated__/acceptInvitation'
import {
    prepareRevokeInvitation,
    prepareRevokeInvitationVariables,
} from '../../queries/__generated__/prepareRevokeInvitation'
import {
    revokeInvitation,
    revokeInvitationVariables,
} from '../../queries/__generated__/revokeInvitation'
import { prepareRemoveMemberVariables } from '../../queries/__generated__/prepareRemoveMember'
import {
    removeMember,
    removeMemberVariables,
} from '../../queries/__generated__/removeMember'
import {
    prepareChangeMemberRole,
    prepareChangeMemberRoleVariables,
} from '../../queries/__generated__/prepareChangeMemberRole'
import {
    changeMemberRole,
    changeMemberRoleVariables,
} from '../../queries/__generated__/changeMemberRole'
import {
    resendInvitation,
    resendInvitationVariables,
} from '../../queries/__generated__/resendInvitation'
import {
    initiateArticleTransfer,
    initiateArticleTransferVariables,
} from '../../queries/__generated__/initiateArticleTransfer'

import { ISendInvitationCommandOutput } from '../CreateCommunityForm/Module'
import { closeModalAction } from '../../components/Modal/Module'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import { finaliseArticleTransferMutation } from '../../queries/Article'
import { of, merge, from } from 'rxjs'
import { mergeMap, tap, catchError, switchMap } from 'rxjs/operators'
import {
    finaliseArticleTransfer,
    finaliseArticleTransferVariables,
} from '../../queries/__generated__/finaliseArticleTransfer'

interface ICurateCommunityResourcesAction {
    type: 'CURATE_COMMUNITY_RESOURCES'
    payload: curateCommunityResourcesVariables
}

export interface IRemoveMemberAction {
    type: 'REMOVE_MEMBER'
    payload: prepareRemoveMemberVariables
}

interface ITransferArticleToCommunityAction {
    type: 'TRANSFER_ARTICLE_TO_COMMUNITY'
    payload: initiateArticleTransferVariables
}

interface IApproveResourceAction {
    type: 'APPROVE_RESOURCE'
    payload: approveResourceVariables
}

interface IRemoveResourceAction {
    type: 'REMOVE_RESOURCE'
    payload: removeResourceVariables
}

interface ISendCommunityInvitationAction {
    type: 'SEND_COMMUNITY_INVITATION'
    payload: sendInvitationVariables
}

interface IRevokeInvitationAction {
    type: 'REVOKE_INVITATION'
    payload: revokeInvitationVariables
}

interface IInvitationSentAction {
    type: 'INVITATION_SENT'
}

interface IInvitationAcceptedAction {
    type: 'INVITATION_ACCEPTED'
}

interface IInvitationRevokedAction {
    type: 'INVITATION_REVOKED'
}

interface IMemberRemovedAction {
    type: 'MEMBER_REMOVED'
}

interface IArticleTransferredToCommunityAction {
    type: 'ARTICLE_TRANSFERRED_TO_COMMUNITY'
}

interface IAcceptCommunityInvitationAction {
    type: 'ACCEPT_COMMUNITY_INVITATION'
    payload: prepareAcceptInvitationVariables
}

interface IMemberRoleChangedAction {
    type: 'MEMBER_ROLE_CHANGED'
}

interface IChangeMemberRoleAction {
    type: 'CHANGE_MEMBER_ROLE'
    payload: prepareChangeMemberRoleVariables
}

interface IResendInvitationAction {
    type: 'RESEND_INVITATION'
    payload: resendInvitationVariables
}

interface IInvitationResentAction {
    type: 'INVITATION_RESENT'
}

const CURATE_COMMUNITY_RESOURCES = 'CURATE_COMMUNITY_RESOURCES'
const APPROVE_RESOURCE = 'APPROVE_RESOURCE'
const REMOVE_RESOURCE = 'REMOVE_RESOURCE'
const SEND_COMMUNITY_INVITATION = 'SEND_COMMUNITY_INVITATION'
const INVITATION_SENT = 'INVITATION_SENT'
const ACCEPT_COMMUNITY_INVITATION = 'ACCEPT_COMMUNITY_INVITATION'
const INVITATION_ACCEPTED = 'INVITATION_ACCEPTED'
const REVOKE_INVITATION = 'REVOKE_INVITATION'
const INVITATION_REVOKED = 'INVITATION_REVOKED'
const REMOVE_MEMBER = 'REMOVE_MEMBER'
const MEMBER_REMOVED = 'MEMBER_REMOVED'
const CHANGE_MEMBER_ROLE = 'CHANGE_MEMBER_ROLE'
const MEMBER_ROLE_CHANGED = 'MEMBER_ROLE_CHANGED'
const RESEND_INVITATION = 'RESEND_INVITATION'
const INVITATION_RESENT = 'INVITATION_RESENT'
const TRANSFER_ARTICLE_TO_COMMUNITY = 'TRANSFER_ARTICLE_TO_COMMUNITY'
const ARTICLE_TRANSFERRED_TO_COMMUNITY = 'ARTICLE_TRANSFERRED_TO_COMMUNITY'

export const invitationRevokedAction = (): IInvitationRevokedAction => ({
    type: INVITATION_REVOKED,
})

export const removeResourceAction = (
    payload: removeResourceVariables
): IRemoveResourceAction => ({
    payload,
    type: REMOVE_RESOURCE,
})

export const memberRemovedAction = (): IMemberRemovedAction => ({
    type: MEMBER_REMOVED,
})

export const memberRoleChangedAction = (): IMemberRoleChangedAction => ({
    type: MEMBER_ROLE_CHANGED,
})

export const articleTransferredToCommunityAction = (): IArticleTransferredToCommunityAction => ({
    type: ARTICLE_TRANSFERRED_TO_COMMUNITY,
})

export const resendInvitationAction = (
    payload: resendInvitationVariables
): IResendInvitationAction => ({
    payload,
    type: RESEND_INVITATION,
})

export const removeMemberAction = (
    payload: removeMemberVariables
): IRemoveMemberAction => ({
    payload,
    type: REMOVE_MEMBER,
})

export const curateCommunityResourcesAction = (
    payload: curateCommunityResourcesVariables
): ICurateCommunityResourcesAction => ({
    payload,
    type: CURATE_COMMUNITY_RESOURCES,
})

export const approveResourceAction = (
    payload: approveResourceVariables
): IApproveResourceAction => ({
    payload,
    type: APPROVE_RESOURCE,
})

export const sendCommunityInvitationAction = (
    payload: sendInvitationVariables
): ISendCommunityInvitationAction => ({
    payload,
    type: SEND_COMMUNITY_INVITATION,
})

export const transferArticleToCommunityAction = (
    payload: initiateArticleTransferVariables
): ITransferArticleToCommunityAction => ({
    payload,
    type: TRANSFER_ARTICLE_TO_COMMUNITY,
})

export const invitationSentAction = (): IInvitationSentAction => ({
    type: INVITATION_SENT,
})

export const invitationAcceptedAction = (): IInvitationAcceptedAction => ({
    type: INVITATION_ACCEPTED,
})

export const invitationResentAction = (): IInvitationResentAction => ({
    type: INVITATION_RESENT,
})

export const acceptCommunityInvitationAction = (
    payload: prepareAcceptInvitationVariables
): IAcceptCommunityInvitationAction => ({
    payload,
    type: ACCEPT_COMMUNITY_INVITATION,
})

export const revokeInvitationAction = (
    payload: revokeInvitationVariables
): IRevokeInvitationAction => ({
    payload,
    type: REVOKE_INVITATION,
})

export const changeMemberRoleAction = (
    payload: prepareChangeMemberRoleVariables
): IChangeMemberRoleAction => ({
    payload,
    type: CHANGE_MEMBER_ROLE,
})

interface ICurateCommunityResourcesCommandOutput {
    id: string
    error?: string
}

interface IAcceptInvitationCommandOutput {
    hash: string
    error?: string
}

interface IRevokeInvitationCommandOutput {
    hash: string
}

interface ICurateCommunityResourcesCommandOutput {
    messageHash: string
    secret: string
    error?: string
}

interface IRemoveResourceCommandOutput {
    hash: string
    error?: string
}

interface IRemoveMemberCommandOutput {
    hash: string
    error?: string
}

interface IChangeMemberRoleCommandOutput {
    hash: string
}

type IFinaliseArticleTransferCommandOutput = ICurateCommunityResourcesCommandOutput

type IApproveResourceCommandOutput = ICurateCommunityResourcesCommandOutput

type IResendInvitationCommandOutput = IRevokeInvitationCommandOutput

interface IInitiateArticleTransferCommandOutput {
    hash: string
    id: string
    version: number
    articleAuthor: string
    dateCreated: string
}

const capitalize = (s: string) =>
    compose<string, string, string>(
        toUpper,
        head
    )(s) + tail(s)

export const curateCommunityResourcesEpic = (
    action$: ActionsObservable<ICurateCommunityResourcesAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.ofType(CURATE_COMMUNITY_RESOURCES).switchMap(({ payload }) =>
        from(
            apolloClient.mutate<
                curateCommunityResources,
                curateCommunityResourcesVariables
            >({
                mutation: curateCommunityResourcesMutation,
                variables: payload,
            })
        ).pipe(
            mergeMap(({ data }) =>
                apolloSubscriber<ICurateCommunityResourcesCommandOutput>(
                    path<string>(['curateCommunityResources', 'hash'])(data) ||
                        ''
                )
            ),
            mergeMap(({ data: { output: { error } } }) =>
                error
                    ? of(
                          showNotificationAction({
                              description: 'Please try again',
                              message: 'Submission Error',
                              notificationType: 'error',
                          })
                      )
                    : of(
                          showNotificationAction({
                              description: `They have been proposed to the community!`,
                              message: `${payload.resources &&
                                  capitalize(
                                      (payload.resources[0] as {
                                          type: string
                                      }).type.toLowerCase()
                                  )}s curated!`,
                              notificationType: 'success',
                          })
                      )
            ),
            tap(() => apolloClient.resetStore())
        )
    )

export const approveResourceEpic = (
    action$: ActionsObservable<IApproveResourceAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.ofType(APPROVE_RESOURCE).switchMap(({ payload }) =>
        from(
            apolloClient.mutate<approveResource, approveResourceVariables>({
                mutation: approveResourceMutation,
                variables: payload,
            })
        )
            .mergeMap(({ data }) =>
                apolloSubscriber<IApproveResourceCommandOutput>(
                    path<string>(['approveResource', 'hash'])(data) || ''
                )
            )
            .mergeMap(({ data: { output: { error } } }) =>
                error
                    ? of(
                          showNotificationAction({
                              description: 'Please try again',
                              message: 'Submission Error',
                              notificationType: 'error',
                          })
                      )
                    : of(
                          showNotificationAction({
                              description: `The proposed resource has been added to the community`,
                              message: `Resource approved`,
                              notificationType: 'success',
                          })
                      )
            )
            .do(() => apolloClient.resetStore())
    )

export const sendCommunityInvitationEpic = (
    action$: ActionsObservable<ISendCommunityInvitationAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
) =>
    action$.ofType(SEND_COMMUNITY_INVITATION).switchMap(({ payload }) =>
        from(
            apolloClient.query<
                prepareSendInvitation,
                prepareSendInvitationVariables
            >({
                query: prepareSendInvitationQuery,
                variables: payload,
            })
        ).mergeMap(({ data }) =>
            from(
                personalSign(
                    path<string>(['prepareSendInvitation', 'messageHash'])(
                        data
                    ) || ''
                )
            )
                .mergeMap(signedSignature =>
                    apolloClient.mutate<
                        sendInvitation,
                        sendInvitationVariables
                    >({
                        mutation: sendInvitationMutation,
                        variables: {
                            id: payload.id,
                            invitation: {
                                email:
                                    payload.invitation &&
                                    payload.invitation.email,
                                role:
                                    payload.invitation &&
                                    payload.invitation.role,
                                secret:
                                    path<string>([
                                        'prepareSendInvitation',
                                        'attributes',
                                        'secret',
                                    ])(data) || '',
                            },
                            signature:
                                typeof signedSignature === 'string'
                                    ? signedSignature
                                    : '',
                        },
                    })
                )
                .mergeMap(
                    ({ data: { sendInvitation: sendInvitationResult } }: any) =>
                        apolloSubscriber<ISendInvitationCommandOutput>(
                            sendInvitationResult.hash
                        )
                )
                .do(() => apolloClient.resetStore())
                .mergeMap(() =>
                    merge(
                        of(
                            showNotificationAction({
                                description: `The invitation ${payload.invitation &&
                                    payload.invitation
                                        .email} for to join the community has been sent! You can view and manage all moderators from the Manage tab.`,
                                message: 'Invitation Sent',
                                notificationType: 'success',
                            })
                        ),
                        of(invitationSentAction()),
                        of(closeModalAction())
                    )
                )
        )
    )

export const acceptCommunityInvitationEpic: Epic<
    any,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber, personalSign }) =>
    action$.ofType(ACCEPT_COMMUNITY_INVITATION).switchMap(({ payload }) =>
        state$.value && state$.value.app.user && state$.value.app.user.id
            ? from(
                  apolloClient.query<
                      prepareAcceptInvitation,
                      prepareAcceptInvitationVariables
                  >({
                      query: prepareAcceptInvitationQuery,
                      variables: payload,
                  })
              ).pipe(
                  mergeMap(({ data }) =>
                      personalSign(
                          path<string>([
                              'prepareAcceptInvitation',
                              'messageHash',
                          ])(data) || ''
                      )
                  ),
                  mergeMap(signature =>
                      apolloClient.mutate<
                          acceptInvitation,
                          acceptInvitationVariables
                      >({
                          mutation: acceptInvitationMutation,
                          variables: {
                              id: (payload && payload.id) || '',
                              secret: (payload && payload.secret) || '',
                              signature,
                          },
                      })
                  ),
                  mergeMap(({ data }) =>
                      apolloSubscriber<IAcceptInvitationCommandOutput>(
                          path<string>(['acceptInvitationResult', 'hash'])(
                              data
                          ) || ''
                      )
                  ),
                  mergeMap(({ data: { output: { error } } }) =>
                      typeof error === 'string' &&
                      error.includes('associated to another member')
                          ? merge(
                                of(closeModalAction()),
                                of(
                                    showNotificationAction({
                                        description:
                                            'This email invite is already associated with another member of the community!',
                                        message: 'Submission error',
                                        notificationType: 'error',
                                    })
                                )
                            )
                          : merge(
                                of(closeModalAction()),
                                of(
                                    showNotificationAction({
                                        description: `You are now a member of the community!`,
                                        message: 'Invitation Accepted',
                                        notificationType: 'success',
                                    })
                                ),
                                of(
                                    routeChangeAction(
                                        `/community/${payload.id}`
                                    )
                                ),
                                of(invitationAcceptedAction())
                            )
                  ),
                  tap(() => apolloClient.resetStore()),
                  catchError(err => {
                      console.error(err)
                      return merge(
                          of(closeModalAction()),
                          of(
                              showNotificationAction({
                                  description:
                                      'Please try again or you may already be a member of the community!',
                                  message: 'Submission error',
                                  notificationType: 'error',
                              })
                          )
                      )
                  })
              )
            : merge(
                  of(closeModalAction()),
                  of(
                      routeChangeAction(
                          `/login?r=/community/${payload.id}/approve?secret=${payload.secret}`
                      )
                  )
              )
    )

export const revokeInvitationEpic = (
    action$: ActionsObservable<IRevokeInvitationAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
) =>
    action$.ofType(REVOKE_INVITATION).switchMap(({ payload }) =>
        from(
            apolloClient.query<
                prepareRevokeInvitation,
                prepareRevokeInvitationVariables
            >({
                query: prepareRevokeInvitationQuery,
                variables: payload,
            })
        ).mergeMap(({ data }) =>
            from(
                personalSign(
                    path<string>(['prepareRevokeInvitation', 'messageHash'])(
                        data
                    ) || ''
                )
            )
                .mergeMap(signature =>
                    apolloClient.mutate<
                        revokeInvitation,
                        revokeInvitationVariables
                    >({
                        mutation: revokeInvitationMutation,
                        variables: {
                            id: (payload && payload.id) || '',
                            invitationId:
                                (payload && payload.invitationId) || '',
                            signature,
                        },
                    })
                )
                .mergeMap(
                    ({
                        data: { revokeInvitation: revokeInvitationResult },
                    }: any) =>
                        apolloSubscriber<IRevokeInvitationCommandOutput>(
                            revokeInvitationResult.hash
                        )
                )
                .do(() => apolloClient.resetStore())
                .mergeMap(() =>
                    merge(
                        of(closeModalAction()),
                        of(
                            showNotificationAction({
                                description: `That invitation to the community has been successfully revoked`,
                                message: 'Invitation Revoked',
                                notificationType: 'success',
                            })
                        ),
                        of(invitationRevokedAction())
                    )
                )
        )
    )

export const removeMemberEpic = (
    action$: ActionsObservable<IRemoveMemberAction>,
    {  }: IReduxState,
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
) =>
    action$.ofType(REMOVE_MEMBER).switchMap(({ payload }) =>
        from(
            apolloClient.query({
                query: prepareRemoveMemberQuery,
                variables: payload,
            })
        ).mergeMap(({ data }) =>
            from(
                personalSign(
                    path<string>(['prepareRemoveMember', 'messageHash'])(
                        data
                    ) || ''
                )
            )
                .mergeMap(signature =>
                    apolloClient.mutate<removeMember, removeMemberVariables>({
                        mutation: removeMemberMutation,
                        variables: {
                            account: (payload && payload.account) || '',
                            id: (payload && payload.id) || '',
                            signature,
                        },
                    })
                )
                .mergeMap(({ data }) =>
                    apolloSubscriber<IRemoveMemberCommandOutput>(
                        path<string>(['removeMember', 'messageHash'])(data) ||
                            ''
                    )
                )
                .mergeMap(
                    ({
                        data: {
                            output: { error },
                        },
                    }: {
                        data: { output: IRemoveMemberCommandOutput }
                    }) => {
                        if (error) {
                            console.log(error)
                            if (error.includes('cannot be removed')) {
                                return merge(
                                    of(closeModalAction()),
                                    of(
                                        showNotificationAction({
                                            description: `You cannot leave the community`,
                                            message:
                                                'You are the last remaining admin of the community!',
                                            notificationType: 'error',
                                        })
                                    )
                                )
                            }
                            return merge(
                                of(closeModalAction()),
                                of(
                                    showNotificationAction({
                                        description: `Please try again`,
                                        message: 'Something went wrong',
                                        notificationType: 'error',
                                    })
                                )
                            )
                        }
                        return merge(
                            of(closeModalAction()),
                            of(
                                showNotificationAction({
                                    description: `That user has been successfully removed from the community`,
                                    message: 'Member removed',
                                    notificationType: 'success',
                                })
                            ),
                            of(memberRemovedAction())
                        )
                    }
                )
                .do(() => apolloClient.resetStore())
        )
    )

export const changeMemberRoleEpic = (
    action$: ActionsObservable<IChangeMemberRoleAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
) =>
    action$.ofType(CHANGE_MEMBER_ROLE).switchMap(({ payload }) =>
        from(
            apolloClient.query<
                prepareChangeMemberRole,
                prepareChangeMemberRoleVariables
            >({
                query: prepareChangeMemberRoleQuery,
                variables: payload,
            })
        ).mergeMap(({ data }) =>
            from(
                personalSign(
                    path<string>(['prepareChangeMemberRole', 'messageHash'])(
                        data
                    ) || ''
                )
            )
                .mergeMap(signature =>
                    apolloClient.mutate<
                        changeMemberRole,
                        changeMemberRoleVariables
                    >({
                        mutation: changeMemberRoleMutation,
                        variables: {
                            account: (payload && payload.account) || '',
                            id: (payload && payload.id) || '',
                            role: (payload && (payload.role as any)) || '',
                            signature,
                        },
                    })
                )
                .mergeMap(({ data }) =>
                    apolloSubscriber<IChangeMemberRoleCommandOutput>(
                        path<string>(['changeMemberRole', 'hash'])(data) || ''
                    )
                )
                .do(() => apolloClient.resetStore())
                .mergeMap(() =>
                    merge(
                        of(closeModalAction()),
                        of(
                            showNotificationAction({
                                description: `That user has had their role changed within the community`,
                                message: 'Member role changed',
                                notificationType: 'success',
                            })
                        ),
                        of(memberRoleChangedAction())
                    )
                )
        )
    )

export const resendInvitationEpic: Epic<
    IResendInvitationAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(RESEND_INVITATION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    resendInvitation,
                    resendInvitationVariables
                >({
                    mutation: resendInvitationMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<IResendInvitationCommandOutput>(
                        path<string>(['resendInvitation', 'hash'])(data) || ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    merge(
                        of(closeModalAction()),
                        of(
                            showNotificationAction({
                                description: `Another email invitation has been sent to that user to join the community`,
                                message: 'Email resent',
                                notificationType: 'success',
                            })
                        ),
                        of(invitationResentAction())
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
        )
    )

export const removeResourceEpic: Epic<
    IRemoveResourceAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.ofType(REMOVE_RESOURCE).switchMap(({ payload }) =>
        from(
            apolloClient.mutate({
                mutation: removeResourceMutation,
                variables: payload,
            })
        )
            .mergeMap(({ data }) =>
                apolloSubscriber<IRemoveResourceCommandOutput>(
                    path<string>(['removeResource', 'hash'])(data) || ''
                )
            )
            .mergeMap(({ data: { output: { error } } }) =>
                error
                    ? merge(
                          of(closeModalAction()),
                          of(
                              showNotificationAction({
                                  description: `There was an error removing the selected item, please try again.`,
                                  message: 'Error',
                                  notificationType: 'error',
                              })
                          )
                      )
                    : merge(
                          of(closeModalAction()),
                          of(
                              showNotificationAction({
                                  description: `Your selected resource was successfully removed from this community!`,
                                  message: 'Resource Removed',
                                  notificationType: 'success',
                              })
                          )
                      )
            )
            .do(() => apolloClient.resetStore())
    )

export const transferArticleToCommunityEpic: Epic<
    ITransferArticleToCommunityAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber, personalSign }) =>
    action$.pipe(
        ofType(TRANSFER_ARTICLE_TO_COMMUNITY),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    initiateArticleTransfer,
                    initiateArticleTransferVariables
                >({
                    mutation: initiateArticleTransferMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<IInitiateArticleTransferCommandOutput>(
                        path<string>(['initiateArticleTransfer', 'hash'])(
                            data
                        ) || ''
                    )
                ),
                switchMap(
                    ({
                        data: {
                            output: {
                                id,
                                version,
                                hash,
                                articleAuthor,
                                dateCreated,
                            },
                        },
                    }) => {
                        const signatureToSign = generatePublishArticleHash(
                            id,
                            version,
                            hash,
                            articleAuthor,
                            dateCreated
                        )

                        return from(personalSign(signatureToSign)).pipe(
                            mergeMap(signature =>
                                from(
                                    apolloClient.mutate<
                                        finaliseArticleTransfer,
                                        finaliseArticleTransferVariables
                                    >({
                                        mutation: finaliseArticleTransferMutation,
                                        variables: {
                                            id,
                                            signature,
                                        },
                                    })
                                )
                            ),
                            mergeMap(({ data }) =>
                                apolloSubscriber<
                                    IFinaliseArticleTransferCommandOutput
                                >(
                                    path<string>([
                                        'finaliseArticleTransfer',
                                        'hash',
                                    ])(data) || ''
                                )
                            ),
                            tap(() => apolloClient.resetStore()),
                            tap(() =>
                                analytics.track('Article Transfer Finalised', {
                                    category: 'article_actions',
                                })
                            ),
                            mergeMap(({ data: { output: { error } } }) =>
                                error
                                    ? merge(
                                          of(closeModalAction()),
                                          of(
                                              showNotificationAction({
                                                  description: `There was an error transferring the article, please try again.`,
                                                  message: 'Error',
                                                  notificationType: 'error',
                                              })
                                          )
                                      )
                                    : merge(
                                          of(
                                              articleTransferredToCommunityAction()
                                          ),
                                          of(closeModalAction()),
                                          of(
                                              showNotificationAction({
                                                  description: `Your selected article was successfully transferred to the community!`,
                                                  message:
                                                      'Article Transferred',
                                                  notificationType: 'success',
                                              })
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
                    }
                )
            )
        )
    )
