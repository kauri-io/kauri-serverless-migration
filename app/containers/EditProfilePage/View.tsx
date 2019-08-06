import React, { Component } from 'react'
import styled from 'styled-components'
import EditProfileForm from '../../components/EditProfileForm'
import PrimaryButton from '../../components/Button/PrimaryButton'
import Loading from '../../components/Loading'
import analytics from '../../lib/analytics'
import moment from 'moment'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { getProfileURL } from '../../lib/getURLs'
import TriggerImageUploader from '../ImageUploader'
import { pipe, assocPath } from 'ramda'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'
import { getMyProfile_getMyProfile } from '../../queries/__generated__/getMyProfile'

const Page = styled.div`
    display: flex;
    background: ${props => props.theme.bgPrimary};
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.theme.space[3]}px;
    justify-content: center;
    width: 100%;
`

interface IProps {
    OwnProfile: {
        getMyProfile: getMyProfile_getMyProfile
    }
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    routeChangeAction: (route: string) => void
    saveUserDetailsAction: (
        payload: any,
        callback: any
    ) => ISaveUserDetailActionType
    router: {
        query: {
            redirected: boolean
            r: string
        }
    }
    user:
        | {
              name: string
              username: string
              email: string
              dateCreated: string
          }
        | undefined
}

interface IState {
    name: string
    username: string
    website: string
    email: string
    title: string
    github: string
    avatar: string
    status: string
    twitter: string
    pendingSubmit: boolean
    subscriptions: {
        newsletter: boolean
    }
}

class OnboardingEditProfile extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        const profile = props.OwnProfile.getMyProfile
        this.state = {
            pendingSubmit: false,
            subscriptions: { newsletter: false },
            ...profile,
        }
    }

    emailCheck(email) {
        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return email && emailCheck.test(email.toLowerCase())
    }

    saveUser(route) {
        const payload = pipe(
            // filter((val) => typeof val !== 'undefined' || !!val),
            assocPath(['redirectURL'], route)
        )(this.state)

        this.props.saveUserDetailsAction(payload, (pendingSubmit: any) => {
            this.setState({ pendingSubmit })
        })
    }

    handleSubmit() {
        const validEmail = this.emailCheck(this.state.email)
        if (validEmail) {
            this.saveUser(
                this.props.router.query.redirected
                    ? `${this.props.router.query.r}?redirected=true`
                    : this.props.router.query.r
            )
        } else {
            this.props.showNotificationAction({
                notificationType: 'error',
                message: 'Email Required',
                description: 'Please enter a valid email address',
            })
        }
    }

    componentDidMount() {
            const { name, username, email, title, dateCreated } = this.props.OwnProfile.getMyProfile
            
            const hasData = name && username && email && title
            const loginTrackingPending = window.localStorage.getItem(
                'login-tracking-pending'
            )

            if (loginTrackingPending) {
                const daysCreated = moment().diff(
                    moment(dateCreated),
                    'minutes'
                )
                if (!daysCreated || daysCreated <= 5) {
                    analytics.signup(this.props.OwnProfile.getMyProfile)
                } else {
                    analytics.login(this.props.OwnProfile.getMyProfile)
                }
                window.localStorage.removeItem('login-tracking-pending')
            }
            if (hasData) {
                let newRedirectURL
                if (typeof this.props.router.query.r === 'string') {
                    newRedirectURL =
                        this.props.router.query.r.indexOf('https://') !== -1 ||
                        this.props.router.query.redirected
                            ? this.props.router.query.r + '?redirected=true'
                            : this.props.router.query.r
                } else {
                    newRedirectURL = getProfileURL(this.props.user as any).as
                }
                return this.props.routeChangeAction(newRedirectURL)
            }
    }
    uploadImage() {
        TriggerImageUploader(() => {}, '', (_file: Blob, url: string) =>
            this.setState({ avatar: url })
        )
    }

    updateState(payload: string | { newsletter: boolean }, field: string) {
        const newState = this.state
        newState[field] = payload
        this.setState(newState)
    }

    render() {
        const {
            name,
            username,
            email,
            title,
            twitter,
            github,
            avatar,
            website,
            subscriptions,
            status,
        } = this.state
        const hasData = name && username && email && title
        if (hasData) {
            return (
                <Page>
                    <Loading />
                </Page>
            )
        }

        return (
            <Page>
                <Wrapper>
                    <EditProfileForm
                        name={name}
                        username={username}
                        avatar={avatar}
                        github={github}
                        twitter={twitter}
                        website={website}
                        title={title}
                        email={email}
                        status={status}
                        subscriptions={subscriptions}
                        resendEmailVerificationAction={() =>
                            console.log('email verification')
                        }
                        uploadImage={this.uploadImage}
                        updateState={this.updateState.bind(this)}
                    />
                    <ButtonWrapper>
                        <PrimaryButton onClick={() => this.handleSubmit()}>
                            Next
                        </PrimaryButton>
                    </ButtonWrapper>
                </Wrapper>
            </Page>
        )
    }
}

export default OnboardingEditProfile
