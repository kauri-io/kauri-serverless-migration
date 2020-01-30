import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Discussion from '../containers/Discussion'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const DiscussionPage = withTransaction('discussion', 'page')(({ router }) => {
    return (
        <App>
            <Discussion
                discussionId={router.query['discussion_id']}
                discussionAction={
                    router.query['discussion_id'] ? 'view' : 'list'
                }
            />
        </App>
    )
})

export default compose(
    withData,
    withApollo,
    withRouter
)(DiscussionPage)
