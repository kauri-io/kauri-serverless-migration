import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import ArticleCard from '../../../components/Card/ArticleCardMaterial'
import Loading from '../../../components/Loading'
import Masonry from '../../../components/Masonry'
import {
    searchAutocompleteArticles_searchAutocomplete,
    searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO,
} from '../../../queries/__generated__/searchAutocompleteArticles'
import slugify from 'slugify'

interface IProps {
    ArticlesQuery: {
        error: string
        searchAutocomplete?: searchAutocompleteArticles_searchAutocomplete
    }
    hostName: string
    isLoggedIn: boolean
    openModalAction: (payload: { children: React.ReactElement<any> }) => void
}

class Articles extends Component<IProps> {
    render() {
        if (this.props.ArticlesQuery.error) {
            alert(this.props.ArticlesQuery.error)
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
                {searchAutocomplete &&
                searchAutocomplete.content &&
                searchAutocomplete.content.length > 0 ? (
                    <Masonry>
                        {searchAutocomplete.content.map(articleResult => {
                            const article =
                                articleResult &&
                                (articleResult.resource as searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO)
                            if (!article) {
                                return <></>
                            }

                            return (
                                <ArticleCard
                                    key={String(article.id)}
                                    // nfts={article.associatedNfts}
                                    // resourceType={
                                    //   article.owner && article.owner.__typename === "CommunityDTO"
                                    //     ? "COMMUNITY"
                                    //     : "USER"
                                    // }
                                    // id={String(article.id)}
                                    // version={Number(article.version)}
                                    datePublished={
                                        article.datePublished ||
                                        article.dateCreated
                                    }
                                    title={String(article.title)}
                                    description={String(article.description)}
                                    author={article.author}
                                    attributes={article.attributes}
                                    // isLoggedIn={isLoggedIn}
                                    href={
                                        article.status === 'DRAFT'
                                            ? `/draft/${article.id}/${article.version}`
                                            : `/${slugify(article.title, {
                                                  lower: true,
                                              })}/${article.id}/a`
                                    }
                                />
                            )
                        })}
                    </Masonry>
                ) : (
                    <Loading />
                )}
            </Fragment>
        )
    }
}

export default Articles
