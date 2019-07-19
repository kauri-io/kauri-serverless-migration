import { Epic } from 'redux-observable'
import Observable from 'rxjs/Observable'
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
    curateCommunityResources,
    curateCommunityResourcesVariables,
} from '../../queries/__generated__/curateCommunityResources'
import {
    approveResource,
    approveResourceVariables,
} from '../../queries/__generated__/approveResource'

import {
    removeResource,
    removeResourceVariables,
} from '../../queries/__generated__/removeResource'

import {
    sendInvitation,
    sendInvitationVariables,
} from '../../queries/__generated__/sendInvitation'
import {
    prepareSendInvitation,
    prepareSendInvitationVariables,
} from '../../queries/__generated__/prepareSendInvitation'
import {
    prepareAcceptInvitation,
    prepareAcceptInvitationVariables,
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
import {
    prepareRemoveMember,
    prepareRemoveMemberVariables,
} from '../../queries/__generated__/prepareRemoveMember'
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
import { finaliseArticleTransfer } from '../../queries/Article'
import { of, merge, from } from 'rxjs'

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
    payload: prepareRevokeInvitationVariables
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
}

interface IRevokeInvitationCommandOutput {
    hash: string
}

interface ICurateCommunityResourcesCommandOutput {
    messageHash: string
    secret: string
}

interface IRemoveResourceCommandOutput {
    hash: string
}

interface IRemoveMemberCommandOutput {
    hash: string
    error?: string
}

interface IChangeMemberRoleCommandOutput {
    hash: string
}

type IApproveResourceCommandOutput = ICurateCommunityResourcesCommandOutput

type IResendInvitationCommandOutput = IRevokeInvitationCommandOutput

interface IInitiateArticleTransferCommandOutput {
    hash: string
    version: string
    articleAuthor: string
    dateCreated: string
}

const capitalize = (s: string) =>
    compose(
        toUpper,
        head
    )(s) + tail(s)

export const curateCommunityResourcesEpic: Epic<
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$
        .ofType(CURATE_COMMUNITY_RESOURCES)
        .switchMap(({ payload }: ICurateCommunityResourcesAction) =>
            from(
                apolloClient.mutate<
                    curateCommunityResources,
                    curateCommunityResourcesVariables
                >({
                    mutation: curateCommunityResourcesMutation,
                    variables: payload,
                })
            )
                .mergeMap(({ data: { curateResources: { hash } } }) =>
                    apolloSubscriber<ICurateCommunityResourcesCommandOutput>(
                        hash
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
                )
                .do(() => apolloClient.resetStore())
        )

export const approveResourceEpic: Epic<any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }
) =>
    action$
        .ofType(APPROVE_RESOURCE)
        .switchMap(({ payload }: IApproveResourceAction) =>
            from(
                apolloClient.mutate<approveResource, approveResourceVariables>({
                    mutation: approveResourceMutation,
                    variables: payload,
                })
            )
                .mergeMap(({ data: { approveResource: { hash } } }) =>
                    apolloSubscriber<IApproveResourceCommandOutput>(hash)
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

export const sendCommunityInvitationEpic: Epic<
    Actions,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber, personalSign }) =>
    action$
        .ofType(SEND_COMMUNITY_INVITATION)
        .switchMap(({ payload }: ISendCommunityInvitationAction) =>
            from(
                apolloClient.query<
                    prepareSendInvitation,
                    prepareSendInvitationVariables
                >({
                    query: prepareSendInvitationQuery,
                    variables: payload,
                })
            ).mergeMap(({ data: { prepareSendInvitation: result } }) =>
                from(personalSign(result && result.messageHash))
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
                                    secret: result && result.attributes.secret,
                                },
                                signature:
                                    typeof signedSignature === 'string'
                                        ? signedSignature
                                        : '',
                            },
                        })
                    )
                    .mergeMap(
                        ({
                            data: { sendInvitation: sendInvitationResult },
                        }: any) =>
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
    Actions,
    IReduxState,
    IDependencies
> = (action$, { getState }, { apolloClient, apolloSubscriber, personalSign }) =>
    action$
        .ofType(ACCEPT_COMMUNITY_INVITATION)
        .switchMap(({ payload }: IAcceptCommunityInvitationAction) =>
            getState().app && getState().app.user && getState().app.user.id
                ? from(
                      apolloClient.query<
                          prepareAcceptInvitation,
                          prepareAcceptInvitationVariables
                      >({
                          query: prepareAcceptInvitationQuery,
                          variables: payload,
                      })
                  ).mergeMap(({ data: { prepareAcceptInvitation: result } }) =>
                      from<string>(personalSign(result && result.messageHash))
                          .mergeMap(signature =>
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
                          )
                          .mergeMap(
                              ({
                                  data: {
                                      acceptInvitation: acceptInvitationResult,
                                  },
                              }: any) =>
                                  apolloSubscriber<
                                      IAcceptInvitationCommandOutput
                                  >(acceptInvitationResult.hash)
                          )
                          .mergeMap(({ data: { output: { error } } }) =>
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
                          )
                          .do(() => apolloClient.resetStore())
                          .catch(err => {
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
        .catch(err => {
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

export const revokeInvitationEpic: Epic<Actions, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber, personalSign }
) =>
    action$
        .ofType(REVOKE_INVITATION)
        .switchMap(({ payload }: IRevokeInvitationAction) =>
            from(
                apolloClient.query<
                    prepareRevokeInvitation,
                    prepareRevokeInvitationVariables
                >({
                    query: prepareRevokeInvitationQuery,
                    variables: payload,
                })
            ).mergeMap(({ data: { prepareRevokeInvitation: result } }) =>
                from<string>(personalSign(result && result.messageHash))
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

export const removeMemberEpic: Epic<Actions, IReduxState, IDependencies> = (
    action$,
    {},
    { apolloClient, apolloSubscriber, personalSign }
) =>
    action$
        .ofType(REMOVE_MEMBER)
        .switchMap(({ payload }: IRemoveMemberAction) =>
            from(
                apolloClient.query<
                    prepareRemoveMember,
                    prepareRemoveMemberVariables
                >({
                    query: prepareRemoveMemberQuery,
                    variables: payload,
                })
            ).mergeMap(({ data: { prepareRemoveMember: result } }) =>
                from<string>(personalSign(result && result.messageHash))
                    .mergeMap(signature =>
                        apolloClient.mutate<
                            removeMember,
                            removeMemberVariables
                        >({
                            mutation: removeMemberMutation,
                            variables: {
                                account: (payload && payload.account) || '',
                                id: (payload && payload.id) || '',
                                signature,
                            },
                        })
                    )
                    .mergeMap(
                        ({ data: { removeMember: removeMemberResult } }) =>
                            apolloSubscriber<IRemoveMemberCommandOutput>(
                                removeMemberResult.hash
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

export const changeMemberRoleEpic: Epic<Actions, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber, personalSign }
) =>
    action$
        .ofType(CHANGE_MEMBER_ROLE)
        .switchMap(({ payload }: IChangeMemberRoleAction) =>
            from(
                apolloClient.query<
                    prepareChangeMemberRole,
                    prepareChangeMemberRoleVariables
                >({
                    query: prepareChangeMemberRoleQuery,
                    variables: payload,
                })
            ).mergeMap(({ data: { prepareChangeMemberRole: result } }) =>
                from<string>(personalSign(result && result.messageHash))
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
                    .mergeMap(
                        ({
                            data: { changeMemberRole: changeMemberRoleResult },
                        }: any) =>
                            apolloSubscriber<IChangeMemberRoleCommandOutput>(
                                changeMemberRoleResult.hash
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

export const resendInvitationEpic: Epic<Actions, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }
) =>
    action$
        .ofType(RESEND_INVITATION)
        .switchMap(({ payload }: IResendInvitationAction) =>
            from(
                apolloClient.mutate<
                    resendInvitation,
                    resendInvitationVariables
                >({
                    mutation: resendInvitationMutation,
                    variables: payload,
                })
            )
                .mergeMap(
                    ({
                        data: { resendInvitation: resendInvitationResult },
                    }: any) =>
                        apolloSubscriber<IResendInvitationCommandOutput>(
                            resendInvitationResult.hash
                        )
                )
                .do(() => apolloClient.resetStore())
                .mergeMap(() =>
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
                )
        )

export const removeResourceEpic: Epic<any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }
) =>
    action$
        .ofType(REMOVE_RESOURCE)
        .switchMap(({ payload }: IRemoveResourceAction) =>
            from(
                apolloClient.mutate<removeResource, removeResourceVariables>({
                    mutation: removeResourceMutation,
                    variables: payload,
                })
            )
                .mergeMap(({ data: { removeResource: { hash } } }) =>
                    apolloSubscriber<IRemoveResourceCommandOutput>(hash)
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
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber, personalSign }) =>
    action$
        .ofType(TRANSFER_ARTICLE_TO_COMMUNITY)
        .switchMap(({ payload }: ITransferArticleToCommunityAction) =>
            from(
                apolloClient.mutate<
                    initiateArticleTransfer,
                    initiateArticleTransferVariables
                >({
                    mutation: initiateArticleTransferMutation,
                    variables: payload,
                })
            )
                .mergeMap(({ data: { initiateArticleTransfer: { hash } } }) =>
                    apolloSubscriber<IInitiateArticleTransferCommandOutput>(
                        hash
                    )
                )
                .switchMap(
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

                        return from(personalSign(signatureToSign))
                            .mergeMap(signature =>
                                from(
                                    apolloClient.mutate({
                                        mutation: finaliseArticleTransfer,
                                        variables: {
                                            id,
                                            signature,
                                        },
                                    })
                                )
                            )
                            .flatMap(
                                ({
                                    data: {
                                        finaliseArticleTransfer: {
                                            hash: resultHash,
                                        },
                                    },
                                }: {
                                    data: {
                                        finaliseArticleTransfer: {
                                            hash: string
                                        }
                                    }
                                }) => apolloSubscriber(resultHash)
                            )
                            .do(() => apolloClient.resetStore())
                            .do(() =>
                                analytics.track('Article Transfer Finalised', {
                                    category: 'article_actions',
                                })
                            )
                            .mergeMap(({ data: { output: { error } } }) =>
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
                            )
                    }
                )
        )
