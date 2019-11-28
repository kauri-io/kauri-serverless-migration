import styled from 'styled-components'
import { BodyCard, Label } from '../../components/Typography'
import { TooltipContainer } from '../../components/Select'
import Divider from '../../components/Divider'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {
    Theme,
    TextField,
    FormControl,
    NativeSelect,
    FormHelperText,
} from '@material-ui/core'
import { IField } from './AddMemberModal'

export const AddMemberSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space[3]}px 0px
        ${props => props.theme.space[3]}px 0px;
`

const useStyles = makeStyles((_theme: Theme) => ({
    input: {
        width: '296px',
        '& > div': {
            '& > input': {
                textAlign: 'center',
            },
        },
    },
    dropdown: {
        width: '296px',
    },
}))

interface IProps {
    email: IField
    role: IField
    currentStep: number
    roles: Array<{ value: string; label: string }>
}

const StepOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    > :nth-child(3) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
`

export const ChooseRoleOptions: React.FunctionComponent<{
    roles: Array<{ value: string; label: string }>
    handleRoleChange: (role: string) => void
}> = ({ roles, handleRoleChange }) => (
    <TooltipContainer>
        {roles.map((role, index) =>
            roles.length - 1 === index ? (
                <Label onClick={() => handleRoleChange(role.value)}>
                    {role.label}
                </Label>
            ) : (
                <>
                    <Label
                        key={role.value}
                        onClick={() => handleRoleChange(role.value)}
                    >
                        {role.label}
                    </Label>
                    <Divider key={`${role.value}-divider`} />
                </>
            )
        )}
    </TooltipContainer>
)

const AddMemberModalContent: React.FunctionComponent<IProps> = ({
    currentStep,
    email,
    role,
    roles,
}) => {
    const classes = useStyles()

    return (
        <AddMemberSection>
            {currentStep === 1 && (
                <StepOneContainer>
                    <BodyCard textAlign="center">
                        Invite new moderators and admins by email
                        <br />
                        <br />
                        <b>Important:</b> Admins have the power to edit
                        <br />
                        community metadata, and invite and remove other
                        <br />
                        moderators and admins. Only invite those you trust!
                    </BodyCard>
                    <TextField
                        name="email"
                        margin="dense"
                        placeholder="EMAIL ADDRESS"
                        error={email.hasError}
                        helperText={email.hasError ? 'Incorrect email' : ''}
                        onChange={e => email.handleChange(e.target.value)}
                        className={classes.input}
                        value={email.value}
                    />
                    <FormControl variant="outlined" error={role.hasError}>
                        <NativeSelect
                            name="role"
                            value={role.value}
                            onChange={e => role.handleChange(e.target.value)}
                            inputProps={{
                                id: 'name-native-error',
                            }}
                            className={classes.dropdown}
                        >
                            <option value="" disabled>
                                Choose Role
                            </option>
                            {roles.map(role => (
                                <option value={role.value}>{role.label}</option>
                            ))}
                        </NativeSelect>
                        {role.hasError ? (
                            <FormHelperText>Invalid role</FormHelperText>
                        ) : null}
                    </FormControl>
                </StepOneContainer>
            )}
            {currentStep === 2 && (
                <>
                    <BodyCard>
                        Moderator as been added and now pending.
                    </BodyCard>
                    <BodyCard>
                        You can manage all the moderators from the Manage tab.
                    </BodyCard>
                </>
            )}
        </AddMemberSection>
    )
}

export default AddMemberModalContent
