import { ofType, Epic } from 'redux-observable'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import { approveArticleMutation, rejectArticleMutation } from '../../queries/Article'
import analytics from '../../lib/analytics'
import { from, merge, of } from 'rxjs'
import { switchMap, mergeMap, tap, catchError } from 'rxjs/operators'
import { approveArticle, approveArticleVariables } from '../../queries/__generated__/approveArticle';
import { path } from 'ramda'
import { rejectArticle, rejectArticleVariables } from '../../queries/__generated__/rejectArticle';

interface IApproveArticlePayload {
    id: string
    version: number
    author: string
    contentHash: string
    dateCreated: string
}

const APPROVE_ARTICLE = 'APPROVE_ARTICLE'

interface IApproveArticleAction {
    type: string
    payload: IApproveArticlePayload
}

export const approveArticleAction = (
    payload: IApproveArticlePayload
): IApproveArticleAction => ({
    payload,
    type: APPROVE_ARTICLE,
})

export const approveArticleEpic: Epic<IApproveArticleAction, any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, personalSign, apolloSubscriber }
) =>
    action$.pipe(
        ofType(APPROVE_ARTICLE),
        switchMap(
            ({ payload: { id, version, contentHash, author, dateCreated } }) =>
                from(
                    personalSign(
                        generatePublishArticleHash(
                            id,
                            version,
                            contentHash,
                            author,
                            dateCreated
                        )
                    )
                ).pipe(
                    // tap(console.log),
                    mergeMap(signature =>
                        apolloClient.mutate<approveArticle, approveArticleVariables>({
                            mutation: approveArticleMutation,
                            variables: {
                                id,
                                signature,
                                version,
                            },
                        })
                    ),
                    mergeMap(({ data }) =>
                        from(
                          apolloSubscriber<{ hash: string }>(path<string>(['approveArticle', 'hash'])(data) || '')
                        )
                    ),
                    tap(() =>
                        analytics.track('Article Update Approved', {
                            category: 'article_actions',
                        })
                    ),
                    tap(() => apolloClient.resetStore()),
                    mergeMap(() =>
                        merge(
                            of(
                                routeChangeAction(
                                    `/article/${id}/v${version}/article-${'published'}`
                                )
                            ),
                            of(
                                showNotificationAction({
                                    description:
                                        'The update has been approved!',
                                    message: `Article approved`,
                                    notificationType: 'success',
                                })
                            )
                        )
                    ),
                    catchError(err => {
                        console.error(err)
                        return of(
                            showNotificationAction({
                                description: 'Please try again!',
                                message: 'Approval error',
                                notificationType: 'error',
                            })
                        )
                    })
                )
        )
    )

interface IRejectArticlePayload {
    id: string
    version: number
    cause: string
}

const REJECT_ARTICLE = 'REJECT_ARTICLE'

interface IRejectArticleAction {
    type: string
    payload: IRejectArticlePayload
}

export const rejectArticleAction = (
    payload: IRejectArticlePayload
): IRejectArticleAction => ({
    payload,
    type: REJECT_ARTICLE,
})

export const rejectArticleEpic: Epic<IRejectArticleAction, any, IReduxState, IDependencies>  = (
    action$,
    _,
  { apolloClient, apolloSubscriber }
) =>
    action$.pipe(
        ofType(REJECT_ARTICLE),
        switchMap(({ payload: { id, version, cause } }) =>
            from(
                apolloClient.mutate<rejectArticle, rejectArticleVariables>({
                    mutation: rejectArticleMutation,
                    variables: { id, version, cause },
                })
            ).pipe(
                mergeMap(({ data }) =>
                  apolloSubscriber<{ hash: string }>(path<string>(['rejectArticle', 'hash'])(data) || '')
                ),
                tap(() => apolloClient.resetStore()),
                tap(() =>
                    analytics.track('Article Update Rejected', {
                        category: 'article_actions',
                    })
                ),
                mergeMap(() =>
                    merge(
                        of(
                            routeChangeAction(
                                `/article/${id}/v${version}/article-rejected`
                            )
                        ),
                        of(
                            showNotificationAction({
                                description: `It will not show up in your approvals queue anymore!`,
                                message: 'Article rejected!',
                                notificationType: 'success',
                            })
                        )
                    )
                )
            )
        )
    )
