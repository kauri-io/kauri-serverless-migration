import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import CommunityCreated from '../containers/CommunityCreated'
import { withRouter } from 'next/router'

const CommunityUpdatedPage = ({ router }) => (
    <App>
        <CommunityCreated type="updated" id={router.query.id} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CommunityUpdatedPage)
