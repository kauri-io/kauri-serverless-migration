import { accountCheck } from '../../lib/accountCheck'
import { useEffect } from 'react'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

const AccountCheck = ({ router, page, userId }) => {
    if (process.browser) {
        global.window.ethereum.enable()
    }
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(3),
            flexDirection: 'column',
            display: 'flex',
        },
        account: {
            padding: theme.spacing(2),
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            borderRadius: 4,
            margin: theme.spacing(2),
        },
    }))
    const classes = useStyles()
    useEffect(() => {
        const interval = setInterval(() => {
            if (accountCheck()) {
                router.push(page)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className={classes.container}>
            <ErrorIcon />
            <Typography variant="h6">Account mismatch.</Typography>
            <Typography variant="body1">
                In order to correctly publish or edit an article and publish or
                editing a community your selected Web3 account and Kauri account
                need to match.
            </Typography>
            <Typography variant="body1">
                Please switch back your web3 account to
            </Typography>
            <code className={classes.account}>0x{userId}</code>
            <Typography variant="body1">
                or log out and log in again.
            </Typography>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.app && state.app.user && state.app.user.id,
    }
}

export default connect(mapStateToProps)(AccountCheck)
