import React from 'react'
import styled from 'styled-components'
import CTA, { CheckpointArticlesIcon } from './CTA'
import { searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO } from '../../queries/__generated__/searchResultsAutocomplete'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

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
    align-items: center;
    justify-content: center;
    width: 100%;
`

export interface IProps {
    articles?: (searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO | null)[]
    articleCheckpointed?: boolean
    checkpointArticlesAction: () => void
    pageType: 'public-profile' | 'approved-article'
    isOwner: boolean
    isLoggedIn: boolean
    routeChangeAction: typeof routeChangeAction
    url?: string
}

const CheckpointArticles: React.FC<IProps> = ({
    isOwner,
    articles,
    articleCheckpointed,
    checkpointArticlesAction,
    pageType = 'public-profile',
    isLoggedIn,
    routeChangeAction,
    url,
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
                            isLoggedIn={isLoggedIn}
                            routeChangeAction={routeChangeAction}
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
                    isLoggedIn={isLoggedIn}
                    routeChangeAction={routeChangeAction}
                    url={url}
                />
            )
        } else {
            return <AllArticlesOnMainnet text={'Article On-chain'} />
        }
    }
    return <AllArticlesOnMainnet text={'Article On-chain'} />
}

export default CheckpointArticles
