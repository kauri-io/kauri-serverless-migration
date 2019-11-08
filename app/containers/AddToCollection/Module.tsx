import { Epic, ofType } from 'redux-observable'
import styled from 'styled-components'
import { IReduxState, IDependencies } from '../../lib/Module'
import analytics from '../../lib/analytics'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    getArticleTitleQuery,
    getCollectionTitleQuery,
} from '../../queries/Article'
import { addResourceToCollectionMutation } from '../../queries/Collection'
import { openModalAction } from '../../components/Modal/Module'
import AlertViewComponent from '../../components/Modal/AlertView'
import { BodyCard, H4 } from '../../components/Typography'
import {
    addResourceToCollectionVariables,
    addResourceToCollection,
} from '../../queries/__generated__/addResourceToCollection'
import { switchMap, mergeMap, map, tap, catchError } from 'rxjs/operators'
import { from, of, merge } from 'rxjs'
import { path } from 'ramda'
import { getCollectionTitle } from '../../queries/__generated__/getCollectionTitle'
import { getArticleTitleVariables } from '../ArticleDraft/__generated__/getArticleTitle'
import { getArticleTitle } from '../../queries/__generated__/getArticleTitle'

export interface IAddArticleToCollectionAction {
    callback: () => void
    payload: IAddArticleToCollectionPayload
    type: 'ADD_ARTICLE_TO_COLLECTION'
}

export type IOpenAddArticleToCollectionConfirmationModalPayload = getCollectionTitle & {
    routeChangeAction: any
    closeModalAction: any
}

export interface IOpenAddArticleToCollectionConfirmationModalAction {
    payload: IOpenAddArticleToCollectionConfirmationModalPayload
    type: 'OPEN_ADD_ARTICLE_TO_COLLECTION_CONFIRMATION_MODAL'
}

const ADD_ARTICLE_TO_COLLECTION = 'ADD_ARTICLE_TO_COLLECTION'

const OPEN_ADD_ARTICLE_TO_COLLECTION_CONFIRMATION_MODAL =
    'OPEN_ADD_ARTICLE_TO_COLLECTION_CONFIRMATION_MODAL'

export type IAddArticleToCollectionPayload = addResourceToCollectionVariables & {
    routeChangeAction: any
    closeModalAction: any
}

export const addResourceToCollectionAction = (
    payload: IAddArticleToCollectionPayload,
    callback: () => void
): IAddArticleToCollectionAction => ({
    callback,
    payload,
    type: ADD_ARTICLE_TO_COLLECTION,
})

export const openAddArticleToCollectionConfirmationModalAction = (
    payload: IOpenAddArticleToCollectionConfirmationModalPayload
): IOpenAddArticleToCollectionConfirmationModalAction => ({
    payload,
    type: OPEN_ADD_ARTICLE_TO_COLLECTION_CONFIRMATION_MODAL,
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

export const openAddArticleToCollectionConfirmationModalEpic: Epic<
    IOpenAddArticleToCollectionConfirmationModalAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _state$, {}) =>
    action$.pipe(
        ofType(OPEN_ADD_ARTICLE_TO_COLLECTION_CONFIRMATION_MODAL),
        mergeMap(({ payload }) =>
            of(
                openModalAction({
                    children: (
                        <AlertViewComponent
                            title="Add to Collection"
                            content={
                                <Row>
                                    <BodyCard>
                                        Article successfully added to
                                    </BodyCard>
                                    <H4>{` ${payload.getCollection &&
                                        payload.getCollection
                                            .name} Collection`}</H4>
                                </Row>
                            }
                            closeModalAction={() => payload.closeModalAction()}
                            confirmButtonText={'View Collection'}
                            closeButtonText={'Close'}
                            confirmButtonAction={() => {
                                payload.closeModalAction()
                                payload.routeChangeAction(
                                    `/collection/${payload.getCollection &&
                                        payload.getCollection
                                            .id}/update-collection`
                                )
                            }}
                        />
                    ),
                })
            )
        )
    )

export const addResourceToCollectionEpic: Epic<
    IAddArticleToCollectionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(ADD_ARTICLE_TO_COLLECTION),
        mergeMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<
                    addResourceToCollection,
                    addResourceToCollectionVariables
                >({
                    mutation: addResourceToCollectionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<IAddArticleToCollectionCommandOutput>(
                        path<string>(['addCollectionResource', 'hash'])(data) ||
                            ''
                    )
                ),
                mergeMap(() =>
                    apolloClient.query<
                        getArticleTitle,
                        getArticleTitleVariables
                    >({
                        query: getArticleTitleQuery,
                        variables: {
                            id: payload.resourceId.id,
                            version: payload.resourceId.version,
                        },
                    })
                ),
                map(
                    ({ data: { getArticle } }) =>
                        (getArticle && getArticle.title) || ''
                ),
                switchMap(title =>
                    from(
                        apolloClient.query<
                            getCollectionTitle,
                            getArticleTitleVariables
                        >({
                            query: getCollectionTitleQuery,
                            variables: {
                                id: payload.id,
                            },
                        })
                    ).pipe(
                        mergeMap(({ data: { getCollection } }) =>
                            merge(
                                of(
                                    showNotificationAction({
                                        description: `The article "${title}" has been added to your collection!`,
                                        message: 'Article added to collection',
                                        notificationType: 'success',
                                    })
                                ),
                                of(
                                    openAddArticleToCollectionConfirmationModalAction(
                                        {
                                            getCollection,
                                            routeChangeAction:
                                                payload.routeChangeAction,
                                            closeModalAction:
                                                payload.closeModalAction,
                                        }
                                    )
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
                tap(() => typeof callback === 'function' && callback()),
                tap(() => {
                    analytics.track('Add To Collection', {
                        category: 'collection_actions',
                        resourceId: '4e1a8de4dece4736bd0b9c33b9225c92',
                        resourceType: payload.resourceId.type,
                    })
                })
            )
        )
    )
