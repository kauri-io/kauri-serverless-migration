import {
    createCollection,
    editCollection,
    composeCollection,
} from '../../queries/Collection'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import analytics from '../../lib/analytics'

import { IDependencies } from '../../lib/Module'
import { ActionsObservable, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { ISection } from '../AddToCollection/SectionsContent'
import { switchMap, mergeMap, tap, catchError, map } from 'rxjs/operators'

export interface ICreateCollectionPayload {
    name: string
    background?: string
    description?: string
    sections: Array<ISection>
    tags?: any
    destination?: {
        id: string
        type: string
    }
}

export interface IComposeCollectionPayload {
    id: string
    sections: Array<ISection>
    updating?: boolean
    tags?: any
}

interface ICreateCollectionAction {
    type: string
    payload: ICreateCollectionPayload
    callback: any
}

interface EditCollectionAction {
    type: string
    payload: ICreateCollectionPayload & { id: string }
    callback: any
}

interface ComposeCollectionAction {
    type: string
    payload: IComposeCollectionPayload
    callback: any
}

const CREATE_COLLECTION: string = 'CREATE_COLLECTION'

const EDIT_COLLECTION: string = 'EDIT_COLLECTION'

const COMPOSE_COLLECTION: string = 'COMPOSE_COLLECTION'

export const createCollectionAction = (
    payload: ICreateCollectionPayload,
    callback: any
): ICreateCollectionAction => ({
    type: CREATE_COLLECTION,
    payload,
    callback,
})

export const editCollectionAction = (
    payload: ICreateCollectionPayload & { id: string },
    callback: any
): EditCollectionAction => ({
    type: EDIT_COLLECTION,
    payload,
    callback,
})

export const composeCollectionAction = (
    payload: IComposeCollectionPayload,
    callback: any
): ComposeCollectionAction => ({
    type: COMPOSE_COLLECTION,
    payload,
    callback,
})

export const composeCollectionEpic = (
    action$: ActionsObservable<ComposeCollectionAction>,
    { getState, dispatch },
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(COMPOSE_COLLECTION),
        switchMap(
            ({
                payload: { id, sections, updating },
                callback,
            }: ComposeCollectionAction) =>
                from(
                    apolloClient.mutate({
                        mutation: composeCollection,
                        variables: {
                            id,
                            sections,
                        },
                    })
                ).pipe(
                    mergeMap(({ data: { composeCollection: { hash } } }) =>
                        from(apolloSubscriber(hash)).pipe(
                            tap(h => console.log(h)),
                            tap(() => {
                                analytics.track(
                                    updating
                                        ? 'Update Collection'
                                        : 'Create Collection',
                                    {
                                        category: 'collection_actions',
                                        sections: sections.length,
                                        resources: sections.reduce(
                                            (all, item) =>
                                                (all += item.resources.length),
                                            0
                                        ),
                                    }
                                )
                            }),
                            mergeMap(() =>
                                of(
                                    showNotificationAction({
                                        notificationType: 'success',
                                        message:
                                            typeof updating !== 'undefined'
                                                ? 'Collection updated!'
                                                : 'Collection created!',
                                        description:
                                            'Your collection is now available for viewing!',
                                    }),
                                    routeChangeAction(
                                        `/collection/${id}/collection-${
                                            typeof updating !== 'undefined'
                                                ? 'updated'
                                                : 'created'
                                        }`
                                    )
                                )
                            ),
                            tap(() => callback && callback()),
                            tap(() => apolloClient.resetStore()),
                            catchError(err => {
                                console.error(err)
                                return of(
                                    showNotificationAction({
                                        notificationType: 'error',
                                        message: 'Submission error',
                                        description: 'Please try again!',
                                    })
                                )
                            })
                        )
                    )
                )
        )
    )
export const createCollectionEpic = (
    action$: ActionsObservable<ICreateCollectionAction>,
    { getState, dispatch }: any,
    {
        apolloClient,
        smartContracts,
        web3,
        apolloSubscriber,
        web3PersonalSign,
        getGasPrice,
    }: IDependencies
) =>
    action$.pipe(
        ofType(CREATE_COLLECTION),
        switchMap(
            ({
                payload: {
                    name,
                    background,
                    description,
                    sections,
                    tags,
                    destination,
                },
                callback,
            }) => {
                return from(
                    apolloClient.mutate({
                        mutation: createCollection,
                        variables: {
                            name,
                            background,
                            description,
                            tags,
                            owner: {
                                type: destination.type,
                                id: destination.id,
                            },
                        },
                    })
                ).pipe(
                    mergeMap(({ data: { createCollection: { hash } } }) =>
                        apolloSubscriber(hash)
                    ),
                    tap(h => console.log(h)),
                    map(({ data: { output: { id } } }) =>
                        composeCollectionAction(
                            { id, sections, tags },
                            callback
                        )
                    )
                )
            }
        )
    )

export const editCollectionEpic = (
    action$: ActionsObservable<EditCollectionAction>,
    {},
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(EDIT_COLLECTION),
        switchMap(
            ({
                payload: { id, name, background, description, sections, tags },
                callback,
            }) => {
                return from(
                    apolloClient.mutate({
                        mutation: editCollection,
                        variables: {
                            id,
                            name,
                            background,
                            description,
                            tags,
                        },
                    })
                ).pipe(
                    mergeMap(({ data: { createCollection: { hash } } }) =>
                        apolloSubscriber(hash)
                    ),
                    tap(h => console.log(h)),
                    map(({ data: { output: { id } } }) =>
                        composeCollectionAction(
                            { id, sections, updating: true },
                            callback
                        )
                    )
                )
            }
        )
    )