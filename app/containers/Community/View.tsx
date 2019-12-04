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
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
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
import { changeOwnerExtenalLinkAction } from '../CreateLink/Module'

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
    transferArticleToCommunityAction: typeof transferArticleToCommunity
    changeOwnerExtenalLinkAction: typeof changeOwnerExtenalLinkAction
    showNotificationAction: typeof showNotification
}

interface IState {
    tab: number
}

const CollectionsPanel = ({
    collections,
    removeResourceAction,
    isMember,
    getCommunity,
}) =>
    collections && collections.length > 0 ? (
        <DisplayResources
            removeResourceAction={removeResourceAction}
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
            changeOwnerExtenalLinkAction,
            isCommunityAdmin,
        } = this.props

        const articlesAndLinks =
            getCommunity.approved &&
            getCommunity.approved.filter(
                i =>
                    i &&
                    (i.__typename === 'ArticleDTO' ||
                        i.__typename === 'ExternalLinkDTO')
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

        const { classes } = this.props

        return (
            <>
                <Head>
                    <title
                        dangerouslySetInnerHTML={{ __html: getCommunity.name }}
                    />
                    <meta
                        name="description"
                        content={String(getCommunity.description)}
                    />
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
                    transferArticleToCommunityAction={
                        transferArticleToCommunityAction
                    }
                    changeOwnerExtenalLinkAction={changeOwnerExtenalLinkAction}
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
                    articles={
                        getCommunity.approved &&
                        (getCommunity.approved.filter(
                            resource =>
                                resource &&
                                (resource.__typename === 'ArticleDTO' ||
                                    resource.__typename === 'ExternalLinkDTO')
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
                    articleCount={
                        (articlesAndLinks && articlesAndLinks.length) || 0
                    }
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
                    userId={currentUser}
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
                        label={`Articles (${articlesAndLinks &&
                            articlesAndLinks.length})`}
                    />
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
                    // classes?: any
                    // type?: string
                    // resources?: any
                    // communityId: string | null
                    // isMember: boolean
                    // isLoggedIn: boolean
                    // closeModalAction?: () => void
                    // openModalAction: (children: any) => void
                    // routeChangeAction: (route: string) => void
                    // removeResourceAction?: (payload: removeResourceVariables) => void

                    <DisplayResources
                        removeResourceAction={removeResourceAction}
                        isMember={isMember}
                        key="articlesAndLinks"
                        type="articlesAndLinks"
                        resources={articlesAndLinks}
                        communityId={getCommunity.id}
                    />
                )}
                {this.state.tab === getActualTabId(2) && (
                    <CollectionsPanel
                        isMember={isMember}
                        collections={collections}
                        removeResourceAction={removeResourceAction}
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

export default withStyles(styles)(CommunityConnection)
