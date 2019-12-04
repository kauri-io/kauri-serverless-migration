import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Error from '../containers/Error'
import { withRouter } from 'next/router'

class ErrorPage extends React.Component {
    render() {
        return (
            <App hideNav={false}>
                <Error code="500" />
            </App>
        )
    }
}

export default compose(withData, withApollo, withRouter)(ErrorPage)
