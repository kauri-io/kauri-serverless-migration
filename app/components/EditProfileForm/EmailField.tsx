import React, { ChangeEvent } from 'react'
import ValidatedTextField from '../../components/ValidatedTextField'
import { withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import styled from 'styled-components'
import theme from '../../lib/theme-config'
import { Label } from '../../components/Typography'
import { Tooltip } from 'react-tippy'
import { withStyles } from '@material-ui/styles'
import { InputAdornment } from '@material-ui/core'

const Icon = styled.img`
    height: 20px;
    width: 20px;
    margin-right: ${props => props.theme.space[1]}px;
`

const TooltipContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: relative;
    padding: ${theme.space[2]}px;
    width: 100px;
    text-align: center;
    > * {
        cursor: pointer;
    }
    > span:last-child {
        text-transform: uppercase;
        font-size: ${theme.fontSizes[0]}px;
        font-weight: ${theme.fontWeight[3]};
    }
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    border-radius: 4px;
    margin-bottom: -10px;
    margin-left: -7px;

    & > .resend {
        color: ${theme.colors.primary};
    }
`

const TooltipArrow = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    position: absolute;
    z-index: -1;
    bottom: -3%;
    width: 14px;
    height: 14px;
    background: white;
    transform: rotate(45deg);
    border-radius: 2px;
`

interface IProps {
    handleChange: (e: ChangeEvent) => void
    email: string
    status: string
    resendEmailVerification: () => void
    classes: any
    oldEmail: string | null
    onValidation?: (k: string, e: string) => void
}

const styles = {
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
}

const EmailStatus = ({ status, resendEmailVerification }) =>
    status === 'CREATED' ? (
        <Tooltip
            html={
                <TooltipContainer>
                    <TooltipArrow />
                    <Label>Email Verification</Label>
                    <Label
                        className="resend"
                        onClick={() => resendEmailVerification()}
                    >
                        Resend
                    </Label>
                </TooltipContainer>
            }
            position="top"
            trigger="mouseenter"
            unmountHTMLWhenHide={true}
            interactive={true}
        >
            <Icon src="/static/images/icons8-info.png" />
        </Tooltip>
    ) : (
        <Tooltip
            html={
                <TooltipContainer>
                    <TooltipArrow />
                    <Label>Email Verified</Label>
                </TooltipContainer>
            }
            position="top"
            trigger="mouseenter"
            unmountHTMLWhenHide={true}
        >
            <Icon src="/static/images/icons8-info.png" />
        </Tooltip>
    )

const EmailField = ({
    classes,
    handleChange,
    email,
    resendEmailVerification,
    status,
    oldEmail,
    onValidation,
}: IProps) => (
    <ValidatedTextField
        id="email"
        margin="dense"
        className={classes.input}
        handleChange={handleChange}
        value={email}
        placeholder="Add Email"
        validate={validateEmailAddress}
        required={true}
        InputProps={{
            startAdornment: oldEmail && (
                <InputAdornment position="start">
                    <EmailStatus
                        status={status}
                        resendEmailVerification={resendEmailVerification}
                    />
                </InputAdornment>
            ),
        }}
        onValidation={onValidation}
    />
)

const validateEmailAddress = address => {
    if (address) {
        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailPattern.test(address)) {
            return 'Please enter a valid email address'
        }
    }

    return ''
}

const mapStateToProps = () => {
    return {}
}

export default compose(
    withApollo,
    connect(mapStateToProps, {})
)(withStyles(styles)(EmailField))
