import { connect } from 'react-redux'
import { flowRight as compose } from 'lodash'
import Link from './View'

export default compose(
    connect(
        () => ({}),
        { routeChangeAction: payload => ({ type: 'ROUTE_CHANGE', payload }) }
    )
)(Link)
