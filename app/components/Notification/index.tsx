import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { withStyles, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { IReduxState } from '../../lib/Module'
import { WithStyles } from '@material-ui/styles'
import { IShowNotificationPayload } from '../../lib/Epics/ShowNotificationEpic'

const styles = theme =>
    createStyles({
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
    })

class Notification extends React.Component<
    WithStyles<typeof styles> & {
        notification: IShowNotificationPayload | null | undefined
    },
    { open: boolean }
> {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.notification !== nextProps.notification) {
            this.setState({ open: true })
        } else {
            this.setState({ open: false })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Only re-render when snackbar is going from closed to open
        return (
            this.state.open !== nextState.open ||
            this.props.notification !== nextProps.notification
        )
    }

    closeNotification = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, notification } = this.props
        const { open } = this.state

        return (
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={4000}
                onClose={this.closeNotification}
            >
                <SnackbarContent
                    className={
                        notification &&
                        notification.notificationType === 'error'
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
}

export default connect(
    (state: IReduxState) => ({
        notification: state.app && state.app.notification,
    }),
    {}
)(withStyles(styles)(Notification))
