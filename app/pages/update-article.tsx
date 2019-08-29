import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import WriteArticle from '../containers/WriteArticle/View'
import { withRouter } from 'next/router'

const ViewArticle = ({ router }) => (
    <App>
        <WriteArticle
            id={router.query['id']}
            version={router.query['version']}
        />
    </App>
)
export default compose(
    withData,
    withRouter
)(ViewArticle)
