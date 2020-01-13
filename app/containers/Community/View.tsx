import React from 'react'
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
import DiscussionTab from './DiscussionTab/View'

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
})

interface IProps {
    classes: any
    client?: ApolloClient<{}>
    acceptCommunityInvitationAction: typeof acceptCommunityInvitation
    currentUser: string
    isCommunityAdmin: boolean
    isCommunityModerator: boolean
    secret: null | string
    communityId: string
    data: {
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
}

interface IState {
    tab: number
}

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
                    referrer: window.document.referrer
                        ? window.document.referrer
                        : null,
                },
            })

        const {
            data: { getCommunity },
            currentUser,
        } = this.props
        const isCreator = getCommunity.creatorId === currentUser

        const isMember =
            isCreator ||
            any(propEq('id', currentUser), getCommunity.members.content || [])

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
            curateCommunityResourcesAction,
            acceptCommunityInvitationAction,
            isCommunityAdmin,
            isCommunityModerator,
            joinCommunityAction,
        } = this.props

        const articlesCount =
            (getCommunity.approvedId &&
                getCommunity.approvedId.filter(
                    i => i && (i.type === 'ARTICLE' || i.type === 'LINK')
                ).length) ||
            0

        const collectionsCount =
            (getCommunity.approvedId &&
                getCommunity.approvedId.filter(
                    i => i && i.type === 'COLLECTION'
                ).length) ||
            0

        const isCreator = getCommunity.creatorId === currentUser
        const isMember =
            isCreator ||
            any(propEq('id', currentUser), getCommunity.members.content || [])
        const homepage = getCommunity.homepage
        const name = getCommunity.name
        const id = getCommunity.id
        const url = getCommunityURL({ name, id }).as

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

        const { classes } = this.props

        return (
            <>
                <Head>
                    <title
                        dangerouslySetInnerHTML={{ __html: getCommunity.name }}
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
                    <meta name="twitter:title" content={getCommunity.name} />
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

                {/* Dialog used to prevent the access to the community page until the community is mined (saved on-chain).
                     After being mined, status changes to OPENED
                */}
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
                    articleCount={articlesCount}
                    collectionCount={collectionsCount}
                    tags={getCommunity.tags}
                    members={getCommunity.members}
                    isMember={isMember}
                    isCreator={isCreator}
                    isCommunityAdmin={isCommunityAdmin}
                    isCommunityModerator={isCommunityModerator}
                    openModalAction={openModalAction}
                    closeModalAction={closeModalAction}
                    routeChangeAction={routeChangeAction}
                    openAddMemberModal={openAddMemberModal}
                    userId={currentUser}
                    joinCommunityAction={joinCommunityAction}
                    curateCommunityResourcesAction={curateCommunityResourcesAction}
                />
                <Tabs
                    TabIndicatorProps={{ style: { height: 3 } }}
                    indicatorColor="primary"
                    centered={true}
                    value={this.state.tab}
                    className={classes.tabs}
                    onChange={(_e, tab) => this.setState({ tab })}
                >
                    {canDisplayHomepage && <Tab label="Home" />}
                    <Tab
                        label={`Content (${articlesCount + collectionsCount})`}
                    />
                    <Tab label={`Discussions (${0})`} />
                    <Tab
                        label={`Members (${getCommunity.members.totalElements})`}
                    />
                    {(isCreator ||
                        isCommunityAdmin ||
                        isCommunityModerator) && (
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
                    <ResourceTab
                        id={getCommunity.id}
                        types={['ARTICLE', 'LINK', 'COLLECTION']}
                    />
                )}
                {this.state.tab === getActualTabId(2) && <DiscussionTab />}
                {this.state.tab === getActualTabId(3) && (
                    <MembersTab id={getCommunity.id} />
                )}
                {this.state.tab === getActualTabId(4) && (
                    <ManageTab
                        openAddMemberModal={openAddMemberModal}
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

export default withStyles(styles)(CommunityConnection)
