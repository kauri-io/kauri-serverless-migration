import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Grid,
    Stepper,
    Step,
    StepLabel,
    DialogActions,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

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
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}))

const getStepContent = stepIndex => {
    switch (stepIndex) {
        case 0:
            return 'The tipping transaction is ready to be sent.  If using metamask, press the Confirm Button to initiate.'
        case 1:
            return "The tip transaction has been broadcast, and we're now waiting for it to be mined."
        case 3:
            return 'Your tip has been processed, and has been received by the author.  Thanks for your generosity!'
        default:
            return 'Unknown stepIndex'
    }
}

const getSteps = () => {
    return [
        'Confirm the transaction in your Ethereum wallet',
        'Waiting for transaction to be mined',
        'Transaction Processed!',
    ]
}

const isCompleted = stepIndex => stepIndex === 3

interface IProps {
    open: boolean
    handleClose: () => void
    state: number
}

const TransactionModal = ({ open, handleClose, state }: IProps) => {
    const classes = useStyles()
    const steps = getSteps()

    return (
        <Dialog
            open={open}
            fullWidth={true}
            onClose={() => handleClose()}
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle disableTypography className={classes.container}>
                <Typography variant="h6" className={classes.title}>
                    Pending Transaction
                </Typography>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon onClick={handleClose} />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers={true}>
                <Grid container justify="center">
                    <Typography>{getStepContent(state)}</Typography>
                    {state == 1 && <CircularProgress />}
                    <Stepper activeStep={state} alternativeLabel>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </DialogContent>
            {isCompleted(state) && (
                <DialogActions className={classes.container}>
                    <Button
                        color="primary"
                        variant="text"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    )
}

export default TransactionModal
