import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import ArticleCard from '../../components/Card/ArticleCardMaterial'
import PrimaryButton from '../../components/Button/PrimaryButton'
import { Title2, BodyCard } from '../../components/Typography'
import slugify from 'slugify'

const Statement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    > :first-child {
        margin-right: ${props => props.theme.space[1]}px;
    }
`

const ProfileVisibilityStatement = styled(Statement)`
    margin-top: ${props => props.theme.space[2]}px;
    flex-direction: column;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${props => props.theme.primaryTextColor};
    > :first-child {
        margin-bottom: 30px;
    }
`

const SectionContainer = styled.div`
    margin-top: ${props => props.theme.space[3]}px;
    & > h2 {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const ArticleProposed = ({
    data: { getArticle },
    routeChangeAction,
    userId,
}) => {
    const article = this.props.data.getArticle

    return (
        <Container>
            <Head>
                <title>{'Kauri - Article Proposed'}</title>
            </Head>
            <SectionContainer>
                <Title2 color="white">Article Update Submitted</Title2>
                <BodyCard color="white">
                    Waiting for original author approval
                </BodyCard>
            </SectionContainer>
            <ArticleCard
                key={String(getArticle.id)}
                // nfts={article.associatedNfts}
                // resourceType={
                //   article.owner && article.owner.__typename === "CommunityDTO"
                //     ? "COMMUNITY"
                //     : "USER"
                // }
                // id={String(article.id)}
                // version={Number(article.version)}
                datePublished={getArticle.datePublished || article.dateCreated}
                title={String(getArticle.title)}
                description={String(getArticle.description)}
                author={getArticle.author}
                attributes={getArticle.attributes}
                // isLoggedIn={!!userId}
                href={
                    getArticle.type === 'drafted'
                        ? `/draft/${getArticle.id}/${getArticle.version}`
                        : `/${slugify(getArticle.title, { lower: true })}/${
                              getArticle.id
                          }/a`
                }
            />
            <SectionContainer>
                <PrimaryButton
                    onClick={() =>
                        routeChangeAction(
                            `/public-profile/${this.props.userId}`
                        )
                    }
                >
                    My Articles
                </PrimaryButton>
            </SectionContainer>
        </Container>
    )
}

export default ArticleProposed
