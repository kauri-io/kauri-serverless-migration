import React, { Component } from 'react'
import styled from 'styled-components'
import EditProfileForm from '../../components/EditProfileForm'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import analytics from '../../lib/analytics'
import moment from 'moment-mini'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { getProfileURL } from '../../lib/getURLs'
import { pipe, assocPath } from 'ramda'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'
import { getMyProfile_getMyProfile } from '../../queries/__generated__/getMyProfile'
import { resendEmailVerificationAction } from '../EmailVerification/Module'

const Page = styled.div`
    display: flex;
    background: ${props => props.theme.bgPrimary};
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    @media (max-width: 600px) {
        margin-top: -56px;
        padding: 16px;
    }
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
    resendEmailVerificationAction: () => void
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
    social: {
        github: string
        twitter: string
    }
    avatar: string
    status: string
    pendingSubmit: boolean
    subscriptions: {
        newsletter: boolean
    }
    articles: {
        totalElements: number
    }
    collections: {
        totalElements: number
    }
    validationMessages: object
    hasData: boolean
}

class OnboardingEditProfile extends Component<IProps, IState> {
    constructor(props) {
        super(props)
        const profile = props.OwnProfile.getMyProfile

        let hasData = false
        if (
            profile &&
            profile.username != null &&
            profile.username.length > 0 &&
            profile.email != null &&
            profile.email.length > 0
        ) {
            hasData = true
        }

        this.state = {
            pendingSubmit: false,
            subscriptions: { newsletter: false },
            validationMessages: {},
            ...profile,
            hasData,
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
        if (!this.state.hasData) {
            return
        }

        const loginTrackingPending = window.localStorage.getItem(
            'login-tracking-pending'
        )

        if (loginTrackingPending) {
            const daysCreated = moment().diff(
                moment(this.props.OwnProfile.getMyProfile.dateCreated),
                'minutes'
            )
            if (!daysCreated || daysCreated <= 5) {
                analytics.signup(this.props.OwnProfile.getMyProfile)
            } else {
                analytics.login(this.props.OwnProfile.getMyProfile)
            }
            window.localStorage.removeItem('login-tracking-pending')
        }

        let newRedirectURL
        if (typeof this.props.router.query.r === 'string') {
            newRedirectURL =
                this.props.router.query.r.indexOf('https://') !== -1 ||
                this.props.router.query.redirected
                    ? this.props.router.query.r + '?redirected=true'
                    : this.props.router.query.r
        } else {
            newRedirectURL = getProfileURL(this.props.user as any).href
        }
        return this.props.routeChangeAction(newRedirectURL)
    }

    updateState(
        payload:
            | string
            | object
            | { newsletter: boolean }
            | { github: string | null; twitter: string | null },
        field: string
    ) {
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
            social,
            avatar,
            website,
            subscriptions,
            status,
            validationMessages,
            hasData,
        } = this.state

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
                        github={social && social.github}
                        twitter={social && social.twitter}
                        website={website}
                        title={title}
                        email={email}
                        status={status}
                        usernameReadOnly={false}
                        subscriptions={subscriptions}
                        resendEmailVerificationAction={
                            resendEmailVerificationAction
                        }
                        updateState={this.updateState.bind(this)}
                        updateValidationMessages={messages =>
                            this.updateState(messages, 'validationMessages')
                        }
                    />
                    <ButtonWrapper>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => this.handleSubmit()}
                            disabled={
                                Object.keys(validationMessages).length > 0
                            }
                        >
                            Next
                        </Button>
                    </ButtonWrapper>
                </Wrapper>
            </Page>
        )
    }
}

export default OnboardingEditProfile
