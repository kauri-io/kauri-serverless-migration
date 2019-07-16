import { ActionsObservable, ofType } from 'redux-observable'
import { merge, of, from } from 'rxjs'
import { ApolloClient } from 'apollo-client'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { deleteDraftArticle } from './__generated__/deleteDraftArticle'
import analytics from '../../lib/analytics'
import { switchMap, mergeMap, tap } from 'rxjs/operators'
import { deleteDraftArticleMutation } from '../../queries/Article';



export interface IDependencies {
    apolloClient: ApolloClient<{}>
    apolloSubscriber: <T>(hash: string) => Promise<{ data: { output: T } }>
    smartContracts: any
    web3: any
    fetch: any
    web3PersonalSign: any
    getGasPrice: any
    driverJS: any
    personalSign: any
}

interface IAction {
    type: string
    payload?: {}
}

export interface IDeleteDraftArticlePayload {
    id: string
    version: number
}

export interface IDeleteDraftArticleAction extends IAction {
    type: 'DELETE_DRAFT_ARTICLE'
    payload: IDeleteDraftArticlePayload
    callback: () => void
}

interface IReduxState {
    app: {
        user: {
            id: string
        }
    }
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

export const deleteDraftArticleEpic = (
    action$: ActionsObservable<IDeleteDraftArticleAction>,
    state: IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(DELETE_DRAFT_ARTICLE),
        switchMap(
            ({ payload: variables, callback }: IDeleteDraftArticleAction) =>
                from(
                    apolloClient.mutate({
                        mutation: deleteDraftArticleMutation,
                        variables,
                    })
                ).pipe(
                    mergeMap(({ data: { cancelArticle } }) =>
                        apolloSubscriber(cancelArticle.hash)
                    ),
                    tap(() => {
                        analytics.track('Delete Draft', {
                            category: 'article_actions',
                        })
                        apolloClient.resetStore()
                        return typeof callback === 'function' && callback()
                    }),
                    mergeMap(() =>
                        merge(
                            of(
                                (showNotificationAction as any)({
                                    description: `Your draft article has been deleted!`,
                                    message: 'Draft article deleted',
                                    notificationType: 'success',
                                })
                            ),
                            of(
                                routeChangeAction(
                                    `/public-profile/${state.app.user.id}`
                                )
                            )
                        )
                    )
                )
        )
    )
