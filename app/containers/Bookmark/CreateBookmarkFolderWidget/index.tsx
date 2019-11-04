import View from './View'
import { connect } from 'react-redux'
import { createBookmarkFolderAction } from '../Module'

export default connect(
    null,
    {
        createBookmarkFolderAction,
    }
)(View)
