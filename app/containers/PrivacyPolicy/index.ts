import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../lib/with-loading'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import PrivacyPolicy from './View'

export default compose(
    connect(
        () => ({}),
        { routeChangeAction }
    ),
    withLoading()
)(PrivacyPolicy)
