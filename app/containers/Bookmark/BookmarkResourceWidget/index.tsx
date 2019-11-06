import View from './View'
import { connect } from 'react-redux'
import { closeModalAction } from '../../../components/Modal/Module'
import { compose, graphql, withApollo } from 'react-apollo'
import { getBookmarkFolders } from '../../../queries/User'
import withApolloError from '../../../lib/with-apollo-error'
import withLoading from '../../../lib/with-loading'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import { bookmarkAction, unbookmarkAction, labelRootFolder } from '../Module'

export default compose(
    withApollo,
    connect(
        null,
        {
            closeModalAction,
            bookmarkAction,
            unbookmarkAction,
            labelRootFolder,
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
