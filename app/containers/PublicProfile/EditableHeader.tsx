import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import EditProfileForm from '../../components/EditProfileForm'
import { pipe, assocPath } from 'ramda'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'

const HeaderContainer = styled.div`
    background-color: ${props => props.theme.colors.bgPrimary};
    display: flex;
    align-items: flex-start;
    color: ${props => props.theme.colors.white};
    padding: 2.5em ${props => props.theme.padding};
`

const ActionsContainer = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    color: white;
`

interface IProps {
    resendEmailVerificationAction: () => void
    toggleEditing: () => void
    OwnProfile: getMyProfile
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

class EditableHeader extends Component<IProps, IState> {
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
        return (
            <HeaderContainer>
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
                    resendEmailVerificationAction={
                        this.props.resendEmailVerificationAction
                    }
                    updateState={this.updateState.bind(this)}
                />
                <ActionsContainer>
                    <Button
                        color="primary"
                        variant="text"
                        onClick={() => this.props.toggleEditing()}
                    >
                        Discard
                    </Button>
                    <Button
                        fullWidth={true}
                        color="primary"
                        variant="contained"
                        onClick={() => this.handleSubmit()}
                    >
                        Save Changes
                    </Button>
                </ActionsContainer>
            </HeaderContainer>
        )
    }
}

export default EditableHeader
