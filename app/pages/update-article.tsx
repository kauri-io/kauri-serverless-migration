import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import WriteArticle from '../containers/WriteArticle'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const ViewArticle = withTransaction('update-article', 'page')(({ router }) => (
    <App>
        <WriteArticle
            id={router.query['id']}
            version={router.query['version']}
        />
    </App>
))

export default compose(
    withData,
    withRouter
)(ViewArticle)
