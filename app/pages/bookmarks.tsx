import React from 'react'
import { compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import ManageBookmarkPage from '../containers/Bookmark/ManageBookmarkPage'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const BookmarksPage = withTransaction('bookmarks', 'page')(props => (
    <App maxWidthConstrained={true}>
        <ManageBookmarkPage
            router={props.router}
        />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    withRouter
)(BookmarksPage)
