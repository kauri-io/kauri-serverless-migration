import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Error from '../containers/Error'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ErrorPage = withTransaction('404', 'page')(() => (
    <App>
        <Error code="404" />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(ErrorPage)
