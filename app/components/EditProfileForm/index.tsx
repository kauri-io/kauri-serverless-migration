import TextField from '@material-ui/core/TextField'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailField from './EmailField'
import { withStyles, makeStyles } from '@material-ui/styles'
import { Grid, Theme, Tooltip, Checkbox } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CheckboxProps } from '@material-ui/core/Checkbox'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxWidth: '400px !important',
    },
    inputs: {
        padding: theme.spacing(0, 2),
    },
    input: {
        width: '100%',
        '&:hover': {
            '& .MuiInput-underline::before': {
                borderBottomColor: 'rgba(255,255,255,0.6)',
            },
        },
        color: 'white',
        '& .MuiInputBase-root': {
            color: 'white',
        },
        '& .MuiInput-underline::before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
        },
    },
    checkboxLabel: {
        color: theme.palette.common.white,
        '& .Mui-disabled': {
            color: theme.palette.common.white,
            opacity: 0.3,
        },
    },
}))

const WhiteChecbox = withStyles(theme => ({
    root: {
        color: theme.palette.common.white,
        '&$checked': {
            color: theme.palette.common.white,
        },
    },
}))((props: CheckboxProps) => <Checkbox {...props} />)

interface IProps {
    avatar: string
    name: string
    title: string
    username: string
    website: string
    github: string | null
    twitter: string | null
    email: string
    status: string
    subscriptions: {
        newsletter: boolean
    }
    resendEmailVerificationAction: () => void
    updateState: (
        payload:
            | string
            | { newsletter: boolean }
            | { twitter: string | null; github: string | null },
        field: string
    ) => void
}

const EditProfileForm = ({
    avatar,
    name,
    title,
    username,
    website,
    github,
    twitter,
    email,
    resendEmailVerificationAction,
    status,
    subscriptions,
    updateState,
}: IProps) => {
    const classes = useStyles()
    const [oldEmail] = useState(email)
    return (
        <Grid className={classes.container} container={true} sm={12}>
            <Grid item={true} sm={3}>
                <UploadLogoButton
                    bg={avatar}
                    text="Profile"
                    color="white"
                    callback={hash => updateState(hash, 'avatar')}
                />
            </Grid>
            <Grid className={classes.inputs} sm={9}>
                <TextField
                    margin="dense"
                    onChange={e => updateState(e.target.value, 'name')}
                    value={name}
                    placeholder="Add your full name"
                    className={classes.input}
                />
                <TextField
                    margin="dense"
                    onChange={e => updateState(e.target.value, 'title')}
                    value={title}
                    placeholder="Add job title"
                    className={classes.input}
                />
                <TextField
                    margin="dense"
                    onChange={e => updateState(e.target.value, 'username')}
                    value={username}
                    placeholder="Add username"
                    className={classes.input}
                />
                <TextField
                    margin="dense"
                    onChange={e => updateState(e.target.value, 'website')}
                    value={website}
                    placeholder="Add Website"
                    className={classes.input}
                />
                <TextField
                    margin="dense"
                    onChange={e =>
                        updateState(
                            { twitter: e.target.value, github },
                            'social'
                        )
                    }
                    className={classes.input}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SocialWebsiteIcon brand="twitter" />
                            </InputAdornment>
                        ),
                    }}
                    value={twitter}
                    placeholder="Twitter"
                />
                <TextField
                    margin="dense"
                    onChange={e =>
                        updateState(
                            { github: e.target.value, twitter },
                            'social'
                        )
                    }
                    className={classes.input}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SocialWebsiteIcon brand="github" />
                            </InputAdornment>
                        ),
                    }}
                    value={github}
                    placeholder="Github"
                />
                <EmailField
                    resendEmailVerification={resendEmailVerificationAction}
                    email={email}
                    handleChange={e => updateState(e.target.value, 'email')}
                    status={status}
                    oldEmail={oldEmail}
                />
                <Tooltip title="Keep this checked to receive our newsletter with the latest tutorials and content series">
                    <FormControlLabel
                        className={classes.checkboxLabel}
                        control={
                            <WhiteChecbox
                                onChange={e =>
                                    updateState(
                                        { newsletter: e.target.checked },
                                        'subscriptions'
                                    )
                                }
                                disabled={!email}
                                checked={subscriptions.newsletter}
                            />
                        }
                        label="Newsletter"
                    />
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default EditProfileForm
