import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ArticleDraft from '../containers/ArticleDraft'
import { withRouter } from 'next/router'

const ArticleDraftPage = ({ router }) => (
    <App>
        <ArticleDraft
            id={this.props.router.query.id}
            version={this.props.router.query.version}
        />
    </App>
)

export default compose(
    withData,
    withApollo,
    withRouter
)(ArticleDraftPage)
