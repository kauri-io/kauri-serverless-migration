import { ofType, Epic } from 'redux-observable'
import { merge, of, from } from 'rxjs'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import analytics from '../../lib/analytics'
import { switchMap, mergeMap, tap } from 'rxjs/operators'
import { deleteDraftArticleMutation } from '../../queries/Article'
import {
    deleteDraftArticle,
    deleteDraftArticleVariables,
} from '../../queries/__generated__/deleteDraftArticle'
import { path } from 'ramda'
import { IDependencies, IReduxState } from '../../lib/Module'
import { getProfileURL } from '../../lib/getURLs'

export interface IDeleteDraftArticlePayload {
    id: string
    version: number
}

export interface IDeleteDraftArticleAction {
    type: 'DELETE_DRAFT_ARTICLE'
    payload: IDeleteDraftArticlePayload
    callback: () => void
}

const DELETE_DRAFT_ARTICLE = 'DELETE_DRAFT_ARTICLE'

export const deleteDraftArticleAction = (
    payload: IDeleteDraftArticlePayload,
    callback: () => void
): IDeleteDraftArticleAction => ({
    callback,
    payload,
    type: DELETE_DRAFT_ARTICLE,
})

export const deleteDraftArticleEpic: Epic<
    IDeleteDraftArticleAction,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(DELETE_DRAFT_ARTICLE),
        switchMap(({ payload: variables, callback }) =>
            from(
                apolloClient.mutate<
                    deleteDraftArticle,
                    deleteDraftArticleVariables
                >({
                    mutation: deleteDraftArticleMutation,
                    variables,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ hash: string }>(
                        path<string>(['cancelArticle', 'hash'])(data) || ''
                    )
                ),
                tap(() => {
                    analytics.track('Delete Draft', {
                        category: 'article_actions',
                    })
                    return typeof callback === 'function' && callback()
                }),
                mergeMap(() =>
                    merge(
                        of(
                            showNotificationAction({
                                description: `Your draft article has been deleted!`,
                                message: 'Draft article deleted',
                                notificationType: 'success',
                            })
                        ),
                        of(
                            routeChangeAction(
                                state$.value.app.user
                                    ? getProfileURL(state$.value.app.user).as
                                    : '/'
                            )
                        )
                    )
                )
            )
        )
    )
