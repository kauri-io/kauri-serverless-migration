import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateLink from '../containers/CreateLink'
import { withTransaction } from '@elastic/apm-rum-react'

const WriteArticlePage = withTransaction('write-article', 'page')(() => (
    <App maxWidthConstrained={true} hideNav={true}>
        <CreateLink />
    </App>
))

export default compose(
    withData,
    withApollo
)(WriteArticlePage)
