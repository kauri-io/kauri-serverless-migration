import View from './View'
import { connect } from 'react-redux'
import { compose } from 'react-apollo'
import {
    approveResourceAction,
    removeResourceAction
} from '../../Module'


export default compose(
    connect(
        null,
        {
            approveResourceAction,
            removeResourceAction,
        }
    ),
)(View)
