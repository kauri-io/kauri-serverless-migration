import ManageMemberEmptyState from './ManageMemberEmptyState'
import MembersPanel from './MembersPanel'
import InviteMembersPanel from './InviteMembersPanel'
import FormInviteMembersPanel, { IInvitation } from './FormInviteMembersPanel'
import styled from 'styled-components'
import {
    changeMemberRoleAction as changeMemberRole,
    resendInvitationAction as resendInvitation,
    sendCommunityInvitationAction as sendCommunityInvitation,
} from '../../Community/Module'
import { prepareChangeMemberRoleVariables } from '../../../queries/__generated__/prepareChangeMemberRole'
import { openModalAction as openModal } from '../../../components/Modal/Module'
import AlertViewComponent from '../../../components/Modal/AlertView'
import ChangeMemberRoleModalContent from './ChangeMemberRoleModalContent'
import { Component } from 'react'
import { removeMemberVariables } from '../../../queries/__generated__/removeMember'
import { revokeInvitationVariables } from '../../../queries/__generated__/revokeInvitation'
import { Community_members } from '../../../queries/Fragments/__generated__/Community'

const ManageMembersContainer = styled.section`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
`
interface IProps {
    userId: string
    invitations: IInvitation[] | null
    formInvitations?: IInvitation[] | null
    members: Community_members
    openAddMemberModal: () => void
    closeModalAction: () => void
    removeMemberAction: (
        payload: Pick<removeMemberVariables, 'account' | 'id'>
    ) => void
    revokeInvitationAction: (
        payload: Pick<revokeInvitationVariables, 'invitationId' | 'id'>
    ) => void
    cancelInvitation: (payload: { index: number }) => void
    id: string | null
    data?: {
        getCommunityInvitations: { content: any }
    }
    isCommunityAdmin: boolean
    openModalAction: typeof openModal
    changeMemberRoleAction: typeof changeMemberRole
    resendInvitationAction: typeof resendInvitation
    sendCommunityInvitationAction: typeof sendCommunityInvitation
}

interface IRole {
    role: string | null
}

class ManageMembers extends Component<IProps, IRole> {
    state = {
        role: null,
    }

    openChangeMemberRoleModal = (
        payload: Pick<prepareChangeMemberRoleVariables, 'id' | 'account'>
    ) => {
        this.props.openModalAction({
            children: (
                <AlertViewComponent
                    closeModalAction={() => this.props.closeModalAction()}
                    confirmButtonAction={() => {
                        this.props.changeMemberRoleAction({
                            ...payload,
                            role: this.state.role as any,
                        })
                    }}
                    content={
                        <ChangeMemberRoleModalContent
                            handleMemberRoleChange={(role: string) =>
                                this.setState({ role })
                            }
                        />
                    }
                    title={'Change Member Role'}
                />
            ),
        })
    }

    render() {
        const props = this.props

        if (Array.isArray(props.formInvitations)) {
            if (props.formInvitations.length >= 1) {
                return (
                    <ManageMembersContainer>
                        {props.members &&
                            Array.isArray(props.members.content) &&
                            props.members.totalElements >= 1 && (
                                <MembersPanel
                                    openChangeMemberRoleModal={
                                        this.openChangeMemberRoleModal
                                    }
                                    userId={props.userId}
                                    isCommunityAdmin={props.isCommunityAdmin}
                                    id={String(props.id)}
                                    removeMemberAction={
                                        props.removeMemberAction
                                    }
                                    openAddMemberModal={() =>
                                        props.openAddMemberModal()
                                    }
                                    members={props.members}
                                />
                            )}
                        {((props.data &&
                            props.data.getCommunityInvitations.content) ||
                            (props.invitations &&
                                Array.isArray(props.invitations) &&
                                props.invitations.length >= 1)) && (
                            <InviteMembersPanel
                                id={String(props.id)}
                                sendCommunityInvitationAction={
                                    props.sendCommunityInvitationAction
                                }
                                resendInvitationAction={
                                    props.resendInvitationAction
                                }
                                revokeInvitationAction={
                                    props.revokeInvitationAction
                                }
                                invitations={
                                    (props.data &&
                                        props.data.getCommunityInvitations
                                            .content) ||
                                    props.invitations
                                }
                            />
                        )}
                        {props.formInvitations.length >= 1 && (
                            <FormInviteMembersPanel
                                cancelInvitation={props.cancelInvitation}
                                formInvitations={props.formInvitations}
                            />
                        )}
                    </ManageMembersContainer>
                )
            }
        }
        if (
            (props.data && props.data.getCommunityInvitations.content) ||
            Array.isArray(props.invitations)
        ) {
            if (
                (props.data && props.data.getCommunityInvitations.content) ||
                (Array.isArray(props.invitations) &&
                    props.invitations.length >= 1)
            ) {
                return (
                    <ManageMembersContainer>
                        {props.members &&
                            Array.isArray(props.members.content) &&
                            props.members.totalElements >= 1 && (
                                <MembersPanel
                                    openChangeMemberRoleModal={
                                        this.openChangeMemberRoleModal
                                    }
                                    userId={props.userId}
                                    isCommunityAdmin={props.isCommunityAdmin}
                                    id={String(props.id)}
                                    removeMemberAction={
                                        props.removeMemberAction
                                    }
                                    openAddMemberModal={() =>
                                        props.openAddMemberModal()
                                    }
                                    members={props.members}
                                />
                            )}
                        {((props.data &&
                            props.data.getCommunityInvitations.content) ||
                            (props.invitations &&
                                Array.isArray(props.invitations) &&
                                props.invitations.length >= 1)) && (
                            <InviteMembersPanel
                                sendCommunityInvitationAction={
                                    props.sendCommunityInvitationAction
                                }
                                resendInvitationAction={
                                    props.resendInvitationAction
                                }
                                id={String(props.id)}
                                revokeInvitationAction={
                                    props.revokeInvitationAction
                                }
                                invitations={
                                    (props.data &&
                                        props.data.getCommunityInvitations
                                            .content) ||
                                    props.invitations
                                }
                            />
                        )}
                        {props.formInvitations &&
                            props.formInvitations.length >= 1 && (
                                <FormInviteMembersPanel
                                    cancelInvitation={props.cancelInvitation}
                                    formInvitations={props.formInvitations}
                                />
                            )}
                    </ManageMembersContainer>
                )
            }
        }
        // console.log(props.members);
        return props.members &&
            Array.isArray(props.members.content) &&
            props.members.totalElements >= 1 ? (
            <ManageMembersContainer>
                <MembersPanel
                    openChangeMemberRoleModal={this.openChangeMemberRoleModal}
                    userId={props.userId}
                    isCommunityAdmin={props.isCommunityAdmin}
                    id={String(props.id)}
                    removeMemberAction={props.removeMemberAction}
                    openAddMemberModal={() => props.openAddMemberModal()}
                    members={props.members}
                />
                <InviteMembersPanel
                    sendCommunityInvitationAction={
                        props.sendCommunityInvitationAction
                    }
                    resendInvitationAction={props.resendInvitationAction}
                    id={String(props.id)}
                    revokeInvitationAction={props.revokeInvitationAction}
                    invitations={
                        (props.data &&
                            props.data.getCommunityInvitations.content) ||
                        props.invitations
                    }
                />
            </ManageMembersContainer>
        ) : (
            <ManageMemberEmptyState
                handleClick={() => props.openAddMemberModal()}
            />
        )
    }
}

export default ManageMembers
