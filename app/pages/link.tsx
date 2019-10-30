import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Link from '../containers/Link'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const LinkPage = withTransaction('article', 'page')(({ router }) => (
    <App maxWidthConstrained={true} hideNav={false}>
        <Link id={router.query.id} />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(LinkPage)
