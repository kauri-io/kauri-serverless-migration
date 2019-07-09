import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import LoginForm from '../containers/LoginForm'
import { withRouter } from 'next/router'

const Login = () => (
    <App>
        <LoginForm />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(Login)
