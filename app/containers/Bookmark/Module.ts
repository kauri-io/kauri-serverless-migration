import { of, from } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Epic, ofType } from 'redux-observable'
import {
    bookmark as bookmarkMutation,
    unbookmark as unbookmarkMutation,
    createBookmarkFolder as createBookmarkFolderMutation,
    deleteBookmarkFolder as deleteBookmarkFolderMutation,
    editBookmarkFolder as editBookmarkFolderMutation,
} from '../../queries/User'
import {
    bookmarkVariables,
    bookmark,
} from '../../queries/__generated__/bookmark'
import {
    unbookmarkVariables,
    unbookmark,
} from '../../queries/__generated__/unbookmark'
import {
    createBookmarkFolderVariables,
    createBookmarkFolder,
} from '../../queries/__generated__/createBookmarkFolder'
import {
    deleteBookmarkFolderVariables,
    deleteBookmarkFolder,
} from '../../queries/__generated__/deleteBookmarkFolder'
import {
    editBookmarkFolderVariables,
    editBookmarkFolder,
} from '../../queries/__generated__/editBookmarkFolder'
import analytics from '../../lib/analytics'
import { switchMap, mergeMap, tap, catchError } from 'rxjs/operators'
import { path } from 'ramda'

////////////////////////////////////////////////////////////////////////////

export const ROOT_FOLDER = '_root_'

export const labelRootFolder = (folder: string) => {
    if (folder === ROOT_FOLDER) {
        // default name for root folder
        return 'Bookmarks'
    }
    return folder
}

////////////////////////////////////////////////////////////////////////////

const BOOKMARK_ACTION = 'BOOKMARK'

export interface IBookmarkAction {
    type: string
    payload: bookmarkVariables
    callback?: any
}

export const bookmarkAction = (
    payload: bookmarkVariables
): IBookmarkAction => ({
    payload,
    type: BOOKMARK_ACTION,
})

export const bookmarkEpic: Epic<
    IBookmarkAction | IUnbookmarkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(BOOKMARK_ACTION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<bookmark, bookmarkVariables>({
                    mutation: bookmarkMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['bookmark', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('Bookmark Content', {
                        category: 'article_actions',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description: 'Added to your list',
                            message: `Bookmark`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Bookmark error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////////////////////////////

const UNBOOKMARK_ACTION = 'UNBOOKMARK'

export interface IUnbookmarkAction {
    type: string
    payload: unbookmarkVariables
    callback?: any
}
export const unbookmarkAction = (
    payload: unbookmarkVariables
): IUnbookmarkAction => ({
    payload,
    type: UNBOOKMARK_ACTION,
})

export const unbookmarkEpic: Epic<
    IUnbookmarkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(UNBOOKMARK_ACTION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<unbookmark, unbookmarkVariables>({
                    mutation: unbookmarkMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['unbookmark', 'hash'])(data) || ''
                    )
                ),
                tap(() =>
                    analytics.track('Unbookmark Content', {
                        category: 'article_actions',
                    })
                ),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description: 'Removed from your list',
                            message: `Bookmark`,
                            notificationType: 'success',
                        })
                    )
                ),
                tap(() => apolloClient.resetStore()),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Bookmark error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////////////////////////////

const CREATE_FOLDER_ACTION = 'CREATE_FOLDER'

export interface ICreateBookmakFolderAction {
    type: string
    payload: createBookmarkFolderVariables
    callback?: any
}
export const createBookmarkFolderAction = (
    payload: createBookmarkFolderVariables
): ICreateBookmakFolderAction => ({
    payload,
    type: CREATE_FOLDER_ACTION,
})

export const createBookmarkFolderEpic: Epic<
    ICreateBookmakFolderAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(CREATE_FOLDER_ACTION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    createBookmarkFolder,
                    createBookmarkFolderVariables
                >({
                    mutation: createBookmarkFolderMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['createBookmarkFolder', 'hash'])(data) ||
                            ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description: 'Folder created',
                            message: `Bookmark`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Bookmark error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////////////////////////////

const DELETE_FOLDER_ACTION = 'DELETE_FOLDER'

export interface IDeleteBookmakFolderAction {
    type: string
    payload: deleteBookmarkFolderVariables
    callback?: any
}
export const deleteBookmarkFolderAction = (
    payload: deleteBookmarkFolderVariables
): IDeleteBookmakFolderAction => ({
    payload,
    type: DELETE_FOLDER_ACTION,
})

export const deleteBookmarkFolderEpic: Epic<
    IDeleteBookmakFolderAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(DELETE_FOLDER_ACTION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    deleteBookmarkFolder,
                    deleteBookmarkFolderVariables
                >({
                    mutation: deleteBookmarkFolderMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['deleteBookmarkFolder', 'hash'])(data) ||
                            ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description: 'Folder deleted',
                            message: `Bookmark`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Bookmark error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////////////////////////////

const EDIT_FOLDER_ACTION = 'EDIT_FOLDER'

export interface IEditBookmakFolderAction {
    type: string
    payload: editBookmarkFolderVariables
    callback?: any
}
export const editBookmarkFolderAction = (
    payload: editBookmarkFolderVariables
): IEditBookmakFolderAction => ({
    payload,
    type: EDIT_FOLDER_ACTION,
})

export const editBookmarkFolderEpic: Epic<
    IEditBookmakFolderAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_FOLDER_ACTION),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    editBookmarkFolder,
                    editBookmarkFolderVariables
                >({
                    mutation: editBookmarkFolderMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(
                        path<string>(['editBookmarkFolder', 'hash'])(data) || ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description: 'Folder edited',
                            message: `Bookmark`,
                            notificationType: 'success',
                        })
                    )
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Bookmark error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

////////////////////////////////////////////////////////////////////////////
