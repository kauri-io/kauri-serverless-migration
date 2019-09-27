import React, { Fragment } from 'react'
import ArticleCard from '../../../components/Card/ArticleCard'
import withPagination from '../../../lib/with-pagination'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import Button from '../../../components/Button'
import { searchArticles } from '../../../queries/__generated__/searchArticles'
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
import Loading from '../../../components/Loading'

interface IDraftQuery extends searchArticles {
    loading: boolean
}

interface IArticlesProps {
    DraftsQuery: IDraftQuery
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

const Articles: React.FC<IArticlesProps> = props => {
    if (props.DraftsQuery.loading) {
        return <Loading />
    }

    const articles =
        props.DraftsQuery.searchArticles &&
        props.DraftsQuery.searchArticles.content
    if (articles) {
        return articles.length > 0 ? (
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
