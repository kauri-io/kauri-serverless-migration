import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import Community from '../containers/Community'
import { withRouter } from 'next/router'
import config from '../config'
import { withTransaction } from '@elastic/apm-rum-react'

const HelpPage = withTransaction(
    'help',
    'page'
)(() => (
    <App hideNav={false}>
        <Community communityId={config.KauriCommunityId} />
    </App>
))
export default compose(withData, withApollo, withRouter)(HelpPage)
