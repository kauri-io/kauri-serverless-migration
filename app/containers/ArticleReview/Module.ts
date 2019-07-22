import { ActionsObservable, ofType } from 'redux-observable'
import { IDependencies } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import { getEvent } from '../../queries/Module'
import { create } from '../../lib/init-apollo'
import { approveArticle, rejectArticle } from '../../queries/Article'
import analytics from '../../lib/analytics'
import { from, merge, of } from 'rxjs'
import { switchMap, mergeMap, tap, catchError, flatMap } from 'rxjs/operators'

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

interface IReduxState {
    app: {
        user: {
            id: string
        }
        hostName: string
    }
}

export const approveArticleEpic = (
    action$: ActionsObservable<IApproveArticleAction>,
    {  }: IReduxState,
    { apolloClient, personalSign }: IDependencies
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
                    mergeMap(signature =>
                        apolloClient.mutate({
                            mutation: approveArticle,
                            variables: {
                                id,
                                signature,
                                version,
                            },
                        })
                    ),
                    mergeMap(({ data: { approveArticle: { hash } } }) =>
                        from(
                            new Promise<{ data: any }>((resolve, reject) => {
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
                                        error: (err: Error) => reject(err),
                                        next: (data: any) => resolve(data),
                                    })
                            })
                        )
                    ),
                    tap(() =>
                        analytics.track('Article Update Approved', {
                            category: 'article_actions',
                        })
                    ),
                    tap(() => apolloClient.resetStore()),
                    mergeMap<any, any>(() =>
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

export const rejectArticleEpic = (
    action$: ActionsObservable<IRejectArticleAction>,
    _: IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(REJECT_ARTICLE),
        switchMap(({ payload: { id, version, cause } }) =>
            from(
                apolloClient.mutate({
                    mutation: rejectArticle,
                    variables: { id, version, cause },
                })
            ).pipe(
                flatMap(({ data: { rejectArticle: { hash } } }) =>
                    apolloSubscriber(hash)
                ),
                tap(() => apolloClient.resetStore()),
                tap(() =>
                    analytics.track('Article Update Rejected', {
                        category: 'article_actions',
                    })
                ),
                mergeMap<any, any>(() =>
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
