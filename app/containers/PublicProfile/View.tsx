import React, { Component } from 'react'
import Collections from './Collections'
import Header from './Header'
import EditableHeader from './EditableHeader'
import Loading from '../../components/Loading'
import Published from './Published'
import Manage from './Manage'
import { getUserByUsername } from '../../queries/__generated__/getUserByUsername'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'
import { IDeleteDraftArticleAction } from '../ArticleDraft/DeleteDraftArticleModule'
import {
    IRejectArticleTransferAction,
    IFinaliseArticleTransferAction,
} from './Manage/TransferModule'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { pipe, path, defaultTo } from 'ramda'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'
import { Tabs, Tab } from '@material-ui/core'
import Links from './Links'

interface IProps {
    router: any
    userId: string
    UserQuery: getUserByUsername
    OwnProfileQuery: getMyProfile
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
    tab: number
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
            tab: 0,
        }
    }

    toggleEditing() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render() {
        const {
            UserQuery,
            OwnProfileQuery,
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

        const isHeaderLoaded = typeof UserQuery.getUserByUsername === 'object'

        const isEditing = this.state.isEditing
        const isOwner =
            UserQuery.getUserByUsername &&
            UserQuery.getUserByUsername.id === currentUser

        function getUserField<T>(field: string | string[], defaultValue: T): T {
            return pipe(
                path<T>(['getUserByUsername'].concat(field)),
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
                        articles={
                            UserQuery.getUserByUsername.articles.totalElements
                        }
                        collections={
                            UserQuery.getUserByUsername.collections
                                .totalElements
                        }
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
                {isHeaderLoaded ? (
                    <>
                        <Tabs
                            TabIndicatorProps={{ style: { height: 3 } }}
                            indicatorColor="primary"
                            centered={true}
                            value={this.state.tab}
                            onChange={(_e, tab) => this.setState({ tab })}
                        >
                            <Tab
                                label={`Articles (${UserQuery.getUserByUsername.articles.totalElements})`}
                            />
                            <Tab
                                label={`Collections (${UserQuery.getUserByUsername.collections.totalElements})`}
                            />
                            <Tab label={`Links`} />
                            {isOwner && <Tab label="Manage" />}
                        </Tabs>
                        {this.state.tab === 0 && (
                            <Published
                                userId={getUserField<string>('id', '')}
                                type="published"
                                isOwner={!!isOwner}
                                isLoggedIn={!!currentUser}
                                openModalAction={openModalAction}
                            />
                        )}
                        {this.state.tab === 1 && (
                            <Collections
                                userId={getUserField<string>('id', '')}
                                isLoggedIn={!!currentUser}
                                routeChangeAction={routeChangeAction}
                            />
                        )}
                        {this.state.tab === 2 && (
                            <Links
                                userId={getUserField<string>('id', '')}
                                isLoggedIn={!!currentUser}
                                routeChangeAction={routeChangeAction}
                            />
                        )}
                        {this.state.tab === 3 && isOwner && (
                            <Manage
                                userId={getUserField<string>('id', '')}
                                ownProfile={OwnProfileQuery}
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
                        )}
                    </>
                ) : !isHeaderLoaded ? null : (
                    <Loading />
                )}
            </React.Fragment>
        )
    }
}

export default PublicProfile
