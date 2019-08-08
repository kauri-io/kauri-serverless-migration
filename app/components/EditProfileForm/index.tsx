import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailCheckbox from '../../components/Checkbox/EmailCheckbox'
import EmailField from './EmailField'
import { withStyles } from '@material-ui/styles';

const TextFieldsContainers = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: ${props => props.theme.space[2]}px;
    justify-content: space-between;
    height: 230px;
`

export const StyledUpload = styled(UploadLogoButton)`
    margin-right: ${props => props.theme.space[1]}px;
`

const Offset = styled.div<{ margin?: number }>`
    margin-left: -${props => props.margin || props.theme.space[3]}px;
    display: flex;
    flex-direction: row;
    & > a {
        margin-right: ${props => props.theme.space[1]}px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const styles = {
    input: {
        '&:hover': {
            '& .MuiInput-underline::before': {
                borderBottomColor: 'rgba(255,255,255,0.6)',
            }
        },
        color: 'white',
        '& .MuiInputBase-root': {
            color: 'white',
        },
        '& .MuiInput-underline::before': {
            borderBottomColor: 'rgba(255,255,255,0.3)',
        }
    }
};

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
    classes
}: IProps) => {
    return (
        <Container>
            <StyledUpload
                bg={avatar}
                text="Profile"
                color="white"
                callback={hash => updateState(hash, 'avatar')}
            />
            <TextFieldsContainers>
                <TextField
                    onChange={e => updateState(e.target.value, 'name')}
                    value={name}
                    placeholder="Add your full name"
                    className={classes.input}
                />
                <TextField
                    onChange={e => updateState(e.target.value, 'title')}
                    value={title}
                    placeholder="Add job title"
                    className={classes.input}
                />
                <TextField
                    onChange={e => updateState(e.target.value, 'username')}
                    value={username}
                    placeholder="Add username"
                    className={classes.input}
                />
                <TextField
                    onChange={e => updateState(e.target.value, 'website')}
                    value={website}
                    placeholder="Add Website"
                    className={classes.input}
                />
                <Offset>
                    <SocialWebsiteIcon brand="twitter" />
                    <TextField
                        onChange={e => updateState(e.target.value, 'twitter')}
                        className={classes.input}
                        inputProps={{
                            className: classes.input
                        }}
                        value={twitter}
                        placeholder="Twitter"
                    />
                </Offset>
                <Offset>
                    <SocialWebsiteIcon brand="github" />
                    <TextField
                        onChange={e => updateState(e.target.value, 'github')}
                        className={classes.input}
                        inputProps={{
                            className: classes.input
                        }}
                        value={github}
                        placeholder="Github"
                    />
                </Offset>
                <EmailField
                    resendEmailVerification={resendEmailVerificationAction}
                    email={email}
                    handleChange={e => updateState(e.target.value, 'email')}
                    status={status}
                />
                <Offset margin={12}>
                    <EmailCheckbox
                        disabled={!email}
                        checked={subscriptions.newsletter}
                        onChange={checked =>
                            updateState(
                                {
                                    newsletter: checked,
                                },
                                'subscriptions'
                            )
                        }
                    />
                </Offset>
            </TextFieldsContainers>
        </Container>
    )
}

export default withStyles(styles)(EditProfileForm);