import React from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'

import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { getArticleURL } from '../../../lib/getURLs'
import Empty from './Empty'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import Loading from '../../../components/Loading'

interface IArticlesQuery extends searchPersonalArticles {
    loading: boolean
}

export interface IArticlesProps {
    ArticlesQuery: IArticlesQuery
    type: string
    isLoggedIn: boolean
    isOwner: boolean
    classes: { grid: any }
}

const Articles: React.FC<IArticlesProps> = ({
    ArticlesQuery,
    type,
    isLoggedIn,
    isOwner,
}) => {

    if (ArticlesQuery.loading) {
        return <Loading />
    }

    const articles = ArticlesQuery.searchArticles && ArticlesQuery.searchArticles.content
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            paddingTop: theme.spacing(4),
        },
    }))
    const classes = useStyles()
    
    if (articles) {
        return articles.length > 0 ? (
            <Grid
                className={classes.container}
                container
                spacing={2}
                justify="center"
            >
                {typeof type === 'string' &&
                    type === 'published' &&
                    isOwner && (
                        <CheckpointArticles
                            pageType={'public-profile'}
                            isOwner={isOwner}
                            articles={articles}
                        />
                    )}
                {articles.map(
                    article =>
                        article && (
                            <Grid
                                key={article.id}
                                item
                                xs={12}
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
        ) : (
            <Empty isLoggedIn={isLoggedIn} isOwner={isOwner} />
        )
    }
    return null
}

export default withPagination(Articles, 'searchArticles')
