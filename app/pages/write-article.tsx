import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import WriteArticle from '../containers/WriteArticle'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const WriteArticlePage = withTransaction(
    'write-article',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <WriteArticle router={router} />
    </App>
))

export default compose(withData, withApollo, withRouter)(WriteArticlePage)
