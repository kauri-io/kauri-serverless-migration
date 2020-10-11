import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Maintenance from '../containers/Maitenance'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ErrorPage = withTransaction('maintenance', 'page')(() => (
    <App>
        <Maintenance />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(ErrorPage)
