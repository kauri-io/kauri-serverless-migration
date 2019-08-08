import React from 'react'
import ArticleCard from '../../components/Card/ArticleCard'
import Tabs from '../../components/Tabs'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { getArticleURL } from '../../lib/getURLs'
import { Grid } from '@material-ui/core'

const ArticlesContent = props => {
    const { articles, allOtherChosenArticles, setRef } = props
    if (!articles) {
        return null
    }

    return articles && articles.content.length > 0 ? (
        <div
            ref={ref => {
                // console.log(setRef)
                setRef && setRef(ref)
            }}
        >
            <Grid container spacing={3}>
                {articles.content.map(article => {
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
        <p>You have no published articles!</p>
    )
}

const PublishedArticles = withPagination(
    ArticlesContent,
    'searchArticles',
    'searchPublishedArticles'
)
const PersonalPublishedArticles = withPagination(
    ArticlesContent,
    'searchArticles',
    'searchPersonalPublishedArticles'
)

const ChooseArticleCardComponent = props => {
    if (
        (props.searchPublishedArticles &&
            props.searchPublishedArticles.loading) ||
        (props.searchPersonalPublishedArticles &&
            props.searchPersonalPublishedArticles.loading) ||
        (!props.searchPersonalPublishedArticles ||
            !props.searchPublishedArticles)
    ) {
        return <Loading />
    }

    return (
        <Tabs
            centerTabs
            passChangeTabFunction={props.passChangeTabFunction}
            tabs={[
                {
                    name: 'My articles',
                },
                {
                    name: 'All articles',
                },
            ]}
            panels={[
                <PersonalPublishedArticles
                    {...props}
                    articles={
                        props.searchPersonalPublishedArticles.searchArticles
                    }
                />,
                <PublishedArticles
                    {...props}
                    articles={props.searchPublishedArticles.searchArticles}
                />,
            ]}
        />
    )
}

export default ChooseArticleCardComponent
