import { Epic, ofType, ActionsObservable } from 'redux-observable'
import { IDependencies, IReduxState } from '../../../lib/Module'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'
import {
    rejectArticleTransferMutation,
    acceptArticleTransferMutation,
    finaliseArticleTransferMutation,
} from '../../../queries/Article'
import analytics from '../../../lib/analytics'
import generatePublishArticleHash from '../../../lib/generate-publish-article-hash'
import {
    finaliseArticleTransferVariables,
    finaliseArticleTransfer,
} from '../../../queries/__generated__/finaliseArticleTransfer'
import {
    rejectArticleTransfer,
    rejectArticleTransferVariables,
} from '../../../queries/__generated__/rejectArticleTransfer'
import {
    acceptArticleTransfer,
    acceptArticleTransferVariables,
} from '../../../queries/__generated__/acceptArticleTransfer'
import { from, of } from 'rxjs'
import { path } from 'ramda'
import { mergeMap, flatMap, tap, mapTo, catchError } from 'rxjs/operators'

interface IRejectArticleTransferPayload {
    id: string
}

const REJECT_ARTICLE_TRANSFER = 'REJECT_ARTICLE_TRANSFER'

export interface IRejectArticleTransferAction {
    type: string
    payload: IRejectArticleTransferPayload
}

export const rejectArticleTransferAction = (
    payload: IRejectArticleTransferPayload
): IRejectArticleTransferAction => ({
    payload,
    type: REJECT_ARTICLE_TRANSFER,
})

export const rejectArticleTransferEpic: Epic<
    IRejectArticleTransferAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(REJECT_ARTICLE_TRANSFER),
        mergeMap(({ payload: { id } }) =>
            apolloClient.mutate<
                rejectArticleTransfer,
                rejectArticleTransferVariables
            >({
                mutation: rejectArticleTransferMutation,
                variables: { id },
            })
        ),
        flatMap(({ data }) =>
            apolloSubscriber(
                (data &&
                    data.rejectArticleTransfer &&
                    data.rejectArticleTransfer.hash) ||
                    ''
            )
        ),
        tap(() => apolloClient.resetStore()),
        tap(() =>
            analytics.track('Article Transfer Rejected', {
                category: 'article_actions',
            })
        ),
        mapTo(
            showNotificationAction({
                description: `You successfully rejected the ownership of the article!`,
                message: 'Article Transfer Rejected!',
                notificationType: 'success',
            })
        ),
        catchError(err => {
            console.error(err)
            return of(
                showNotificationAction({
                    description: 'Please try again!',
                    message: 'Submission error',
                    notificationType: 'error',
                })
            )
        })
    )

interface IAcceptArticleTransferPayload {
    id: string
}

interface IAcceptArticleTransferCommandOutput {
  hash: string,
  version: string,
  articleAuthor: string,
  dateCreated: string,
}

const ACCEPT_ARTICLE_TRANSFER = 'ACCEPT_ARTICLE_TRANSFER'

interface IAcceptArticleTransferAction {
    type: string
    payload: IAcceptArticleTransferPayload
}

export const acceptArticleTransferAction = (
    payload: IAcceptArticleTransferPayload
): IAcceptArticleTransferAction => ({
    payload,
    type: ACCEPT_ARTICLE_TRANSFER,
})

export const acceptArticleTransferEpic: Epic<
    IAcceptArticleTransferAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(ACCEPT_ARTICLE_TRANSFER),
        mergeMap(({ payload: { id } }) =>
            from(
                apolloClient.mutate<
                    acceptArticleTransfer,
                    acceptArticleTransferVariables
                >({
                    mutation: acceptArticleTransferMutation,
                    variables: { id },
                })
            ).pipe(
                mergeMap(({ data }) =>
                    from(
                        apolloSubscriber<IAcceptArticleTransferCommandOutput>(
                            path<string>(['acceptArticleTransfer', 'hash'])(
                                data
                            ) || ''
                        )
                    )
                ),
                mergeMap(
                    ({
                        data: {
                            output: {
                                hash,
                                version,
                                articleAuthor,
                                dateCreated,
                            },
                        },
                    }) =>
                        of(
                            finaliseArticleTransferAction({
                                contentHash: hash,
                                contributor: articleAuthor,
                                dateCreated,
                                id,
                                version: parseInt(version, 10),
                            })
                        )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Submission error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

interface IFinaliseArticleTransferPayload {
    id: string
    contentHash: string
    contributor: string
    dateCreated: string
    version: number
}

const FINALISE_ARTICLE_TRANSFER = 'FINALISE_ARTICLE_TRANSFER'

export interface IFinaliseArticleTransferAction {
    type: string
    payload: IFinaliseArticleTransferPayload
}

export const finaliseArticleTransferAction = (
    payload: IFinaliseArticleTransferPayload
): IFinaliseArticleTransferAction => ({
    payload,
    type: FINALISE_ARTICLE_TRANSFER,
})

export const finaliseArticleTransferEpic: Epic<
    IFinaliseArticleTransferAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber, personalSign }) =>
    action$.pipe(
        ofType(FINALISE_ARTICLE_TRANSFER),
        mergeMap(
            ({
                payload: { id, version, contentHash, contributor, dateCreated },
            }) => {
                const signatureToSign = generatePublishArticleHash(
                    id,
                    version,
                    contentHash,
                    contributor,
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
                    flatMap(({ data }) =>
                        apolloSubscriber<{ error?: string }>(
                            (data &&
                                data.finaliseArticleTransfer &&
                                data.finaliseArticleTransfer.hash) ||
                                ''
                        )
                    ),
                    tap(() => apolloClient.resetStore()),
                    tap(() =>
                        analytics.track('Article Transfer Accepted', {
                            category: 'article_actions',
                        })
                    ),
                    tap(() =>
                        showNotificationAction({
                            description: `You successfully approved the ownership of the article!`,
                            message: 'Article Transfer Accepted!',
                            notificationType: 'success',
                        })
                    )
                )
            }
        )
    )
