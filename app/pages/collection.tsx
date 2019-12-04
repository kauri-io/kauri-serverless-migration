import React from 'react'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Collection from '../containers/Collection'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const CollectionPage = withTransaction(
    'collection',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <Collection
            proposedCommunityId={router.query['proposed-community-id']}
            id={router.query.collection_id}
        />
    </App>
))

export default compose(withData, withRouter)(CollectionPage)
