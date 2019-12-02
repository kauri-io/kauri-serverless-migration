import { makeStyles, Theme, Hidden, Typography } from "@material-ui/core"
import Avatar from '../Avatar'

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontWeight: 400,
        padding: theme.spacing(2, 0),
        lineHeight: '24px',
    },
    container: {
        background: theme.palette.common.white,
        padding: theme.spacing(2),
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            marginBottom: theme.spacing(2)
        }
    },
    subtitle: {}
}))

export default ({ contributors }) => {
    const classes = useStyles({})
    console.log(contributors)
    return <Hidden mdDown={true}>
        <>
            <Typography variant="h6" component="h3" className={classes.title}>
                Top Contributors
            </Typography>
            <div className={classes.container}>
            <Typography className={classes.subtitle} variant="body2">Contributors of the week</Typography>
                {contributors.map((contributor, index) => (
                    <Avatar
                        key={index}
                        withName={true}
                        username={contributor.username}
                        id={contributor.userId}
                        avatar={contributor.avatar}
                    />
                ))}
            </div>
        </>
    </Hidden>
}


