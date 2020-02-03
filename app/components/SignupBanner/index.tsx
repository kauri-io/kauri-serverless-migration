import { makeStyles } from '@material-ui/styles'
import { Theme, Grid, Typography, Hidden } from '@material-ui/core'
import ButtonComp from '../Button'
import Link from 'next/link'
import config from '../../config/index'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(2),
        hminHight: 230,
        backgroundColor: theme.palette.common.white,
        background: `url(/static/images/HomepageBannerSVG.svg) center center no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        weight: 400,
        textAlign: 'center',
        margin: theme.spacing(1),
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(1),
        fontWeight: 500,
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    svg: {
        height: 32,
        width: 37,
    },
    logoText: {
        fontWeight: 'bold',
        fontFamily: 'ArialMT, Arial',
    },
    logoAccent: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        fontFamily: 'ArialMT, Arial',
    },
}))

interface IProps {
    isLoggedIn: boolean
}

export default ({ isLoggedIn }: IProps) => {
    const classes = useStyles({})

    return (
        <Grid className={classes.container}>
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
                </a>
            </Link>
            <Typography className={classes.title} component="h1">
                {config.title}
            </Typography>
            <Typography className={classes.subtitle} component="h2">
                {config.description.line1}
            </Typography>
            <Typography className={classes.subtitle} component="h2">
                {config.description.line2}
            </Typography>

            {!isLoggedIn && (
                <Grid>
                    <Hidden mdDown={true}>
                        <Link href="/login">
                            <a>
                                <ButtonComp
                                    className={classes.button}
                                    color="primary"
                                >
                                    Join Kauri
                                </ButtonComp>
                            </a>
                        </Link>
                    </Hidden>
                    <Link href="/help">
                        <a>
                            <ButtonComp
                                className={classes.button}
                                color="primary"
                            >
                                Learn More
                            </ButtonComp>
                        </a>
                    </Link>
                </Grid>
            )}
        </Grid>
    )
}
