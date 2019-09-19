import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleDraft from '../containers/ArticleDraft'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ArticleDraftPage = withTransaction('draft', 'page')(({ router }) => (
    <App>
        <ArticleDraft id={router.query.id} version={router.query.version} />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleDraftPage)
