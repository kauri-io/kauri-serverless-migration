import React from 'react'
import ArticleCard from '../../components/Card/ArticleCard'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { Grid } from '@material-ui/core'
import { getArticleURL } from '../../lib/getURLs'
import TabsComponent from '../../components/Tabs'

const ArticlesContent = props => {
    const { articles, setRef, allOtherChosenArticles } = props
    if (!articles) {
        return null
    }

    return articles &&
        Array.isArray(articles.content) &&
        articles.content.length > 0 ? (
        <div
            ref={ref => {
                // console.log(setRef)
                setRef && setRef(ref)
            }}
        >
            <Grid container spacing={3}>
                {articles.content.map(({ resource: article }) => {
                    const { title, id, version } = article
                    if (allOtherChosenArticles) {
                        if (
                            allOtherChosenArticles.find(chosenArticle => {
                                if (chosenArticle.resourcesId) {
                                    return chosenArticle.resourcesId.find(
                                        ({ id }) => id === article.id
                                    )
                                }
                                return chosenArticle.id === article.id
                            })
                        ) {
                            return null
                        }
                    }

                    return (
                        <Grid
                            key={article.id}
                            item
                            xs={12}
                            sm={12}
                            lg={12}
                            onClick={() =>
                                props.chooseArticle({
                                    id: article.id,
                                    version: article.version,
                                })
                            }
                        >
                            <ArticleCard
                                {...article}
                                href={getArticleURL({ title, id, version })}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    ) : (
        <p>You have no community published articles!</p>
    )
}

const CommunityPublishedArticles = withPagination(
    ArticlesContent,
    'getCommunityContent',
    'searchCommunityPublishedArticles'
)

const ChooseArticleCardComponent = props => {
    if (
        (props.searchCommunityPublishedArticles &&
            props.searchCommunityPublishedArticles.loading) ||
        !props.searchCommunityPublishedArticles
    ) {
        return <Loading />
    }

    return (
        <TabsComponent
            centerTabs
            passChangeTabFunction={props.passChangeTabFunction}
            tabs={[
                {
                    name: 'Community articles',
                },
            ]}
            panels={[
                <CommunityPublishedArticles
                    {...props}
                    articles={
                        props.searchCommunityPublishedArticles
                            .getCommunityContent
                    }
                />,
            ]}
        />
    )
}

export default ChooseArticleCardComponent
