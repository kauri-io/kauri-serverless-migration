import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import SubmitArticleForm from '../containers/SubmitArticleForm'
import { withRouter } from 'next/router'

const WriteArticle = ({ router }) => (
    <App>
        <SubmitArticleForm templateId={this.props.router.query.template_id} />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(WriteArticle)
