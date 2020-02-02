import View from './View'
import { connect } from 'react-redux'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { createDiscussionAction, editDiscussionAction } from '../Module'
import { withApollo, compose } from 'react-apollo'

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
            showNotificationAction,
        }
    )
)(View)
