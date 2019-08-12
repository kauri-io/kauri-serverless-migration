import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Community from '../containers/Community'
import { withRouter } from 'next/router'

const CommunityPage = ({ router }) => {
    // console.log(router.query)
    return (
        <App>
            <Community
                secret={router.query.secret}
                communityId={router.query['community_id']}
            />
        </App>
    )
}

export default compose(
    withData,
    withApollo,
    withRouter
)(CommunityPage)
