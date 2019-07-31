import React, { Fragment } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../../components/Card/ArticleCardMaterial'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import { BodyCard } from '../../../components/Typography'
import Masonry from '../../../components/Masonry'
import { searchPending } from '../../../queries/Article'
import { graphql, compose } from 'react-apollo'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { ICommunity } from '../../../lib/Module'
import { getArticleURL } from '../../../lib/getURLs'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
    isOwner: boolean
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

const Articles = ({ data, type, isOwner }: IArticlesProps) => {
    const articles = data.searchArticles && data.searchArticles.content

    if (articles) {
        return articles.length > 0 ? (
            <Fragment>
                {typeof type === 'string' &&
                    type === 'published' &&
                    isOwner && (
                        <CheckpointArticles
                            pageType={'public-profile'}
                            isOwner={isOwner}
                            articles={articles}
                        />
                    )}
                <Masonry withPadding={false}>
                    {articles.map(
                        article =>
                            article && (
                                <ArticleCard
                                    href={getArticleURL(article)}
                                    {...article}
                                />
                            )
                    )}
                </Masonry>
            </Fragment>
        ) : (
            <Centered>
                <PublicProfileEmptyState
                    moveIconLeftBecauseCSS
                    iconSrc={'/static/images/icons/no-submitted-updates.svg'}
                    description={
                        <DescriptionContainer>
                            <BodyCard>
                                If you think of an improvement to another user's
                                article, you can suggest edits by clicking
                                "Update Article".
                            </BodyCard>
                            <BodyCard>
                                They'll then be asked to approve or reject
                                (giving a reason) your edits.
                            </BodyCard>
                            <BodyCard>
                                Your pending submitted edits will appear here.
                            </BodyCard>
                        </DescriptionContainer>
                    }
                    title="No Submitted Updates"
                />{' '}
            </Centered>
        )
    }
    return null
}

export default compose(
    graphql(searchPending, {
        options: ({
            userId,
        }: {
            userId: string
            communities: ICommunity[]
        }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                author: userId,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(withPagination(Articles, 'searchArticles'))
