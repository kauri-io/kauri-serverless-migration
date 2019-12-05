import { Epic, ofType } from 'redux-observable'
import { IReduxState, IDependencies } from '../../lib/Module'
import { switchMap, mergeMap, catchError, tap } from 'rxjs/operators'
import { path } from 'ramda'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import { of } from 'rxjs/internal/observable/of'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { from } from 'rxjs/internal/observable/from'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { merge } from 'rxjs'
import { getProfileURL } from '../../lib/getURLs'
import {
    submitExternalLink as submitMutation,
    getLink,
    editExternalLink as editMutation,
} from '../../queries/Link'
import {
    submitExternalLink,
    submitExternalLinkVariables,
} from '../../queries/__generated__/submitExternalLink'
import {
    editExternalLink,
    editExternalLinkVariables,
} from '../../queries/__generated__/editExternalLink'
import {
    getExternalLink,
    getExternalLinkVariables,
} from '../../queries/__generated__/getExternalLink'

const SAVE_LINK = 'SAVE_LINK'
const EDIT_LINK = 'EDIT_LINK'
const CHANGE_OWNER_LINK = 'CHANGE_OWNER_LINK'

/////////////////////////////////////////////////
// SUBMIT EXTERNAL LINK

interface ISubmitExternalLinkAction {
    type: string
    payload: ISubmitExternalLinkActionPayload
}

interface ISubmitExternalLinkActionPayload {
    url: string
    title: string
    description?: string | null
    summary?: string | null
    image: string
    authorName?: string | null
    authorSocial?: any | null
    ownerId?: ResourceIdentifierInput | null
    tags?: (string | null)[] | null
}

export const submitExtenalLinkAction = (
    payload: ISubmitExternalLinkActionPayload
): ISubmitExternalLinkAction => ({
    payload,
    type: SAVE_LINK,
})

export const submitExternalLinkEpic: Epic<
    ISubmitExternalLinkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(SAVE_LINK),
        switchMap(
            ({
                payload: {
                    title,
                    description,
                    image,
                    summary,
                    authorName,
                    authorSocial,
                    url,
                    tags,
                    ownerId,
                },
            }) =>
                from(
                    apolloClient.mutate<
                        submitExternalLink,
                        submitExternalLinkVariables
                    >({
                        mutation: submitMutation,
                        variables: {
                            title,
                            description,
                            summary,
                            authorName,
                            authorSocial,
                            attributes: { background_image: image },
                            url,
                            tags,
                            ownerId,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ hash: string }>(
                            path<string>(['submitExternalLink', 'hash'])(
                                data
                            ) || ''
                        )
                    ),
                    mergeMap(res => {
                        const status = res.data.getEvent.status
                        if (status === 'SUCCESS') {
                            return merge(
                                of(
                                    showNotificationAction({
                                        description: `Your link has been succesfully submitted!`,
                                        message: 'Link Created',
                                        notificationType: 'success',
                                    })
                                ),
                                of(
                                    routeChangeAction(
                                        state$.value.app.user
                                            ? getProfileURL(
                                                  state$.value.app.user
                                              ).as
                                            : '/'
                                    )
                                )
                            )
                        } else {
                            return of(
                                showNotificationAction({
                                    description: 'Submission error',
                                    message: (res.data.getEvent.output as any)
                                        .error,
                                    notificationType: 'error',
                                })
                            )
                        }
                    })
                )
        )
    )

/////////////////////////////////////////////////
// EDIT EXTERNAL LINK

interface IEditExternalLinkAction {
    type: string
    payload: IEditExternalLinkActionPayload
}

interface IEditExternalLinkActionPayload {
    id: string
    url: string
    title: string
    description?: string | null
    summary?: string | null
    image: string
    authorName?: string | null
    authorSocial?: any | null
    ownerId?: ResourceIdentifierInput | null
    tags?: (string | null)[] | null
}

export const editExtenalLinkAction = (
    payload: IEditExternalLinkActionPayload
): IEditExternalLinkAction => ({
    payload,
    type: EDIT_LINK,
})

export const editExternalLinkEpic: Epic<
    IEditExternalLinkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_LINK),
        switchMap(
            ({
                payload: {
                    id,
                    title,
                    description,
                    image,
                    summary,
                    authorName,
                    authorSocial,
                    url,
                    tags,
                    ownerId,
                },
            }) =>
                from(
                    apolloClient.mutate<
                        editExternalLink,
                        editExternalLinkVariables
                    >({
                        mutation: editMutation,
                        variables: {
                            id,
                            title,
                            description,
                            summary,
                            authorName,
                            authorSocial,
                            attributes: { background_image: image },
                            url,
                            tags,
                            ownerId,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ hash: string }>(
                            path<string>(['editExternalLink', 'hash'])(data) ||
                                ''
                        )
                    ),
                    mergeMap(res => {
                        const status = res.data.getEvent.status
                        if (status === 'SUCCESS') {
                            return merge(
                                of(
                                    showNotificationAction({
                                        description: `Your link has been succesfully edited!`,
                                        message: 'Link Edited',
                                        notificationType: 'success',
                                    })
                                ),
                                of(
                                    routeChangeAction(
                                        state$.value.app.user
                                            ? getProfileURL(
                                                  state$.value.app.user
                                              ).as
                                            : '/'
                                    )
                                )
                            )
                        } else {
                            return of(
                                showNotificationAction({
                                    description: 'Submission error',
                                    message: (res.data.getEvent.output as any)
                                        .error,
                                    notificationType: 'error',
                                })
                            )
                        }
                    })
                )
        )
    )

/////////////////////////////////////////////////
// CHANGE OWNER EXTERNAL LINK

interface IChangeOwnerExternalLinkAction {
    type: string
    payload: IChangeOwnerExternalLinkActionPayload
}

interface IChangeOwnerExternalLinkActionPayload {
    id: string
    ownerId: ResourceIdentifierInput
}

export const changeOwnerExtenalLinkAction = (
    payload: IChangeOwnerExternalLinkActionPayload
): IChangeOwnerExternalLinkAction => ({
    payload,
    type: CHANGE_OWNER_LINK,
})

export const changeOwnerExtenalLinkEpic: Epic<
    IChangeOwnerExternalLinkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(CHANGE_OWNER_LINK),
        switchMap(({ payload: { id, ownerId } }) =>
            from(
                apolloClient.query<getExternalLink, getExternalLinkVariables>({
                    query: getLink,
                    variables: { id },
                })
            ).pipe(
                switchMap(({ data }) =>
                    from(
                        apolloClient.mutate<
                            editExternalLink,
                            editExternalLinkVariables
                        >({
                            mutation: editMutation,
                            variables: {
                                id: data.getExternalLink.id,
                                url: data.getExternalLink.url.value || '',
                                title:
                                    data.getExternalLink.linkTitle.value || '',
                                description:
                                    data.getExternalLink.linkDescription &&
                                    data.getExternalLink.linkDescription.value,
                                summary:
                                    data.getExternalLink.summary &&
                                    data.getExternalLink.summary.value,
                                attributes: Object.assign(
                                    {},
                                    ...Object.keys(
                                        data.getExternalLink.linkAttributes
                                    ).map(k => ({
                                        [k]:
                                            data.getExternalLink.linkAttributes[
                                                k
                                            ].value,
                                    }))
                                ),
                                authorName:
                                    data.getExternalLink.authorName.value,
                                authorSocial: Object.assign(
                                    {},
                                    ...Object.keys(
                                        data.getExternalLink.authorSocial
                                    ).map(k => ({
                                        [k]:
                                            data.getExternalLink.authorSocial[k]
                                                .value,
                                    }))
                                ),
                                tags: data.getExternalLink.tags,
                                ownerId: ownerId,
                            },
                        })
                    ).pipe(
                        mergeMap(({ data }) =>
                            apolloSubscriber<{ hash: string }>(
                                path<string>(['editExternalLink', 'hash'])(
                                    data
                                ) || ''
                            )
                        ),
                        mergeMap(res => {
                            const status = res.data.getEvent.status
                            if (status === 'SUCCESS') {
                                return merge(
                                    of(
                                        showNotificationAction({
                                            description: `Your link has been succesfully transfered!`,
                                            message: 'Link Transfered',
                                            notificationType: 'success',
                                        })
                                    )
                                )
                            } else {
                                return of(
                                    showNotificationAction({
                                        description: 'Submission error',
                                        message: (res.data.getEvent
                                            .output as any).error,
                                        notificationType: 'error',
                                    })
                                )
                            }
                        }),
                        tap(() => apolloClient.resetStore())
                    )
                )
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
