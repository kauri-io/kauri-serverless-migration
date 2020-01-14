import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import { searchAwaitingApproval } from '../../../queries/Article'
import withApolloError from '../../../lib/with-apollo-error'
import { getCommunityContent } from '../../../queries/Community'

export default compose(
    withApollo,
    connect(
        null,
        {}
    ),
    graphql(searchAwaitingApproval, {
        name: 'searchArticles',
        options: ({ communityId }: { communityId: string }) => ({
            variables: {
                page: 0,
                size: 20,
                owners: [communityId],
            },
        }),
    }),
    graphql(getCommunityContent, {
        name: 'getCommunityContent',
        options: ({ communityId }: { communityId: string }) => ({
            variables: {
                page: 0,
                size: 20,
                id: communityId,
                filter: {
                    statusEquals: 'PENDING',
                },
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
