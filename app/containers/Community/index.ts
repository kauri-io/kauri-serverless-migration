import View from './View'
import { connect } from 'react-redux'
import { graphql, compose, withApollo } from 'react-apollo'
import { getCommunity } from '../../queries/Community'
import withLoading from '../../lib/with-loading'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    curateCommunityResourcesAction,
    acceptCommunityInvitationAction,
    sendCommunityInvitationAction,
    removeResourceAction,
    joinCommunityAction,
    leaveCommunityAction,
} from './Module'

const mapStateToProps = (state: IReduxState, ownProps: any) => {
    return {
        currentUser: state.app && state.app.user && state.app.user.id,
        hostName: state.app && state.app.hostName,
        isCommunityAdmin:
            state.app &&
            state.app.user &&
            state.app &&
            state.app.user.communities.find(
                ({ community }) => community.id === ownProps.communityId
            ) &&
            (
                state.app &&
                (state.app.user.communities.find(
                    ({ community }) => community.id === ownProps.communityId
                ) as any)
            ).role === 'ADMIN',
        isCommunityModerator:
            state.app &&
            state.app.user &&
            state.app &&
            state.app.user.communities.find(
                ({ community }) => community.id === ownProps.communityId
            ) &&
            (
                state.app &&
                (state.app.user.communities.find(
                    ({ community }) => community.id === ownProps.communityId
                ) as any)
            ).role === 'CURATOR',
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            acceptCommunityInvitationAction,
            closeModalAction,
            curateCommunityResourcesAction,
            openModalAction,
            removeResourceAction,
            routeChangeAction,
            sendCommunityInvitationAction,
            showNotificationAction,
            joinCommunityAction,
            leaveCommunityAction,
        }
    ),
    graphql(getCommunity, {
        options: ({ communityId }: { communityId: string }) => ({
            variables: {
                id: communityId,
            },
        }),
    }),
    withLoading()
)(View)
