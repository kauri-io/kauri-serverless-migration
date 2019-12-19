import View from './View'
import { connect } from 'react-redux'
import { checkpointArticlesAction } from './Module'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
    isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
})

export default connect(
    mapStateToProps,
    {
        checkpointArticlesAction,
        routeChangeAction,
    }
)(View)
