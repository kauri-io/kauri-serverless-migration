import View from './View'
import { connect } from 'react-redux'
import { createBookmarkFolderAction } from '../Module'
import { withApollo, compose } from 'react-apollo'

export default compose(
    withApollo,
    connect(
        null,
        {
            createBookmarkFolderAction,
        }
    )
)(View)
