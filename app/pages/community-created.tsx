import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import CommunityCreated from '../containers/CommunityCreated'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const CommunityCreatedPage = withTransaction('community-created', 'page')(
    ({ router }) => (
        <App>
            <CommunityCreated type="created" id={router.query.id} />
        </App>
    )
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CommunityCreatedPage)
