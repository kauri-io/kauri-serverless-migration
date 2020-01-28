import React from 'react'
import { Grid, Theme, Button, Hidden } from '@material-ui/core'
import Avatar from '../Avatar'
import { makeStyles } from '@material-ui/styles'
import Editor from '../Markdown/Editor'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import { addCommentVariables } from '../../queries/__generated__/addComment'
import {
    IAddCommentAction,
    IEditCommentAction,
} from '../../containers/Article/Module'
import { editCommentVariables } from '../../queries/__generated__/editComment'

const useStyles = makeStyles((theme: Theme) => ({
    editorWrapper: {
        border: `2px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(1),
        borderRadius: 4,
        '&&:focus-within': {
            border: `2px solid ${theme.palette.primary.main}`,
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1),
    },
    addComment: {
        paddingTop: theme.spacing(2),
    },
}))

interface IProps {
    show: boolean
    currentUser: any
    addCommentAction: (
        payload: addCommentVariables,
        callback: any
    ) => IAddCommentAction
    editCommentAction: (
        payload: editCommentVariables,
        callback: any
    ) => IEditCommentAction
    parent: ResourceIdentifierInput
    replyTo: string | null
    withAvatar?: boolean
    callback?: () => void
    id?: string | null
    body?: string | null
}

const CommentForm = ({
    show = true,
    currentUser,
    addCommentAction,
    editCommentAction,
    parent,
    replyTo = null,
    withAvatar = true,
    callback,
    id,
    body = '',
}: IProps) => {
    const classes = useStyles()
    const [comment, setComment] = React.useState<string>(
        body === null ? '' : body
    )

    React.useEffect(() => {
        setComment(body === null ? '' : body)
    }, [body])

    const disableButton = () => {
        return !comment || comment === ''
    }

    return (
        <Hidden mdDown={true} mdUp={!show}>
            <Grid container={true} className={classes.addComment}>
                {withAvatar && (
                    <Grid item={true} sm={1}>
                        <Avatar
                            size={40}
                            withName={false}
                            username={currentUser.username}
                            id={currentUser.id}
                            avatar={currentUser.avatar}
                        />
                    </Grid>
                )}
                <Grid item={true} sm={11}>
                    <Grid className={classes.editorWrapper}>
                        <Editor
                            minHeight={80}
                            text={comment}
                            withTabs={false}
                            withToolbar={true}
                            compact={true}
                            onChange={e => setComment(e)}
                            focusOutline={false}
                        />
                    </Grid>
                    <Grid className={classes.button}>
                        {id && (
                            <Button
                                color="primary"
                                variant="text"
                                onClick={callback}
                            >
                                Cancel
                            </Button>
                        )}
                        {!id && (
                            <Button
                                color="primary"
                                variant="text"
                                onClick={() =>
                                    addCommentAction(
                                        {
                                            parent,
                                            replyTo,
                                            body: comment,
                                        },
                                        () => {
                                            setComment('')
                                            if (callback) {
                                                callback()
                                            }
                                        }
                                    )
                                }
                                disabled={disableButton()}
                            >
                                Leave Comment
                            </Button>
                        )}
                        {id && (
                            <Button
                                color="primary"
                                variant="text"
                                onClick={() =>
                                    editCommentAction(
                                        {
                                            id,
                                            body: comment,
                                        },
                                        () => {
                                            setComment('')
                                            if (callback) {
                                                callback()
                                            }
                                        }
                                    )
                                }
                                disabled={disableButton()}
                            >
                                Edit Comment
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
    )
}

export default CommentForm
