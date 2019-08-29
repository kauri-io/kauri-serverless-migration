import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import WriteArticle from '../containers/WriteArticle'
import { withRouter } from 'next/router'

const WriteArticlePage = ({ router }) => (
    <App>
        <WriteArticle router={router} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(WriteArticlePage)
