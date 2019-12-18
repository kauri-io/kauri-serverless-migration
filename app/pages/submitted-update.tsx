import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleSubmittedUpdate from '../containers/ArticleSubmittedUpdate'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ArticleSubmittedUpdatePage = withTransaction('submitted-update', 'page')(
    ({ router }) => (
        <App maxWidthConstrained={true} hideNav={false}>
            <ArticleSubmittedUpdate
                id={router.query.id}
                version={router.query.version}
            />
        </App>
    )
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleSubmittedUpdatePage)
