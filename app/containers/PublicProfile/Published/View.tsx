import React from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'

import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import { getArticleURL } from '../../../lib/getURLs'
import Empty from './Empty'
import { Grid, Container } from '@material-ui/core'

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
    if (articles) {
        return articles.length > 0 ? (
            <Container>
                {typeof type === 'string' &&
                    type === 'published' &&
                    isOwner && (
                        <CheckpointArticles
                            pageType={'public-profile'}
                            isOwner={isOwner}
                            articles={articles}
                        />
                    )}
                <Grid container spacing={3}>
                    {articles.map(
                        article =>
                            article && (
                                <Grid
                                    key={article.id}
                                    item
                                    xs={12}
                                    sm={12}
                                    lg={6}
                                >
                                    <ArticleCard
                                        href={getArticleURL(article)}
                                        {...article}
                                    />
                                </Grid>
                            )
                    )}
                </Grid>
            </Container>
        ) : (
            <Empty isLoggedIn={isLoggedIn} isOwner={isOwner} />
        )
    }
    return null
}

export default withPagination(Articles, 'searchArticles')
