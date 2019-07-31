import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import ArticleCard from '../../components/Card/ArticleCardMaterial'
import PrimaryButton from '../../components/Button/PrimaryButton'
import { Title2, BodyCard } from '../../components/Typography'
import { getArticleURL } from '../../lib/getURLs'

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
            <ArticleCard href={getArticleURL(getArticle)} {...getArticle} />
            <SectionContainer>
                <PrimaryButton
                    onClick={() =>
                        routeChangeAction(`/public-profile/${userId}`)
                    }
                >
                    My Articles
                </PrimaryButton>
            </SectionContainer>
        </Container>
    )
}

export default ArticleProposed
