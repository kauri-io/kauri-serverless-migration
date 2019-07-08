import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import CollectionCreated from '../containers/CollectionCreated'
import { withRouter } from 'next/router'

const CollectionUpdatedPage = ({ router }) => (
    <App>
        <CollectionCreated type="updated" id={this.props.router.query.id} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(CollectionUpdatedPage)
