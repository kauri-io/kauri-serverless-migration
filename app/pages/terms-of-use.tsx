import React from 'react'
import App from '../layouts'
import TermsOfUse from '../containers/TermsOfUse'
import withData from '../lib/with-data'

const TermsOfUsePage = ({}) => (
    <App>
        <TermsOfUse />
    </App>
)

export default withData(TermsOfUsePage)
