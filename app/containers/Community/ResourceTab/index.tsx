import View from './View'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import { getCommunityContent } from '../../../queries/Community'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'

const QUERY_NAME = 'getCommunityContentQuery'

export default compose(
    connect(
        null,
        {}
    ),
    graphql(getCommunityContent, {
        name: QUERY_NAME,
        options: ({
            id,
            types,
        }: {
            id: string
            types: ResourceTypeInput[]
        }) => ({
            fetchPolicy: 'network-only',
            variables: {
                id,
                filter: { resourceTypeIn: types },
                size: 10,
            },
        }),
    }),
    withLoading()
)(withPagination(View, 'getCommunityContent', QUERY_NAME))
