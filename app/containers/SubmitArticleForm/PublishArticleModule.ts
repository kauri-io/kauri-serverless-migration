import { Epic, ActionsObservable, ofType } from 'redux-observable'
import gql from 'graphql-tag'
import { ApolloQueryResult } from 'apollo-client'
import { IReduxState, IDependencies } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { publishArticle } from './__generated__/publishArticle'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import analytics from '../../lib/analytics'
import { from, merge, of } from 'rxjs'
import { switchMap, mergeMap, tap } from 'rxjs/operators'

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

export const publishArticleEpic = (
    action$: ActionsObservable<IPublishArticleAction>,
    { getState }: any,
    { apolloClient, apolloSubscriber, personalSign }: IDependencies
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

                const canPublish =
                    !articleOwner ||
                    (articleOwner && articleOwner.id === contributor) ||
                    getState().app.user.communities.map(
                        ({ community }) => community.id
                    ).length > 0

                return from(personalSign(signatureToSign)).pipe(
                    mergeMap(signature =>
                        from(
                            apolloClient.mutate<publishArticle>({
                                mutation: publishArticleMutation,
                                variables: {
                                    id,
                                    owner: articleOwner,
                                    signature,
                                    updateComment,
                                    version,
                                },
                            })
                        )
                    ),
                    mergeMap(
                        ({ data: { publishArticle: publishArticleData } }) =>
                            apolloSubscriber(publishArticleData).hash
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
                                        getState()
                                            .app.user.communities.map(
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
