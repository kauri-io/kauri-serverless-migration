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
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { ICollection } from '../CreateCollectionForm/ChooseCollectionModal'
import { pipe, path, defaultTo } from 'ramda'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'

interface IProps {
    router: any
    userId: string
    UserQuery: getUser
    ArticlesQuery: searchPersonalArticles
    CollectionQuery: getCollectionsForUser
    DraftsQuery: searchPersonalArticles
    OwnProfileQuery: getMyProfile
    PendingTransfersQuery: searchPendingArticles_searchArticles
    resendEmailVerificationAction: () => void
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    routeChangeAction: (route: string) => void
    saveUserDetailsAction: (
        payload: any,
        callback: any
    ) => ISaveUserDetailActionType
    currentUser: string
    deleteDraftArticleAction: IDeleteDraftArticleAction
    rejectArticleTransferAction: IRejectArticleTransferAction
    acceptArticleTransferAction: IFinaliseArticleTransferAction
    closeModalAction: typeof closeModalAction
    openModalAction: typeof openModalAction
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
            saveUserDetailsAction,
            showNotificationAction,
            resendEmailVerificationAction,
        } = this.props

        const isHeaderLoaded =
            typeof UserQuery.getUser === 'object' &&
            typeof ArticlesQuery.searchArticles === 'object' &&
            typeof CollectionQuery.searchCollections === 'object'

        const areListsLoaded = typeof DraftsQuery.searchArticles === 'object'

        const isEditing = this.state.isEditing
        const isOwner =
            UserQuery.getUser && UserQuery.getUser.id === currentUser
        const articlesCount = pipe(
            path<number>(['searchArticles', 'totalElements']),
            defaultTo(0)
        )(ArticlesQuery)

        function getUserField<T>(field: string | string[], defaultValue: T): T {
            return pipe(
                path<T>(['getUser'].concat(field)),
                defaultTo(defaultValue)
            )(UserQuery)
        }

        return (
            <React.Fragment>
                {!isHeaderLoaded ? (
                    <Loading />
                ) : isEditing ? (
                    <EditableHeader
                        OwnProfile={OwnProfileQuery}
                        saveUserDetailsAction={saveUserDetailsAction}
                        routeChangeAction={routeChangeAction}
                        showNotificationAction={showNotificationAction}
                        router={this.props.router}
                        toggleEditing={() => this.toggleEditing()}
                        resendEmailVerificationAction={
                            resendEmailVerificationAction
                        }
                    />
                ) : (
                    <Header
                        articles={articlesCount}
                        collections={pipe(
                            path<ICollection[]>([
                                'searchCollections',
                                'content',
                            ]),
                            defaultTo([])
                        )(CollectionQuery)}
                        currentUser={currentUser}
                        id={getUserField<string>('id', '')}
                        avatar={
                            this.state.avatar ||
                            getUserField<string>('avatar', '')
                        }
                        username={
                            this.state.username ||
                            getUserField<string>('username', '')
                        }
                        name={
                            this.state.name || getUserField<string>('name', '')
                        }
                        title={
                            this.state.title ||
                            getUserField<string>('title', '')
                        }
                        website={
                            this.state.website ||
                            getUserField<string>('website', '')
                        }
                        twitter={
                            this.state.twitter ||
                            getUserField<string>(['social', 'twitter'], '')
                        }
                        github={
                            this.state.github ||
                            getUserField<string>(['social', 'github'], '')
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
                                name: `Articles (${articlesCount})`,
                            },
                            {
                                name: `Collections (${pipe(
                                    path<number>([
                                        'searchCollections',
                                        'totalElements',
                                    ]),
                                    defaultTo(0)
                                )(CollectionQuery)})`,
                            },
                            isOwner
                                ? {
                                      name: 'Manage',
                                  }
                                : null,
                        ]}
                        panels={[
                            <Published
                                data={ArticlesQuery as any}
                                type="published"
                                isOwner={!!isOwner}
                                isLoggedIn={!!currentUser}
                                openModalAction={openModalAction}
                            />,
                            <Collections
                                data={CollectionQuery}
                                isLoggedIn={!!currentUser}
                                routeChangeAction={routeChangeAction}
                            />,
                            isOwner ? (
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
                                        getUserField<string>('user', '') ===
                                        currentUser
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
                            ) : (
                                <div></div>
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
