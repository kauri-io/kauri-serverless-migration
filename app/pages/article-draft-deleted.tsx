import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import { withRouter } from 'next/router'
import App from '../layouts'
import ArticleApproved from '../containers/ArticleApproved'

interface IProps {
    router: {
        query: {
            article_id: string
            article_version: string
        }
    }
}

const ArticleApprovedPage = () => (
    <App>
        <ArticleApproved
            type="draft deleted"
            article_id={this.props.router.query.article_id}
            article_version={this.props.router.query.article_version}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleApprovedPage)
