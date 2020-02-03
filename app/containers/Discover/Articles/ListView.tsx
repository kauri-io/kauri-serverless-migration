import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import ArticleCard from '../../../components/Card/ArticleCard'
import Loading from '../../../components/Loading'
import { searchAutocompleteArticles_searchAutocomplete } from '../../../queries/__generated__/searchAutocompleteArticles'
import { getArticleURL, getLinkUrl } from '../../../lib/getURLs'
import { Grid, withStyles } from '@material-ui/core'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import AddToCollection from '../../AddToCollection'
import { searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO } from '../../../queries/__generated__/searchResultsAutocomplete'
import LinkCard from '../../../components/Card/LinkCard'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import config from '../../../config/index'

interface IProps {
    ArticlesQuery: {
        error: string
        searchAutocomplete?: searchAutocompleteArticles_searchAutocomplete
    }
    hostName: string
    classes: { grid: any; root: any }
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    userId: string | null
}

class Articles extends Component<IProps> {
    render() {
        if (this.props.ArticlesQuery.error) {
            return null
        } // TODO replace with an error message if exists

        const { searchAutocomplete } = this.props.ArticlesQuery
        return (
            <Fragment>
                <Head>
                    <title>{`Kauri - ${config.title} - Articles`}</title>
                    <meta
                        name="description"
                        content={`${config.description.line1} - ${config.description.line2}`}
                    />
                    <link
                        rel="canonical"
                        href={`https://${this.props.hostName}/articles`}
                    />
                </Head>
                <div className={this.props.classes.root}>
                    {searchAutocomplete &&
                    searchAutocomplete.content &&
                    searchAutocomplete.content.length > 0 ? (
                        <Grid
                            className={this.props.classes.grid}
                            container
                            spacing={2}
                        >
                            {searchAutocomplete.content.map(result => {
                                const type =
                                    result &&
                                    result.resourceIdentifier &&
                                    result.resourceIdentifier.type

                                if (
                                    type === 'ARTICLE' &&
                                    result &&
                                    result.resource
                                ) {
                                    const article = result.resource as searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO
                                    return (
                                        <Grid key={article.id} item xs={12}>
                                            <ArticleCard
                                                {...article}
                                                href={getArticleURL(article)}
                                                addArticleToCollectionAction={() =>
                                                    this.props.openModalAction({
                                                        children: (
                                                            <AddToCollection
                                                                resourceId={
                                                                    article.id ||
                                                                    ''
                                                                }
                                                                type={
                                                                    'ARTICLE' as ResourceTypeInput.ARTICLE
                                                                }
                                                            />
                                                        ),
                                                    })
                                                }
                                            />
                                        </Grid>
                                    )
                                } else if (
                                    type === 'LINK' &&
                                    result &&
                                    result.resource
                                ) {
                                    const link = result.resource as any
                                    return (
                                        <Grid
                                            key={link.id}
                                            item
                                            xs={12}
                                            container={true}
                                            justify="center"
                                        >
                                            <LinkCard
                                                key={link.id}
                                                href={getLinkUrl(link)}
                                                {...link}
                                            />
                                        </Grid>
                                    )
                                }
                            })}
                        </Grid>
                    ) : (
                        <Loading />
                    )}
                </div>
            </Fragment>
        )
    }
}

export default withStyles({
    grid: {
        paddingTop: 16,
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        display: 'flex',
    },
})(Articles)
