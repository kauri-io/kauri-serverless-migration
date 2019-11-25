import Comment from '../../../components/Comment'
import { Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Editor from '../../../components/Markdown/Editor'
import { useState } from 'react'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'

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
    editorWrapper: {
        border: `2px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(1),
        borderRadius: 4,
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1),
    },
    addComment: {
        marginTop: theme.spacing(2),
    },
}))

export default ({ link, comments: { content }, user, addCommentAction }) => {
    const [comment, setComment] = useState('')
    const classes = useStyles()
    return (
        <>
            <Typography
                aria-label="title"
                className={classes.title}
                variant="h6"
            >
                {content.length} Comment{content.length !== 1 ? 's' : ''}
            </Typography>
            <div className={classes.container}>
                <Hidden mdDown={true}>
                    {user && (
                        <Grid container={true} className={classes.addComment}>
                            <Grid item={true} sm={1}>
                                <Avatar
                                    size={40}
                                    withName={false}
                                    username={user.username}
                                    id={user.id}
                                    avatar={user.avatar}
                                />
                            </Grid>
                            <Grid item={true} sm={11}>
                                <div className={classes.editorWrapper}>
                                    <Editor
                                        minHeight={80}
                                        text={comment}
                                        withTabs={false}
                                        withToolbar={true}
                                        compact={true}
                                        onChange={e => setComment(e)}
                                    />
                                </div>
                                <div className={classes.button}>
                                    <Button
                                        color="primary"
                                        variant="text"
                                        onClick={() =>
                                            addCommentAction({
                                                parent: {
                                                    id: link.id,
                                                    type: link.type,
                                                    version: link.version,
                                                },
                                                body: comment,
                                            })
                                        }
                                    >
                                        Leave Comment
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </Hidden>
                {content.map(comment => (
                    <Comment {...comment} />
                ))}
            </div>
        </>
    )
}
