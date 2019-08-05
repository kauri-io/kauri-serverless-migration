import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleReview from '../containers/ArticleReview'
import { withRouter } from 'next/router'

const ArticleReviewPage = ({ router }) => (
    <App>
        <ArticleReview
            type="review"
            id={router.query.id}
            version={router.query.version}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleReviewPage)
