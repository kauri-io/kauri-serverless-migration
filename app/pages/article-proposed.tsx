import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleProposed from '../containers/ArticleProposed'
import { withRouter } from 'next/router'

const ArticleProposedPage = ({ router }) => (
    <App>
        <ArticleProposed
            id={router.query['article_id']}
            version={router.query['article_version']}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleProposedPage)
