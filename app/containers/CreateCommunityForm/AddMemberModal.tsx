import React from 'react'
import AlertViewComponent from '../../components/Modal/AlertView'
import AddMemberModalContent from './AddMemberModalContent'
import * as Yup from 'yup'
import {
    IShowNotificationAction,
    IShowNotificationPayload,
} from '../../lib/Epics/ShowNotificationEpic'

interface IProps {
    closeModalAction: () => void
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    confirmButtonAction: (
        payload: { email: string; role: string },
        closeModalAction: () => void
    ) => void
}

export interface IRole {
    value: string
    label: string
}

export interface IField {
    value: string
    hasError: boolean
    handleChange: (value: string) => void
    validate: (value: string) => boolean
}

export const roles: IRole[] = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'CURATOR', label: 'Moderator' },
]

const AddMemberModal: React.FunctionComponent<IProps> = props => {
    const [currentStep] = React.useState(1)
    const [email, setEmail] = React.useState<IField>({
        value: '',
        hasError: false,
        handleChange: (value: string) => {
            setEmail({ ...email, value, hasError: !email.validate(value) })
        },
        validate: (value: string) => {
            const emailCheck = Yup.string().email()
            return value.length > 0 && emailCheck.isValidSync(value)
        },
    })
    const [role, setRole] = React.useState<IField>({
        value: '',
        hasError: false,
        handleChange: (value: string) => {
            setRole({ ...role, value, hasError: !role.validate(value) })
        },
        validate: (value: string) => {
            return (
                value.length > 0 &&
                roles.filter(r => r.value === value).length > 0
            )
        },
    })

    return (
        <AlertViewComponent
            closeModalAction={() => props.closeModalAction()}
            confirmButtonAction={() => {
                let hasError = false
                if (!email.validate(email.value)) {
                    setEmail({ ...email, hasError: true })
                    hasError = true
                }
                if (!role.validate(role.value)) {
                    setRole({ ...role, hasError: true })
                    hasError = true
                }

                if (hasError) return

                return props.confirmButtonAction(
                    { email: email.value, role: role.value },
                    props.closeModalAction
                )
            }}
            content={
                <AddMemberModalContent
                    currentStep={currentStep}
                    roles={roles}
                    email={email}
                    role={role}
                />
            }
            title={'Invite New Moderator'}
        />
    )
}

export default AddMemberModal
