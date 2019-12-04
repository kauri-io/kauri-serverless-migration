import View from './View'
import { connect } from 'react-redux'
import { closeModalAction } from '../../../components/Modal/Module'
import { graphql, withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { getBookmarkFolders } from '../../../queries/Bookmark'
import withApolloError from '../../../lib/with-apollo-error'
import withLoading from '../../../lib/with-loading'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import {
    bookmarkAction,
    unbookmarkAction,
    labelRootFolder,
    createBookmarkFolderAction,
} from '../Module'

export default compose(
    withApollo,
    connect(
        null,
        {
            closeModalAction,
            bookmarkAction,
            unbookmarkAction,
            labelRootFolder,
            createBookmarkFolderAction,
        }
    ),
    graphql(getBookmarkFolders, {
        name: 'data',
        options: ({
            resourceId,
            resourceType,
        }: {
            resourceId: string
            resourceType: ResourceTypeInput
        }) => ({
            variables: {
                resourceId: { id: resourceId, type: resourceType },
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
