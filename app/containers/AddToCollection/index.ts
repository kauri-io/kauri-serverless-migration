import View from './View'
import { connect } from 'react-redux'
import { closeModalAction } from '../../components/Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { addResourceToCollectionAction } from './Module'

export default connect(
    (state: { app: { user: { id: string } } }) => ({
        userId: state.app && state.app.user && state.app.user.id,
    }),
    {
        addResourceToCollectionAction,
        closeModalAction,
        routeChangeAction,
    }
)(View)
