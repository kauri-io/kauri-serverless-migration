import CommentIcon from '@material-ui/icons/Comment'
import FolderIcon from '@material-ui/icons/Folder'
// import GroupIcon from '@material-ui/icons/GroupWork'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddToCollection from '../../AddToCollection'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import BookmarkResource from '../../../containers/Bookmark/BookmarkResourceWidget'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import DeleteIcon from '@material-ui/icons/Delete'
import PencilIcon from '@material-ui/icons/Edit'
import { getArticleURL } from '../../../lib/getURLs'
import { BodyCard } from '../../../components/Typography'
import AlertView from '../../../components/Modal/AlertView'
import { Article_comments } from '../../../queries/Fragments/__generated__/Article'
// import { useEffect } from 'react'

interface IProps {
    classes: any
    comments?: Article_comments
    openModalAction: (children?: any) => void
    closeModalAction?: () => void
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
    version: number
}

const Toolbar = ({
    classes,
    comments,
    openModalAction,
    closeModalAction,
    isBookmarked,
    routeChangeAction,
    deleteDraftArticleAction,
    isLoggedIn,
    type,
    id,
    isAuthor,
    version,
}: IProps) => {
    const executeOrLoginRedirect = action => {
        return isLoggedIn && action
            ? action()
            : routeChangeAction && routeChangeAction(`/login`)
    }

    const isDraft = () => {
        return deleteDraftArticleAction
    }

    return (
        <Grid className={classes.toolbar}>
            {!isDraft() && (
                <>
                    <a href="#comments">
                        <Grid className={classes.tool} item={true}>
                            <CommentIcon />
                            <Typography variant="subtitle2">
                                {comments} Comment
                                {comments && comments.totalElements !== 1
                                    ? 's'
                                    : ''}
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
                </>
            )}
            {isDraft() && isAuthor && (
                <>
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
                        <Typography variant="subtitle2">Edit Draft</Typography>
                    </Grid>
                </>
            )}
            {type === 'ARTICLE' && !isDraft() && (
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
                        {isAuthor ? 'Edit Article' : 'Suggest Edit'}
                    </Typography>
                </Grid>
            )}

            {/* <Grid className={classes.tool} item={true}>
            <GroupIcon />
            <Typography variant="subtitle2">Share To Community</Typography>
        </Grid> */}
        </Grid>
    )
}

export default Toolbar
