
import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import { getDiscussion } from '../../../queries/Discussion'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { createDiscussionAction, editDiscussionAction } from '../Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            openModalAction,
            closeModalAction,
            routeChangeAction,
            createDiscussionAction,
            editDiscussionAction,
        }
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
