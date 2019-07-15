import React, { Component } from 'react'
import styled from 'styled-components'
import Input from '../../components/Input/Input'
import UploadLogoButton from '../../components/Button/UploadLogoButton'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import EmailCheckbox from '../../components/Checkbox/EmailCheckbox'
import TriggerImageUploader from '../ImageUploader'
import { pipe, assocPath, filter, path } from 'ramda'
import EmailField from './EmailField'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'
import { ISaveUserDetailActionType } from './Module'

const InputsContainers = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: ${props => props.theme.space[2]}px;
    justify-content: space-between;
    height: 230px;
`

const StyledUpload = styled(UploadLogoButton)`
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
    OwnProfile: getMyProfile
    saveUserDetailsAction: (
        payload: any,
        callback: any
    ) => ISaveUserDetailActionType
    resendEmailVerificationAction: any
}

interface IState {
    username: string
    title: string
    avatar: string
    website: string
    name: string
    twitter: string
    github: string
    email: string
    status: string
    pendingSubmit: boolean
    subscriptions: {
        newsletter?: boolean
    }
}

class EditableHeader extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        if (!props.OwnProfile.getMyProfile) {
            this.state = {
                pendingSubmit: false,
                username: '',
                title: '',
                avatar: '',
                website: '',
                twitter: '',
                github: '',
                name: '',
                email: '',
                status: 'CREATED',
                subscriptions: {},
            }
        } else {
            const {
                username,
                title,
                avatar,
                website,
                social,
                name,
                email,
                status,
                subscriptions,
            } = props.OwnProfile.getMyProfile
            this.state = {
                pendingSubmit: false,
                username,
                title,
                avatar,
                website,
                twitter: social && social.twitter,
                github: social && social.github,
                name,
                email,
                status,
                subscriptions,
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (
            typeof prevProps.OwnProfile.getMyProfile === 'undefined' &&
            typeof this.props.OwnProfile.getMyProfile !== 'undefined'
        ) {
            const {
                username,
                title,
                avatar,
                website,
                social,
                name,
                email,
                status,
                subscriptions,
            } = this.props.OwnProfile.getMyProfile

            this.setState({
                username,
                title,
                avatar,
                website,
                github: social && social.github,
                twitter: social && social.twitter,
                name,
                email,
                status,
                subscriptions,
            })
        }
    }

    saveUser(redirectURL: string | undefined, callback: any | undefined) {
        const payload = pipe(
            filter(val => typeof val !== 'undefined' || !!val),
            assocPath(['redirectURL'], redirectURL)
        )(this.state)

        this.props.saveUserDetailsAction(payload, (pendingSubmit: any) => {
            this.setState({ pendingSubmit })
            callback && callback()
        })
    }

    uploadImage() {
        TriggerImageUploader(() => {}, '', (_file: Blob, url: string) =>
            this.setState({ avatar: url })
        )
    }
    render() {
        const {
            username,
            title,
            avatar,
            website,
            name,
            twitter,
            github,
            email,
            status,
        } = this.state

        const oldEmail = path(
            ['OwnProfile', 'getMyProfile', 'email'],
            this.props
        )

        return (
            <Container>
                <StyledUpload
                    bg={avatar}
                    handleClick={() => this.uploadImage()}
                    text="Profile"
                    color="white"
                />
                <InputsContainers>
                    <Input
                        onChange={e =>
                            this.setState({'name': e.target.value})
                        }
                        fontWeight="normal"
                        fontSize={6}
                        value={name}
                        placeHolder="Add your full name"
                    />
                    <Input
                        onChange={e =>
                            this.setState({'title': e.target.value})
                        }
                        fontWeight="normal"
                        fontSize={3}
                        value={title}
                        placeHolder="Add job title"
                    />
                    <Input
                        onChange={e =>
                            this.setState({'username': e.target.value})
                        }
                        fontWeight="normal"
                        fontSize={1}
                        value={username}
                        placeHolder="Add username"
                    />
                    <Input
                        onChange={e =>
                            this.setState({'website': e.target.value})
                        }
                        fontWeight="normal"
                        fontSize={1}
                        value={website}
                        placeHolder="Add Website"
                    />
                    <Offset>
                        <SocialWebsiteIcon brand="twitter" />
                        <Input
                            onChange={e =>
                                this.setState({'twitter': e.target.value})
                            }
                            fontWeight="normal"
                            fontSize={1}
                            value={twitter}
                            placeHolder="Twitter"
                        />
                    </Offset>
                    <Offset>
                        <SocialWebsiteIcon brand="github" />
                        <Input
                            onChange={e =>
                                this.setState({'github': e.target.value})
                            }
                            fontWeight="normal"
                            fontSize={1}
                            value={github}
                            placeHolder="Github"
                        />
                    </Offset>
                    <EmailField
                        resendEmailVerification={
                            this.props.resendEmailVerificationAction
                        }
                        email={email}
                        oldEmail={oldEmail}
                        handleChange={e => this.setState({'email': e.target.value})}
                        status={status}
                    />
                    <Offset margin={12}>
                        <EmailCheckbox
                            disabled={!this.state.email}
                            checked={this.state.subscriptions.newsletter}
                            onChange={checked =>
                                this.setState({'subscriptions': {
                                    newsletter: checked,
                                } })
                            }
                        />
                    </Offset>
                </InputsContainers>
            </Container>
        )
    }
}

export default EditableHeader
