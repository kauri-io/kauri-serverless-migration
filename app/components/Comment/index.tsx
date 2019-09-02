import { Grid, Typography, Theme } from "@material-ui/core";
import Avatar from '../Avatar'
import moment from 'moment-mini'
import { makeStyles } from "@material-ui/styles";
import Renderer from "../Markdown/Renderer";

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        margin: theme.spacing(2, 0)
    }
}))

const Comment = ({
    author,
    body,
    posted
}) => {
    const classes = useStyles()
    return <Grid>
        <Avatar size={40} id={author.id} withName={true} avatar={author.avatar} username={author.username} />
        <div className={classes.text}>
            <Renderer markdown={body} />
        </div>
        <Typography variant='body2'>Posted {moment(posted).format('DD MMM YY')}</Typography>
    </Grid>
}

export default Comment