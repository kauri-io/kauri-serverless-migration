import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import ArticleCard from '../../../components/Card/ArticleCard'
import Loading from '../../../components/Loading'
import {
    searchAutocompleteArticles_searchAutocomplete,
    searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO,
} from '../../../queries/__generated__/searchAutocompleteArticles'
import { getArticleURL } from '../../../lib/getURLs'
import { Grid, Container, withStyles } from '@material-ui/core'

interface IProps {
    ArticlesQuery: {
        error: string
        searchAutocomplete?: searchAutocompleteArticles_searchAutocomplete
    }
    hostName: string
    isLoggedIn: boolean
    openModalAction: (payload: { children: React.ReactElement<any> }) => void
    classes: { grid: any }
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
                            {searchAutocomplete.content.map(articleResult => {
                                const article =
                                    articleResult &&
                                    (articleResult.resource as searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO)
                                if (!article) {
                                    return <></>
                                }

                                return (
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
    },
})(Articles)
