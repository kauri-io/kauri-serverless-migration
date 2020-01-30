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
            <Typography variant="h6">Metamask Account check</Typography>
            <Typography variant="body1">
                In order to correctly publish an article or manage a community, you need to unlock your Metamask account
            </Typography>
            <Typography variant="body1">
                and select the Web3 account associated to your Kauri account:
            </Typography>
            <code className={classes.account}>0x{userId}</code>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.app && state.app.user && state.app.user.id,
    }
}

export default connect(mapStateToProps)(AccountCheck)
