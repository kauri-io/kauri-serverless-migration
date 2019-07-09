import View from './View'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { IReduxState } from '../../lib/Module'
import { WithRouterProps } from 'next/router'
interface IProps {
    router: WithRouterProps
}

const mapStateToProps = (state: IReduxState, ownProps: IProps) => ({
    userId: state.app.user && state.app.user.id,
    user: state.app.user,
})

export default connect(
    mapStateToProps,
    { routeChangeAction, showNotificationAction }
)(View)
