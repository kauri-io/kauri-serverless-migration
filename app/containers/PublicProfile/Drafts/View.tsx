import React, { Fragment } from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import Button from '../../../components/Button'
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
import Link from 'next/link'
import { Grid } from '@material-ui/core'

interface IArticlesProps {
    data: searchPersonalArticles
    type: string
    isLoggedIn: boolean
    isOwner: boolean
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    deleteDraftArticleAction: (
        payload: IDeleteDraftArticlePayload,
        callback: () => void
    ) => IDeleteDraftArticleAction
}

const Articles: React.FC<IArticlesProps> = ({ data }) => {
    const articles = data.searchArticles && data.searchArticles.content
    if (articles) {
        return articles && articles.length > 0 ? (
            <Fragment>
                <Grid container={true} spacing={2} justify="center">
                    {articles.map(
                        article =>
                            article && (
                                <Grid
                                    item={true}
                                    sm={12}
                                    container={true}
                                    justify="center"
                                >
                                    <ArticleCard
                                        href={getArticleURL(article, 'draft')}
                                        {...article}
                                    />
                                </Grid>
                            )
                    )}
                </Grid>
            </Fragment>
        ) : (
            <Grid>
                <PublicProfileEmptyState
                    moveIconLeftBecauseCSS
                    iconSrc={'/static/images/icons/no-saved-drafts.svg'}
                    description={
                        'All of your draft articles will appear here. Create one now!'
                    }
                    title="No Saved Drafts"
                    primaryButton={
                        <Link href="/write-article">
                            <a>
                                <Button color="primary" variant="contained">
                                    Create Article
                                </Button>
                            </a>
                        </Link>
                    }
                />
            </Grid>
        )
    }
    return null
}

export default withPagination(Articles, 'searchArticles')
