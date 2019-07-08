import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleReview from '../containers/ArticleReview'
import { withRouter } from 'next/router'

const ArticleReviewPage = () => (
    <App>
        <ArticleReview
            type="review"
            id={this.props.router.query.id}
            version={this.props.router.query.version}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleReviewPage)
