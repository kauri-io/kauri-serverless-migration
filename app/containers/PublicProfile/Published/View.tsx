import React from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'

import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { getArticleURL } from '../../../lib/getURLs'
import Empty from './Empty'
import { Grid, makeStyles, Theme } from '@material-ui/core'

export interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    isLoggedIn: boolean
    isOwner: boolean
    classes: { grid: any }
}

const Articles: React.FC<IArticlesProps> = ({
    data,
    type,
    isLoggedIn,
    isOwner,
}) => {
    const articles = data.searchArticles && data.searchArticles.content
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
                spacing={3}
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
