import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import NewsletterConfirmation from '../containers/NewsletterConfirmation'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const NewsletterConfirmationPage = withTransaction(
    'newsletter-confirmation',
    'page'
)(() => (
    <App hideNav={false}>
        <NewsletterConfirmation />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(NewsletterConfirmationPage)
