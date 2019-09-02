import Comment from '../../../components/Comment'
import { Typography, Theme } from '@material-ui/core';import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    comments: {
        padding: theme.spacing(2),
        background: theme.palette.common.white
    }
}))



export default ({ comments: { content } }) => {
    const classes = useStyles()
return <>
    <Typography className={classes.title} variant='h6'>{content.length} Comment{content.length !== 1? 's' : ''}</Typography>
    <div className={classes.comments}>
    {content.map(comment => <Comment {...comment} />)}
    </div>
    
</>}
