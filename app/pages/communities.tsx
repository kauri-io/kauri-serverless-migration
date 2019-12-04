import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Communities from '../containers/Discover/Communities'
import { withTransaction } from '@elastic/apm-rum-react'

const CommunitiesPage = withTransaction('communities', 'page')(() => (
    <App hideNav={false}>
        <Communities />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
)(CommunitiesPage)
