import React, { useState, useEffect } from 'react'
import ArticleCard from '../../components/Card/ArticleCard'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { getArticleURL } from '../../lib/getURLs'
import { Grid, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    chosenResource: {
        '& > :first-child': {
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
            pointerEvents: 'none',
            borderRadius: '4px',
        },
        cursor: 'pointer',
    },
    unchosenResource: {
        '& > :first-child': {
            pointerEvents: 'none',
            borderRadius: '4px',
        },
        cursor: 'pointer',
    },
}))

const ArticlesContent = props => {
    const { articles, allOtherChosenArticles, setRef } = props
    if (!articles) {
        return null
    }
    const classes = useStyles()

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
                            <div
                                className={
                                    props.chosenArticles.find(
                                        ({ id }) => id === article.id
                                    )
                                        ? classes.chosenResource
                                        : classes.unchosenResource
                                }
                            >
                                <ArticleCard
                                    {...article}
                                    href={getArticleURL({ title, id, version })}
                                />
                            </div>
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

    const [tab, setTab] = useState(0)
    useEffect(() => {
        props.passChangeTabFunction(setTab)
        return () => {}
    }, [])

    return (
        <>
            <Tabs
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                centered={true}
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="My Articles" />
                {!props.hideAllArticlesTab && <Tab label="All Articles" />}
            </Tabs>
            {tab === 0 && (
                <PersonalPublishedArticles
                    {...props}
                    articles={
                        props.searchPersonalPublishedArticles.searchArticles
                    }
                />
            )}
            {tab === 1 && (
                <PublishedArticles
                    {...props}
                    articles={props.searchPublishedArticles.searchArticles}
                />
            )}
        </>
    )
}

export default ChooseArticleCardComponent
