import { of, from, merge } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Epic, ofType } from 'redux-observable'
import {
    vote as voteMutation,
    addCommentMutation,
    finaliseArticleTransferMutation,
} from '../../queries/Article'
import { voteVariables, vote } from '../../queries/__generated__/vote'
import analytics from '../../lib/analytics'
import { switchMap, mergeMap, tap, catchError, mapTo } from 'rxjs/operators'
import { path } from 'ramda'
import {
    addCommentVariables,
    addComment,
} from '../../queries/__generated__/addComment'
import {
    initiateArticleTransferVariables,
    initiateArticleTransfer,
} from '../../queries/__generated__/initiateArticleTransfer'
import { personalSign } from '../../lib/web3-personal-sign'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import {
    finaliseArticleTransfer,
    finaliseArticleTransferVariables,
} from '../../queries/__generated__/finaliseArticleTransfer'
import { initiateArticleTransferMutation } from '../../queries/Community'

export interface IVoteAction {
    type: string
    payload: voteVariables
    callback?: any
}

const VOTE = 'VOTE'

export const voteAction = (payload: voteVariables): IVoteAction => ({
    payload,
    type: VOTE,
})

export const voteEpic: Epic<IVoteAction, any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }
) =>
    action$.pipe(
        ofType(VOTE),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<vote, voteVariables>({
                    mutation: voteMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(path<string>(['vote', 'hash'])(data) || '')
                ),
                tap(() =>
                    analytics.track('Vote Content', {
                        category: 'article_actions',
                        type: payload.value === 1 ? 'Upvoted' : 'Downvoted',
                    })
                ),

                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                payload &&
                                typeof payload.value === 'number' &&
                                payload.value > 0
                                    ? 'Your vote has been counted! Thanks for your feedback!'
                                    : 'Please leave a comment below with your feedback to the author to help them improve the article.',
                            message: `Voted`,
                            notificationType: 'success',
                        })
                    )
                ),

                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Voting error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

export type IAddCommentAction = {
    type: string
    payload: addCommentVariables
    callback: any
}

export const ADD_COMMENT: string = 'ADD_COMMENT'

export const addCommentAction = (
    payload: addCommentVariables,
    callback: any
): IAddCommentAction => ({
    type: ADD_COMMENT,
    payload,
    callback,
})

export const addCommentEpic: Epic<
    IAddCommentAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(ADD_COMMENT),
        switchMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<addComment, addCommentVariables>({
                    mutation: addCommentMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ error?: string }>(
                        path<string>(['addComment', 'hash'])(data) || ''
                    )
                ),
                tap(_ => (callback ? callback() : null)),
                tap(() =>
                    analytics.track('Leave Comment', {
                        category: 'article_actions',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mapTo(
                    showNotificationAction({
                        notificationType: 'success',
                        message: 'Comment added',
                        description: `Your comment has been added to the ${
                            payload.parent.type === 'DISCUSSION'
                                ? 'discussion'
                                : 'article'
                        }.`,
                    })
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            notificationType: 'error',
                            message: 'Submission error',
                            description: 'Please try again!',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////

const INITIATE_ARTICLE_TRANSFER = 'INITIATE_ARTICLE_TRANSFER'
const ARTICLE_TRANSFERRED_TO_COMMUNITY = 'ARTICLE_TRANSFERRED_TO_COMMUNITY'

interface IInitiateArticleTransferCommandOutput {
    hash: string
    id: string
    version: number
    articleAuthor: string
    dateCreated: string
    transferAccepted: boolean
}

interface IFinaliseArticleTransferCommandOutput {
    messageHash: string
    error?: string
}
interface IArticleTransferredToCommunityAction {
    type: 'ARTICLE_TRANSFERRED_TO_COMMUNITY'
}

export interface IInitiateArticleTransferAction {
    type: string
    payload: initiateArticleTransferVariables
}

export const articleTransferredToCommunityAction = (): IArticleTransferredToCommunityAction => ({
    type: ARTICLE_TRANSFERRED_TO_COMMUNITY,
})

export const initiateArticleTransferAction = (
    payload: initiateArticleTransferVariables
): IInitiateArticleTransferAction => ({
    payload,
    type: INITIATE_ARTICLE_TRANSFER,
})

export const initiateArticleTransferEpic: Epic<
    IInitiateArticleTransferAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(INITIATE_ARTICLE_TRANSFER),
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
                tap(() => apolloClient.resetStore()),
                mergeMap(
                    ({
                        data: {
                            getEvent: {
                                output: {
                                    id,
                                    version,
                                    hash,
                                    articleAuthor,
                                    dateCreated,
                                    transferAccepted,
                                },
                            },
                        },
                    }) => {
                        if (transferAccepted) {
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
                                    analytics.track(
                                        'Article Transfer Finalised',
                                        {
                                            category: 'article_actions',
                                        }
                                    )
                                ),
                                mergeMap(
                                    ({
                                        data: {
                                            getEvent: {
                                                output: { error },
                                            },
                                        },
                                    }) =>
                                        error
                                            ? merge(
                                                  of(
                                                      showNotificationAction({
                                                          description: `There was an error transferring the article, please try again.`,
                                                          message: 'Error',
                                                          notificationType:
                                                              'error',
                                                      })
                                                  )
                                              )
                                            : merge(
                                                  of(
                                                      articleTransferredToCommunityAction()
                                                  ),
                                                  of(
                                                      showNotificationAction({
                                                          description: `Your selected article was successfully transferred`,
                                                          message:
                                                              'Ownership Transfer',
                                                          notificationType:
                                                              'success',
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
                        } else {
                            console.log('not auto-accepted')
                            return of(
                                showNotificationAction({
                                    description:
                                        'You request for transfer has been initiated, the recipient can now accept or reject your request.',
                                    message: 'Transfer Ownership',
                                    notificationType: 'success',
                                })
                            )
                        }
                    }
                ),

                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Transfer error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )
