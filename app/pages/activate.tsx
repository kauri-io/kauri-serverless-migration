import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import EmailVerification from '../containers/EmailVerification'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const EmailVerificationPage = withTransaction('activate','page')(({ router }) => (
    <App>
        <EmailVerification uuid={router.query.uuid} />
    </App>
))
export default compose(
    withData,
    withApollo,
    withRouter
)(EmailVerificationPage)
