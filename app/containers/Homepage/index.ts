import Homepage from './View'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { emailSubscribeAction } from '../EmailVerification/Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

export default connect(
    mapStateToProps,
    {
        routeChangeAction,
        emailSubscribeAction,
        showNotificationAction,
    }
)(Homepage)
