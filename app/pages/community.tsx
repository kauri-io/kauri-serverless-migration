import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Community from '../containers/Community'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const CommunityPage = withTransaction('community', 'page')(({ router }) => {
    return (
        <App>
            <Community
                secret={router.query.secret}
                communityId={router.query['community_id']}
                tab={router.query['tab']}
            />
        </App>
    )
})

export default compose(
    withData,
    withApollo,
    withRouter
)(CommunityPage)
