import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import ArticleCard from '../../../components/Card/ArticleCard'
import Loading from '../../../components/Loading'
import {
    searchAutocompleteArticles_searchAutocomplete,
} from '../../../queries/__generated__/searchAutocompleteArticles'
import { getArticleURL, getLinkUrl } from '../../../lib/getURLs'
import { Grid, Container, withStyles } from '@material-ui/core'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import AddToCollection from '../../AddToCollection'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO } from '../../../queries/__generated__/searchResultsAutocomplete'
import LinkCard from '../../../components/Card/LinkCard'

interface IProps {
    ArticlesQuery: {
        error: string
        searchAutocomplete?: searchAutocompleteArticles_searchAutocomplete
    }
    hostName: string
    isLoggedIn: boolean
    classes: { grid: any }
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    routeChangeAction: typeof routeChangeAction
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
                    <title>
                        Beginner to Advanced Blockchain & Ethereum Tutorials |
                        Articles - Kauri
                    </title>
                    <meta
                        name="description"
                        content="Discover the best blockchain related articles, tutorials and how-to guides"
                    />
                    <link
                        rel="canonical"
                        href={`https://${this.props.hostName}/articles`}
                    />
                </Head>
                <Container>
                    {searchAutocomplete &&
                    searchAutocomplete.content &&
                    searchAutocomplete.content.length > 0 ? (
                        <Grid
                            className={this.props.classes.grid}
                            container
                            spacing={3}
                        >
                            {searchAutocomplete.content.map(result => {
                                const type = result && result.resourceIdentifier && result.resourceIdentifier.type

                                if (type === 'ARTICLE' && result && result.resource) {
                                    const article = result.resource as searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO
                                    return (
                                        <Grid key={article.id} item xs={12}>
                                            <ArticleCard
                                                {...article}
                                                href={getArticleURL(article)}
                                                isLoggedIn={this.props.isLoggedIn}
                                                addArticleToCollectionAction={() =>
                                                    this.props.openModalAction({
                                                        children: (
                                                            <AddToCollection
                                                                articleId={
                                                                    article.id || ''
                                                                }
                                                                version={
                                                                    article.version ||
                                                                    1
                                                                }
                                                            />
                                                        ),
                                                    })
                                                }
                                            />
                                        </Grid>
                                    )
                                } else if (type === 'LINK' && result && result.resource) {
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
                </Container>
            </Fragment>
        )
    }
}

export default withStyles({
    grid: {
        paddingTop: '24px',
        maxWidth: 870,
        margin: 'auto',
    },
})(Articles)
