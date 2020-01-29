import React from 'react'
import { compose } from 'react-apollo'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'
import { getCommunityAndPendingArticles_searchArticles } from '../../queries/__generated__/getCommunityAndPendingArticles'
import CommunityHeader from './CommunityHeader'
import { propEq, path, any } from 'ramda'
import {
    curateCommunityResourcesAction as curateCommunityResources,
    acceptCommunityInvitationAction as acceptCommunityInvitation,
    leaveCommunityAction,
    joinCommunityAction,
} from './Module'
import AlertViewComponent from '../../components/Modal/AlertView'
import AcceptCommunityInvitationModalContent from './AcceptCommunityInvitationModalContent'
import AddMemberModal from '../CreateCommunityForm/AddMemberModal'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import { recordViewMutation } from '../../queries/Utils'
import ApolloClient from 'apollo-client'
import HomepageResources from './HomepageTab'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getCommunityURL } from '../../lib/getURLs'
import { showNotificationAction as showNotification } from '../../lib/Epics/ShowNotificationEpic'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { sendInvitationVariables } from '../../queries/__generated__/sendInvitation'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Head from 'next/head'
import { Theme, withStyles } from '@material-ui/core/styles'
import {
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    DialogContentText,
} from '@material-ui/core'
import Loading from '../../components/Loading'
import ResourceTab from './ResourceTab'
import ManageTab from './ManageTab'
import MembersTab from './MembersTab'
import DiscussionList from '../Discussion/DiscussionList'
import { withRouter, Router } from 'next/router'
import DiscussionView from '../Discussion/DiscussionView'
import { ResourceTypeInput } from '../../__generated__/globalTypes'
import DiscussionCreateForm from '../Discussion/DiscussionForm/IndexCreate'
import DiscussionEditForm from '../Discussion/DiscussionForm/IndexEdit'

const styles = (theme: Theme) => ({
    tabs: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    dialogTopContainer: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
    },
    dialogTitle: {
        padding: theme.spacing(1),
        flexGrow: 1,
    },
    dialogContentContainer: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
    root: {
        justifyContent: 'center',
    },
    scroller: {
        flexGrow: 0,
    },
})

interface IProps {
    tab?: number
    classes: any
    client?: ApolloClient<{}>
    acceptCommunityInvitationAction: typeof acceptCommunityInvitation
    currentUser: string
    isCommunityAdmin: boolean
    isCommunityModerator: boolean
    secret: null | string
    communityId: string
    data: {
        loading: boolean
        getCommunity: getCommunity_getCommunity
        searchArticles?: getCommunityAndPendingArticles_searchArticles
    }
    closeModalAction: typeof closeModalAction
    openModalAction: typeof openModalAction
    routeChangeAction: typeof routeChangeAction
    removeResourceAction: (payload: removeResourceVariables) => void
    curateCommunityResourcesAction: typeof curateCommunityResources
    sendCommunityInvitationAction: (
        payload: Pick<sendInvitationVariables, 'id' | 'invitation'>
    ) => void
    showNotificationAction: typeof showNotification
    joinCommunityAction: typeof joinCommunityAction
    leaveCommunityAction: typeof leaveCommunityAction
    router: Router
    discussionId?: string
    discussionAction?: 'list' | 'view' | 'form'
}

interface IState {
    articlesCount: number
    collectionsCount: number
    tab: number
    canDisplayHomepage: boolean
}

class CommunityConnection extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            canDisplayHomepage: false,
            articlesCount: 0,
            collectionsCount: 0,
            tab: 0,
        }
        this.changeTab = this.changeTab.bind(this)
        this.recordView = this.recordView.bind(this)
        this.showAcceptInvitationModal = this.showAcceptInvitationModal.bind(
            this
        )
        this.openAddMemberModal = this.openAddMemberModal.bind(this)
        this.setCounter = this.setCounter.bind(this)
        this.setTab = this.setTab.bind(this)
    }

    componentDidMount() {
        this.recordView()
        this.showAcceptInvitationModal()
        const counters = this.setCounter()
        const tabs = this.setTab()

        this.setState({ ...counters, ...tabs })
    }

    recordView() {
        this.props.client &&
            this.props.client.mutate({
                fetchPolicy: 'no-cache',
                mutation: recordViewMutation,
                variables: {
                    resourceId: {
                        id: this.props.communityId,
                        type: 'COMMUNITY',
                    },
                    referrer: window.document.referrer
                        ? window.document.referrer
                        : null,
                },
            })
    }

    setCounter() {
        const articlesCount =
            (this.props.data.getCommunity.approvedId &&
                this.props.data.getCommunity.approvedId.filter(
                    i => i && (i.type === 'ARTICLE' || i.type === 'LINK')
                ).length) ||
            0

        const collectionsCount =
            (this.props.data.getCommunity.approvedId &&
                this.props.data.getCommunity.approvedId.filter(
                    i => i && i.type === 'COLLECTION'
                ).length) ||
            0

        return { articlesCount, collectionsCount }
    }

    showAcceptInvitationModal() {
        const isCreator =
            this.props.data.getCommunity.creatorId === this.props.currentUser
        const isMember =
            isCreator ||
            any(
                propEq('id', this.props.currentUser),
                this.props.data.getCommunity.members.content || []
            )

        if (typeof this.props.secret === 'string' && !isMember) {
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

    openAddMemberModal() {
        this.props.openModalAction({
            children: (
                <AddMemberModal
                    showNotificationAction={this.props.showNotificationAction}
                    confirmButtonAction={(invitation: any) => {
                        this.props.sendCommunityInvitationAction({
                            id: this.props.data.getCommunity.id,
                            invitation,
                        })
                        this.props.closeModalAction()
                    }}
                    closeModalAction={this.props.closeModalAction}
                />
            ),
        })
    }

    setTab() {
        const firstCommunityHomepageSectionResources = path<any[]>([
            0,
            'resources',
        ])(this.props.data.getCommunity.homepage)

        const homepageExists =
            Array.isArray(this.props.data.getCommunity.homepage) &&
            this.props.data.getCommunity.homepage.length &&
            firstCommunityHomepageSectionResources &&
            firstCommunityHomepageSectionResources.length
        const canDisplayHomepage =
            (homepageExists && homepageExists > 0) ||
            this.props.isCommunityAdmin
        const tab = Number(this.props.tab) || (canDisplayHomepage ? 0 : 1)

        return { canDisplayHomepage, tab }
    }

    changeTab(_event, tab: number) {
        const url = getCommunityURL({ ...this.props.data.getCommunity, tab })
        this.setState({ tab })
        this.props.router.push(url.href, url.as, { shallow: true })
    }

    render() {
        if (this.props.data.loading) {
            return <Loading />
        }

        const {
            classes,
            secret,
            data: { getCommunity },
            currentUser,
            closeModalAction,
            openModalAction,
            routeChangeAction,
            curateCommunityResourcesAction,
            acceptCommunityInvitationAction,
            isCommunityAdmin,
            isCommunityModerator,
            joinCommunityAction,
            discussionId,
            discussionAction = 'list',
        } = this.props

        const isCreator = getCommunity.creatorId === currentUser
        const isMember =
            isCreator ||
            any(propEq('id', currentUser), getCommunity.members.content || [])
        const homepage = getCommunity.homepage
        const name = getCommunity.name
        const id = getCommunity.id
        const url = getCommunityURL({ name, id }).as

        return (
            <>
                {/* Only if not discussion view*/}
                {!discussionId && (
                    <Head>
                        <title
                            dangerouslySetInnerHTML={{
                                __html: getCommunity.name,
                            }}
                        />
                        <meta
                            name="description"
                            content={`${getCommunity.description &&
                                getCommunity.description.slice(0, 151)}...`}
                        />
                        <link rel="canonical" href={url} />
                        <meta property="og:title" content={getCommunity.name} />
                        <meta property="og:site_name" content="kauri.io" />
                        <meta property="og:url" content={url} />
                        <meta
                            property="og:description"
                            content={`${getCommunity.description &&
                                getCommunity.description.substring(0, 100)}...`}
                        />
                        <meta property="og:type" content="article" />
                        {typeof getCommunity.avatar === 'string' && (
                            <meta
                                property="og:image"
                                content={getCommunity.avatar}
                            />
                        )}
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content={url} />
                        <meta
                            name="twitter:title"
                            content={getCommunity.name}
                        />
                        <meta
                            name="twitter:description"
                            content={`${getCommunity.description &&
                                getCommunity.description.substring(0, 100)}...`}
                        />
                        <meta name="twitter:creator" content="@kauri_io" />
                        {typeof getCommunity.avatar === 'string' && (
                            <meta
                                property="twitter:image"
                                content={getCommunity.avatar}
                            />
                        )}
                    </Head>
                )}

                <Dialog
                    open={getCommunity.status === 'CREATED'}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle
                        disableTypography
                        className={classes.dialogTopContainer}
                    >
                        <Typography
                            variant="h6"
                            className={classes.dialogTitle}
                        >
                            Creating Community
                        </Typography>
                    </DialogTitle>
                    <DialogContent
                        dividers
                        className={classes.dialogContentContainer}
                    >
                        <DialogContentText>
                            <Typography variant="h6" align="center">
                                We're setting up your community.
                            </Typography>
                            <Typography variant="h6" align="center">
                                In less than 10 seconds you will be able to
                                start adding and curating content.
                            </Typography>
                            <Loading />
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

                <CommunityHeader
                    secret={secret}
                    acceptCommunityInvitationAction={
                        acceptCommunityInvitationAction
                    }
                    id={String(getCommunity.id)}
                    avatar={getCommunity.avatar}
                    name={getCommunity.name}
                    website={getCommunity.website}
                    description={getCommunity.description}
                    background={
                        getCommunity.attributes &&
                        getCommunity.attributes.background
                    }
                    social={getCommunity.social}
                    articleCount={this.state.articlesCount}
                    collectionCount={this.state.collectionsCount}
                    tags={getCommunity.tags}
                    members={getCommunity.members}
                    isMember={isMember}
                    isCreator={isCreator}
                    isCommunityAdmin={isCommunityAdmin}
                    isCommunityModerator={isCommunityModerator}
                    openModalAction={openModalAction}
                    closeModalAction={closeModalAction}
                    routeChangeAction={routeChangeAction}
                    openAddMemberModal={this.openAddMemberModal}
                    userId={currentUser}
                    joinCommunityAction={joinCommunityAction}
                    curateCommunityResourcesAction={
                        curateCommunityResourcesAction
                    }
                />

                <Tabs
                    TabIndicatorProps={{ style: { height: 3 } }}
                    indicatorColor="primary"
                    value={this.state.tab}
                    className={classes.tabs}
                    variant="scrollable"
                    onChange={this.changeTab}
                    scrollButtons="auto"
                    classes={{ root: classes.root, scroller: classes.scroller }}
                >
                    <Tab
                        label="Home"
                        style={{
                            display: !this.state.canDisplayHomepage
                                ? 'none'
                                : '',
                        }}
                    />
                    <Tab
                        label={`Content (${this.state.articlesCount +
                            this.state.collectionsCount})`}
                    />
                    <Tab
                        label={`Discussions (${getCommunity.discussions.totalElements})`}
                    />
                    <Tab
                        label={`Members (${getCommunity.members.totalElements})`}
                    />
                    {(isCreator ||
                        isCommunityAdmin ||
                        isCommunityModerator) && (
                        <Tab label="Manage Community" />
                    )}
                </Tabs>

                {this.state.tab === 0 && this.state.canDisplayHomepage && (
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
                {this.state.tab === 1 && (
                    <ResourceTab
                        id={getCommunity.id}
                        types={['ARTICLE', 'LINK', 'COLLECTION']}
                    />
                )}
                {this.state.tab === 2 &&
                    discussionAction === 'view' &&
                    discussionId && (
                        <DiscussionView
                            parentId={getCommunity.id}
                            parentName={getCommunity.name}
                            parentType={ResourceTypeInput.COMMUNITY}
                            discussionId={discussionId}
                            permissionToDelete={
                                isCommunityAdmin || isCommunityModerator
                            }
                        />
                    )}
                {this.state.tab === 2 &&
                    discussionAction === 'form' &&
                    !discussionId && (
                        <DiscussionCreateForm
                            parentId={getCommunity.id}
                            parentName={getCommunity.name}
                            parentType={ResourceTypeInput.COMMUNITY}
                        />
                    )}
                {this.state.tab === 2 &&
                    discussionAction === 'form' &&
                    discussionId && (
                        <DiscussionEditForm
                            parentId={getCommunity.id}
                            parentName={getCommunity.name}
                            parentType={ResourceTypeInput.COMMUNITY}
                            discussionId={discussionId}
                        />
                    )}
                {this.state.tab === 2 && discussionAction === 'list' && (
                    <DiscussionList
                        parentId={getCommunity.id}
                        parentName={getCommunity.name}
                        parentType={ResourceTypeInput.COMMUNITY}
                    />
                )}
                {this.state.tab === 3 && <MembersTab id={getCommunity.id} />}
                {this.state.tab === 4 && (
                    <ManageTab
                        openAddMemberModal={this.openAddMemberModal}
                        communityId={getCommunity.id || ''}
                        key="manage"
                        isCommunityAdmin={isCommunityAdmin}
                        members={getCommunity.members}
                    />
                )}
            </>
        )
    }
}

export default compose(withRouter)(withStyles(styles)(CommunityConnection))
