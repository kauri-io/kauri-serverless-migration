import moment from 'moment-mini'
import Avatar from '../../../components/Avatar'
import Grid from '@material-ui/core/Grid'
import { Article_author } from '../../../queries/Fragments/__generated__/Article'
import Typography from '@material-ui/core/Typography'

interface IProps {
    author: Article_author
    datePublished: string
    classes: Record<string, string>
}

const AvatarComp = ({
    author: { username, name, avatar, id },
    datePublished,
    classes,
}: IProps) => {
    return (
        <Grid container={true}>
            <Grid item={true} className={classes.authorAvatar}>
                <Avatar
                    aria-label={String(username)}
                    id={String(id)}
                    name={name}
                    username={username}
                    avatar={avatar}
                    withName={true}
                />
            </Grid>
            <Grid>
                <Typography variant="body2">
                    Last Updated {moment(datePublished).fromNow()}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AvatarComp
