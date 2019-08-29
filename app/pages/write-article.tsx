import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import WriteArticle from '../containers/WriteArticle/View'

const WriteArticlePage = () => (
    <App>
        <WriteArticle />
    </App>
)

export default compose(
    withData,
    withApollo
)(WriteArticlePage)
