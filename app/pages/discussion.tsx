import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Discussion from '../containers/Discussion'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const CommunityPage = withTransaction('discussion', 'page')(({ router }) => {
    return (
        <App>
            <Discussion
                secret={router.query.secret}
                discussionId={router.query['discussion_id']}
            />
        </App>
    )
})

export default compose(
    withData,
    withApollo,
    withRouter
)(CommunityPage)
