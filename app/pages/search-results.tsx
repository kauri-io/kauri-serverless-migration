import React from 'react'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import withData from '../lib/with-data'
import App from '../layouts'
import SearchResults from '../containers/SearchResults'
import { withRouter } from 'next/router'
import { withTransaction } from '@elastic/apm-rum-react'

const SearchResultsPage = withTransaction(
    'search-results',
    'page'
)(({ router }) => (
    <App hideNav={false}>
        <SearchResults query={router && router.query} router={router} />
    </App>
))

export default compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `client` used when logging out
    withApollo,
    withRouter
)(SearchResultsPage)
