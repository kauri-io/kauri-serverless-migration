import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Homepage from '../containers/Homepage'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const Index = withTransaction(
    'homepage',
    'page'
)(() => (
    <App hideNav={false}>
        <Homepage />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo,
    withRouter
)(Index)
