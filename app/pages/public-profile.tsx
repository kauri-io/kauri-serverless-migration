import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import PublicProfile from '../containers/PublicProfile'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const PublicProfilePage = withTransaction('public-profile', 'page')(props => (
    <App>
        <PublicProfile
            username={
                props.router &&
                props.router.query &&
                props.router.query['username']
            }
            routeChangeAction={props.routeChangAction}
            router={props.router}
        />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    withRouter
)(PublicProfilePage)
