import React, { Component } from 'react'
import Tabs from '../../components/Tabs'
import Collections from './Collections'
import Header from './Header'
import EditableHeader from './EditableHeader'
import Loading from '../../components/Loading'
import Published from './Published/View'
import Manage from './Manage'
import { getUser } from '../../queries/__generated__/getUser'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'
import { searchPersonalArticles } from '../../queries/__generated__/searchPersonalArticles'
import { getCollectionsForUser } from '../../queries/__generated__/getCollectionsForUser'
import { searchPendingArticles_searchArticles } from '../../queries/__generated__/searchPendingArticles'
import { IDeleteDraftArticleAction } from '../ArticleDraft/DeleteDraftArticleModule'
import {
    IRejectArticleTransferAction,
    IFinaliseArticleTransferAction,
} from './Manage/TransferModule'
import {
    IOpenModalAction,
    ICloseModalAction,
} from '../../components/Modal/Module'

interface IProps {
    router: any
    userId: string
    UserQuery: getUser
    ArticlesQuery: searchPersonalArticles
    CollectionQuery: getCollectionsForUser
    DraftsQuery: searchPersonalArticles
    OwnProfileQuery: getMyProfile
    PendingTransfersQuery: searchPendingArticles_searchArticles
    routeChangeAction: (route: string) => void
    currentUser: string
    deleteDraftArticleAction: IDeleteDraftArticleAction
    rejectArticleTransferAction: IRejectArticleTransferAction
    acceptArticleTransferAction: IFinaliseArticleTransferAction
    closeModalAction: ICloseModalAction
    openModalAction: IOpenModalAction
    isLoggedIn: boolean
    hostName: string
    removeMemberAction: any
}

interface IState {
    isEditing: boolean
    avatar: string
    username: string
    name: string
    title: string
    website: string
    twitter: string
    github: string
}

class PublicProfile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            isEditing: false,
            avatar: '',
            username: '',
            name: '',
            title: '',
            website: '',
            twitter: '',
            github: '',
        }
    }

    toggleEditing() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render() {
        const {
            UserQuery,
            ArticlesQuery,
            CollectionQuery,
            DraftsQuery,
            OwnProfileQuery,
            PendingTransfersQuery,
            routeChangeAction,
            currentUser,
            deleteDraftArticleAction,
            rejectArticleTransferAction,
            acceptArticleTransferAction,
            closeModalAction,
            openModalAction,
            hostName,
            removeMemberAction,
        } = this.props

        const isHeaderLoaded =
            typeof UserQuery.getUser === 'object' &&
            typeof ArticlesQuery.searchArticles === 'object' &&
            typeof CollectionQuery.searchCollections === 'object'

        const areListsLoaded = typeof DraftsQuery.searchArticles === 'object'

        const isEditing = this.state.isEditing
        const isOwner =
            UserQuery.getUser && UserQuery.getUser.id === currentUser

        return (
            <React.Fragment>
                {!isHeaderLoaded ? (
                    <Loading />
                ) : isEditing ? (
                    <EditableHeader
                        router={this.props.router}
                        toggleEditing={() => this.toggleEditing()}
                    />
                ) : (
                    <Header
                        articles={ArticlesQuery.searchArticles.totalElements}
                        collections={CollectionQuery.searchCollections.content}
                        currentUser={currentUser}
                        id={UserQuery.getUser.id}
                        avatar={this.state.avatar || UserQuery.getUser.avatar}
                        username={
                            this.state.username || UserQuery.getUser.username
                        }
                        name={this.state.name || UserQuery.getUser.name}
                        title={this.state.title || UserQuery.getUser.title}
                        website={
                            this.state.website || UserQuery.getUser.website
                        }
                        twitter={
                            this.state.twitter ||
                            (UserQuery.getUser.social &&
                                UserQuery.getUser.social.twitter)
                        }
                        github={
                            this.state.github ||
                            (UserQuery.getUser.social &&
                                UserQuery.getUser.social.github)
                        }
                        toggleEditing={() => this.toggleEditing()}
                        hostName={hostName}
                    />
                )}
                {isHeaderLoaded && areListsLoaded ? (
                    <Tabs
                        dark
                        router={this.props.router}
                        tabs={[
                            {
                                name: `Articles (${ArticlesQuery.searchArticles.totalElements})`,
                            },
                            {
                                name: `Collections (${CollectionQuery.searchCollections.totalElements})`,
                            },
                            isOwner && {
                                name: 'Manage',
                            },
                        ]}
                        panels={[
                            <Published
                                data={ArticlesQuery}
                                type="published"
                                routeChangeAction={routeChangeAction}
                                isOwner={isOwner}
                                isLoggedIn={!!currentUser}
                                openModalAction={openModalAction}
                            />,
                            <Collections
                                isLoggedIn={!!currentUser}
                                data={CollectionQuery}
                                routeChangeAction={routeChangeAction}
                            />,
                            isOwner && (
                                <Manage
                                    userId={this.props.userId}
                                    ownProfile={OwnProfileQuery}
                                    draftsQuery={DraftsQuery}
                                    transfersQuery={PendingTransfersQuery}
                                    type="manage"
                                    removeMemberAction={removeMemberAction}
                                    routeChangeAction={routeChangeAction}
                                    deleteDraftArticleAction={
                                        deleteDraftArticleAction
                                    }
                                    isOwner={
                                        UserQuery.getUser.id === currentUser
                                    }
                                    isLoggedIn={!!currentUser}
                                    closeModalAction={closeModalAction}
                                    openModalAction={openModalAction}
                                    rejectArticleTransferAction={
                                        rejectArticleTransferAction
                                    }
                                    acceptArticleTransferAction={
                                        acceptArticleTransferAction
                                    }
                                />
                            ),
                        ]}
                    />
                ) : !isHeaderLoaded ? null : (
                    <Loading />
                )}
            </React.Fragment>
        )
    }
}

export default PublicProfile