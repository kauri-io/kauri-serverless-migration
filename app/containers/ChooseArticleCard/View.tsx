import React from 'react'
import styled from 'styled-components'
import ArticleCard from '../../components/Card/ArticleCardMaterial'
import ChooseArticleContent, {
    Content,
} from '../../components/Modal/ChooseArticleContent'
import Tabs from '../../components/Tabs'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'

const Container = styled.div`
    display: flex;
    flex-diretion: column;
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
