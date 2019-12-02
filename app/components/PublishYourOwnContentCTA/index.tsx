import { makeStyles } from '@material-ui/styles'
import { Theme, Grid, Typography, Hidden } from '@material-ui/core'
import ButtonComp from '../Button'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        background: theme.palette.common.white,
        padding: theme.spacing(2),
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontWeight: 400,
        padding: theme.spacing(2, 0),
        lineHeight: '24px',
    },
    subtitle: {},
    link: {},
}))

export default ({ isLoggedIn, content }) => {
    const classes = useStyles({})

    return (
        <Hidden mdDown={true}>
        <Grid container={true} direction="column" spacing={0}>
            <Typography variant="h6" component="h3" className={classes.title}>
                Publish Content
            </Typography>
            <Grid className={classes.container}>
                <Typography className={classes.subtitle} variant="body2">
                    Welcome to Kauri, we're excited to help you share your
                    knowledge across the world via the Ethereum ecosystem. IPFS
                    etc etc
                </Typography>
                {content.map(link => <Link href={isLoggedIn
                    ? link.link
                    : `/login?r=${link.link}`}>
                    <a>
                        <ButtonComp color='primary'>{link.actionName}</ButtonComp>
                    </a></Link>)}
            </Grid>
        </Grid>
        </Hidden>
    )
}
