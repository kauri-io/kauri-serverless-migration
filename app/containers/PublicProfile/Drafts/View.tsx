import React, { Fragment } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../../components/Card/ArticleCardMaterial'
import Link from '../../../components/Link'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import PrimaryButton from '../../../components/Button/PrimaryButton'
import AlertView from '../../../components/Modal/AlertView'
import { BodyCard } from '../../../components/Typography'
import Masonry from '../../../components/Masonry'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../components/Modal/Module'
import {
    IDeleteDraftArticleAction,
    IDeleteDraftArticlePayload,
} from '../../ArticleDraft/DeleteDraftArticleModule'
import {
    Article_owner_CommunityDTO,
    Article_owner_PublicUserDTO,
} from '../../../queries/Fragments/__generated__/Article'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
    isOwner: boolean
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    deleteDraftArticleAction: (
        payload: IDeleteDraftArticlePayload,
        callback: () => void
    ) => IDeleteDraftArticleAction
}

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 100px;
`

const Articles = ({
    data,
    type,
    routeChangeAction,
    isLoggedIn,
    closeModalAction,
    deleteDraftArticleAction,
    openModalAction,
}: IArticlesProps) => {
    const articles = data.searchArticles && data.searchArticles.content
    return articles && articles.length > 0 ? (
        <Fragment>
            <Masonry withPadding={false}>
                {articles.map(article => {
                    const owner =
                        article &&
                        (article.owner as
                            | Article_owner_CommunityDTO
                            | Article_owner_PublicUserDTO)
                    return (
                        article && (
                            <ArticleCard
                                key={`${article.id}-${article.version}`}
                                tags={article.tags}
                                changeRoute={routeChangeAction}
                                date={article.dateCreated}
                                title={article.title}
                                description={article.description}
                                userId={
                                    type !== 'toBeApproved' && owner
                                        ? owner.id
                                        : article.author && article.author.id
                                }
                                username={
                                    type !== 'toBeApproved' && owner
                                        ? owner.__typename === 'PublicUserDTO'
                                            ? (owner as Article_owner_PublicUserDTO)
                                                  .username
                                            : (owner as Article_owner_CommunityDTO)
                                                  .communityName
                                        : article.author &&
                                          article.author.username
                                }
                                userAvatar={
                                    type !== 'toBeApproved' && owner
                                        ? owner.avatar
                                        : article.author &&
                                          article.author.avatar
                                }
                                id={article.id}
                                version={article.version}
                                imageURL={
                                    article.attributes &&
                                    article.attributes.background
                                }
                                nfts={article.associatedNfts}
                                linkComponent={(childrenProps, route) => (
                                    <Link
                                        toSlug={
                                            route &&
                                            route.includes('article') &&
                                            article.title
                                        }
                                        useAnchorTag
                                        href={`/draft/${article.id}/${article.version}`}
                                    >
                                        {childrenProps}
                                    </Link>
                                )}
                                status={'DRAFT'}
                                isLoggedIn={isLoggedIn}
                                hoverChildren={() => (
                                    <PrimaryButton
                                        onClick={() =>
                                            openModalAction({
                                                children: (
                                                    <AlertView
                                                        closeModalAction={() =>
                                                            closeModalAction()
                                                        }
                                                        confirmButtonAction={() =>
                                                            deleteDraftArticleAction(
                                                                {
                                                                    id: String(
                                                                        article.id
                                                                    ),
                                                                    version: Number(
                                                                        article.version
                                                                    ),
                                                                },
                                                                closeModalAction
                                                            )
                                                        }
                                                        content={
                                                            <div>
                                                                <BodyCard>
                                                                    You won't be
                                                                    able to
                                                                    retrieve the
                                                                    draft
                                                                    article
                                                                    after
                                                                    deleting.
                                                                </BodyCard>
                                                            </div>
                                                        }
                                                        title={'Are you sure?'}
                                                    />
                                                ),
                                            })
                                        }
                                    >
                                        Delete draft
                                    </PrimaryButton>
                                )}
                            />
                        )
                    )
                })}
            </Masonry>
        </Fragment>
    ) : (
        <Centered>
            <PublicProfileEmptyState
                moveIconLeftBecauseCSS
                iconSrc={'/static/images/icons/no-saved-drafts.svg'}
                description={
                    'All of your draft articles will appear here. Create one now!'
                }
                title="No Saved Drafts"
                primaryButton={
                    <PrimaryButton
                        onClick={() => routeChangeAction('/write-article')}
                    >
                        Create Article
                    </PrimaryButton>
                }
            />
        </Centered>
    )
}

export default withPagination(Articles, 'searchArticles')
