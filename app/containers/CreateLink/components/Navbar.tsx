import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useStyles } from '../styles'
import Link from 'next/link'
import Button from '../../../components/Button'

const Nav = ({ disabled, submitExtenalLinkAction }) => {
    const classes = useStyles({})
    return (
        <AppBar elevation={1} position="fixed" color="inherit">
            <Toolbar className={classes.navbar}>
                <Link href="/">
                    <a className={classes.logoContainer}>
                        <img
                            className={classes.logo}
                            src="/static/images/logo.svg"
                        />
                        <Typography variant="button" color="primary">
                            Go Back
                        </Typography>
                    </a>
                </Link>
                <Button onClick={submitExtenalLinkAction} disabled={disabled} color="primary" variant="contained">
                    Publish Link
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
