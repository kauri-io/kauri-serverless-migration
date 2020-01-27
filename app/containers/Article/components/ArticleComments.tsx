import Comment from '../../../components/Comment'
import { Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CommentForm from '../../../components/CommentForm'
import { useEffect, useState } from 'react'
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

export default ({ parent, comments, user, addCommentAction }) => {
    const classes = useStyles()

    delete parent.__typename

    const [nestedComments, setNestedComments] = useState<IComment[]>([])

    useEffect(() => {
        setNestedComments(nestComments(comments))
    }, [comments])

    const nestComments = comments => {
        const commentMap = {}

        comments.forEach(comment => (commentMap[comment.id] = comment))

        comments.forEach(comment => {
            if (comment.replyTo !== null) {
                const parent = commentMap[comment.replyTo]
                ;(parent.replies = parent.replies || []).push(comment)
            }
        })

        return comments.filter(comment => {
            return comment.replyTo === null
        })
    }

    return (
        <Grid id="comments" className={classes.container}>
            <CommentForm
                currentUser={user}
                addCommentAction={addCommentAction}
                parent={parent}
                replyTo={null}
                show={!!user}
            />

            {nestedComments.map(comment => (
                <Comment
                    {...comment}
                    parent={parent}
                    addCommentAction={addCommentAction}
                    currentUser={user}
                    replies={comment.replies}
                />
            ))}
        </Grid>
    )
}
