import PublicProfile from './View'
import { compose, graphql } from 'react-apollo'
import { getUserByUsername, getOwnProfile } from '../../queries/User'
import { deleteDraftArticleAction } from '../ArticleDraft/DeleteDraftArticleModule'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import { connect } from 'react-redux'
import withLoading from '../../lib/with-loading'
import { withRouter } from 'next/router'
import {
    rejectArticleTransferAction,
    acceptArticleTransferAction,
} from './Manage/TransferModule'
import {
    removeGrantedMemberAction,
    leaveCommunityAction,
} from '../Community/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { saveUserDetailsAction } from '../../components/EditProfileForm/Module'
import { resendEmailVerificationAction } from '../EmailVerification/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            deleteDraftArticleAction,
            closeModalAction,
            openModalAction,
            rejectArticleTransferAction,
            acceptArticleTransferAction,
            removeGrantedMemberAction,
            leaveCommunityAction,
            saveUserDetailsAction,
            resendEmailVerificationAction,
            showNotificationAction,
            routeChangeAction,
        }
    ),
    graphql(getUserByUsername, {
        name: 'UserQuery',
        options: ({ username }: { username: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                username,
                page: 0,
            },
        }),
    }),
    graphql(getOwnProfile, {
        name: 'OwnProfileQuery',
        options: () => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
            },
        }),
    }),
    withLoading()
)(withRouter(PublicProfile))
