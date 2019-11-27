import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import EditProfilePage from '../containers/EditProfilePage'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const EditProfile = withTransaction('edit-profile', 'page')(({ router }) => (
    <App hideNav={true}>
        <EditProfilePage router={router} />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(EditProfile)
