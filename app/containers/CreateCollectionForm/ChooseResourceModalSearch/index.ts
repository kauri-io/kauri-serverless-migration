import View from './View'
import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

const mapStateToProps = ({}, {}) => {
    return {}
}

export default compose(
    connect(
        mapStateToProps,
        { routeChangeAction }
    )
)(View)
