import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import NewsletterConfirmation from '../containers/NewsletterConfirmation'
import { withRouter } from 'next/router'

const NewsletterConfirmationPage = () => (
    <App>
        <NewsletterConfirmation />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(NewsletterConfirmationPage)
