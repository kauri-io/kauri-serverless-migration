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
import { useState, useEffect } from 'react'
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
        margin: theme.spacing(2),
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
    const [amountInDollars, setAmountInDollars] = useState(0.0)
    const [openTxModal, setOpenTxModal] = useState(false)
    const [transactionState, setTransactionState] = useState(State.START)
    const [ethToUSD, setEthToUSD] = useState(0)
    const [rateError, setRateError] = useState(false)

    useEffect(() => {
        //Only obtain rate once when opening tipping modal
        if (open && ethToUSD === 0) {
            fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/') // Call the fetch function passing the url of the API as a parameter
                .then(response => response.json())
                .then((result: any) => {
                    console.log('RESULT: ' + JSON.stringify(result[0]))
                    if (result && result.length > 0 && result[0].price_usd) {
                        let priceUSD = result[0].price_usd
                        console.log(priceUSD)
                        setEthToUSD(priceUSD)
                        setRateError(false)

                        if (amount) {
                            setAmountInDollars(Number(amount * priceUSD))
                        }
                    }
                })
                .catch(err => {
                    console.error(err)
                    setRateError(true)
                })
        }
    }, [open])

    const handleOnTipChange = newValue => {
        setAmount(newValue)
        setAmountInDollars(Number(newValue) * ethToUSD)
    }

    const closeTipModal = () => {
        handleOnTipChange(0)
        handleClose()
    }
    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                onClose={closeTipModal}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle disableTypography className={classes.container}>
                    <Typography variant="h6" className={classes.title}>
                        Tip Author
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon />
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
                                    handleOnTipChange(e.target.value)
                                }}
                                value={amount ? amount : ''}
                            />
                            {!rateError && (
                                <Typography
                                    align="center"
                                    className={classes.text}
                                >
                                    {`\$${amountInDollars.toFixed(2)}`}
                                </Typography>
                            )}
                            {rateError && (
                                <Typography
                                    align="center"
                                    color="error"
                                    className={classes.text}
                                >
                                    Error obtaining exchange rate
                                </Typography>
                            )}
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
                                closeTipModal()
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
