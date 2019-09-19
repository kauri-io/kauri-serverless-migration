import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import NewsletterConfirmation from '../containers/NewsletterConfirmation'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const NewsletterConfirmationPage = withTransaction(
    'newsletter-confirmation',
    'page'
)(() => (
    <App>
        <NewsletterConfirmation />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(NewsletterConfirmationPage)
