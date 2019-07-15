import { Epic, ActionsObservable, ofType } from 'redux-observable'
import { from, merge, of } from 'rxjs'
import gql from 'graphql-tag'
import { IReduxState, IDependencies } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    getArticleTitle,
    getArticleTitleVariables,
} from '../ArticleDraft/__generated__/getArticleTitle'
import { getArticleTitleQuery } from '../../containers/ArticleDraft/DeleteDraftArticleModule'
import { addArticleToCollection } from './__generated__/addArticleToCollection'
import AlertViewComponent from '../../components/Modal/AlertView'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import { BodyCard, H4 } from '../../components/Typography'
import { getCollectionTitle } from './__generated__/getCollectionTitle'
import styled from 'styled-components'
import analytics from '../../lib/analytics'
import { tap, map, mergeMap, switchMap, catchError } from 'rxjs/operators';

export const addArticleToCollectionMutation = gql`
    mutation addArticleToCollection(
        $id: String
        $sectionId: String
        $resourceId: ResourceIdentifierInput
        $position: Int
    ) {
        addCollectionResource(
            id: $id
            sectionId: $sectionId
            resourceId: $resourceId
            position: $position
        ) {
            hash
        }
    }
`

export const getCollectionTitleQuery = gql`
    query getCollectionTitle($id: String) {
        getCollection(id: $id) {
            name
        }
    }
`

export interface IAddArticleToCollectionPayload {
    id: string
    sectionId: string
    resourceId: {
        id: string
        version: number
        type: 'ARTICLE'
    }
    position: number
}

export interface IAddArticleToCollectionAction {
    callback: () => void
    payload: IAddArticleToCollectionPayload
    type: 'ADD_ARTICLE_TO_COLLECTION'
}

const ADD_ARTICLE_TO_COLLECTION = 'ADD_ARTICLE_TO_COLLECTION'

export const addArticleToCollectionAction = (
    payload: IAddArticleToCollectionPayload,
    callback: () => void
): IAddArticleToCollectionAction => ({
    callback,
    payload,
    type: ADD_ARTICLE_TO_COLLECTION,
})

interface IAddArticleToCollectionCommandOutput {
    id: string
    version: number
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 130px;
    align-items: center;
    > :first-child {
        margin-right: 3px;
    }
`

export const addArticleToCollectionEpic = (
    action$: ActionsObservable<IAddArticleToCollectionAction>,
    store: any,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(ADD_ARTICLE_TO_COLLECTION),
        switchMap(actions =>
            from(
                apolloClient.mutate<addArticleToCollection>({
                    mutation: addArticleToCollectionMutation,
                    variables: (actions as IAddArticleToCollectionAction).payload,
                })
            ).pipe(
                mergeMap(({ data: { addCollectionResource } }) =>
                    apolloSubscriber(addCollectionResource)
                ),
                mergeMap(() =>
                    apolloClient.query<getArticleTitle>({
                        query: getArticleTitleQuery,
                        variables: {
                            id: (actions as IAddArticleToCollectionAction).payload
                                .resourceId.id,
                            version: (actions as IAddArticleToCollectionAction)
                                .payload.resourceId.version,
                        },
                    })
                ),
                map(({ data: { getArticle } }) => getArticle.title),
                tap(
                    () =>
                        typeof actions.callback === 'function' && actions.callback()
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
                        apolloClient.query({
                            query: getCollectionTitleQuery,
                            variables: {
                                id: (actions as IAddArticleToCollectionAction)
                                    .payload.id,
                            },
                        })
                    ).pipe(
                        mergeMap(({ data: { getCollection } }) =>
                            merge(
                                of(
                                    (showNotificationAction as any)({
                                        description: `The article "${title}" has been added to your collection!`,
                                        message: 'Article added to collection',
                                        notificationType: 'success',
                                    })
                                ),
                                of(
                                    openModalAction({
                                        children: (
                                            <AlertViewComponent
                                                title="Add to Collection"
                                                content={
                                                    <Row>
                                                        <BodyCard>
                                                            Article successfully
                                                            added to
                                                        </BodyCard>
                                                        <H4>{` ${getCollection &&
                                                            getCollection.name} Collection`}</H4>
                                                    </Row>
                                                }
                                                closeModalAction={() =>
                                                    store.dispatch(
                                                        closeModalAction()
                                                    )
                                                }
                                                confirmButtonText={
                                                    'View Collection'
                                                }
                                                closeButtonText={'Close'}
                                                confirmButtonAction={() => {
                                                    store.dispatch(
                                                        closeModalAction()
                                                    )
                                                    store.dispatch(
                                                        routeChangeAction(
                                                            `/collection/${
                                                                (actions as IAddArticleToCollectionAction)
                                                                    .payload.id
                                                            }/update-collection`
                                                        )
                                                    )
                                                }}
                                            />
                                        ),
                                    })
                                )
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