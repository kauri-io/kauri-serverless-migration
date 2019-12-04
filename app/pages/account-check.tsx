import React from 'react'
import App from '../layouts'
import AccountCheck from '../containers/AccountCheck'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import { withTransaction } from '@elastic/apm-rum-react'

const AccountCheckPage = withTransaction(
    'account-check',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <AccountCheck page={router.query.page} router={router} />
    </App>
))

export default withData(withRouter(AccountCheckPage))
