import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Typography, Tooltip } from '@material-ui/core'
import { useState } from 'react'
import TipModal from './TipModal'

const useStyles = makeStyles((theme: Theme) => ({
    textContainer: {
        display: 'flex',
    },
    text: {
        width: '100%',
        margin: '0px',
    },
    textDisabled: {
        width: '100%',
        margin: '0px',
        color: theme.palette.grey[400],
    },
    tipButton: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        '&&:disabled': {
            backgroundColor: 'transparent',
        },
    },
    tooltip: {
        maxWidth: 145,
    },
}))

interface IProps {
    tipAction: any
    resourceId: string
    tips: any
    resourceType: 'ARTICLE' | 'LINK'
    loginFirstToTip: () => void
    isLoggedIn: boolean
    isDisabled?: boolean
    hasTipped?: boolean
}

const TipWidget = ({
    resourceId,
    resourceType,
    tips,
    tipAction,
    loginFirstToTip,
    isLoggedIn,
    isDisabled,
    hasTipped,
}: IProps) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip
                classes={{ tooltip: classes.tooltip }}
                placement="top"
                title={
                    isDisabled
                        ? 'Tipping is only available for articles written on Kauri'
                        : ''
                }
            >
                <div>
                    <div className={classes.textContainer}>
                        <Typography
                            variant="h6"
                            align="center"
                            className={
                                isDisabled ? classes.textDisabled : classes.text
                            }
                        >
                            {tips.totals && tips.totals.ETH
                                ? tips.totals.ETH
                                : 0}{' '}
                            ETH
                        </Typography>
                    </div>
                    <div className={classes.textContainer}>
                        <Typography
                            variant="caption"
                            align="center"
                            className={
                                isDisabled ? classes.textDisabled : classes.text
                            }
                        >
                            Tips Received
                        </Typography>
                    </div>
                    <div>
                        <Button
                            className={classes.tipButton}
                            color="primary"
                            variant="outlined"
                            onClick={() => {
                                if (!isLoggedIn) {
                                    return loginFirstToTip()
                                }

                                setOpen(true)
                            }}
                            disabled={isDisabled}
                        >
                            {hasTipped ? 'TIP AGAIN' : 'TIP AUTHOR'}
                        </Button>
                    </div>
                </div>
            </Tooltip>
            <TipModal
                resourceId={resourceId}
                resourceType={resourceType}
                open={open}
                tipAction={tipAction}
                handleClose={() => setOpen(false)}
            />
        </>
    )
}

export default TipWidget
