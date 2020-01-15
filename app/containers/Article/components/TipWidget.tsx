import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import TipModal from './TipModal'

const useStyles = makeStyles((theme: Theme) => ({
    tipTotal: {
        marginTop: theme.spacing(1),
    },
    tipButton: {
        marginBottom: theme.spacing(1),
    },
}))

interface IProps {
    tipAction: any
    resourceId: string
    tips: any
    resourceType: 'ARTICLE' | 'LINK'
    loginFirstToTip: () => void
    isLoggedIn: boolean
}

const TipWidget = ({
    resourceId,
    resourceType,
    tips,
    tipAction,
    loginFirstToTip,
    isLoggedIn,
}: IProps) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <>
            <div>
                <Typography variant="h6" className={classes.tipTotal}>
                    {tips.totals && tips.totals.ETH ? tips.totals.ETH : 0} ETH
                </Typography>
            </div>
            <div>
                <Typography variant="caption" className={classes.tipTotal}>
                    Author Rewarded
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
                >
                    TIP AUTHOR
                </Button>
            </div>
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
