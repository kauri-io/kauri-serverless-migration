import { Epic, ActionsObservable } from 'redux-observable'
import {
    submitArticleVersion,
    editArticle,
    getArticle as getArticleQuery,
    submitNewArticle,
} from '../../queries/Article'
import { IDependencies, IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { publishArticleAction, IOwnerPayload } from './PublishArticleModule'
import { IOption } from '../../containers/PublishingSelector'
import analytics from '../../lib/analytics'
import { merge, of, from } from 'rxjs'

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

export const submitArticleEpic: Epic<any, {}, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$
        .ofType(SUBMIT_ARTICLE)
        .switchMap(
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
                    apolloClient.mutate({
                        mutation: submitNewArticle,
                        variables: {
                            content: text,
                            title: subject,
                            tags,
                            attributes,
                        },
                    })
                )
                    .do(h => console.log('submitNewArticle', h))
                    .flatMap(
                        ({
                            data: {
                                submitNewArticle: { hash },
                            },
                        }: {
                            data: { submitNewArticle: { hash: string } }
                        }) =>
                            apolloSubscriber<{ id: string; version: number }>(
                                hash
                            )
                    )
                    .do(h => console.log(h))
                    .mergeMap(({ data: { output } }) =>
                        apolloClient.query<IGetArticleResult>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    )
                    .do(h => console.log(h))
                    .mergeMap<any, any>(({ data: { getArticle } }) =>
                        typeof selfPublish !== 'undefined'
                            ? of(
                                  publishArticleAction({
                                      contentHash: getArticle.contentHash,
                                      contributor: getArticle.authorId,
                                      dateCreated: getArticle.dateCreated,
                                      id: getArticle.id,
                                      owner:
                                          destination &&
                                          destination.__typename ===
                                              'CommunityDTO'
                                              ? {
                                                    type: 'COMMUNITY',
                                                    id: destination.id,
                                                }
                                              : getArticle.owner,
                                      version: getArticle.version,
                                  })
                              )
                            : merge(
                                  of(
                                      routeChangeAction(
                                          `/article/${getArticle.id}/v${getArticle.version}/article-published`
                                      )
                                  ),
                                  of(
                                      showNotificationAction({
                                          description:
                                              'Your personal article has now been published!',
                                          message: 'Article published',
                                          notificationType: 'success',
                                      })
                                  )
                              )
                    )
                    .catch((err: string) => {
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

export const submitArticleVersionEpic: Epic<any, IReduxState, IDependencies> = (
    action$,
    { getState },
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$
        .ofType(SUBMIT_ARTICLE_VERSION)
        .switchMap(
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
                    apolloClient.mutate({
                        mutation: submitArticleVersion,
                        variables: {
                            attributes,
                            id,
                            subject,
                            tags,
                            text,
                        },
                    })
                )
                    .do(h => console.log(h))
                    .flatMap(
                        ({
                            data: {
                                submitArticleVersion: { hash },
                            },
                        }: {
                            data: { submitArticleVersion: { hash: string } }
                        }) =>
                            apolloSubscriber<{ id: string; version: number }>(
                                hash
                            )
                    )
                    .do(h => console.log(h))
                    .mergeMap(({ data: { output } }) =>
                        apolloClient.query<IGetArticleResult>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    )
                    .do(h => console.log(h))
                    .mergeMap<any, any>(({ data: { getArticle } }) =>
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
                            : merge(
                                  of(
                                      routeChangeAction(
                                          `/article/${getArticle.id}/v${
                                              getArticle.version
                                          }/article-${
                                              typeof selfPublish === 'undefined'
                                                  ? 'drafted'
                                                  : getArticle.owner.id ===
                                                        getArticle.authorId ||
                                                    getState()
                                                        .app.user.communities.map(
                                                            ({ community }) =>
                                                                community.id
                                                        )
                                                        .includes(
                                                            getArticle.owner.id
                                                        )
                                                  ? 'published'
                                                  : 'proposed'
                                          }`
                                      )
                                  ),
                                  of(
                                      showNotificationAction({
                                          description:
                                              typeof selfPublish === 'undefined'
                                                  ? 'Your article has now been drafted to be updated or published in the future'
                                                  : getArticle.owner.id ===
                                                        getArticle.authorId ||
                                                    getState()
                                                        .app.user.communities.map(
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
                                                    getState()
                                                        .app.user.communities.map(
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
                              )
                    )
                    .catch(err => {
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

export const editArticleEpic: Epic<any, {}, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$
        .ofType(EDIT_ARTICLE)
        .switchMap(
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
            }: IEditArticleAction) =>
                from(
                    apolloClient.mutate({
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
                )
                    .flatMap(
                        ({
                            data: {
                                editArticleVersion: { hash },
                            },
                        }: {
                            data: { editArticleVersion: { hash: string } }
                        }) =>
                            apolloSubscriber<{ id: string; version: number }>(
                                hash
                            )
                    )
                    .do(h => console.log(h))
                    .mergeMap(({ data: { output } }) =>
                        apolloClient.query<IGetArticleResult>({
                            fetchPolicy: 'network-only',
                            query: getArticleQuery,
                            variables: {
                                id: output.id,
                                version: output.version,
                            },
                        })
                    )
                    .mergeMap<any, any>(({ data: { getArticle } }) =>
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
                            : merge(
                                  of(
                                      routeChangeAction(
                                          `/article/${id}/v${version}/article-updated`
                                      )
                                  ),
                                  of(
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

export const draftArticleEpic = (
    action$: ActionsObservable<IDraftArticleAction>,
    _:IReduxState,
    { apolloClient, apolloSubscriber }: IDependencies
) =>
    action$
        .ofType(DRAFT_ARTICLE)
        .switchMap(
            ({
                payload: { text, subject, tags, attributes },
            }) =>
                from(
                    apolloClient.mutate({
                        mutation: submitNewArticle,
                        variables: {
                            content: text,
                            title: subject,
                            tags,
                            attributes,
                        },
                    })
                )
                    .flatMap(
                        ({
                            data: {
                                submitNewArticle: { hash },
                            },
                        }: {
                            data: { submitNewArticle: { hash: string } }
                        }) =>
                            apolloSubscriber<{ id: string; version: number }>(
                                hash
                            )
                    )
                    .do(() => apolloClient.resetStore())
                    .do(() => {
                        analytics.track('Create Draft', {
                            category: 'article_actions',
                        })
                    })
                    .mergeMap<any, any>(
                        ({
                            data: {
                                output: { id, version },
                            },
                        }) =>
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
                                        `/article/${id}/v${version}/article-drafted`
                                    )
                                )
                            )
                    )
        )
