import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Discussion from '../containers/Discussion'
import DiscussionView from '../containers/Discussion/View'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'
import Error from '../containers/Error'

const CreateDiscussion = withTransaction('discussion-form', 'page')(
    ({ router }) => {
        const parentId = router.query['parent_id']
        const parentType = router.query['parent_type']
        const discussionId = router.query['discussion_id']

        if (!parentId && !parentType && !discussionId) {
            return <Error code="400" />
        }

        return (
            <App>
                {discussionId && (
                    <Discussion
                        discussionId={discussionId}
                        discussionAction={'form'}
                    />
                )}

                {!discussionId && (
                    <DiscussionView
                        parentId={parentId}
                        parentType={parentType}
                        discussionAction={'form'}
                    />
                )}
            </App>
        )
    }
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CreateDiscussion)
