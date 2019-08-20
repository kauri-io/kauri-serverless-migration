import TextField from '@material-ui/core/TextField'
import Button from '../../components/Button'
import * as Yup from 'yup'
import { useState, FunctionComponent } from 'react'
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/EmailOutlined'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        background: theme.palette.common.black,
        padding: theme.spacing(4),
    },
    button: {
        color: theme.palette.common.white,
    },
    input: {
        color: theme.palette.common.white,
        '&:hover': {
            '&:before': {
                borderBottomColor: 'rgba(255,255,255,0.6) !important',
            },
        },
        '&:before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
        },
        margin: theme.spacing(2),
    },
    icon: {
        fill: theme.palette.primary.main,
        width: 64,
        height: 64,
        marginBottom: theme.spacing(2),
    },
}))

interface IProps {
    handleSubmit: (emailAddress: string) => void
    handleError: () => void
}

interface IState {
    emailAddress: string | null
}

const handleEmailAddress = (props: IProps, state: IState) => async () => {
    const validate = Yup.string()
        .email()
        .required()
    const result = await validate.isValid(state.emailAddress)
    if (result && state.emailAddress) {
        return props.handleSubmit(state.emailAddress)
    } else {
        props.handleError()
    }
}

const NewsletterBanner: FunctionComponent<IProps> = props => {
    const [state, setState] = useState<IState>({
        emailAddress: null,
    })

    const classes = useStyles()

    return (
        <Grid
            className={classes.container}
            container={true}
            alignItems="center"
            justify="center"
            direction="column"
        >
            <EmailIcon className={classes.icon} />
            <Typography color="secondary" variant="h4">
                Kauri Newsletter
            </Typography>
            >
            <Typography color="secondary" variant="body1">
                Subscribe below and receive the latest Ethereum tutorials and
                project announcements every 2 weeks!
            </Typography>
            <TextField
                margin="normal"
                placeholder={'Enter your email address'}
                onChange={({ target: { value: emailAddress } }) =>
                    setState({ emailAddress })
                }
                onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter') {
                        handleEmailAddress(props, state)().catch(_ => {
                            return
                        })
                    }
                }}
                InputProps={{
                    className: classes.input,
                }}
                value={state.emailAddress}
            />
            <Button
                color="primary"
                variant="contained"
                onClick={handleEmailAddress(props, state)}
                className={classes.button}
            >
                Subscribe
            </Button>
        </Grid>
    )
}

export default NewsletterBanner
