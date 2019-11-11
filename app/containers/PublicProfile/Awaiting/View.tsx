import React, { Fragment } from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import { searchAwaitingApproval } from '../../../queries/Article'
import { graphql, compose } from 'react-apollo'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { ICommunity } from '../../../lib/Module'
import { getArticleURL } from '../../../lib/getURLs'
import { Grid, Typography } from '@material-ui/core'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: typeof routeChangeAction
    isLoggedIn: boolean
    isOwner: boolean
}

const Articles = ({ data, type, isOwner }: IArticlesProps) => {
    const articles = data.searchArticles && data.searchArticles.content
    return articles && articles.length > 0 ? (
        <Fragment>
            {typeof type === 'string' && type === 'published' && isOwner && (
                <CheckpointArticles
                    pageType={'public-profile'}
                    isOwner={isOwner}
                    articles={articles}
                />
            )}
            <Grid container={true} spacing={2} justify="center">
                {articles &&
                    articles.map(article => {
                        return (
                            article && (
                                <Grid
                                    item={true}
                                    sm={12}
                                    container={true}
                                    justify="center"
                                >
                                    <ArticleCard
                                        href={getArticleURL(article, 'review')}
                                        {...article}
                                    />
                                </Grid>
                            )
                        )
                    })}
            </Grid>
        </Fragment>
    ) : (
        <Grid>
            <PublicProfileEmptyState
                iconSrc={'/static/images/icons/no-articles-for-approval.svg'}
                description={
                    <Grid>
                        <Typography>
                            If another user on Kauri suggests edits to one of
                            your published articles, you'll be asked to approve
                            or reject them.
                        </Typography>
                        <Typography>
                            These pending edits will appear here until you do
                            so.
                        </Typography>
                    </Grid>
                }
                title="No Articles For Approval"
            />
        </Grid>
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
