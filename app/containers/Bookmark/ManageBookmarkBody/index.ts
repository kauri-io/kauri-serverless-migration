import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { getBookmarks } from '../../../queries/Bookmark'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import {
    labelRootFolder,
    editBookmarkFolderAction,
    deleteBookmarkFolderAction,
} from '../Module'
import withPagination from '../../../lib/with-pagination'

const QUERY_NAME = 'BookmarkQuery'

export default compose(
    withApollo,
    connect(
        null,
        {
            openModalAction,
            closeModalAction,
            routeChangeAction,
            labelRootFolder,
            editBookmarkFolderAction,
            deleteBookmarkFolderAction,
        }
    ),
    graphql(getBookmarks, {
        name: QUERY_NAME,
        options: ({ folder }: { folder: string }) => ({
            variables: {
                folder,
                size: 5,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(withPagination(View, 'getBookmarks', QUERY_NAME))
