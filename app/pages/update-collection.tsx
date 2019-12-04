import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateCollectionConnection from '../containers/CreateCollection'
import { withTransaction } from '@elastic/apm-rum-react'

const UpdateCollection = withTransaction(
    'update-collection',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <CreateCollectionConnection id={router.query['collection_id']} />
    </App>
))

export default compose(withData, withApollo, withRouter)(UpdateCollection)
