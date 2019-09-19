import React from 'react'
import { withApollo, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateCommunityConnection from '../containers/CreateCommunity'
import { withTransaction } from '@elastic/apm-rum-react'

const CreateCommunity = withTransaction('create-community', 'page')(
    ({ router }) => (
        <App>
            <CreateCommunityConnection id={router.query.id} />
        </App>
    )
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CreateCommunity)
