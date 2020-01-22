import View from './View'
import { connect } from 'react-redux'
import {
    openModalAction,
    closeModalAction,
} from '../../../../components/Modal/Module'
import { routeChangeAction } from '../../../../lib/Epics/RouteChangeEpic'
import { createDiscussionAction, editDiscussionAction } from '../Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

export default connect(
    mapStateToProps,
    {
        openModalAction,
        closeModalAction,
        routeChangeAction,
        createDiscussionAction,
        editDiscussionAction,
    }
)(View)
