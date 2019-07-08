import React from 'react'
import { withApollo, compose } from 'react-apollo'
import { connect } from 'react-redux'
import withData from '../lib/with-data'
import { routeChangeAction } from '../lib/Epics/RouteChangeEpic'
import App from '../layouts'
import Articles from '../containers/Discover/Articles'
import { withRouter } from 'next/router'

class ArticlesPage extends React.Component {
    render() {
        return (
            <App>
                <Articles />
            </App>
        )
    }
}

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo,
    withRouter
)(ArticlesPage)
