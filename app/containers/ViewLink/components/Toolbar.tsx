import React from 'react'
import CommentIcon from '@material-ui/icons/Comment'
import FolderIcon from '@material-ui/icons/Folder'
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
import { Menu, MenuItem } from '@material-ui/core'
import ChooseResourceModal from '../../ChooseResourceModal'
import { searchResultsAutocomplete } from '../../../queries/Search'
import { transferArticleToCommunityAction } from '../../Community/Module'

interface IProps {
    classes: any
    comments?: number
    openModalAction: (children?: any) => void
    closeModalAction?: () => void
    transferArticleToCommunityAction: typeof transferArticleToCommunityAction
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
    userId?: string
}

const Toolbar = ({
    classes,
    comments,
    openModalAction,
    closeModalAction,
    transferArticleToCommunityAction,
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
}: IProps) => {
    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)
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

    const menuHandleClick = event => {
        setMenuAnchorEl(event.currentTarget)
    }

    const menuHandleClose = () => {
        setMenuAnchorEl(null)
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
                        <Typography variant="subtitle2">Bookmark</Typography>
                    </Grid>

                    <Grid
                        className={classes.tool}
                        item={true}
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
                        <FolderIcon />
                        <Typography variant="subtitle2">
                            Add to collection
                        </Typography>
                    </Grid>

                    <Grid
                        className={classes.tool}
                        item={true}
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
                        <FolderIcon />
                        <Typography variant="subtitle2">
                            Share to community
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
                                        closeModalAction && closeModalAction()
                                    }
                                    confirmButtonAction={() => {
                                        deleteDraftArticleAction &&
                                            deleteDraftArticleAction({
                                                id,
                                                version,
                                            })
                                        closeModalAction && closeModalAction()
                                    }}
                                    content={
                                        <div>
                                            <BodyCard>
                                                You won't be able to retrieve
                                                the draft article after
                                                deleting.
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
                    <Typography variant="subtitle2">Delete Draft</Typography>
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

            <Grid
                className={classes.tool}
                item={true}
                onClick={menuHandleClick}
            >
                <MoreVertIcon />
            </Grid>
            <Menu
                id="article-action-menu"
                anchorEl={menuAnchorEl}
                keepMounted
                open={Boolean(menuAnchorEl)}
                onClose={menuHandleClose}
            >
                {isOwner && (
                    <MenuItem
                        onClick={() => {
                            openTransferOwnershipModal()
                            menuHandleClose()
                        }}
                    >
                        Transfer Ownership
                    </MenuItem>
                )}
                <MenuItem onClick={menuHandleClose}>Add to collection</MenuItem>
                <MenuItem onClick={menuHandleClose}>
                    Share to community
                </MenuItem>
            </Menu>

            {openedTransferOwnershipModal && (
                <ChooseResourceModal
                    key={`add-resource-modal`}
                    open={openedTransferOwnershipModal}
                    handleClose={closeTransferOwnershipModal}
                    maxSelection={1}
                    handleConfirm={(selected: ResourceIdentifierInput[]) => {
                        if (selected.length > 0) {
                            transferArticleToCommunityAction(
                                {
                                    id,
                                    recipient: selected[0],
                                },
                                closeTransferOwnershipModal
                            )
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
