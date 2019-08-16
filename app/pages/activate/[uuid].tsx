import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../../lib/with-data'
import App from '../../layouts'
import EmailVerification from '../../containers/EmailVerification'
import { withRouter } from 'next/router'

interface IProps {
    router: {
        query: {
            uuid: string
        }
    }
}

const EmailVerificationPage = ({ router }) => {
    return (
        <App>
            <EmailVerification uuid={router.query.uuid} />
        </App>
    )
}
export default compose(
    withData,
    withApollo,
    withRouter
)(EmailVerificationPage)
