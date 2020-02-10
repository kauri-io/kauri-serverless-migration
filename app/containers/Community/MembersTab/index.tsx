import View from './View'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import { getCommunityMembers } from '../../../queries/Community'

const QUERY_NAME = 'getCommunityMembersQuery'

export default compose(
    connect(
        null,
        {}
    ),
    graphql(getCommunityMembers, {
        name: QUERY_NAME,
        options: ({ id }: { id: string }) => ({
            fetchPolicy: 'network-only',
            variables: {
                id,
                filter: {},
                size: 10,
                sort: 'role',
                dir: 'ASC',
            },
        }),
    }),
    withLoading()
)(withPagination(View, 'getCommunityMembers', QUERY_NAME))
