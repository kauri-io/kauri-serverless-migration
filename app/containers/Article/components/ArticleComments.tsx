import React from 'react'
import Comment from '../../../components/Comment'
import { Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CommentForm from '../../../components/CommentForm'
import { UserOwner } from '../../../queries/Fragments/__generated__/UserOwner'

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        textAlign: 'center',
        margin: theme.spacing(2),
    },
    container: {
        padding: theme.spacing(0, 2),
        background: theme.palette.common.white,
        width: '100%',
        borderRadius: 4,
        '& > *:not(:first-child)': {
            borderTop: '1px solid #dadada',
        },
    },
}))

export interface IComment {
    id: string
    posted: any
    author: UserOwner
    body: string
    replyTo: string | null
    replies: IComment[]
}

export default ({
    routeChangeAction,
    openModalAction,
    closeModalAction,
    parent,
    comments,
    user,
    addCommentAction,
    editCommentAction,
    deleteCommentAction,
    currentURL,
    disabled = false,
    message = '',
}) => {
    const classes = useStyles()

    delete parent.__typename

    const [nestedComments, setNestedComments] = React.useState<IComment[]>([])

    React.useEffect(() => {
        setNestedComments([...nestComments(comments)])
    }, [comments])

    const nestComments = comments => {
        let result = JSON.parse(JSON.stringify(comments)) // deep copy
        let commentMap = {}

        result.forEach(comment => (commentMap[comment.id] = comment))

        result.forEach(comment => {
            if (comment.replyTo !== null) {
                const parent = commentMap[comment.replyTo]
                ;(parent.replies = parent.replies || []).push(comment)
            }
        })

        return result.filter(comment => {
            return comment.replyTo === null
        })
    }

    return (
        <Grid id="comments" className={classes.container}>
            <CommentForm
                currentUser={user}
                currentURL={currentURL}
                routeChangeAction={routeChangeAction}
                addCommentAction={addCommentAction}
                editCommentAction={editCommentAction}
                parent={parent}
                replyTo={null}
                show={true}
                disabled={disabled}
                message={message}
            />

            {nestedComments.map(comment => (
                <Comment
                    {...comment}
                    routeChangeAction={routeChangeAction}
                    openModalAction={openModalAction}
                    closeModalAction={closeModalAction}
                    parent={parent}
                    addCommentAction={addCommentAction}
                    editCommentAction={editCommentAction}
                    deleteCommentAction={deleteCommentAction}
                    currentUser={user}
                    currentURL={currentURL}
                    disabled={disabled}
                    message={message}
                />
            ))}
        </Grid>
    )
}
