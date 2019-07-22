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

    return articles &&
        Array.isArray(articles.content) &&
        articles.content.length > 0 ? (
        <Container>
            <ChooseArticleContent setRef={setRef}>
                {articles.content.map(({ resource: article }) => {
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
        <Tabs
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
