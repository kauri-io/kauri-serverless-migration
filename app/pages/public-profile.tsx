import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import PublicProfile from '../containers/PublicProfile'
import { withRouter } from 'next/router'

const PublicProfilePage = props => (
    <App>
        <PublicProfile
            userId={
                props.router &&
                props.router.query &&
                props.router.query['user_id']
            }
            routeChangeAction={props.routeChangAction}
            router={props.router}
        />
    </App>
)

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    withRouter
)(PublicProfilePage)
