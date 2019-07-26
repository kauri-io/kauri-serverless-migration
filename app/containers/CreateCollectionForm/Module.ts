import {
    createCollectionMutation,
    editCollectionMutation,
    composeCollectionMutation,
} from '../../queries/Collection'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import analytics from '../../lib/analytics'
import { IDependencies, IReduxState } from '../../lib/Module'
import { ofType, Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { path } from 'ramda'
import { ISection } from '../AddToCollection/SectionsContent'
import { switchMap, mergeMap, tap, catchError, map } from 'rxjs/operators'
import { merge } from 'rxjs'
import { editCollection } from '../../queries/__generated__/editCollection'
import {
    createCollection,
    createCollectionVariables,
} from '../../queries/__generated__/createCollection'
import {
    composeCollection,
    composeCollectionVariables,
} from '../../queries/__generated__/composeCollection'

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

interface IEditCollectionAction {
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
): IEditCollectionAction => ({
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

export const composeCollectionEpic: Epic<
    ComposeCollectionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(COMPOSE_COLLECTION),
        switchMap(({ payload: { id, sections, updating }, callback }) =>
            from(
                apolloClient.mutate<
                    composeCollection,
                    composeCollectionVariables
                >({
                    mutation: composeCollectionMutation,
                    variables: {
                        id,
                        sections,
                    },
                })
            ).pipe(
                mergeMap(({ data }) =>
                    from(
                        apolloSubscriber<{ id: string }>(
                            path<string>(['composeCollection', 'hash'])(data) ||
                                ''
                        )
                    ).pipe(
                        // tap(console.log),
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
                            merge(
                                of(
                                    showNotificationAction({
                                        notificationType: 'success',
                                        message:
                                            typeof updating !== 'undefined'
                                                ? 'Collection updated!'
                                                : 'Collection created!',
                                        description:
                                            'Your collection is now available for viewing!',
                                    })
                                ),
                                of(
                                    routeChangeAction(
                                        `/collection/${id}/collection-${
                                            typeof updating !== 'undefined'
                                                ? 'updated'
                                                : 'created'
                                        }`
                                    )
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
export const createCollectionEpic: Epic<
    ICreateCollectionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
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
                    apolloClient.mutate<
                        createCollection,
                        createCollectionVariables
                    >({
                        mutation: createCollectionMutation,
                        variables: {
                            name,
                            background,
                            description: String(description),
                            tags,
                            owner: {
                                type: String(
                                    destination && destination.type
                                ) as any,
                                id: String(destination && destination.id),
                            },
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ id: string }>(
                            path<string>(['createCollection', 'hash'])(data) ||
                                ''
                        )
                    ),
                    map(({ data: { output: { id } } }) =>
                        composeCollectionAction(
                            { id, sections, tags },
                            callback
                        )
                    )
                    // tap(h => console.log(h))
                )
            }
        )
    )

export const editCollectionEpic: Epic<
    IEditCollectionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_COLLECTION),
        switchMap(
            ({
                payload: { id, name, background, description, sections, tags },
                callback,
            }) => {
                return from(
                    apolloClient.mutate<editCollection, any>({
                        mutation: editCollectionMutation,
                        variables: {
                            id,
                            name,
                            background,
                            description,
                            tags,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ id: string }>(
                            path<string>(['createCollection', 'hash'])(data) ||
                                ''
                        )
                    ),
                    // tap(console.log),
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
