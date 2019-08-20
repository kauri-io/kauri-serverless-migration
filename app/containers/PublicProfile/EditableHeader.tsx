import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '../../components/Button'
import EditProfileForm from '../../components/EditProfileForm'
import { pipe, assocPath } from 'ramda'
import {
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../../lib/Epics/ShowNotificationEpic'
import { ISaveUserDetailActionType } from '../../components/EditProfileForm/Module'
import { getMyProfile } from '../../queries/__generated__/getMyProfile'
import { withStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

const styles = (theme: Theme) => ({
    container: {
        background: theme.palette.common.black,
        padding: theme.spacing(2),
        width: '100%',
    },
    grid: {
        maxWidth: 1242,
        margin: 'auto',
    },
    saveButton: {
        color: theme.palette.common.white,
    },
})

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
    classes: any
}

interface IState {
    name: string
    username: string
    website: string
    email: string
    title: string

    avatar: string
    social: {
        github: string
        twitter: string
    } | null
    status: string

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

        console.log(payload)

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

    updateState(
        payload:
            | string
            | { github: string | null; twitter: string | null }
            | { newsletter: boolean },
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
        } = this.state
        return (
            <div className={this.props.classes.container}>
                <Grid className={this.props.classes.grid} container={true}>
                    <Grid item={true} sm={4}>
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
                            subscriptions={subscriptions}
                            resendEmailVerificationAction={
                                this.props.resendEmailVerificationAction
                            }
                            updateState={this.updateState.bind(this)}
                        />
                    </Grid>
                    <Grid
                        sm={8}
                        container={true}
                        item={true}
                        alignItems="center"
                        justify="flex-end"
                    >
                        <Button
                            color="primary"
                            variant="text"
                            onClick={() => this.props.toggleEditing()}
                        >
                            Discard
                        </Button>
                        <Button
                            className={this.props.classes.saveButton}
                            color="primary"
                            variant="contained"
                            onClick={() => this.handleSubmit()}
                        >
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(EditableHeader)
