import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Community from '../containers/Community'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const CommunityPage = withTransaction(
    'approve',
    'page'
)(({ router }) => {
    return (
        <App hideNav={false}>
            <Community
                secret={router.query.secret}
                communityId={router.query['community_id']}
            />
        </App>
    )
})

export default compose(withData, withApollo, withRouter)(CommunityPage)
