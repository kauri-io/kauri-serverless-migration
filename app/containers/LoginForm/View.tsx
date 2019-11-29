import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Button from '../../components/Button'
import { IRegisterAction } from './Module'
import { IShowNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Typography, Grid } from '@material-ui/core'
import Image from '../../components/Image'

const Container = styled.div`
    background: ${props => props.theme.bgPrimary};
    color: white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    & > * {
        margin: ${props => props.theme.space[1]}px;
    }
    & #mc_embed_signup {
        width: 400px;
        color: ${props => props.theme.primaryTextColor};
        padding: ${props => props.theme.space[2]}px;
        border-radius: 4px;
        margin-top: ${props => props.theme.space[2]}px;
    }
`

const Web3Unavailable = () => (
    <Grid
        style={{ height: '100%' }}
        container={true}
        direction="column"
        justify="center"
        alignItems="center"
    >
        <Typography gutterBottom={true} variant="h4" component="h1">
            Web3 Sign in
        </Typography>
        <Typography gutterBottom={true}>
            You need the MetaMask extension to use Kauri. (MetaMask supports
            Chrome, Firefox, Opera)
        </Typography>
        <Image
            width={100}
            height={100}
            image="/static/images/metamask/avatar.png"
        />
        <a style={{ marginTop: 24 }} href="https://metamask.io" target="_blank">
            https://metamask.io
        </a>
        <div style={{ marginTop: 40 }}>
            Here for the content? Sign up for a newsletter below and receive the
            latest Web3 tutorials, project announcements, and articles every 2
            weeks!
        </div>
        <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
        />
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html: `	#mc_embed_signup{margin-top: 40px; width: 500px; background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }`,
            }}
        />
        <div id="mc_embed_signup">
            <form
                action="https://kauri.us17.list-manage.com/subscribe/post?u=e46233ccfd6bb938ab7cbb5a3&amp;id=f49f81a2a9"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
            >
                <div id="mc_embed_signup_scroll">
                    <div className="indicates-required">
                        <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">
                            Email Address <span className="asterisk">*</span>
                        </label>
                        <input
                            type="email"
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                        />
                    </div>
                    <div id="mce-responses" className="clear">
                        <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: 'none' }}
                        />
                        <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                    >
                        <input
                            type="text"
                            name="b_e46233ccfd6bb938ab7cbb5a3_f49f81a2a9"
                            tabIndex={-1}
                            defaultValue=""
                        />
                    </div>
                    <div className="clear">
                        <input
                            type="submit"
                            defaultValue="Subscribe"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button"
                        />
                    </div>
                </div>
            </form>
        </div>
        <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        />
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);`,
            }}
        />
    </Grid>
)

class LoginForm extends React.Component<{
    handleSubmit: (e?: SyntheticEvent<HTMLButtonElement>) => void
    getFieldDecorator: any
    type?: string
    isSubmitting: boolean
}> {
    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.props.handleSubmit(e)
        }
    }

    render() {
        return (
            <LoginContainer>
                <Typography
                    gutterBottom={true}
                    variant="h4"
                    component="h1"
                    color="secondary"
                >
                    Web3 Sign in
                </Typography>
                <Typography gutterBottom={true} color="secondary">
                    Sign in using Web3 enabled provider. (MetaMask, Status,
                    Coinbase Wallet)
                </Typography>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => this.props.handleSubmit()}
                >
                    SIGN IN
                </Button>
            </LoginContainer>
        )
    }
}

interface IProps {
    form: any
    registerAction: IRegisterAction
    showNotificationAction: IShowNotificationAction
    handleSubmit: (e?: SyntheticEvent<HTMLButtonElement>) => void
    isSubmitting: boolean
    getFieldDecorator: any
}

class LoginFormContainer extends React.Component<IProps> {
    render() {
        if (global.window && !global.window.web3) {
            return <Web3Unavailable />
        } else if (global.window && global.window.web3) {
            return (
                <Container>
                    <Head>
                        <title>Kauri - Login</title>
                    </Head>
                    <LoginForm {...this.props} type="register" />
                </Container>
            )
        } else {
            return null
        }
    }
}

export default LoginFormContainer
