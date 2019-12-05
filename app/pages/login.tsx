import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import LoginForm from '../containers/LoginForm'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const Login = withTransaction('login', 'page')(() => (
    <App hideNav={false}>
        <LoginForm />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(Login)
