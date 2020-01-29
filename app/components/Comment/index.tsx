import React from 'react'
import {
    Grid,
    Typography,
    Theme,
    Button,
    Popper,
    Paper,
    ClickAwayListener,
    MenuList,
    MenuItem,
    Collapse,
    Hidden,
} from '@material-ui/core'
import Avatar from '../Avatar'
import moment from 'moment-mini'
import { makeStyles } from '@material-ui/styles'
import Renderer from '../Markdown/Renderer'
import CommentForm from '../CommentForm'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import { UserOwner } from '../../queries/Fragments/__generated__/UserOwner'
import { addCommentVariables } from '../../queries/__generated__/addComment'
import {
    IAddCommentAction,
    IEditCommentAction,
    IDeleteCommentAction,
} from '../../containers/Article/Module'
import { IComment } from '../../containers/Article/components/ArticleComments'
import {
    MoreVert as MoreVertIcon,
    Reply as ReplyIcon,
} from '@material-ui/icons'
import { editCommentVariables } from '../../queries/__generated__/editComment'
import { deleteCommentVariables } from '../../queries/__generated__/deleteComment'
import {
    IOpenModalPayload,
    IOpenModalAction,
    ICloseModalAction,
} from '../Modal/Module'
import AlertViewComponent from '../Modal/AlertView'
import { IRouteChangeAction } from '../../lib/Epics/RouteChangeEpic'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: theme.spacing(1, 0),
    },
    flex: {
        display: 'flex',
    },
    text: {
        margin: theme.spacing(1, 0, -2, 0),
    },
    actions: {
        display: 'flex',
        margin: theme.spacing(0, 0, 0, 0),
    },
    replies: {
        marginLeft: theme.spacing(4),
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > *': {
            marginRight: theme.spacing(1),
            fontWeight: 600,
        },
    },
}))

interface IProps {
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    routeChangeAction: (payload: string) => IRouteChangeAction
    currentUser: any
    addCommentAction: (
        payload: addCommentVariables,
        callback: any
    ) => IAddCommentAction
    editCommentAction: (
        payload: editCommentVariables,
        callback: any
    ) => IEditCommentAction
    deleteCommentAction: (
        payload: deleteCommentVariables,
        callback: any
    ) => IDeleteCommentAction
    parent: ResourceIdentifierInput
    id: string
    author: UserOwner
    body: string
    posted: string
    replies: IComment[]
    currentURL?: string
    disabled?: boolean
    message?: string
}

const Comment = ({
    openModalAction,
    closeModalAction,
    routeChangeAction,
    currentUser,
    addCommentAction,
    editCommentAction,
    deleteCommentAction,
    parent,
    id,
    author,
    body,
    posted,
    replies = [],
    currentURL,
    disabled,
    message,
}: IProps) => {
    const classes = useStyles()

    const isAuthor = currentUser && currentUser.id === author.id

    const [repliesCollapsed, setRepliesCollapsed] = React.useState(false)
    const [showReplyForm, setShowReplyForm] = React.useState(false)
    const [currentComment, setCurrentComment] = React.useState<IComment | null>(
        null
    )
    const [menuOpen, setMenuOpen] = React.useState(false)
    const menuAnchorEl = React.useRef(null)

    const menuHandleToggle = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    const menuHandleClose = () => {
        setMenuOpen(false)
    }

    const showForm = comment => {
        setShowReplyForm(!showReplyForm)
        setCurrentComment(comment)
    }

    return (
        <Grid className={classes.container}>
            <Grid
                className={classes.flex}
                direction="row"
                justify="space-between"
            >
                <Avatar
                    size={40}
                    id={author.id}
                    withName={true}
                    avatar={author.avatar}
                    username={author.username}
                />
                <Typography variant="body2">
                    {moment(posted).format('DD MMM YY')}
                </Typography>
            </Grid>

            <Grid className={classes.text}>
                <Renderer markdown={body} />
            </Grid>

            <Hidden smDown={true}>
                <Grid>
                    <Grid className={classes.actions} direction="row">
                        <Button
                            variant="text"
                            size="small"
                            startIcon={<ReplyIcon />}
                            onClick={() => showForm(null)}
                            disabled={disabled}
                        >
                            Reply
                        </Button>

                        <Grid
                            className={classes.menu}
                            ref={menuAnchorEl}
                            onClick={menuHandleToggle}
                        >
                            <MoreVertIcon />
                            <Popper
                                open={menuOpen}
                                anchorEl={menuAnchorEl.current}
                                role={undefined}
                                transition
                                disablePortal
                                placement="right-start"
                            >
                                <Paper elevation={3}>
                                    <ClickAwayListener
                                        onClickAway={menuHandleClose}
                                    >
                                        <MenuList
                                            autoFocusItem={menuOpen}
                                            id="menu-comment-grow"
                                        >
                                            <MenuItem
                                                onClick={() =>
                                                    setRepliesCollapsed(
                                                        !repliesCollapsed
                                                    )
                                                }
                                            >
                                                {repliesCollapsed
                                                    ? 'Uncollapse'
                                                    : 'Collapse'}
                                            </MenuItem>
                                            {isAuthor && body !== '[deleted]' && (
                                                <MenuItem
                                                    onClick={() =>
                                                        showForm({
                                                            id,
                                                            body,
                                                        })
                                                    }
                                                >
                                                    Edit
                                                </MenuItem>
                                            )}
                                            {isAuthor && body !== '[deleted]' && (
                                                <MenuItem
                                                    onClick={() =>
                                                        openModalAction({
                                                            children: (
                                                                <AlertViewComponent
                                                                    closeModalAction={
                                                                        closeModalAction
                                                                    }
                                                                    confirmButtonAction={() =>
                                                                        deleteCommentAction(
                                                                            {
                                                                                id,
                                                                            },
                                                                            closeModalAction
                                                                        )
                                                                    }
                                                                    confirmButtonText={
                                                                        'Delete'
                                                                    }
                                                                    content={
                                                                        <Typography variant="subtitle2">
                                                                            Are you sure you want to delete your comment?
                                                                        </Typography>
                                                                    }
                                                                    title={
                                                                        'Delete Comment'
                                                                    }
                                                                />
                                                            ),
                                                        })
                                                    }
                                                >
                                                    Delete
                                                </MenuItem>
                                            )}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Popper>
                        </Grid>
                    </Grid>

                    <CommentForm
                        currentUser={currentUser}
                        currentURL={currentURL}
                        routeChangeAction={routeChangeAction}
                        addCommentAction={addCommentAction}
                        editCommentAction={editCommentAction}
                        parent={parent}
                        replyTo={id}
                        show={showReplyForm}
                        body={currentComment && currentComment.body}
                        id={currentComment && currentComment.id}
                        withAvatar={false}
                        callback={() => setShowReplyForm(false)}
                        disabled={disabled}
                        message={message}
                    />
                </Grid>
            </Hidden>

            <Grid className={classes.replies}>
                <Collapse in={!repliesCollapsed}>
                    {replies.map(comment => (
                        <Comment
                            {...comment}
                            routeChangeAction={routeChangeAction}
                            openModalAction={openModalAction}
                            closeModalAction={closeModalAction}
                            parent={parent}
                            addCommentAction={addCommentAction}
                            editCommentAction={editCommentAction}
                            deleteCommentAction={deleteCommentAction}
                            currentUser={currentUser}
                            currentURL={currentURL}
                            disabled={disabled}
                            message={message}
                        />
                    ))}
                </Collapse>
            </Grid>
        </Grid>
    )
}

export default Comment
