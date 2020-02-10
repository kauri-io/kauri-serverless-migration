import React from 'react'
import {
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    IconButton,
    makeStyles,
    Theme,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: 0,
        padding: theme.spacing(2),
        display: 'flex',
    },
    title: {
        padding: theme.spacing(1),
        flexGrow: 1,
    },
}))

interface IProps {
    title: string
    content?: React.ReactElement<any>
    confirmButtonText?: string
    closeButtonText?: string
    confirmButtonAction: any
    closeModalAction: () => void
    hideCloseButton?: boolean
    hideConfirmButton?: boolean
}

const AlertViewComponent: React.FunctionComponent<IProps> = props => {
    const classes = useStyles()

    const handleConfirmAction = (confirmButtonAction: any) => () => {
        confirmButtonAction()
    }

    return (
        <>
            <DialogTitle disableTypography className={classes.container}>
                <Typography variant="h6" className={classes.title}>
                    {props.title}
                </Typography>
                <IconButton aria-label="close" onClick={props.closeModalAction}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {props.content && (
                <DialogContent dividers>{props.content}</DialogContent>
            )}

            {!props.hideCloseButton && !props.hideConfirmButton && (
                <DialogActions>
                    {!props.hideCloseButton && (
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={handleConfirmAction(
                                props.closeModalAction
                            )}
                        >
                            {props.closeButtonText || 'Cancel'}
                        </Button>
                    )}
                    {!props.hideConfirmButton && (
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: 'white' }}
                            onClick={handleConfirmAction(
                                props.confirmButtonAction
                            )}
                        >
                            {props.confirmButtonText || 'Confirm'}
                        </Button>
                    )}
                </DialogActions>
            )}
        </>
    )
}

export default AlertViewComponent
