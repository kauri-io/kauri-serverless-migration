import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleDraft from '../containers/ArticleDraft'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ArticleDraftPage = withTransaction('draft', 'page')(({ router }) => (
    <App maxWidthConstrained={true} hideNav={false}>
        <ArticleDraft id={router.query.id} version={router.query.version} />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleDraftPage)
