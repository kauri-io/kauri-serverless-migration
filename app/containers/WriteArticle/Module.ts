import { Epic, ofType } from 'redux-observable'
import {
    submitArticleVersionMutation,
    editArticle,
    getArticleQuery,
    submitNewArticleMutation,
} from '../../queries/Article'
import { IDependencies, IReduxState, ICommunity } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { publishArticleAction, IOwnerPayload } from './PublishArticleModule'
import { IOption } from '../../containers/PublishingSelector'
import analytics from '../../lib/analytics'
import { of, from, merge } from 'rxjs'
import { path } from 'ramda'
import {
    submitNewArticleVariables,
    submitNewArticle,
} from '../../queries/__generated__/submitNewArticle'
import { tap, catchError, mergeMap, switchMap } from 'rxjs/operators'
import {
    submitArticleVersion,
    submitArticleVersionVariables,
} from '../../queries/__generated__/submitArticleVersion'
import {
    getArticle,
    getArticleVariables,
} from '../../queries/__generated__/getArticle'
import {
    editArticleVersionVariables,
    editArticleVersion,
} from '../../queries/__generated__/editArticleVersion'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getArticleURL } from '../../lib/getURLs'
// import { clearCachedItem } from '../../lib/editor-cache'

interface IGetArticleResult {
    getArticle: {
        id: string
        version: number
        contentHash: string
        dateCreated: string
        authorId: string
        owner: IOwnerPayload
    }
}

export interface IAttributesPayload {
    version?: string
    background?: string
}

export interface ISubmitArticlePayload {
    id?: string
    subject: string
    tags: string[]
    text: string
    attributes?: IAttributesPayload
    selfPublish?: boolean
    destination?: IOption
}

export interface ISubmitArticleVersionPayload {
    id: string
    subject: string
    tags: string[]
    text: string
    attributes?: IAttributesPayload
    owner?: any
    selfPublish?: boolean
    updateComment?: string
}

export interface IDraftArticleActionPayload {
    text: string
    subject: string
    tags: string[]
    attributes?: IAttributesPayload
}

const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE'

const EDIT_ARTICLE = 'EDIT_ARTICLE'

const SUBMIT_ARTICLE_VERSION = 'SUBMIT_ARTICLE_VERSION'

const DRAFT_ARTICLE = 'DRAFT_ARTICLE'

export interface IEditArticlePayload {
    id: string
    version: number
    text: string
    subject: string
    tags: string[]
    attributes?: IAttributesPayload
    selfPublish?: boolean
}

export interface ISubmitArticleAction {
    type: string
    payload: ISubmitArticlePayload
}

export interface ISubmitArticleVersionAction {
    type: string
    payload: ISubmitArticleVersionPayload
}

export interface IEditArticleAction {
    type: string
    payload: IEditArticlePayload
}

export interface IDraftArticleAction {
    type: string
    payload: IDraftArticleActionPayload
}

export const submitArticleAction = (
    payload: ISubmitArticlePayload
): ISubmitArticleAction => ({
    payload,
    type: SUBMIT_ARTICLE,
})

export const editArticleAction = (
    payload: IEditArticlePayload
): IEditArticleAction => ({
    payload,
    type: EDIT_ARTICLE,
})

export const submitArticleVersionAction = (
    payload: ISubmitArticleVersionPayload
): ISubmitArticleVersionAction => ({
    payload,
    type: SUBMIT_ARTICLE_VERSION,
})

export const draftArticleAction = (
    payload: IDraftArticleActionPayload
): IDraftArticleAction => ({
    payload,
    type: DRAFT_ARTICLE,
})

export const submitArticleEpic: Epic<
    ISubmitArticleAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(SUBMIT_ARTICLE),
        switchMap(
            ({
                payload: {
                    text,
                    subject,
                    tags,
                    attributes,
                    selfPublish,
                    destination,
                },
            }) =>
                from(
                    apolloClient.mutate<
                        submitNewArticle,
                        submitNewArticleVariables
                    >({
                        mutation: submitNewArticleMutation,
                        variables: {
                            content: text,
                            title: subject,
                            tags,
                            attributes,
                        },
                    })
                ).pipe(
                    tap(console.log),
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ id: string; version: number }>(
                            path<string>(['submitNewArticle', 'hash'])(data) ||
                                ''
                        )
                    ),
                    tap(console.log),
                    mergeMap(({ data: { getEvent: { output } } }) =>
                        apolloClient.query<getArticle, getArticleVariables>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    ),
                    // tap(h => console.log(h)),
                    mergeMap(({ data: { getArticle } }) => {
                        if (getArticle) {
                            return typeof selfPublish !== 'undefined'
                                ? of(
                                      publishArticleAction({
                                          contentHash: String(
                                              getArticle.contentHash
                                          ),
                                          contributor: String(
                                              getArticle.author &&
                                                  getArticle.author.id
                                          ),
                                          dateCreated: getArticle.dateCreated,
                                          id: String(getArticle.id),
                                          owner:
                                              destination &&
                                              destination.__typename ===
                                                  'CommunityDTO'
                                                  ? {
                                                        type: 'COMMUNITY',
                                                        id: destination.id,
                                                    }
                                                  : (getArticle as any).owner,
                                          version: Number(getArticle.version),
                                      })
                                  )
                                : of(
                                      showNotificationAction({
                                          description:
                                              'Your personal article has now been published!',
                                          message: 'Article published',
                                          notificationType: 'success',
                                      })
                                  )
                        }
                        throw new Error('GET ARITCLE WAS EMPTY')
                    }),
                    catchError((err: string) => {
                        console.error(err)
                        return of(
                            showNotificationAction({
                                description: 'Please try again!',
                                message: 'Submission error',
                                notificationType: 'error',
                            })
                        )
                    })
                )
        )
    )

export const submitArticleVersionEpic: Epic<
    any,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }: IDependencies) =>
    action$.pipe(
        ofType(SUBMIT_ARTICLE_VERSION),
        switchMap(
            ({
                payload: {
                    text,
                    subject,
                    tags,
                    id,
                    attributes,
                    selfPublish,
                    updateComment,
                },
            }) =>
                from(
                    apolloClient.mutate<
                        submitArticleVersion,
                        submitArticleVersionVariables
                    >({
                        mutation: submitArticleVersionMutation,
                        variables: {
                            attributes,
                            id,
                            subject,
                            tags,
                            text,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ id: string; version: number }>(
                            path<string>(['submitArticleVersion', 'hash'])(
                                data
                            ) || ''
                        )
                    ),
                    tap(console.log),
                    mergeMap(({ data: { getEvent: { output } } }) =>
                        apolloClient.query<IGetArticleResult>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    ),
                    // tap(h => console.log(h)),
                    mergeMap(({ data: { getArticle } }) =>
                        typeof selfPublish !== 'undefined'
                            ? of(
                                  publishArticleAction({
                                      contentHash: getArticle.contentHash,
                                      contributor: getArticle.authorId,
                                      dateCreated: getArticle.dateCreated,
                                      id: getArticle.id,
                                      owner: getArticle.owner,
                                      updateComment,
                                      version: getArticle.version,
                                  })
                              )
                            : of(
                                  showNotificationAction({
                                      description:
                                          typeof selfPublish === 'undefined'
                                              ? 'Your article has now been drafted to be updated or published in the future'
                                              : getArticle.owner.id ===
                                                    getArticle.authorId ||
                                                (
                                                    path<ICommunity[]>([
                                                        'value',
                                                        'app',
                                                        'user',
                                                        'communities',
                                                    ])(state$) || []
                                                )
                                                    .map(
                                                        ({ community }) =>
                                                            community.id
                                                    )
                                                    .includes(
                                                        getArticle.owner.id
                                                    )
                                              ? 'Your personal article has now been published!'
                                              : 'Waiting for it to be reviewed!',
                                      message: `Article ${
                                          typeof selfPublish === 'undefined'
                                              ? 'drafted'
                                              : getArticle.owner.id ===
                                                    getArticle.authorId ||
                                                (
                                                    path<ICommunity[]>([
                                                        'value',
                                                        'app',
                                                        'user',
                                                        'communities',
                                                    ])(state$) || []
                                                )
                                                    .map(
                                                        ({ community }) =>
                                                            community.id
                                                    )
                                                    .includes(
                                                        getArticle.owner.id
                                                    )
                                              ? 'published'
                                              : 'proposed'
                                      }`,
                                      notificationType: 'success',
                                  })
                              )
                    ),
                    catchError(err => {
                        console.error(err)
                        return of(
                            showNotificationAction({
                                description: 'Please try again!',
                                message: 'Submission error',
                                notificationType: 'error',
                            })
                        )
                    })
                )
        )
    )

export const editArticleEpic: Epic<
    IEditArticleAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_ARTICLE),
        switchMap(
            ({
                payload: {
                    id,
                    version,
                    text,
                    subject,
                    tags,
                    attributes,
                    selfPublish,
                },
            }) =>
                from(
                    apolloClient.mutate<
                        editArticleVersion,
                        editArticleVersionVariables
                    >({
                        mutation: editArticle,
                        variables: {
                            id,
                            version,
                            text,
                            subject,
                            tags,
                            attributes,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber(
                            path<string>(['editArticleVersion', 'hash'])(
                                data
                            ) || ''
                        )
                    ),
                    tap(console.log),
                    mergeMap(({ data: { getEvent: { output } } }) =>
                        apolloClient.query<IGetArticleResult>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    ),

                    mergeMap<any, any>(({ data: { getArticle } }) =>
                        typeof selfPublish !== 'undefined'
                            ? of(
                                  publishArticleAction({
                                      contentHash: getArticle.contentHash,
                                      contributor: getArticle.authorId,
                                      dateCreated: getArticle.dateCreated,
                                      id: getArticle.id,
                                      owner: getArticle.owner,
                                      version: getArticle.version,
                                  })
                              )
                            : of(
                                  showNotificationAction({
                                      description:
                                          'The article version has been updated!',
                                      message: 'Article updated',
                                      notificationType: 'info',
                                  })
                              )
                    )
                )
        )
    )

export const draftArticleEpic: Epic<any, any, {}, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$.pipe(
        ofType(DRAFT_ARTICLE),
        switchMap(({ payload: { text, subject, tags, attributes } }) =>
            from(
                apolloClient.mutate<
                    submitNewArticle,
                    submitNewArticleVariables
                >({
                    mutation: submitNewArticleMutation,
                    variables: {
                        content: text,
                        title: subject,
                        tags,
                        attributes,
                    },
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ id: string; version: number }>(
                        (data &&
                            data.submitNewArticle &&
                            data.submitNewArticle.hash) ||
                            ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                tap(() => {
                    analytics.track('Create Draft', {
                        category: 'article_actions',
                    })
                }),
                mergeMap(({ data: { getEvent: { output } } }) =>
                    merge(
                        of(
                            showNotificationAction({
                                description:
                                    'The draft has just been saved. You can go back and submit it whenever you are ready.',
                                message: 'Draft Created',
                                notificationType: 'info',
                            })
                        ),
                        of(
                            routeChangeAction(
                                getArticleURL(
                                    {
                                        title: subject,
                                        id: output.id,
                                        version: output.version,
                                    },
                                    'update'
                                ).as
                            )
                        )
                    )
                )
            )
        )
    )
