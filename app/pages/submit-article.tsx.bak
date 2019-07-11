import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import SubmitArticleForm from '../containers/SubmitArticleForm'

const SubmitArticle = () => (
    <App>
        <SubmitArticleForm />
    </App>
)

export default compose(
    withData,
    withApollo
)(SubmitArticle)
