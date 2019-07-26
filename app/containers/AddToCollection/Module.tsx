import { ofType, Epic } from 'redux-observable'
import { from, merge, of } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    getArticleTitle,
    getArticleTitleVariables,
} from '../ArticleDraft/__generated__/getArticleTitle'
import analytics from '../../lib/analytics'
import { tap, map, mergeMap, switchMap, catchError } from 'rxjs/operators'
import {
    addArticleToCollectionMutation,
    getCollectionTitleQuery,
    getArticleTitleQuery,
} from '../../queries/Article'
import {
    addArticleToCollection,
    addArticleToCollectionVariables,
} from '../../queries/__generated__/addArticleToCollection'
import { path } from 'ramda'
import {
    getCollectionTitle,
    getCollectionTitleVariables,
} from '../../queries/__generated__/getCollectionTitle'
// import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
// import AlertViewComponent from '../../components/Modal/AlertView'
// import {
//     closeModalAction,
//     openModalAction,
// } from '../../components/Modal/Module'
// import { BodyCard, H4 } from '../../components/Typography'
// import styled from 'styled-components'

// export interface IAddArticleToCollectionPayload {
//     id: string
//     sectionId: string
//     resourceId: {
//         id: string
//         version: number
//         type: 'ARTICLE'
//     }
//     position: number
// }

export interface IAddArticleToCollectionAction {
    callback: () => void
    payload: addArticleToCollectionVariables
    type: 'ADD_ARTICLE_TO_COLLECTION'
}

const ADD_ARTICLE_TO_COLLECTION = 'ADD_ARTICLE_TO_COLLECTION'

export const addArticleToCollectionAction = (
    payload: addArticleToCollectionVariables,
    callback: () => void
): IAddArticleToCollectionAction => ({
    callback,
    payload,
    type: ADD_ARTICLE_TO_COLLECTION,
})

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     min-height: 130px;
//     align-items: center;
//     > :first-child {
//         margin-right: 3px;
//     }
// `

export const addArticleToCollectionEpic: Epic<
    IAddArticleToCollectionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(ADD_ARTICLE_TO_COLLECTION),
        switchMap(actions =>
            from(
                apolloClient.mutate<
                    addArticleToCollection,
                    addArticleToCollectionVariables
                >({
                    mutation: addArticleToCollectionMutation,
                    variables: actions.payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ hash: string }>(
                        path<string>(['addArticleToCollection', 'hash'])(
                            data
                        ) || ''
                    )
                ),
                mergeMap(() =>
                    apolloClient.query<
                        getArticleTitle,
                        getArticleTitleVariables
                    >({
                        query: getArticleTitleQuery,
                        variables: {
                            id: actions.payload.resourceId.id,
                            version: actions.payload.resourceId.version,
                        },
                    })
                ),
                map(
                    ({ data: { getArticle } }) => getArticle && getArticle.title
                ),
                tap(
                    () =>
                        typeof actions.callback === 'function' &&
                        actions.callback()
                ),
                tap(() => {
                    analytics.track('Add To Collection', {
                        category: 'collection_actions',
                        resourceId: '4e1a8de4dece4736bd0b9c33b9225c92',
                        resourceType: actions.payload.resourceId.type,
                    })
                }),
                switchMap(title =>
                    from(
                        apolloClient.query<
                            getCollectionTitle,
                            getCollectionTitleVariables
                        >({
                            query: getCollectionTitleQuery,
                            variables: {
                                id: actions.payload.id,
                            },
                        })
                    ).pipe(
                        mergeMap(() =>
                            // { data: { getCollection } }
                            merge(
                                of(
                                    showNotificationAction({
                                        description: `The article "${title}" has been added to your collection!`,
                                        message: 'Article added to collection',
                                        notificationType: 'success',
                                    })
                                )
                                // of(
                                //     openModalAction({
                                //         children: (
                                //             <AlertViewComponent
                                //                 title="Add to Collection"
                                //                 content={
                                //                     <Row>
                                //                         <BodyCard>
                                //                             Article successfully
                                //                             added to
                                //                         </BodyCard>
                                //                         <H4>{` ${getCollection &&
                                //                             getCollection.name} Collection`}</H4>
                                //                     </Row>
                                //                 }
                                //                 closeModalAction={() =>
                                //                     store.dispatch(
                                //                         closeModalAction()
                                //                     )
                                //                 }
                                //                 confirmButtonText={
                                //                     'View Collection'
                                //                 }
                                //                 closeButtonText={'Close'}
                                //                 confirmButtonAction={() => {
                                //                     store.dispatch(
                                //                         closeModalAction()
                                //                     )
                                //                     store.dispatch(
                                //                         routeChangeAction(
                                //                             `/collection/${
                                //                                 (actions as IAddArticleToCollectionAction)
                                //                                     .payload.id
                                //                             }/update-collection`
                                //                         )
                                //                     )
                                //                 }}
                                //             />
                                //         ),
                                //     })
                                // )
                            )
                        ),
                        tap(() => apolloClient.resetStore()),
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
