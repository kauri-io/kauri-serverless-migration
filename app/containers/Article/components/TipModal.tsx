import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Button,
    Grid,
    DialogActions,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import TransactionModal, { State } from './TransactionModal'
import ValidatedTextField from '../../../components/ValidatedTextField'

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
    const [transactionHash, setTransactionHash] = useState('')
    const [ethToUSD, setEthToUSD] = useState(0)
    const [rateError, setRateError] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)

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
        //Disable button if value entered is zero or less
        //Not doing this in validation because the text field would flash as
        //invalid when typing the 0 in 0.x
        if (newValue && newValue.length > 0 && Number(newValue) <= 0) {
            setButtonDisabled(true)
        }

        setAmount(newValue)
        setAmountInDollars(
            newValue === '' || isValidNumber(newValue)
                ? Number(newValue) * ethToUSD
                : amountInDollars
        )
    }

    const closeTipModal = () => {
        handleOnTipChange(0)
        handleClose()
    }

    const isValidNumber = amount => {
        const decimalRegexp = /^\d+(\.\d{1,18})?$/

        return decimalRegexp.test(amount)
    }

    const validateAmount = amount => {
        return amount === '' || isValidNumber(trimTrailingZero(amount))
            ? ''
            : 'Invalid number'
    }

    const onValidation = (_, err) => {
        if (err) {
            setButtonDisabled(true)
            return
        }

        setButtonDisabled(false)
    }

    const trimTrailingZero = value => {
        if (value.endsWith('.')) {
            return value.substring(0, value.length - 1)
        }

        return value
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
                            <ValidatedTextField
                                id="tipAmount"
                                className={classes.ethAmount}
                                label="Enter ETH Amount"
                                handleChange={e => {
                                    handleOnTipChange(e.target.value)
                                }}
                                validate={validateAmount}
                                onValidation={onValidation}
                                required={true}
                                value={amount ? amount : ''}
                                variant="outlined"
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
                                    setTransactionState,
                                    setTransactionHash
                                )
                            }}
                            disabled={buttonDisabled}
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
                txHash={transactionHash}
            />
        </>
    )
}

export default TipModal
