import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { IReduxState } from '../../lib/Module'

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    success: {
        backgroundColor: theme.palette.primary.main,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
}))

const Notification: React.FC = () => {
    const classes = useStyles()
    const notification = useSelector(
        (state: IReduxState) => state.app && state.app.notification
    )

    return (
        <Snackbar
            open={!!notification && !!notification.message}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={4000}
        >
            <SnackbarContent
                className={
                    notification && notification.notificationType === 'error'
                        ? classes.error
                        : classes.success
                }
                key={`top, center`}
                message={
                    <Typography className={classes.message}>
                        {notification &&
                        notification.notificationType === 'success' ? (
                            <CheckCircleIcon className={classes.icon} />
                        ) : (
                            <ErrorIcon className={classes.icon} />
                        )}
                        {`${notification ? notification.message : null} - ${
                            notification ? notification.description : null
                        }`}
                    </Typography>
                }
            />
        </Snackbar>
    )
}

export default Notification
