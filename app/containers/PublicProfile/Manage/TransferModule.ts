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
import { create } from '../../../lib/init-apollo'
import { getEvent } from '../../../queries/Module'
import { from, of } from 'rxjs'
import { mergeMap, flatMap, tap } from 'rxjs/operators'
import {
    finaliseArticleTransferVariables,
    finaliseArticleTransfer,
} from '../../../queries/__generated__/finaliseArticleTransfer'
import {
    rejectArticleTransfer,
    rejectArticleTransferVariables,
} from '../../../queries/__generated__/rejectArticleTransfer'
import { acceptArticleTransfer, acceptArticleTransferVariables } from '../../../queries/__generated__/acceptArticleTransfer';

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

export const rejectArticleTransferEpic = (
    action$: ActionsObservable<IRejectArticleTransferAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
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
        tap(
            () =>
                showNotificationAction({
                    description: `You successfully rejected the ownership of the article!`,
                    message: 'Article Transfer Rejected!',
                    notificationType: 'success',
                }),
            tap(() =>
                analytics.track('Article Transfer Rejected', {
                    category: 'article_actions',
                })
            )
        )
    )

interface IAcceptArticleTransferPayload {
    id: string
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

export const newEpic = (
    action$: ActionsObservable<IAcceptArticleTransferAction>,
    _: IReduxState,
    { apolloClient }: IDependencies
) =>
    action$.pipe(
        ofType(ACCEPT_ARTICLE_TRANSFER),
        mergeMap(({ payload: { id } }) =>
            from(
                apolloClient.mutate<acceptArticleTransfer, acceptArticleTransferVariables>({
                    mutation: acceptArticleTransferMutation,
                    variables: { id },
                })
            ).pipe(
                mergeMap(({ data: { acceptArticleTransfer: { hash } } }) =>
                    from(
                        new Promise<{ data: any }>((resolve, reject) => {
                            create(
                                {},
                                {
                                    getToken: () => 'DUMMYVERIFICATIONTOKEN',
                                }
                            )
                                .subscribe({
                                    query: getEvent,
                                    variables: { hash },
                                })
                                .subscribe({
                                    error: (err: Error) => reject(err),
                                    next: (data: any) => resolve(data),
                                })
                        })
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
                )
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
