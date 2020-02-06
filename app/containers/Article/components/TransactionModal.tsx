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
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useEffect } from 'react'
import LoadingComponent from '../../../components/Loading'
import EtherScanLink from '../../../components/Transaction/EtherScanLink'

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
    image: {
        marginBottom: theme.spacing(2),
    },
}))

const getSteps = () => {
    return [
        'Confirm the transaction in your Ethereum wallet',
        'Waiting for transaction to be mined',
        'Transaction Processed!',
    ]
}

const getCurrentStep = state => {
    switch (state) {
        case State.START:
            return 0
        case State.PENDING:
            return 1
        case State.MINED:
            return 3
    }
}

const getTitle = state => {
    if (isCompleted(state)) {
        return 'Tip Successful'
    }

    if (isStagingError(state)) {
        return 'Error Tracking Transaction'
    }

    return 'Pending Transaction'
}

const isCompleted = state => state === State.MINED
const isStagingError = state => state === State.STAGING_ERROR

export enum State {
    START,
    PENDING,
    MINED,
    STAGING_ERROR,
    GENERIC_ERROR,
}

interface IProps {
    open: boolean
    handleClose: () => void
    state: State
    txHash: string
}

const TransactionModal = ({ open, handleClose, state, txHash }: IProps) => {
    const classes = useStyles()
    const steps = getSteps()

    useEffect(() => {
        if (state === State.GENERIC_ERROR) {
            handleClose()
        }
        console.log('TX HASH: ' + txHash)
    }, [state, txHash])

    const getStepContent = state => {
        switch (state) {
            case State.START:
                return (
                    <>
                        <img
                            src="/static/images/confirm-tx.gif"
                            className={classes.image}
                        />
                        <Typography>
                            The tipping transaction is ready to be sent. If
                            using metamask, press the Confirm Button to
                            initiate.
                        </Typography>
                    </>
                )
            case State.PENDING:
                return (
                    <>
                        <Typography gutterBottom>
                            The tip transaction has been broadcast, and we're
                            now waiting for it to be mined.
                        </Typography>
                        <Typography variant="subtitle2">
                            You can close this window if you like, as this may
                            take some time. You'll get an email when the tip has
                            been received by the author.
                        </Typography>
                        <EtherScanLink
                            txHash={txHash}
                            linkText="View Transaction On Etherscan"
                        />
                    </>
                )
            case State.MINED:
                return (
                    <>
                        <img
                            src="/static/images/tip-success.jpeg"
                            className={classes.image}
                        />
                        <Typography gutterBottom>
                            Your tip has been processed, and has been received
                            by the author. Thanks for your generosity!.
                        </Typography>
                        <EtherScanLink
                            txHash={txHash}
                            linkText="View Transaction On Etherscan"
                        />
                    </>
                )
            default:
                return null
        }
    }

    return (
        <Dialog
            open={open}
            fullWidth={true}
            onClose={() => handleClose()}
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle disableTypography className={classes.container}>
                <Typography variant="h6" className={classes.title}>
                    {getTitle(state)}
                </Typography>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers={true}>
                <Grid container justify="center">
                    {!isStagingError(state) && (
                        <>
                            {getStepContent(state)}
                            <Stepper
                                activeStep={getCurrentStep(state)}
                                alternativeLabel
                            >
                                {steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </>
                    )}
                    {isStagingError(state) && (
                        <>
                            <Typography paragraph>
                                We're having some troubles tracking your
                                transaction in our system.
                            </Typography>
                            <Typography variant="h6" align="center">
                                However, your tip transaction has been broadcast
                                to the network and will be received by the
                                author, it may just take some time to be tracked
                                in Kauri.
                            </Typography>
                        </>
                    )}
                </Grid>
            </DialogContent>
            {getCurrentStep(state) == 1 && <LoadingComponent />}
            {(isCompleted(state) || isStagingError(state)) && (
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
