import React from 'react'
import styled from 'styled-components'
import CTA, { CheckpointArticlesIcon } from './CTA'
import { searchPersonalArticles_searchArticles_content } from '../../queries/__generated__/searchPersonalArticles'

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
    articles?: (searchPersonalArticles_searchArticles_content | null)[]
    articleCheckpointed?: boolean
    checkpointArticlesAction: () => void
    pageType: 'public-profile' | 'approved-article'
    isOwner: boolean
}

const CheckpointArticles: React.FC<IProps> = ({
    isOwner,
    articles,
    articleCheckpointed,
    checkpointArticlesAction,
    pageType = 'public-profile',
}) => {
    if (pageType === 'public-profile') {
        return (
            <CheckpointedArticlesContainer>
                {Array.isArray(articles) &&
                articles.find(article => article && !article.checkpoint) ? (
                    isOwner && (
                        <CTA
                            checkpointArticlesAction={checkpointArticlesAction}
                            pageType={pageType}
                        />
                    )
                ) : (
                    <AllArticlesOnMainnet />
                )}
            </CheckpointedArticlesContainer>
        )
    }
    if (articleCheckpointed === false) {
        if (isOwner) {
            return (
                <CTA
                    checkpointArticlesAction={checkpointArticlesAction}
                    pageType={pageType}
                />
            )
        } else {
            return <AllArticlesOnMainnet text={'Article On-chain'} />
        }
    }
    return null
}

export default CheckpointArticles
