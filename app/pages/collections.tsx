import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Collections from '../containers/Discover/Collections'
import { withTransaction } from '@elastic/apm-rum-react'

const CollectionsPage = withTransaction(
    'collections',
    'page'
)(() => (
    <App hideNav={false}>
        <Collections />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
)(CollectionsPage)
