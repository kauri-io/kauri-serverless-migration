import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import { getDiscussion } from '../../queries/Discussion'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
    }
}

export default compose(
    withApollo,
    connect(
        mapStateToProps,
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
