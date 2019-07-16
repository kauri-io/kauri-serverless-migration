import PublicProfile from './View'
import { compose, graphql } from 'react-apollo'
import {
    searchPersonalArticles,
    searchPersonalDrafts,
    getArticleTransfers,
} from '../../queries/Article'
import { getUserDetails, getOwnProfile } from '../../queries/User'
import { getCollectionsForUser } from '../../queries/Collection'
import { deleteDraftArticleAction } from '../ArticleDraft/DeleteDraftArticleModule'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import { connect } from 'react-redux'
import withLoading from '../../lib/with-loading'
import { withRouter } from 'next/router'
import {
    rejectArticleTransferAction,
    acceptArticleTransferAction,
} from './Manage/TransferModule'
import { removeMemberAction } from '../Community/Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            deleteDraftArticleAction,
            closeModalAction,
            openModalAction,
            rejectArticleTransferAction,
            acceptArticleTransferAction,
            removeMemberAction,
        }
    ),
    graphql(searchPersonalArticles, {
        name: 'ArticlesQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                userId,
                page: 0,
            },
        }),
    }),
    graphql(getUserDetails, {
        name: 'UserQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                userId,
                page: 0,
            },
        }),
    }),
    graphql(getOwnProfile, {
        name: 'OwnProfileQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                userId,
                page: 0,
            },
        }),
    }),
    graphql(getCollectionsForUser, {
        name: 'CollectionQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                sort: 'dateUpdated',
                dir: 'DESC',
                filter: {
                    ownerIdEquals: userId,
                },
            },
        }),
    }),
    graphql(searchPersonalDrafts, {
        name: 'DraftsQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                userId,
            },
        }),
    }),
    graphql(getArticleTransfers, {
        name: 'PendingTransfersQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                size: 100,
                recipient: userId,
            },
        }),
    }),
    withLoading()
)(withRouter(PublicProfile))