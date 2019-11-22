import TextField from '@material-ui/core/TextField'
import ValidatedTextField from '../../components/ValidatedTextField'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailField from './EmailField'
import { withStyles, makeStyles } from '@material-ui/styles'
import { Grid, Theme, Tooltip, Checkbox } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CheckboxProps } from '@material-ui/core/Checkbox'
import { useState } from 'react'
import isUrl from 'is-url'

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
    usernameReadOnly: boolean
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
    updateValidationMessages?: (m: object) => void
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
    usernameReadOnly,
    subscriptions,
    updateState,
    updateValidationMessages,
}: IProps) => {
    const classes = useStyles()
    const [oldEmail] = useState(email)
    const [validationMessages, setValidationMessages] = useState({})

    const validateUrl = url => {
        console.log('ON VALIDATION: ' + onValidation)
        if (url) {
            if (!url.startsWith('http')) {
                url = 'http://' + url
            }

            if (!isUrl(url)) {
                return 'Please enter a valid url'
            }
        }

        return ''
    }

    const validateUsername = username => {
        if (username && username.length > 40) {
            return 'Username longer than 40 characters'
        }

        return ''
    }

    const onValidation = (id, message) => {
        console.log('Message: ' + message)
        console.log('Id: ' + id)
        if (!message || message == '') {
            console.log('Delete: ' + id)
            delete validationMessages[id]
            return
        }

        validationMessages[id] = message
        setValidationMessages(validationMessages)
        updateValidationMessages && updateValidationMessages(validationMessages)
        console.log(
            'Validation messages: ' + JSON.stringify(validationMessages)
        )
    }

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
                {usernameReadOnly && username && (
                    <TextField
                        margin="dense"
                        onChange={e => updateState(e.target.value, 'username')}
                        value={username}
                        placeholder="Add username"
                        className={classes.input}
                        InputProps={{
                            readOnly: usernameReadOnly && username != '',
                        }}
                    />
                )}
                {(!usernameReadOnly || (!username || username == '')) && (
                    <ValidatedTextField
                        id="username"
                        margin="dense"
                        handleChange={e =>
                            updateState(e.target.value, 'username')
                        }
                        value={username}
                        placeholder="Add username"
                        className={classes.input}
                        validate={validateUsername}
                        required={true}
                        onValidation={onValidation}
                    />
                )}

                <ValidatedTextField
                    id="website"
                    margin="dense"
                    handleChange={e => updateState(e.target.value, 'website')}
                    value={website}
                    placeholder="Add Website"
                    className={classes.input}
                    validate={validateUrl}
                    onValidation={onValidation}
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
                    onValidation={onValidation}
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
