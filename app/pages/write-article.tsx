import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import SubmitArticleForm from '../containers/SubmitArticleForm'
import { withRouter, Router } from 'next/router'

const WriteArticle: React.FC<{ router: Router }> = ({ router }) => (
    <App>
        <SubmitArticleForm templateId={router.query.template_id} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(WriteArticle)
