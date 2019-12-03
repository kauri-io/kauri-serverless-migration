import TextField from '@material-ui/core/TextField'
import Button from '../../components/Button'
import * as Yup from 'yup'
import { useState, FunctionComponent } from 'react'
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: 'flex',
            backgroundColor: 'white',
        },
        title: {
            fontSize: 20,
            fontWeight: 500,
            lineHeight: '24px',
        },
        subtitle: {
            fontSize: 14,
            fontWeight: 400,
            maxWidth: 400,
        },
        button: {},
        input: {
            maxWidth: 400,
            width: '100%',
        },
        newsletterSignup: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            background: `url(${global.window &&
                global.window.location
                    .origin}/static/images/NewsletterSVG.svg) no-repeat`,
            width: 1224,
            margin: 'auto',
            alignItems: 'flex-start',
            padding: theme.spacing(2),
        },
    }
})

interface IProps {
    handleSubmit: (emailAddress: string) => void
    handleError: () => void
}

interface IState {
    emailAddress: string | null
}

const handleEmailAddress = (
    handleError: () => void,
    handleSubmit: (emailAddress: string) => void,
    state: IState
) => async () => {
    const validate = Yup.string()
        .email()
        .required()
    const result = await validate.isValid(state.emailAddress)
    if (result && state.emailAddress) {
        return handleSubmit(state.emailAddress)
    } else {
        handleError()
    }
}

const NewsletterBanner: FunctionComponent<IProps> = ({
    handleError,
    handleSubmit,
}) => {
    const [state, setState] = useState<IState>({
        emailAddress: '',
    })

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Grid container={true} className={classes.newsletterSignup}>
                <Typography variant="h4" className={classes.title}>
                    Kauri Newsletter
                </Typography>
                <Typography variant="body1" className={classes.subtitle}>
                    Subscribe below and receive the latest Ethereum tutorials
                    and project announcements every 2 weeks!
                </Typography>
                <TextField
                    fullWidth={true}
                    margin="normal"
                    placeholder={'Enter your email address'}
                    onChange={({ target: { value: emailAddress } }) =>
                        setState({ emailAddress })
                    }
                    onKeyPress={(e: React.KeyboardEvent) => {
                        if (e.key === 'Enter') {
                            handleEmailAddress(
                                handleError,
                                handleSubmit,
                                state
                            )().catch(_ => {
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
                    onClick={handleEmailAddress(
                        handleError,
                        handleSubmit,
                        state
                    )}
                    className={classes.button}
                >
                    Subscribe
                </Button>
            </Grid>
        </div>
    )
}

export default NewsletterBanner
