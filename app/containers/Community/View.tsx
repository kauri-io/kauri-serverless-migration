import React from 'react'
import {
    getCommunity_getCommunity,
    getCommunity_getCommunity_approved_CollectionDTO,
    getCommunity_getCommunity_approved_ArticleDTO,
} from '../../queries/__generated__/getCommunity'
import { getCommunityAndPendingArticles_searchArticles } from '../../queries/__generated__/getCommunityAndPendingArticles'
import CommunityHeader from './CommunityHeader'
import DisplayResources from './DisplayResources'
import Manage from './Manage'
import { propEq, path, any } from 'ramda'
import {
    curateCommunityResourcesAction as curateCommunityResources,
    acceptCommunityInvitationAction as acceptCommunityInvitation,
    transferArticleToCommunityAction as transferArticleToCommunity,
} from './Module'
import EmptyCollections from './EmptyStates/Collections'
import AlertViewComponent from '../../components/Modal/AlertView'
import AcceptCommunityInvitationModalContent from './AcceptCommunityInvitationModalContent'
import AddMemberModal from '../CreateCommunityForm/AddMemberModal'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import { recordViewMutation } from '../../queries/Utils'
import ApolloClient from 'apollo-client'
import HomepageResources from './HomepageResources'

import { routeChangeAction as routeChange } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction as showNotification } from '../../lib/Epics/ShowNotificationEpic'
import { openModalAction as openModal } from '../../components/Modal/Module'
import { sendInvitationVariables } from '../../queries/__generated__/sendInvitation'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

interface IProps {
    client?: ApolloClient<{}>
    acceptCommunityInvitationAction: typeof acceptCommunityInvitation
    currentUser: string
    isCommunityAdmin: boolean
    secret: null | string
    communityId: string
    data: {
        getCommunity: getCommunity_getCommunity
        searchArticles?: getCommunityAndPendingArticles_searchArticles
    }
    closeModalAction: () => void
    openModalAction: typeof openModal
    routeChangeAction: typeof routeChange
    removeResourceAction: (payload: removeResourceVariables) => void
    curateCommunityResourcesAction: typeof curateCommunityResources
    sendCommunityInvitationAction: (
        payload: Pick<sendInvitationVariables, 'id' | 'invitation'>
    ) => void
    transferArticleToCommunityAction: typeof transferArticleToCommunity
    showNotificationAction: typeof showNotification
}

interface IState {
    tab: number
}

const CollectionsPanel = ({
    collections,
    removeResourceAction,
    openModalAction,
    isMember,
    closeModalAction,
    getCommunity,
}) =>
    collections && collections.length > 0 ? (
        <DisplayResources
            removeResourceAction={removeResourceAction}
            openModalAction={openModalAction}
            closeModalAction={closeModalAction}
            isMember={isMember}
            type="collections"
            key="collections"
            resources={collections}
            communityId={getCommunity.id}
        />
    ) : (
        <EmptyCollections />
    )

class CommunityConnection extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            tab: 0,
        }
    }
    componentDidMount() {
        this.props.client &&
            this.props.client.mutate({
                fetchPolicy: 'no-cache',
                mutation: recordViewMutation,
                variables: {
                    resourceId: {
                        id: this.props.communityId,
                        type: 'COMMUNITY',
                    },
                },
            })

        const {
            data: { getCommunity },
            currentUser,
        } = this.props
        const isCreator = getCommunity.creatorId === currentUser

        const isMember =
            isCreator ||
            any(propEq('id', currentUser), getCommunity.members || [])

        if (typeof this.props.secret === 'string' && !isMember) {
            // AcceptCommunityInviteModal
            this.props.openModalAction({
                children: (
                    <AlertViewComponent
                        closeModalAction={this.props.closeModalAction}
                        confirmButtonAction={() =>
                            this.props.acceptCommunityInvitationAction({
                                id: this.props.communityId,
                                secret: this.props.secret || '',
                            })
                        }
                        confirmButtonText={'Accept'}
                        content={<AcceptCommunityInvitationModalContent />}
                        title={'Accept Invitation To Join Community'}
                    />
                ),
            })
        } else {
            this.props.closeModalAction()
        }
    }

    render() {
        if (!this.props.data || !this.props.data.getCommunity) {
            return null
        }
        const {
            secret,
            data: { getCommunity },
            currentUser,
            closeModalAction,
            openModalAction,
            routeChangeAction,
            // curateCommunityResourcesAction,
            acceptCommunityInvitationAction,
            removeResourceAction,
            transferArticleToCommunityAction,
            isCommunityAdmin,
        } = this.props
        const articles =
            getCommunity.approved &&
            getCommunity.approved.filter(
                i => i && i.__typename === 'ArticleDTO'
            )
        const collections =
            getCommunity.approved &&
            getCommunity.approved.filter(
                i => i && i.__typename === 'CollectionDTO'
            )
        const isCreator = getCommunity.creatorId === currentUser
        const isMember =
            isCreator ||
            any(propEq('id', currentUser), getCommunity.members || [])
        const homepage = getCommunity.homepage

        const openAddMemberModal = () =>
            this.props.openModalAction({
                children: (
                    <AddMemberModal
                        showNotificationAction={
                            this.props.showNotificationAction
                        }
                        confirmButtonAction={(invitation: any) => {
                            this.props.sendCommunityInvitationAction({
                                id: getCommunity.id,
                                invitation,
                            })
                            this.props.closeModalAction()
                        }}
                        closeModalAction={this.props.closeModalAction}
                    />
                ),
            })

        const firstCommunityHomepageSectionResources = path<any[]>([
            0,
            'resources',
        ])(homepage)

        const homepageExists =
            Array.isArray(homepage) &&
            homepage.length &&
            firstCommunityHomepageSectionResources &&
            firstCommunityHomepageSectionResources.length
        const canDisplayHomepage = homepageExists || isCommunityAdmin

        const getActualTabId = (id: number) =>
            id === 0 ? 0 : canDisplayHomepage ? id : id - 1

        return (
            <>
                <CommunityHeader
                    transferArticleToCommunityAction={
                        transferArticleToCommunityAction
                    }
                    secret={secret}
                    acceptCommunityInvitationAction={
                        acceptCommunityInvitationAction
                    }
                    id={String(getCommunity.id)}
                    avatar={getCommunity.avatar}
                    name={getCommunity.name}
                    website={getCommunity.website}
                    description={getCommunity.description}
                    background={String(
                        getCommunity.attributes &&
                            getCommunity.attributes.background
                    )}
                    social={getCommunity.social}
                    articles={
                        getCommunity.approved &&
                        (getCommunity.approved.filter(
                            resource =>
                                resource && resource.__typename === 'ArticleDTO'
                        ) as getCommunity_getCommunity_approved_ArticleDTO[])
                    }
                    collections={
                        getCommunity.approved &&
                        (getCommunity.approved.filter(
                            resource =>
                                resource &&
                                resource.__typename === 'CollectionDTO'
                        ) as getCommunity_getCommunity_approved_CollectionDTO[])
                    }
                    articleCount={(articles && articles.length) || 0}
                    collectionCount={(collections && collections.length) || 0}
                    tags={getCommunity.tags}
                    members={getCommunity.members}
                    isMember={isMember}
                    isCreator={isCreator}
                    isCommunityAdmin={isCommunityAdmin}
                    openModalAction={openModalAction}
                    closeModalAction={closeModalAction}
                    routeChangeAction={routeChangeAction}
                    // curateCommunityResourcesAction={curateCommunityResourcesAction}
                    openAddMemberModal={openAddMemberModal}
                />
                <Tabs
                    TabIndicatorProps={{ style: { height: 3 } }}
                    indicatorColor="primary"
                    centered={true}
                    value={this.state.tab}
                    onChange={(_e, tab) => this.setState({ tab })}
                >
                    {canDisplayHomepage && <Tab label="Home" />}
                    <Tab label={`Articles (${articles && articles.length})`} />
                    <Tab
                        label={`Collections (${collections &&
                            collections.length})`}
                    />
                    {(isCreator || isMember) && (
                        <Tab label="Manage Community" />
                    )}
                </Tabs>
                {this.state.tab === getActualTabId(0) && canDisplayHomepage && (
                    <HomepageResources
                        routeChangeAction={routeChangeAction}
                        id={String(getCommunity.id)}
                        homepage={homepage}
                        isCommunityAdmin={isCommunityAdmin}
                        key="home"
                        isLoggedIn={!!currentUser}
                        userId={currentUser}
                        openModalAction={openModalAction}
                    />
                )}
                {this.state.tab === getActualTabId(1) && (
                    <DisplayResources
                        removeResourceAction={removeResourceAction}
                        openModalAction={openModalAction}
                        closeModalAction={closeModalAction}
                        isMember={isMember}
                        key="articles"
                        type="articles"
                        resources={articles}
                        communityId={getCommunity.id}
                    />
                )}
                {this.state.tab === getActualTabId(2) && (
                    <CollectionsPanel
                        isMember={isMember}
                        collections={collections}
                        removeResourceAction={removeResourceAction}
                        openModalAction={openModalAction}
                        closeModalAction={closeModalAction}
                        getCommunity={getCommunity}
                    />
                )}
                {this.state.tab === getActualTabId(3) && (
                    <Manage
                        openAddMemberModal={openAddMemberModal}
                        communityId={String(getCommunity.id)}
                        key="manage"
                        isCommunityAdmin={isCommunityAdmin}
                        members={getCommunity.members}
                        pending={getCommunity.pending}
                        pendingUpdates={
                            this.props.data &&
                            this.props.data.searchArticles &&
                            this.props.data.searchArticles.content
                        }
                    />
                )}
            </>
        )
    }
}

export default CommunityConnection
