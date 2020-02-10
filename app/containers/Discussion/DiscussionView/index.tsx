import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import {
    closeDiscussionAction,
    reopenDiscussionAction,
    deleteDiscussionAction,
} from '../Module'
import {
    voteAction,
    addCommentAction,
    editCommentAction,
    deleteCommentAction,
} from '../../Article/Module'
import { getDiscussion } from '../../../queries/Discussion'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        user: state.app && state.app.user,
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
            closeDiscussionAction,
            reopenDiscussionAction,
            deleteDiscussionAction,
            voteAction,
            addCommentAction,
            editCommentAction,
            deleteCommentAction,
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
