import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import ViewLink from '../containers/ViewLink'
import { withRouter } from 'next/router'

const LinkPage = ({ router }) => (
    <App maxWidthConstrained={true} hideNav={false}>
        <ViewLink id={router.query.id} />
    </App>
)

export default compose(withData, withApollo, withRouter)(LinkPage)
