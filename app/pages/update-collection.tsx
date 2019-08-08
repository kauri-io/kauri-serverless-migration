import React from 'react'
import { withApollo, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateCollectionConnection from '../containers/CreateCollection'

const UpdateCollection = ({ router }) => (
    <App>
        <CreateCollectionConnection id={router.query['collection_id']} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(UpdateCollection)
