import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import EditProfilePage from '../containers/EditProfilePage'
import { withRouter } from 'next/router'

const EditProfile = ({ router }) => (
    <App>
        <EditProfilePage router={router} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(EditProfile)
