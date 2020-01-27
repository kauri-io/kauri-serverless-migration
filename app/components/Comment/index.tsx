import { Grid, Typography, Theme, Button } from '@material-ui/core'
import Avatar from '../Avatar'
import moment from 'moment-mini'
import { makeStyles } from '@material-ui/styles'
import Renderer from '../Markdown/Renderer'
import { useState } from 'react'
import CommentForm from '../CommentForm'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import { UserOwner } from '../../queries/Fragments/__generated__/UserOwner'
import { addCommentVariables } from '../../queries/__generated__/addComment'
import { IAddCommentAction } from '../../containers/Article/Module'
import { IComment } from '../../containers/Article/components/ArticleComments'


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: theme.spacing(1, 0),
    },
    flex: {
        display: 'flex'
    },
    text: {
        margin: theme.spacing(2, 0),
    },
    replies: {
        marginLeft: theme.spacing(4)
    },
}))

interface IProps {
    currentUser: any
    addCommentAction: (payload: addCommentVariables, callback: any) => IAddCommentAction
    parent: ResourceIdentifierInput
    id: string
    author: UserOwner
    body: string
    posted: string
    replies: IComment[]
}

const Comment = ({ currentUser, addCommentAction, parent, id, author, body, posted, replies=[]}: IProps) => {
    const classes = useStyles()
    const [showReplyForm, setShowReplyForm] = useState(false)
    
    return (
        <Grid className={classes.container}>

            <Grid className={classes.flex} direction="row" justify='space-between'>
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

            <Grid className={classes.replies}>
                {replies.map((comment) => (
                    <Comment 
                        {...comment} 
                        parent={parent}
                        addCommentAction={addCommentAction}
                        currentUser={currentUser}
                        replies={comment.replies}
                    />
                ))}
            </Grid>

            <Grid>
                <Button color="primary" variant="text" onClick={()=>setShowReplyForm(!showReplyForm)}>
                    Reply
                </Button>

                <CommentForm 
                    currentUser={currentUser}
                    addCommentAction={addCommentAction}
                    parent={parent}
                    replyTo={id}
                    show={showReplyForm}
                    withAvatar={false}
                    afterPost={() => setShowReplyForm(false)}
                />
            </Grid>

        </Grid>
    )
}

export default Comment
