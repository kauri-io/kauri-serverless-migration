import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../../lib/with-loading'
import withApolloError from '../../../../lib/with-apollo-error'
import withPagination from '../../../../lib/with-pagination'
import {
    openModalAction,
    closeModalAction,
} from '../../../../components/Modal/Module'
import { routeChangeAction } from '../../../../lib/Epics/RouteChangeEpic'
import {
    createDiscussionAction,
    editDiscussionAction,
    closeDiscussionAction,
    reopenDiscussionAction,
    deleteDiscussionAction,
} from '../Module'
import { searchDiscussions } from '../../../../queries/Discussion'
import { ResourceTypeInput } from '../../../../__generated__/globalTypes'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

const QUERY_NAME = 'data'

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
            closeDiscussionAction,
            reopenDiscussionAction,
            deleteDiscussionAction,
        }
    ),
    graphql(searchDiscussions, {
        name: QUERY_NAME,
        options: ({
            parentId,
            parentType,
        }: {
            parentId: string
            parentType: ResourceTypeInput
        }) => ({
            variables: {
                filter: {
                    parentResourceTypeIn: [parentType],
                    parentResourceIdIn: [parentId],
                    statusIn: ['OPENED', 'CLOSED'],
                },
                size: 10,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(withPagination(View, 'searchDiscussions', QUERY_NAME))
