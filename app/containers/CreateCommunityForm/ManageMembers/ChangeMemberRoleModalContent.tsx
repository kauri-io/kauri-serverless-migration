
import styled from 'styled-components'
import Select from '../../../components/Select'
import { ChooseRoleOptions } from '../AddMemberModalContent'
import { roles, IRole } from '../AddMemberModal'
import { pipe, find, path } from 'ramda'
import { useState } from 'react';

export const ChangeMemberRoleModalContainer = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space[3]}px 0px
        ${props => props.theme.space[3]}px 0px;
`

interface IProps {
    handleMemberRoleChange: (role: string) => void
}

const ChangeMemberRoleModalContent: React.FunctionComponent<IProps> = props => {
    const [state, setRole] = useState<{ role: string | null }>({
        role: null,
    })

    const chosenRole =
        typeof state.role === 'string'
            ? pipe(
                  find<IRole>(role => role.value === state.role),
                  path<string>(['label'])
              )(roles)
            : state.role
    return (
        <ChangeMemberRoleModalContainer>
            <Select value={chosenRole} placeHolder={'Choose Role'}>
                <ChooseRoleOptions
                    roles={roles}
                    handleRoleChange={(role: string) => {
                        props.handleMemberRoleChange(role)
                        setRole({ role })
                    }}
                />
            </Select>
        </ChangeMemberRoleModalContainer>
    )
}

export default ChangeMemberRoleModalContent
