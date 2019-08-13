import TextField from '@material-ui/core/TextField'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailField from './EmailField'
import { withStyles } from '@material-ui/styles'
import { Grid, Theme, Tooltip, Checkbox } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CheckboxProps } from '@material-ui/core/Checkbox'

const styles = (theme: Theme) => ({
    container: {
        maxWidth: 400,
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
    },
})

const WhiteChecbox = withStyles(theme => ({
    root: {
        color: theme.palette.common.white,
        '&$checked': {
            color: theme.palette.common.white,
        },
    },
    checked: {},
}))((props: CheckboxProps) => <Checkbox color="default" {...props} />)

interface IProps {
    avatar: string
    name: string
    title: string
    username: string
    website: string
    github: string
    twitter: string
    email: string
    status: string
    subscriptions: {
        newsletter: boolean
    }
    resendEmailVerificationAction: () => void
    updateState: (
        payload: string | { newsletter: boolean },
        field: string
    ) => void
    classes: any
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
    classes,
}: IProps) => {
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
                    onChange={e => updateState(e.target.value, 'twitter')}
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
                    onChange={e => updateState(e.target.value, 'github')}
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

export default withStyles(styles)(EditProfileForm)
