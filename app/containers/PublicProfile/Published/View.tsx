import React from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'

import {
    searchResultsAutocomplete,
    searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO,
} from '../../../queries/__generated__/searchResultsAutocomplete'
import { getArticleURL, getLinkUrl } from '../../../lib/getURLs'
import Empty from './Empty'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import Loading from '../../../components/Loading'
import LinkCard from '../../../components/Card/LinkCard'

interface IArticlesQuery extends searchResultsAutocomplete {
    loading: boolean
}

export interface IArticlesProps {
    PublishedQuery: IArticlesQuery
    type: string
    isLoggedIn: boolean
    isOwner: boolean
    classes: { grid: any }
}

const Articles: React.FC<IArticlesProps> = ({
    PublishedQuery,
    type,
    isLoggedIn,
    isOwner,
}) => {
    if (PublishedQuery.loading) {
        return <Loading />
    }

    const results =
        PublishedQuery.searchAutocomplete &&
        PublishedQuery.searchAutocomplete.content
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            maxWidth: 870,
            margin: ' 0 auto',
            '& > *': {
                margin: theme.spacing(1)
            }
        },
    }))
    const classes = useStyles()

    const articles = results.filter(
        i =>
            i && i.resourceIdentifier && i.resourceIdentifier.type === 'ARTICLE'
    ) as (searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO | null)[]

    if (results) {
        return results.length > 0 ? (
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
                {results.map(result => {
                    const type =
                        result &&
                        result.resourceIdentifier &&
                        result.resourceIdentifier.type

                    if (type === 'ARTICLE' && result && result.resource) {
                        const article = result.resource as searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO
                        return (

                            <ArticleCard
                                href={getArticleURL(article)}
                                {...article}
                            />
                        )
                    } else if (type === 'LINK' && result && result.resource) {
                        const link = result.resource as any
                        return (

                            <LinkCard
                                key={link.id}
                                href={getLinkUrl(link)}
                                {...link}
                            />
                        )
                    }
                })}
            </Grid>
        ) : (
                <Empty isLoggedIn={isLoggedIn} isOwner={isOwner} />
            )
    }
    return null
}

export default withPagination(Articles, 'searchAutocomplete')
