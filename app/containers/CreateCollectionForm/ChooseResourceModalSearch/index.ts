import View from './View'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

const mapStateToProps = ({}, {}) => {
    return {}
}

export default compose(connect(mapStateToProps, { routeChangeAction }))(View)
