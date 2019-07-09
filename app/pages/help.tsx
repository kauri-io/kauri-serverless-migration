import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Community from '../containers/Community'
import { withRouter } from 'next/router'
import config from '../config'

const HelpPage = () => (
    <App>
        <Community communityId={config.KauriCommunityId} />
    </App>
)
export default compose(
    withData,
    withApollo,
    withRouter
)(HelpPage)
