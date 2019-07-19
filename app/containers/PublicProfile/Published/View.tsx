import React, { Fragment } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../../components/Card/ArticleCardMaterial'
import Link from '../../../components/Link'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
import PrimaryButton from '../../../components/Button/PrimaryButton'
import MediumImportButton from '../../../components/Button/MediumImportButton'
import Masonry from '../../../components/Masonry'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import { BodyCard } from '../../../components/Typography'
import AddToCollectionConnection from '../../../containers/AddToCollection'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import {
    IOpenModalAction,
    IOpenModalPayload,
} from '../../../components/Modal/Module'

export interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
    isOwner: boolean
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
}

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.paddingTop};
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Articles: React.FC<IArticlesProps> = ({
    data,
    type,
    routeChangeAction,
    isLoggedIn,
    isOwner,
    openModalAction,
}) => {
    const articles = data.searchArticles && data.searchArticles.content
    return articles && articles.length > 0 ? (
        <Fragment>
            {typeof type === 'string' && type === 'published' && isOwner && (
                <CheckpointArticles isOwner={isOwner} articles={articles} />
            )}
            <Masonry>
                {articles.map(
                    article =>
                        article && (
                            <ArticleCard
                                key={`${article.id}-${article.version}`}
                                changeRoute={routeChangeAction}
                                date={article.datePublished}
                                title={article.title}
                                description={article.description}
                                tags={article.tags}
                                userId={
                                    type !== 'toBeApproved' && article.owner
                                        ? article.owner.id
                                        : article.author && article.author.id
                                }
                                username={
                                    type !== 'toBeApproved' && article.owner
                                        ? article.owner.username
                                        : article.author &&
                                          article.author.username
                                }
                                userAvatar={
                                    type !== 'toBeApproved' && article.owner
                                        ? article.owner.avatar
                                        : article.author &&
                                          article.author.avatar
                                }
                                isLoggedIn={isLoggedIn}
                                hoverChildren={() => (
                                    <PrimaryButton
                                        onClick={() =>
                                            openModalAction({
                                                children: (
                                                    <AddToCollectionConnection
                                                        articleId={article.id}
                                                        version={
                                                            article.version
                                                        }
                                                    />
                                                ),
                                            })
                                        }
                                    >
                                        Add To Collection
                                    </PrimaryButton>
                                )}
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
                                        href={route}
                                    >
                                        {childrenProps}
                                    </Link>
                                )}
                            />
                        )
                )}
            </Masonry>
        </Fragment>
    ) : (
        <Centered>
            <PublicProfileEmptyState
                iconSrc={'/static/images/icons/no-published-articles.svg'}
                description={
                    isLoggedIn ? (
                        <DescriptionContainer>
                            <BodyCard>
                                Any articles you've published on Kauri will
                                appear here.
                            </BodyCard>
                            <BodyCard>
                                Get started by creating a new draft below, or
                                importing one you've written on Medium!
                            </BodyCard>
                            <BodyCard>
                                Your draft articles will be shown in the next
                                tab until you publish them.
                            </BodyCard>
                        </DescriptionContainer>
                    ) : (
                        "The user hasn't published any articles yet. Once they do, they will appear here!"
                    )
                }
                title="No Articles Published"
                secondaryButton={isOwner ? <MediumImportButton border /> : null}
                primaryButton={
                    isOwner ? (
                        <PrimaryButton
                            onClick={() => routeChangeAction('/write-article')}
                        >
                            Create Article
                        </PrimaryButton>
                    ) : null
                }
            />
        </Centered>
    )
}

export default withPagination<IArticlesProps>(Articles, 'searchArticles')
