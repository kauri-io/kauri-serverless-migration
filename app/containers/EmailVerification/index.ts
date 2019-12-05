import View from './View'
import { connect } from 'react-redux'
import { flowRight as compose } from 'lodash'
import { verifyEmailAction, resendEmailVerificationAction } from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

const mapStateToProps = () => ({})

export default compose(
    connect(
        mapStateToProps,
        {
            verifyEmailAction,
            resendEmailVerificationAction,
            routeChangeAction,
        }
    )
)(View)
