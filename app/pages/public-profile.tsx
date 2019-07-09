import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import PublicProfile from '../containers/PublicProfile'
import { withRouter } from 'next/router'

const PublicProfilePage = () => (
    <App>
        <PublicProfile
            userId={
                this.props.router &&
                this.props.router.query &&
                this.props.router.query['user_id']
            }
            routeChangeAction={this.props.routeChangAction}
            router={this.props.router}
        />
    </App>
)

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    withRouter
)(PublicProfilePage)
