import React from 'react'
import App from '../layouts'
import AccountCheck from '../containers/AccountCheck'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'

const AccountCheckPage = ({ router }) => (
    <App>
        <AccountCheck page={router.query.page} router={router} />
    </App>
)

export default withData(withRouter(AccountCheckPage))
