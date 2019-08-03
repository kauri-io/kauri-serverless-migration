import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import SubmitArticle from '../containers/SubmitArticleForm'
import { withRouter } from 'next/router'

const ViewArticle = ({router}) => (
    <App>
        <SubmitArticle
            id={router.query['id']}
            version={router.query['version']}
        />
    </App>
)
export default compose(
    withData,
    withRouter
)(ViewArticle)
