import Comment from '../../../components/Comment'
import { Typography, Theme, Grid } from '@material-ui/core'
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
        padding: theme.spacing(2),
        background: theme.palette.common.white,
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
}))

export default ({
    article,
    comments: { content },
    userId,
    addCommentAction,
}) => {
    const [comment, setComment] = useState('')
    const classes = useStyles()
    return (
        <>
            <Typography className={classes.title} variant="h6">
                {content.length} Comment{content.length !== 1 ? 's' : ''}
            </Typography>
            <div className={classes.container}>
                <Grid container={true}>
                    <Grid item={true} sm={1}>
                        <Avatar size={40} withName={false} id={userId} />
                    </Grid>
                    <Grid item={true} sm={11}>
                        <div className={classes.editorWrapper}>
                            <Editor
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
                                            id: article.id,
                                            type: article.type,
                                            version: article.version
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

                {content.map(comment => (
                    <Comment {...comment} />
                ))}
            </div>
        </>
    )
}
