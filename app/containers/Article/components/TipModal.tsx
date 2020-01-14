import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Button,
    Grid,
    TextField,
    DialogActions,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useState } from 'react'
import TransactionModal, { State } from './TransactionModal'

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
        padding: theme.spacing(2),
    },
    text: {
        width: '100%',
    },
    ethAmount: {
        marginTop: theme.spacing(1),
    },
}))

interface IProps {
    tipAction: any
    resourceId: string
    resourceType: 'ARTICLE' | 'LINK'
    open: boolean
    handleClose: () => void
}

const TipModal = ({
    resourceId,
    resourceType,
    tipAction,
    open,
    handleClose,
}: IProps) => {
    const classes = useStyles()
    const [amount, setAmount] = useState()
    const [openTxModal, setOpenTxModal] = useState(false)
    const [transactionState, setTransactionState] = useState(State.START)

    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                onClose={() => handleClose()}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle disableTypography className={classes.container}>
                    <Typography variant="h6" className={classes.title}>
                        Tip Author
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon onClick={handleClose} />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers={true}>
                    <Grid container justify="center">
                        <Grid
                            container
                            justify="center"
                            className={classes.root}
                        >
                            {/* <div> */}
                            <Typography align="center" className={classes.text}>
                                Enter the amount that you would like to tip, in
                                Ether.
                            </Typography>
                            <Typography
                                align="center"
                                variant="subtitle2"
                                className={classes.text}
                            >
                                The author will receive 100% of the
                                contribution.
                            </Typography>
                            <TextField
                                className={classes.ethAmount}
                                id="outlined-helperText"
                                label="Enter ETH Amount"
                                variant="outlined"
                                onChange={e => {
                                    setAmount(e.target.value)
                                }}
                                value={amount ? amount : ''}
                            />
                            {/* </div> */}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container justify="center" className={classes.root}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                handleClose()
                                setOpenTxModal(true)
                                return tipAction(
                                    { resourceId, resourceType, amount },
                                    setTransactionState
                                )
                            }}
                        >
                            TIP AUTHOR
                        </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
            <TransactionModal
                open={openTxModal}
                handleClose={() => {
                    handleClose()
                    setOpenTxModal(false)
                    setTransactionState(State.START)
                }}
                state={transactionState}
            />
        </>
    )
}

export default TipModal
