import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleRejected from '../containers/ArticleRejected'
import { withRouter } from 'next/router'

const ArticleRejectedPage = ({ router }) => (
    <App>
        <ArticleRejected id={router.query.id} version={router.query.version} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleRejectedPage)
