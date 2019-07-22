import React from 'react'
import styled from 'styled-components'
import CTA, { CheckpointArticlesIcon } from './CTA'
import { Article } from '../../queries/Fragments/__generated__/Article'

const CheckpointArticlesCTAContainer = styled.section`
    display: flex;
    justify-content: center;
    padding: ${props => props.theme.space[1]}px ${props => props.theme.padding};
    padding-bottom: 0px;
    margin: 0px ${props => props.theme.space[2]}px;
`

export const AllArticlesOnMainnet = ({
    text = 'All Articles On-chain',
}: {
    text?: string
}) => (
    <CheckpointedArticlesContainer>
        <CheckpointArticlesIcon />
        <span>{text}</span>
    </CheckpointedArticlesContainer>
)

const CheckpointedArticlesContainer = styled.div`
    display: flex;
    > :first-child {
        margin-right: ${props => props.theme.space[1]}px;
        color: ${props => props.theme.colors['textPrimary']};
    }
    font-size: ${props => props.theme.fontSizes[0]}px;
    font-weight: ${props => props.theme.fontWeight[3]};
    text-transform: uppercase;
`

interface IProps {
    articles?: Article[]
    articleCheckpointed?: boolean
    checkpointArticlesAction: () => void
    pageType: 'public-profile' | 'approved-article'
    isOwner: boolean
}

export default ({
    isOwner,
    articles,
    articleCheckpointed,
    checkpointArticlesAction,
    pageType = 'public-profile',
}: IProps) =>
    pageType === 'public-profile' ? (
        <CheckpointArticlesCTAContainer>
            {Array.isArray(articles) &&
            articles.find(article => !article.checkpoint) ? (
                isOwner && (
                    <CTA
                        checkpointArticlesAction={checkpointArticlesAction}
                        pageType={pageType}
                    />
                )
            ) : (
                <AllArticlesOnMainnet />
            )}
        </CheckpointArticlesCTAContainer>
    ) : articleCheckpointed === false ? (
        isOwner && (
            <CTA
                checkpointArticlesAction={checkpointArticlesAction}
                pageType={pageType}
            />
        )
    ) : (
        <AllArticlesOnMainnet text={'Article On-chain'} />
    )
