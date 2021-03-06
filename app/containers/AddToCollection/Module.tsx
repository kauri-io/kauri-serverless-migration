import { Epic, ofType } from 'redux-observable'
import { IReduxState, IDependencies } from '../../lib/Module'
import analytics from '../../lib/analytics'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { getCollectionTitleQuery } from '../../queries/Article'
import { addResourceToCollectionMutation } from '../../queries/Collection'
import { openModalAction } from '../../components/Modal/Module'
import AlertViewComponent from '../../components/Modal/AlertView'
import {
    addResourceToCollectionVariables,
    addResourceToCollection,
} from '../../queries/__generated__/addResourceToCollection'
import { switchMap, mergeMap, tap, catchError } from 'rxjs/operators'
import { from, of, merge } from 'rxjs'
import { path } from 'ramda'
import {
    getCollectionTitle,
    getCollectionTitleVariables,
} from '../../queries/__generated__/getCollectionTitle'
import { Typography } from '@material-ui/core'
import { getCollectionURL } from '../../lib/getURLs'

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
                                <Typography variant="body1">
                                    Article successfully added to{' '}
                                    {` ${payload.getCollection &&
                                        payload.getCollection.name} Collection`}
                                </Typography>
                            }
                            closeModalAction={() => payload.closeModalAction()}
                            confirmButtonText={'View Collection'}
                            closeButtonText={'Close'}
                            confirmButtonAction={() => {
                                payload.closeModalAction()
                                payload.routeChangeAction(
                                    getCollectionURL({
                                        ...payload.getCollection,
                                    }).href,
                                    getCollectionURL({
                                        ...payload.getCollection,
                                    }).as
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
                switchMap(() =>
                    from(
                        apolloClient.query<
                            getCollectionTitle,
                            getCollectionTitleVariables
                        >({
                            query: getCollectionTitleQuery,
                            variables: {
                                id: String(payload.id),
                            },
                        })
                    ).pipe(
                        mergeMap(({ data: { getCollection } }) =>
                            merge(
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
