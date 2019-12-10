import { makeStyles } from '@material-ui/styles'
import { Theme, Grid, Typography } from '@material-ui/core'
import ButtonComp from '../Button'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        background: theme.palette.common.white,
        padding: theme.spacing(2),
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontWeight: 400,
        padding: theme.spacing(2, 0),
        lineHeight: '24px',
    },
    subtitle: {
        padding: theme.spacing(0, 0, 1, 0),
    },
    link: {},
    root: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}))

export default ({ isLoggedIn, content }) => {
    const classes = useStyles({})

    return (
        <Grid
            className={classes.root}
            container={true}
            direction="column"
            spacing={0}
        >
            <Typography variant="h6" component="h3" className={classes.title}>
                Contribute
            </Typography>
            <Grid className={classes.container}>
                <Typography className={classes.subtitle} variant="body2">
                    Kauri wants to help you share your knowledge, here's the
                    three ways you can.
                </Typography>
                {content.map(link => (
                    <Link
                        href={isLoggedIn ? link.link : `/login?r=${link.link}`}
                    >
                        <a>
                            <ButtonComp color="primary">
                                {link.actionName}
                            </ButtonComp>
                        </a>
                    </Link>
                ))}
            </Grid>
        </Grid>
    )
}
