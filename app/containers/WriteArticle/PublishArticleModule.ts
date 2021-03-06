import { Epic, ofType } from 'redux-observable'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import analytics from '../../lib/analytics'
import { of, from, merge } from 'rxjs'
import { switchMap, mergeMap, tap } from 'rxjs/operators'
import { ICommunity } from '../PublicProfile/Manage/MyCommunities'
import { publishArticleMutation } from '../../queries/Article'
import {
    publishArticle,
    publishArticleVariables,
} from '../../queries/__generated__/publishArticle'
import { path } from 'ramda'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getProfileURL, IProfileLinkProps } from '../../lib/getURLs'

interface IAction {
    type: string
    payload?: {}
}

export interface IOwnerPayload {
    type: string
    id: string
}

export interface IPublishArticlePayload {
    id: string
    version: number
    contentHash: string
    dateCreated: string
    contributor: string
    owner: IOwnerPayload | null
    updateComment?: string
}

export interface IPublishArticleAction extends IAction {
    type: 'PUBLISH_ARTICLE'
    payload: IPublishArticlePayload
}

const PUBLISH_ARTICLE = 'PUBLISH_ARTICLE'

export const publishArticleAction = (
    payload: IPublishArticlePayload
): IPublishArticleAction => ({
    payload,
    type: PUBLISH_ARTICLE,
})

interface IPublishArticleCommandOutput {
    id: string
    version: number
}

export const publishArticleEpic: Epic<any, any, IReduxState, IDependencies> = (
    action$,
    state$,
    { apolloClient, apolloSubscriber, personalSign }
) =>
    action$.pipe(
        ofType(PUBLISH_ARTICLE),
        switchMap(
            ({
                payload: {
                    id,
                    version,
                    contentHash,
                    contributor,
                    dateCreated,
                    owner,
                    updateComment,
                },
            }) => {
                const signatureToSign = generatePublishArticleHash(
                    id,
                    version,
                    contentHash,
                    contributor,
                    dateCreated
                )

                const articleOwner = owner
                    ? {
                          id: owner.id,
                          type:
                              owner.type === 'COMMUNITY' ? 'COMMUNITY' : 'USER',
                      }
                    : null

                const userCommunities =
                    path<ICommunity[]>(['value', 'app', 'user', 'communities'])(
                        state$
                    ) || []

                const canPublish =
                    !articleOwner ||
                    (articleOwner && articleOwner.id === contributor) ||
                    (Array.isArray(userCommunities) &&
                        userCommunities.find(
                            community =>
                                community.community.id === articleOwner.id
                        ))

                return from(personalSign(signatureToSign)).pipe(
                    mergeMap(signature =>
                        apolloClient.mutate<
                            publishArticle,
                            publishArticleVariables
                        >({
                            mutation: publishArticleMutation,
                            variables: {
                                id,
                                owner: articleOwner as any,
                                signature,
                                updateComment,
                                version,
                            },
                        })
                    ),
                    mergeMap(({ data }) =>
                        apolloSubscriber<IPublishArticleCommandOutput>(
                            path<string>(['publishArticle', 'hash'])(data) || ''
                        )
                    ),
                    tap(() => apolloClient.resetStore()),
                    tap(() => {
                        analytics.track(
                            canPublish
                                ? 'Publish Article'
                                : 'Propose Article Update',
                            {
                                category: 'article_actions',
                            }
                        )
                    }),
                    mergeMap(() =>
                        merge(
                            of(
                                showNotificationAction({
                                    description: canPublish
                                        ? `Your article has been published.`
                                        : `Your article has been submitted for review.`,
                                    message: canPublish
                                        ? 'Article Published'
                                        : 'Article submitted',
                                    notificationType: 'success',
                                })
                            ),
                            of(
                                routeChangeAction(
                                    getProfileURL(path([
                                        'value',
                                        'app',
                                        'user',
                                    ])(state$) as IProfileLinkProps).href,
                                    getProfileURL(path([
                                        'value',
                                        'app',
                                        'user',
                                    ])(state$) as IProfileLinkProps).as
                                )
                            )
                        )
                    )
                )
            }
        )
    )
