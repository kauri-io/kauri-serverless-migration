import React from 'react'
import { withApollo, compose } from 'react-apollo'
import withData from '../lib/with-data'
import App from '../layouts'
import SearchResults from '../containers/SearchResults'
import { withRouter } from 'next/router'

const SearchResultsPage = ({ router }) => (
    <App>
        <SearchResults query={router && router.query} router={router} />
    </App>
)

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `client` used when logging out
    withApollo,
    withRouter
)(SearchResultsPage)
