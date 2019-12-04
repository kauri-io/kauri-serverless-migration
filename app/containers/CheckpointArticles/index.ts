import View from './View'
import { connect } from 'react-redux'
import { checkpointArticlesAction } from './Module'
import { IReduxState } from '../../lib/Module'

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
})

export default connect(mapStateToProps, { checkpointArticlesAction })(View)
