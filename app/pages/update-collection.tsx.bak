import React from 'react'
import { withApollo, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import withData from '../lib/with-data'
import App from '../layouts'
import CreateCollectionConnection from '../containers/CreateCollection'

const UpdateCollection = () => (
    <App>
        <CreateCollectionConnection id={this.props.router.query['id']} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(UpdateCollection)
