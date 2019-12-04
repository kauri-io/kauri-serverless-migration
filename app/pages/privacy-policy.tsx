import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import PrivacyPolicy from '../containers/PrivacyPolicy'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const PrivacyPolicyPage = withTransaction(
    'privacy-policy',
    'page'
)(() => (
    <App hideNav={false}>
        <PrivacyPolicy category={'kauri'} />
    </App>
))

export default compose(withData, withApollo, withRouter)(PrivacyPolicyPage)
