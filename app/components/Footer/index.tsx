import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import Consensys from './Consensys'
import Link from 'next/link'
import MailIcon from '@material-ui/icons/Mail'
import RSSIcon from '@material-ui/icons/RssFeed'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        background: theme.palette.common.white,
        padding: theme.spacing(2),
        width: '100%',
        marginTop: theme.spacing(3),
    },
    wrapper: {
        width: '100%',
        maxWidth: 1272,
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    column: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    svg: {
        height: 24,
        width: 24,
    },
    strip: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 13,
        fontWeight: 600,
        margin: theme.spacing(1),
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rss: {
        height: 24,
        width: 24,
        fill: '#ffae29',
        marginLeft: theme.spacing(1),
    },
    logoAccent: {
        color: theme.palette.primary.main,
    },
    logoText: {
        fontFamily: `"Arial MT", "Arial"`,
        fontSize: 13,
        fontWeight: 600,
        marginLeft: theme.spacing(2),
    },
    consensys: {
        height: 24,
        width: 24,
        fill: '#2b49c7',
    },
}))

export default () => {
    const classes = useStyles({})
    return (
        <Grid className={classes.container}>
            <Grid className={classes.wrapper}>
                <Grid
                    className={classes.column}
                    container={true}
                    justify="flex-start"
                >
                    <Link href="/">
                        <a className={classes.link}>
                            <img
                                alt="Kauri logo"
                                className={classes.svg}
                                src="/static/images/logo.svg"
                            />
                            <Typography className={classes.logoText}>
                                kauri
                                <span className={classes.logoAccent}>.io</span>
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                className={classes.text}
                            >
                                © Copyright 2019
                            </Typography>
                        </a>
                    </Link>
                </Grid>
                <Grid
                    className={classes.column}
                    container={true}
                    justify="center"
                >
                    <a className={classes.link} href="mailto:info@kauri.io">
                        <MailIcon color="primary" />
                        <Typography
                            variant="subtitle2"
                            className={classes.text}
                        >
                            info@kauri.io
                        </Typography>
                    </a>
                    <a className={classes.link} href="https://kauri.io/feed">
                        <RSSIcon className={classes.rss} />
                        <Typography
                            variant="subtitle2"
                            className={classes.text}
                        >
                            info@kayru.io
                        </Typography>
                    </a>
                </Grid>
                <Grid
                    className={classes.column}
                    container={true}
                    justify="flex-end"
                >
                    <Grid className={classes.strip}>
                        <Consensys className={classes.consensys} />
                        <Typography
                            variant="subtitle2"
                            className={classes.text}
                        >
                            Consensys Formation
                        </Typography>
                    </Grid>
                    <Grid className={classes.strip}>
                        <Link href="/privacy-policy">
                            <a className={classes.text}>Privacy Policy</a>
                        </Link>
                        |
                        <Link href="/terms-of-use">
                            <a className={classes.text}>Terms of Use</a>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
