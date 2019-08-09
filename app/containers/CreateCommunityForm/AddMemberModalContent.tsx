import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { BodyCard, Label } from '../../components/Typography'
import Select, { TooltipContainer } from '../../components/Select'
import Divider from '../../components/Divider'

export const AddMemberSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space[3]}px 0px
        ${props => props.theme.space[3]}px 0px;
`

interface IProps {
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => any
    handleRoleChange: (role: string) => any
    email: string
    currentStep: number
    role: string
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
    handleEmailChange,
    handleRoleChange,
    email,
    currentStep,
    role,
    roles,
}) => {
    return (
        <AddMemberSection>
            {currentStep === 1 && (
                <StepOneContainer>
                    <BodyCard>
                        Enter the potential moderator or admin’s email address
                        to invite them to join!
                    </BodyCard>
                    <TextField
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="EMAIL ADDRESS"
                    />
                    <Select value={role} placeHolder="Choose Role">
                        <ChooseRoleOptions
                            handleRoleChange={handleRoleChange}
                            roles={roles}
                        />
                    </Select>
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
