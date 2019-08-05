import React, { Fragment } from 'react'
import styled from 'styled-components'
import ArticleCard from '../../../components/Card/ArticleCard'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import PrimaryButton from '../../../components/Button/PrimaryButton'
import Masonry from '../../../components/Masonry'
import { searchPersonalArticles } from '../../../queries/__generated__/searchPersonalArticles'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../components/Modal/Module'
import {
    IDeleteDraftArticleAction,
    IDeleteDraftArticlePayload,
} from '../../ArticleDraft/DeleteDraftArticleModule'
import { getArticleURL } from '../../../lib/getURLs'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
    isOwner: boolean
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    deleteDraftArticleAction: (
        payload: IDeleteDraftArticlePayload,
        callback: () => void
    ) => IDeleteDraftArticleAction
}

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 100px;
`

const Articles: React.FC<IArticlesProps> = ({ data, routeChangeAction }) => {
    const articles = data.searchArticles && data.searchArticles.content
    if (articles) {
        return articles && articles.length > 0 ? (
            <Fragment>
                <Masonry withPadding={false}>
                    {articles.map(
                        article =>
                            article && (
                                <ArticleCard
                                    href={getArticleURL(article, 'draft')}
                                    {...article}
                                />
                            )
                    )}
                </Masonry>
            </Fragment>
        ) : (
            <Centered>
                <PublicProfileEmptyState
                    moveIconLeftBecauseCSS
                    iconSrc={'/static/images/icons/no-saved-drafts.svg'}
                    description={
                        'All of your draft articles will appear here. Create one now!'
                    }
                    title="No Saved Drafts"
                    primaryButton={
                        <PrimaryButton
                            onClick={() => routeChangeAction('/write-article')}
                        >
                            Create Article
                        </PrimaryButton>
                    }
                />
            </Centered>
        )
    }
    return null
}

export default withPagination(Articles, 'searchArticles')
