import { Epic, ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs'
import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { deleteDraftArticle } from './__generated__/deleteDraftArticle'
import analytics from '../../lib/analytics'
import { switchMap, filter } from 'rxjs/operators'

export const deleteDraftArticleMutation = gql`
    mutation deleteDraftArticle($id: String, $version: Int) {
        cancelArticle(id: $id, version: $version) {
            hash
        }
    }
`

export const getArticleTitleQuery = gql`
    query getArticleTitle($id: String, $version: Int) {
        getArticle(id: $id, version: $version) {
            title
        }
    }
`

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

interface IDeleteDraftArticlePayload {
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

interface IDeleteDraftArticleCommandOutput {
    id: string
    version: number
}

export const deleteDraftArticleEpic: Epic<any, IReduxState, IDependencies> = (
    action$,
    store,
    { apolloClient, apolloSubscriber }
) =>
    action$
        .ofType(DELETE_DRAFT_ARTICLE)
        .switchMap(
            ({ payload: variables, callback }: IDeleteDraftArticleAction) =>
                Observable.fromPromise(
                    apolloClient.mutate<deleteDraftArticle>({
                        mutation: deleteDraftArticleMutation,
                        variables,
                    })
                )
                    .mergeMap(({ data: { cancelArticle } }) =>
                        apolloSubscriber(cancelArticle)
                    )
                    .do(() => {
                        analytics.track('Delete Draft', {
                            category: 'article_actions',
                        })
                        apolloClient.resetStore()
                        return typeof callback === 'function' && callback()
                    })
                    .mergeMap(() =>
                        Observable.merge(
                            Observable.of(
                                (showNotificationAction as any)({
                                    description: `Your draft article has been deleted!`,
                                    message: 'Draft article deleted',
                                    notificationType: 'success',
                                })
                            ),
                            Observable.of(
                                routeChangeAction(
                                    `/public-profile/${
                                        store.getState().app.user.id
                                    }`
                                )
                            )
                        )
                    )
        )
