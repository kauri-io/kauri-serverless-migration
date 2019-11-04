import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import Article from '../containers/Article'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const MaterialArticle = withTransaction('article', 'page')(({ router }) => (
    <App maxWidthConstrained={true} hideNav={false}>
        <Article
            id={router.query.article_id}
            version={router.query.article_version}
        />
    </App>
))

export default compose(
    withData,
    withApollo,
    withRouter
)(MaterialArticle)
