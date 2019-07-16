import { Epic, ofType } from 'redux-observable'
import gql from 'graphql-tag'
import { IReduxState, IDependencies } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { publishArticle, publishArticleVariables } from './__generated__/publishArticle'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import analytics from '../../lib/analytics'
import { merge, of, from } from 'rxjs'
import { switchMap, mergeMap, tap } from 'rxjs/operators'
import path from 'ramda/es/path';
import { ICommunity } from '../PublicProfile/Manage/MyCommunities';

const publishArticleMutation = gql`
    mutation publishArticle(
        $id: String
        $version: Int
        $owner: ResourceIdentifierInput
        $signature: String
        $updateComment: String
    ) {
        publishArticle(
            id: $id
            version: $version
            owner: $owner
            signature: $signature
            updateComment: $updateComment
        ) {
            hash
        }
    }
`

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

                const userCommunities = (path<ICommunity[]>(['value', 'app', 'user', 'communities'])(state$) || [])

                const canPublish =
                    !articleOwner ||
                    (articleOwner && articleOwner.id === contributor) ||
                    userCommunities.map(
                        ({ community }) => community.id
                    ).length > 0

            return from(personalSign(signatureToSign))
              .pipe(
                    mergeMap(signature =>
                            apolloClient.mutate<publishArticle, publishArticleVariables>({
                                mutation: publishArticleMutation,
                                variables: {
                                    id,
                                    owner: articleOwner,
                                    signature,
                                    updateComment,
                                    version,
                                },
                            })
                        ),
                    mergeMap(
                        ({ data }) => apolloSubscriber<IPublishArticleCommandOutput>(path<string>(['publishArticle', 'hash'])(data) || '')
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
                                    `/article/${id}/v${version}/${
                                        !owner ||
                                        (owner && owner.id === contributor) ||
                                            userCommunities.map(
                                                ({ community }) => community.id
                                            )
                                            .includes(owner.id)
                                            ? 'article-published'
                                            : 'article-proposed'
                                    }`
                                )
                            )
                        )
                    )
                )
            }
        )
    )
