import View from './View'
import { connect } from 'react-redux'
import { closeModalAction } from '../../../components/Modal/Module'
import { deleteBookmarkFolderAction } from '../Module'
import { withApollo, compose } from 'react-apollo'

export default compose(
    withApollo,
    connect(
        null,
        {
            closeModalAction,
            deleteBookmarkFolderAction,
        }
    )
)(View)
