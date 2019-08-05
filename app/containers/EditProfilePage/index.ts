import View from './View'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { IReduxState } from '../../lib/Module'

const mapStateToProps = (state: IReduxState) => ({
    user: state.app.user,
})

export default connect(
    mapStateToProps,
    { routeChangeAction, showNotificationAction }
)(View)