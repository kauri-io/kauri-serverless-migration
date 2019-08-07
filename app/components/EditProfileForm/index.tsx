import styled from 'styled-components'
import Input from '../../components/Input/Input'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailCheckbox from '../../components/Checkbox/EmailCheckbox'
import EmailField from './EmailField'

const InputsContainers = styled.div`
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
    return (
        <Container>
            <StyledUpload
                bg={avatar}
                text="Profile"
                color="white"
                callback={hash => updateState(hash, 'avatar')}
            />
            <InputsContainers>
                <Input
                    onChange={e => updateState(e.target.value, 'name')}
                    fontWeight="normal"
                    fontSize={6}
                    value={name}
                    placeHolder="Add your full name"
                />
                <Input
                    onChange={e => updateState(e.target.value, 'title')}
                    fontWeight="normal"
                    fontSize={3}
                    value={title}
                    placeHolder="Add job title"
                />
                <Input
                    onChange={e => updateState(e.target.value, 'username')}
                    fontWeight="normal"
                    fontSize={1}
                    value={username}
                    placeHolder="Add username"
                />
                <Input
                    onChange={e => updateState(e.target.value, 'website')}
                    fontWeight="normal"
                    fontSize={1}
                    value={website}
                    placeHolder="Add Website"
                />
                <Offset>
                    <SocialWebsiteIcon brand="twitter" />
                    <Input
                        onChange={e => updateState(e.target.value, 'twitter')}
                        fontWeight="normal"
                        fontSize={1}
                        value={twitter}
                        placeHolder="Twitter"
                    />
                </Offset>
                <Offset>
                    <SocialWebsiteIcon brand="github" />
                    <Input
                        onChange={e => updateState(e.target.value, 'github')}
                        fontWeight="normal"
                        fontSize={1}
                        value={github}
                        placeHolder="Github"
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
            </InputsContainers>
        </Container>
    )
}

export default EditProfileForm
