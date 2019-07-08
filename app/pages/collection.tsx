import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Collection from '../containers/Collection'
import { withRouter } from 'next/router'

const CollectionPage = ({ router }) => (
    <App>
        <Collection
            proposedCommunityId={router.query['proposed-community-id']}
            id={router.query.collection_id}
        />
    </App>
)

export default compose(
    withData,
    withRouter
)(CollectionPage)
