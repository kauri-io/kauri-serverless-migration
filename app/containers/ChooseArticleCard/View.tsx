import React, { useState } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../components/Card/ArticleCard'
import ChooseArticleContent, {
    Content,
} from '../../components/Modal/ChooseArticleContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    ${Content} {
        padding-top: 10px;
    }
`

const ArticlesContent = props => {
    const { articles, setRef, allOtherChosenArticles } = props
    if (!articles) {
        return null
    }

    return articles && articles.content.length > 0 ? (
        <Container>
            <ChooseArticleContent setRef={setRef}>
                {articles.content.map(article => {
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

                    return <ArticleCard {...article} />
                })}
            </ChooseArticleContent>
        </Container>
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
                <Tab label="All Articles" />
            </Tabs>
            { tab === 0 && <PersonalPublishedArticles
                {...props}
                articles={
                    props.searchPersonalPublishedArticles.searchArticles
                }
            />}
            {tab === 1 && <PublishedArticles {...props}  articles={props.searchPublishedArticles.searchArticles} />}
        </>
    )
}

export default ChooseArticleCardComponent
