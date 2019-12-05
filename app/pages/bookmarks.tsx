import React from 'react'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import ManageBookmarkPage from '../containers/Bookmark/ManageBookmarkPage'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const BookmarksPage = withTransaction('bookmarks', 'page')(props => (
    <App hideNav={false} maxWidthConstrained={true}>
        <ManageBookmarkPage router={props.router} />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    withRouter
)(BookmarksPage)
