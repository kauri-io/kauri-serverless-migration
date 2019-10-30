import { compose, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import View from './View'
import { submitExtenalLinkAction } from './Module'

const mapStateToProps = (
    state: IReduxState,
    props: { id: string; version: string }
) => ({
    communities: state.app && state.app.user && state.app.user.communities,
    id: props.id,
    userId: state.app && state.app.user && state.app.user.id,
    version: props.version,
})

export default compose(
    connect(
        mapStateToProps,
        {
            submitExtenalLinkAction,
            routeChangeAction,
        }
    ),
    withApollo
)(View)
