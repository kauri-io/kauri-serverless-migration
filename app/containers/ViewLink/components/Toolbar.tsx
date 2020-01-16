import React from 'react'
import CommentIcon from '@material-ui/icons/Comment'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddToCollection from '../../AddToCollection'
import {
    ResourceTypeInput,
    ResourceIdentifierInput,
} from '../../../__generated__/globalTypes'
import BookmarkResource from '../../../containers/Bookmark/BookmarkResourceWidget'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import DeleteIcon from '@material-ui/icons/Delete'
import PencilIcon from '@material-ui/icons/Edit'
import { getArticleURL } from '../../../lib/getURLs'
import { BodyCard } from '../../../components/Typography'
import AlertView from '../../../components/Modal/AlertView'
import {
    Popper,
    MenuItem,
    ClickAwayListener,
    Paper,
    MenuList,
} from '@material-ui/core'
import ChooseResourceModal from '../../ChooseResourceModal'
import { searchResultsAutocomplete } from '../../../queries/Search'
import { initiateArticleTransferAction } from '../../Article/Module'
import PublishingSelector from '../../PublishingSelector'
import { curateCommunityResourcesAction } from '../../Community/Module'

interface IProps {
    classes: any
    comments?: number
    openModalAction: (children?: any) => void
    closeModalAction: () => void
    initiateArticleTransferAction?: typeof initiateArticleTransferAction
    curateCommunityResourcesAction: typeof curateCommunityResourcesAction
    isBookmarked
    routeChangeAction
    deleteDraftArticleAction?: ({
        id,
        version,
    }: {
        id: string
        version: number
    }) => void
    isLoggedIn: boolean
    type: ResourceTypeInput
    id: string
    isAuthor: boolean | null
    isOwner: boolean | null
    version: number
    context?: 'draft' | 'submitted-update'
    userId: string
    communities: any
}

const Toolbar = ({
    classes,
    comments,
    openModalAction,
    closeModalAction,
    initiateArticleTransferAction,
    curateCommunityResourcesAction,
    isBookmarked,
    routeChangeAction,
    deleteDraftArticleAction,
    isLoggedIn,
    type,
    id,
    isAuthor,
    isOwner,
    version,
    context,
    userId,
    communities,
}: IProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const menuAnchorEl = React.useRef(null)

    const [
        openedTransferOwnershipModal,
        setOpenedTransferOwnershipModal,
    ] = React.useState(false)
    const [
        transferOwnershipModalQueryVar,
        setTransferOwnershipModalQueryVar,
    ] = React.useState({
        page: 0,
        size: 10,
        query: '',
        filter: {
            types: ['USER', 'COMMUNITY'],
        },
    })

    const openTransferOwnershipModal = () =>
        setOpenedTransferOwnershipModal(true)
    const closeTransferOwnershipModal = () =>
        setOpenedTransferOwnershipModal(false)

    const menuHandleToggle = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    const menuHandleClose = () => {
        setMenuOpen(false)
    }

    const executeOrLoginRedirect = action => {
        return isLoggedIn && action
            ? action()
            : routeChangeAction && routeChangeAction(`/login`)
    }

    const isDraft = () => {
        return context === 'draft' || deleteDraftArticleAction
    }

    const isSubmittedUpdate = () => {
        return context === 'submitted-update'
    }

    const getEditTitle = () => {
        if (isAuthor && isDraft()) {
            return 'Edit Draft'
        }

        if (isAuthor && isSubmittedUpdate()) {
            return 'Edit Update'
        }

        return isAuthor ? 'Edit Article' : 'Suggest Edit'
    }

    return (
        <Grid className={classes.toolbar}>
            <Grid className={classes.toolbarIcons}>
                {!isDraft() && !isSubmittedUpdate() && (
                    <>
                        <a href="#comments">
                            <Grid className={classes.tool} item={true}>
                                <CommentIcon />
                                <Typography variant="subtitle2">
                                    {comments} Comment
                                    {comments === 1 ? '' : 's'}
                                </Typography>
                            </Grid>
                        </a>
                        <Grid
                            className={classes.tool}
                            item={true}
                            onClick={() =>
                                executeOrLoginRedirect(() =>
                                    openModalAction({
                                        children: (
                                            <BookmarkResource
                                                resourceId={id}
                                                resourceType={
                                                    ResourceTypeInput[type]
                                                }
                                            />
                                        ),
                                    })
                                )
                            }
                        >
                            {isBookmarked ? (
                                <BookmarkIcon />
                            ) : (
                                <BookmarkBorderIcon />
                            )}
                            <Typography variant="subtitle2">
                                Bookmark
                            </Typography>
                        </Grid>
                    </>
                )}
                {isDraft() && isAuthor && (
                    <Grid
                        className={classes.tool}
                        onClick={() =>
                            openModalAction({
                                children: (
                                    <AlertView
                                        closeModalAction={() =>
                                            closeModalAction &&
                                            closeModalAction()
                                        }
                                        confirmButtonAction={() => {
                                            deleteDraftArticleAction &&
                                                deleteDraftArticleAction({
                                                    id,
                                                    version,
                                                })
                                            closeModalAction &&
                                                closeModalAction()
                                        }}
                                        content={
                                            <div>
                                                <BodyCard>
                                                    You won't be able to
                                                    retrieve the draft article
                                                    after deleting.
                                                </BodyCard>
                                            </div>
                                        }
                                        title={'Are you sure?'}
                                    />
                                ),
                            })
                        }
                    >
                        <DeleteIcon />
                        <Typography variant="subtitle2">
                            Delete Draft
                        </Typography>
                    </Grid>
                )}
                {type === 'ARTICLE' && (
                    <Grid
                        className={classes.tool}
                        onClick={() =>
                            executeOrLoginRedirect(() =>
                                routeChangeAction(
                                    getArticleURL(
                                        { id, title: '', version },
                                        'update'
                                    ).as
                                )
                            )
                        }
                    >
                        <PencilIcon />
                        <Typography variant="subtitle2">
                            {getEditTitle()}
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <Grid
                className={classes.tool}
                ref={menuAnchorEl}
                onClick={menuHandleToggle}
            >
                <MoreVertIcon />
            </Grid>
            <Popper
                open={menuOpen}
                anchorEl={menuAnchorEl.current}
                role={undefined}
                transition
                disablePortal
                placement="bottom-start"
            >
                <Paper>
                    <ClickAwayListener onClickAway={menuHandleClose}>
                        <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                            {initiateArticleTransferAction && isOwner && (
                                <MenuItem
                                    onClick={() =>
                                        executeOrLoginRedirect(() => {
                                            openTransferOwnershipModal()
                                            menuHandleClose()
                                        })
                                    }
                                >
                                    Transfer Ownership
                                </MenuItem>
                            )}
                            <MenuItem
                                onClick={() =>
                                    executeOrLoginRedirect(() =>
                                        openModalAction({
                                            children: (
                                                <AddToCollection
                                                    resourceId={id}
                                                    type={type}
                                                />
                                            ),
                                        })
                                    )
                                }
                            >
                                Add to collection
                            </MenuItem>

                            <MenuItem
                                onClick={() =>
                                    executeOrLoginRedirect(() =>
                                        openModalAction({
                                            children: (
                                                <PublishingSelector
                                                    userId={userId}
                                                    action="Share"
                                                    closeModalAction={
                                                        closeModalAction
                                                    }
                                                    communities={communities.map(
                                                        ({ community }) => ({
                                                            ...community,
                                                            type: 'COMMUNITY',
                                                        })
                                                    )}
                                                    handleSubmit={destination =>
                                                        curateCommunityResourcesAction(
                                                            {
                                                                id:
                                                                    destination.id,
                                                                resources: [
                                                                    {
                                                                        type,
                                                                        id,
                                                                    },
                                                                ],
                                                            }
                                                        )
                                                    }
                                                />
                                            ),
                                        })
                                    )
                                }
                            >
                                Share to community
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>

            {openedTransferOwnershipModal && (
                <ChooseResourceModal
                    key={`add-resource-modal`}
                    open={openedTransferOwnershipModal}
                    handleClose={closeTransferOwnershipModal}
                    maxSelection={1}
                    handleConfirm={(selected: ResourceIdentifierInput[]) => {
                        if (
                            initiateArticleTransferAction &&
                            selected.length > 0
                        ) {
                            initiateArticleTransferAction({
                                id,
                                recipient: selected[0],
                            })
                            closeTransferOwnershipModal()
                        }
                    }}
                    disable={(
                        _resource: any,
                        resourceId: ResourceIdentifierInput
                    ) => resourceId.id === userId}
                    preSelected={[]}
                    title={'Select a new owner (User or Community)'}
                    showSearch={true}
                    searchQuery={transferOwnershipModalQueryVar.query}
                    setSearchQuery={(query: string) =>
                        setTransferOwnershipModalQueryVar({
                            ...transferOwnershipModalQueryVar,
                            query,
                        })
                    }
                    queryDoc={searchResultsAutocomplete}
                    queryKey={'searchAutocomplete'}
                    pathToResourceId={['resourceIdentifier']}
                    pathToResource={['resource']}
                    queryVariables={transferOwnershipModalQueryVar}
                />
            )}
        </Grid>
    )
}

export default Toolbar
