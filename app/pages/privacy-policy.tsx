import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import PrivacyPolicy from '../containers/PrivacyPolicy'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const PrivacyPolicyPage = withTransaction('privacy-policy', 'page')(() => (
    <App>
        <PrivacyPolicy category={'kauri'} />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(PrivacyPolicyPage)
