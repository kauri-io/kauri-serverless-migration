import React from 'react'
import { withApollo, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateCollectionConnection from '../containers/CreateCollection'
import { withTransaction } from '@elastic/apm-rum-react'

const CreateCollection = withTransaction('create-collection', 'page')(
    ({ router }) => (
        <App>
            <CreateCollectionConnection query={router.query} />
        </App>
    )
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CreateCollection)
