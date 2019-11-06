import View from './View'
import { connect } from 'react-redux'
import { openModalAction } from '../../../components/Modal/Module'
import { editBookmarkFolderAction, labelRootFolder } from '../Module'
import { withApollo, compose } from 'react-apollo'

export default compose(
    withApollo,
    connect(
        null,
        {
            openModalAction,
            editBookmarkFolderAction,
            labelRootFolder,
        }
    )
)(View)
