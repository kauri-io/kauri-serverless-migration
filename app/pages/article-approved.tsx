import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleApproved from '../containers/ArticleApproved'
import { withRouter } from 'next/router'

const ArticleApprovedPage = ({ router }) => (
    <App>
        <ArticleApproved
            type="approved"
            article_id={router.query.article_id}
            article_version={router.query.article_version}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleApprovedPage)
