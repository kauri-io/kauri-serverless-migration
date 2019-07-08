import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import EditProfileComp from '../containers/EditProfile'
import { withRouter } from 'next/router'

const EditProfile = ({ router }) => (
    <App>
        <EditProfileComp router={this.props.router} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(EditProfile)
