import React, { Component } from 'react'
import styled from 'styled-components'
import EditProfileForm from '../EditProfileForm'
import PrimaryButton from '../../components/Button/PrimaryButton'
import Loading from '../../components/Loading'
import analytics from '../../lib/analytics'
import moment from 'moment'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { getProfileURL } from '../../lib/getURLs'

const Page = styled.div`
    display: flex;
    background: ${props => props.theme.bgPrimary};
    height: 100vh;
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
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    routeChangeAction: (route: string) => void
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

class OnboardingEditProfile extends Component<IProps> {
    login: any

    handleSubmit() {
        const loginComp = this.login.getWrappedInstance().getWrappedInstance()

        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const validEmail = emailCheck.test(
            String(loginComp.state.email).toLowerCase()
        )

        if (validEmail) {
            loginComp.saveUser(
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
        if (this.props.user) {
            const { name, username, email, dateCreated } = this.props.user
            const hasData = name && username && email

            const loginTrackingPending = window.localStorage.getItem(
                'login-tracking-pending'
            )

            if (loginTrackingPending) {
                const daysCreated = moment().diff(
                    moment(dateCreated),
                    'minutes'
                )
                if (!daysCreated || daysCreated <= 5) {
                    analytics.signup(this.props.user)
                } else {
                    analytics.login(this.props.user)
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
                    newRedirectURL = getProfileURL(this.props.user as any).href
                }
                return this.props.routeChangeAction(newRedirectURL)
            }
        }
    }

    render() {
        if (!this.props.user) return null
        const { name, username, email } = this.props.user
        const hasData = name && username && email
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
                    <EditProfileForm ref={comp => (this.login = comp)} />
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
