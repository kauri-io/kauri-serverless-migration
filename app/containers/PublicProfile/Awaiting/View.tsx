import React, { Fragment } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../../components/Card/ArticleCardMaterial'
import Link from '../../../components/Link'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
import Masonry from '../../../components/Masonry'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import { BodyCard } from '../../../components/Typography'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import { searchAwaitingApproval } from '../../../queries/Article'
import { graphql, compose } from 'react-apollo'
import {
    IOpenModalPayload,
    IOpenModalAction,
} from '../../../components/Modal/Module'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { ICommunity } from '../../../lib/Module'
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
}

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 100px;
`

const Articles = ({
    data,
    type,
    routeChangeAction,
    isOwner,
}: IArticlesProps) => {
    const articles = data.searchArticles && data.searchArticles.content
    return articles && articles.length > 0 ? (
        <Fragment>
            {typeof type === 'string' && type === 'published' && isOwner && (
                <CheckpointArticles isOwner={isOwner} articles={articles} />
            )}
            <Masonry withPadding={false}>
                {articles &&
                    articles.map(article => {
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
                                            : article.author &&
                                              article.author.id
                                    }
                                    username={
                                        type !== 'toBeApproved' && owner
                                            ? owner.__typename ===
                                              'PublicUserDTO'
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
                                    destination={'review'}
                                    linkComponent={(childrenProps, route) => (
                                        <Link useAnchorTag href={route}>
                                            {childrenProps}
                                        </Link>
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
                iconSrc={'/static/images/icons/no-articles-for-approval.svg'}
                description={
                    <DescriptionContainer>
                        <BodyCard>
                            If another user on Kauri suggests edits to one of
                            your published articles, you'll be asked to approve
                            or reject them.
                        </BodyCard>
                        <BodyCard>
                            These pending edits will appear here until you do
                            so.
                        </BodyCard>
                    </DescriptionContainer>
                }
                title="No Articles For Approval"
            />
        </Centered>
    )
}

export default compose(
    graphql(searchAwaitingApproval, {
        options: ({
            userId,
            communities,
        }: {
            userId: string
            communities: Array<ICommunity | string>
        }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                owners: communities.concat(userId),
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(withPagination(Articles, 'searchArticles'))
