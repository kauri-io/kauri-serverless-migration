import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import EmailVerification from '../containers/EmailVerification'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const EmailVerificationPage = withTransaction(
    'activate',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <EmailVerification uuid={router.query.uuid} />
    </App>
))
export default compose(withData, withApollo, withRouter)(EmailVerificationPage)
