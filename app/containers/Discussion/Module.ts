import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import analytics from '../../lib/analytics'
import { IDependencies, IReduxState } from '../../lib/Module'
import { ofType, Epic } from 'redux-observable'
import { from, of, merge } from 'rxjs'
import { path } from 'ramda'
import { switchMap, mergeMap, tap, catchError } from 'rxjs/operators'
import {
    createDiscussion as createDiscussionMutation,
    editDiscussion as editDiscussionMutation,
    closeDiscussion as closeDiscussionMutation,
    reopenDiscussion as reopenDiscussionMutation,
    deleteDiscussion as deleteDiscussionMutation,
} from '../../queries/Discussion'
import {
    createDiscussion,
    createDiscussionVariables,
} from '../../queries/__generated__/createDiscussion'
import {
    editDiscussionVariables,
    editDiscussion,
} from '../../queries/__generated__/editDiscussion'
import {
    closeDiscussion,
    closeDiscussionVariables,
} from '../../queries/__generated__/closeDiscussion'
import {
    reopenDiscussionVariables,
    reopenDiscussion,
} from '../../queries/__generated__/reopenDiscussion'
import {
    deleteDiscussionVariables,
    deleteDiscussion,
} from '../../queries/__generated__/deleteDiscussion'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getDiscussionURL } from '../../lib/getURLs'

/////////////////////////////////////////////////////////////
// CREATE DISCUSSION

export interface ICreateDiscussionAction {
    type: string
    payload: createDiscussionVariables
}

interface ICreateDiscussionActionCommandOutput {
    id: string
    error: string | undefined
}

const CREATE_DISCUSSION: string = 'CREATE_DISCUSSION'

export const createDiscussionAction = (
    payload: createDiscussionVariables
): ICreateDiscussionAction => ({
    type: CREATE_DISCUSSION,
    payload,
})

export const createDiscussionEpic: Epic<
    ICreateDiscussionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(CREATE_DISCUSSION),
        switchMap(({ payload }) => {
            return from(
                apolloClient.mutate<
                    createDiscussion,
                    createDiscussionVariables
                >({
                    mutation: createDiscussionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<ICreateDiscussionActionCommandOutput>(
                        path<string>(['createDiscussion', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('discussion', {
                        category: 'create_discussion_action',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(({ data: { getEvent: { output: { id } } } }) =>
                    merge(
                        of(
                            showNotificationAction({
                                description:
                                    'Your discussion has been successfully published',
                                message: `Discussion`,
                                notificationType: 'success',
                            })
                        ),
                        of(
                            routeChangeAction(
                                getDiscussionURL({
                                    id,
                                    title: payload.title,
                                }).as
                            )
                        )
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Discussion error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        })
    )

/////////////////////////////////////////////////////////////
// EDIT DISCUSSION

export interface IEditDiscussionAction {
    type: string
    payload: editDiscussionVariables
}

const EDIT_DISCUSSION: string = 'EDIT_DISCUSSION'

export const editDiscussionAction = (
    payload: editDiscussionVariables
): IEditDiscussionAction => ({
    type: EDIT_DISCUSSION,
    payload,
})

export const editDiscussionEpic: Epic<
    IEditDiscussionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_DISCUSSION),
        switchMap(({ payload }) => {
            return from(
                apolloClient.mutate<editDiscussion, editDiscussionVariables>({
                    mutation: editDiscussionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['editDiscussion', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('discussion', {
                        category: 'edit_discussion_action',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                'Your discussion has been successfully edited',
                            message: `Discussion`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Discussion error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        })
    )

/////////////////////////////////////////////////////////////
// CLOSE DISCUSSION

export interface ICloseDiscussionAction {
    type: string
    payload: closeDiscussionVariables
}

const CLOSE_DISCUSSION: string = 'CLOSE_DISCUSSION'

export const closeDiscussionAction = (
    payload: closeDiscussionVariables
): ICloseDiscussionAction => ({
    type: CLOSE_DISCUSSION,
    payload,
})

export const closeDiscussionEpic: Epic<
    ICloseDiscussionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(CLOSE_DISCUSSION),
        switchMap(({ payload }) => {
            return from(
                apolloClient.mutate<closeDiscussion, closeDiscussionVariables>({
                    mutation: closeDiscussionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['closeDiscussion', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('discussion', {
                        category: 'close_discussion_action',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                'Your discussion has been successfully closed',
                            message: `Discussion`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Discussion error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        })
    )

/////////////////////////////////////////////////////////////
// REOPEN DISCUSSION

export interface IReopenDiscussionAction {
    type: string
    payload: reopenDiscussionVariables
}

const REOPEN_DISCUSSION: string = 'REOPEN_DISCUSSION'

export const reopenDiscussionAction = (
    payload: reopenDiscussionVariables
): IReopenDiscussionAction => ({
    type: REOPEN_DISCUSSION,
    payload,
})

export const reopenDiscussionEpic: Epic<
    IReopenDiscussionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(REOPEN_DISCUSSION),
        switchMap(({ payload }) => {
            return from(
                apolloClient.mutate<
                    reopenDiscussion,
                    reopenDiscussionVariables
                >({
                    mutation: reopenDiscussionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['reopenDiscussion', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('discussion', {
                        category: 'reopen_discussion_action',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                'Your discussion has been successfully reopened',
                            message: `Discussion`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Discussion error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        })
    )

/////////////////////////////////////////////////////////////
// DELETE DISCUSSION

export interface IDeleteDiscussionAction {
    type: string
    payload: deleteDiscussionVariables
}

const DELETE_DISCUSSION: string = 'DELETE_DISCUSSION'

export const deleteDiscussionAction = (
    payload: deleteDiscussionVariables
): IDeleteDiscussionAction => ({
    type: DELETE_DISCUSSION,
    payload,
})

export const deleteDiscussionEpic: Epic<
    IDeleteDiscussionAction,
    any,
    IReduxState,
    IDependencies
> = (action$, {}, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(DELETE_DISCUSSION),
        switchMap(({ payload }) => {
            return from(
                apolloClient.mutate<
                    deleteDiscussion,
                    deleteDiscussionVariables
                >({
                    mutation: deleteDiscussionMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['deleteDiscussion', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('discussion', {
                        category: 'delete_discussion_action',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                'Your discussion has been successfully deleted',
                            message: `Discussion`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Discussion error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        })
    )
