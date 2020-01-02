import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Title2, BodyCard, Label } from '../../../components/Typography'
import Button from '../../../components/Button'
import theme from '../../../lib/theme-config'
import { Community_members } from '../../../queries/Fragments/__generated__/Community'
import { prepareChangeGrantedMemberRoleVariables } from '../../../queries/__generated__/prepareChangeGrantedMemberRole'
import {
    removeMemberAction,
    banMemberAction,
    unbanMemberAction,
    removeGrantedMemberAction,
} from '../../Community/Module'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const Header = styled.div`
    display: flex;
    padding-top: ${props => props.theme.space[2]}px;
    padding-bottom: ${props => props.theme.space[2]}px;
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
    border-bottom: 2px solid ${props => props.theme.divider};
    align-items: center;
    justify-content: center;
    text-align: center;
    > :first-child {
        margin-right: auto;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.space[3]}px;
`

const Content = styled.div``

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.106912);
`

const MemberContainer = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.space[2]}px
        ${props => props.theme.space[2]}px;
    > :first-child {
        margin-right: ${props => props.theme.space[4]}px;
    }
    > :nth-child(2) {
        margin-right: auto;
    }
    > :last-child {
        margin-left: ${props => props.theme.space[3]}px;
    }
`

const MemberContent = styled.div`
    display: flex;
    width: 100%;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[3]}px;
    }
    > :first-child {
        margin-right: auto;
    }
`

const Divider = styled.div`
    width: 100%;
    background-color: ${theme.colors.divider};
    height: 2px;
`

interface IMemberRowProps {
    id: string
    member: any
    userId: string
    removeGrantedMemberAction: typeof removeGrantedMemberAction
    isCommunityAdmin: boolean
    openChangeGrantedMemberRoleModal: () => void
    removeMemberAction: typeof removeMemberAction
    banMemberAction: typeof banMemberAction
    unbanMemberAction: typeof unbanMemberAction
}

const MemberRow: React.FunctionComponent<IMemberRowProps> = ({
    id,
    member,
    removeGrantedMemberAction,
    banMemberAction,
    unbanMemberAction,
    removeMemberAction,
    isCommunityAdmin,
    userId,
    openChangeGrantedMemberRoleModal,
}) => {
    return (
        <MemberContainer>
            <Label>{String(member.role).replace('_', ' ')}</Label>
            <MemberContent>
                <BodyCard>
                    {String(
                        member.user.username || member.user.name || member.id
                    )}
                </BodyCard>
                {isCommunityAdmin &&
                    (member.role === 'ADMIN' || member.role === 'CURATOR') &&
                    member.id !== userId && (
                        <Label
                            color="primary"
                            hoverColor="hoverTextColor"
                            onClick={() => openChangeGrantedMemberRoleModal()}
                        >
                            Change Role
                        </Label>
                    )}
                {isCommunityAdmin &&
                    member.role === 'BASIC' &&
                    member.id !== userId && (
                        <Label
                            color="primary"
                            hoverColor="hoverTextColor"
                            onClick={() =>
                                banMemberAction({ id, userId: member.id })
                            }
                        >
                            Ban
                        </Label>
                    )}
                {isCommunityAdmin &&
                    member.role === 'BANNED' &&
                    member.id !== userId && (
                        <Label
                            color="primary"
                            hoverColor="hoverTextColor"
                            onClick={() =>
                                unbanMemberAction({ id, userId: member.id })
                            }
                        >
                            Unban
                        </Label>
                    )}
                {isCommunityAdmin &&
                    (member.role === 'ADMIN' || member.role === 'CURATOR') &&
                    member.id !== userId && (
                        <DeleteForeverIcon
                            color="primary"
                            onClick={() =>
                                removeGrantedMemberAction({
                                    id,
                                    account: member.id,
                                })
                            }
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                {isCommunityAdmin &&
                    (member.role === 'BASIC' || member.role === 'BANNED') &&
                    member.id !== userId && (
                        <DeleteForeverIcon
                            color="primary"
                            onClick={() =>
                                removeMemberAction({ id, userId: member.id })
                            }
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                {isCommunityAdmin && member.id === userId && (
                    <Label
                        color="primary"
                        hoverColor="hoverTextColor"
                        onClick={() =>
                            removeGrantedMemberAction({
                                id,
                                account: member.id,
                            })
                        }
                    >
                        Leave Community
                    </Label>
                )}
            </MemberContent>
        </MemberContainer>
    )
}

interface IProps {
    id: string
    members: Community_members
    openAddMemberModal: () => void
    removeGrantedMemberAction: typeof removeGrantedMemberAction
    isCommunityAdmin: boolean
    userId: string
    openChangeGrantedMemberRoleModal: (
        payload: Pick<prepareChangeGrantedMemberRoleVariables, 'account' | 'id'>
    ) => void
    removeMemberAction: typeof removeMemberAction
    banMemberAction: typeof banMemberAction
    unbanMemberAction: typeof unbanMemberAction
}

const MembersPanel: React.SFC<IProps> = props => {
    return (
        <Section>
            <Header>
                <Title2>Moderators</Title2>
                <BodyCard>
                    The active members of this community are displayed below.{' '}
                </BodyCard>
            </Header>
            <Content>
                {props.members.content &&
                    Array.isArray(props.members.content) &&
                    props.members.content.map(
                        member =>
                            member &&
                            props.members && (
                                <Fragment>
                                    <MemberRow
                                        id={props.id}
                                        openChangeGrantedMemberRoleModal={() =>
                                            props.openChangeGrantedMemberRoleModal(
                                                {
                                                    account: member.id || '',
                                                    id: props.id,
                                                }
                                            )
                                        }
                                        userId={props.userId}
                                        removeGrantedMemberAction={
                                            props.removeGrantedMemberAction
                                        }
                                        removeMemberAction={
                                            props.removeMemberAction
                                        }
                                        banMemberAction={props.banMemberAction}
                                        unbanMemberAction={
                                            props.unbanMemberAction
                                        }
                                        member={member}
                                        isCommunityAdmin={
                                            props.isCommunityAdmin
                                        }
                                    />
                                    <Divider />
                                </Fragment>
                            )
                    )}
            </Content>
            <Footer>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => props.openAddMemberModal()}
                >
                    Invite Member
                </Button>
            </Footer>
        </Section>
    )
}

export default MembersPanel
