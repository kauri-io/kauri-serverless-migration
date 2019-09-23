import React from 'react'
import App from '../layouts'
import TermsOfUse from '../containers/TermsOfUse'
import withData from '../lib/with-data'
import { withTransaction } from '@elastic/apm-rum-react'

const TermsOfUsePage = withTransaction('terms-of-use', 'page')(({}) => (
    <App>
        <TermsOfUse />
    </App>
))

export default withData(TermsOfUsePage)
