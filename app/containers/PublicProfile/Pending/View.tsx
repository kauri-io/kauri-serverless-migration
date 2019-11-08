import React, { Fragment } from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import { searchPending } from '../../../queries/Article'
import { graphql, compose } from 'react-apollo'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { ICommunity } from '../../../lib/Module'
import { getArticleURL } from '../../../lib/getURLs'
import { Grid, Typography } from '@material-ui/core'
import { openModalAction } from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
    isLoggedIn: boolean
    isOwner: boolean
}

const Articles = ({
    data,
    type,
    isOwner,
}: IArticlesProps) => {
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
                <Grid container={true} spacing={2} justify="center">
                    {articles.map(
                        article =>
                            article && (
                                <Grid
                                    item={true}
                                    sm={12}
                                    container={true}
                                    justify="center"
                                >
                                    <ArticleCard
                                        href={getArticleURL(article)}
                                        {...article}
                                    />
                                </Grid>
                            )
                    )}
                </Grid>
            </Fragment>
        ) : (
            <Grid>
                <PublicProfileEmptyState
                    moveIconLeftBecauseCSS
                    iconSrc={'/static/images/icons/no-submitted-updates.svg'}
                    description={
                        <Grid>
                            <Typography>
                                If you think of an improvement to another user's
                                article, you can suggest edits by clicking
                                "Update Article".
                            </Typography>
                            <Typography>
                                They'll then be asked to approve or reject
                                (giving a reason) your edits.
                            </Typography>
                            <Typography>
                                Your pending submitted edits will appear here.
                            </Typography>
                        </Grid>
                    }
                    title="No Submitted Updates"
                />
            </Grid>
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
