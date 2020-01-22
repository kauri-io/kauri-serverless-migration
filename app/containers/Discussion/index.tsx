import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import { getDiscussion } from '../../queries/Discussion'

export default compose(
    withApollo,
    connect(
        null,
        {}
    ),
    graphql(getDiscussion, {
        name: 'data',
        options: ({ discussionId }: { discussionId: string }) => ({
            variables: {
                id: discussionId,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
