import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Title2, BodyCard, Label } from '../../../components/Typography'
import {
    resendInvitationAction as resendInvitation,
    sendCommunityInvitationAction as sendCommunityInvitation,
} from '../../Community/Module'
import { revokeInvitationVariables } from '../../../queries/__generated__/revokeInvitation'

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

const Content = styled.div``

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.106912);
`

const RevokeInvitationIconContainer = styled.div`
    cursor: pointer;
`

const RevokeInvitationIcon: React.FunctionComponent<{
    revokeInvitationAction: () => void
}> = ({ revokeInvitationAction }) => (
    <RevokeInvitationIconContainer>
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onClick={() => revokeInvitationAction()}
        >
            <rect width="20" height="20" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEyUlEQVR4nO2dTUxcVRTH/+dCWRXSUIYZP7qzG+OiJHVhYoyLuhKj8YO9ZaQrTDow0bLQ2Sglzgwm1MTgUO3WLxbGpLHUr2hqojE1xoWx7iTMDAux1jbFco8LMoQamPdm3nlwXjm/7bv8OY8f3Hn3nvsCYBiGYRiGYRiGYRiGHmi3CwiEQf1zuREwnSTgPgAdLSasMXAFxNP14fIsCBxHmVK0enM7TvqesVECvUVAHwDXRoQjoI9Ag90/PrR87ZNL30vXKEk7N7izEMakohiUl8qKC7EpK10ZfwLsnwRcj1Qmg4mAZ6Xy1jPxIYEEpy1/lcjNV7PFTyXSRISkK7nTYHpJIiuxME/WRsoTUWMiC0m9nT/sOvyvElkJh9m7w/UTb/weJSTyZ4jr8EdhMgCAyK0djRoSXQhhMWrGnYL3FPlnEVnI0h/d3wD4LmrOHcCl5ZHSt1FDoj/2Fgq+s6trkIFzAFYi5yWPFSa8t4/8oPZFp2EYhmEYxt5FfIWdqeSek87UTDVb/kAyr1MyDACY6X3pTOWI/lLr74fsMUyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMkyIMsT7IYJ8CcbHAADC0wAejZTG+ALAvFheTKgUQkTl6nBxfOPgGeNMem78ZTC/3mbgRC1bPL05LzM3XmTmnFjRQmicsqoHe/afuu0UIIFr2eIkE7f8wg0T52vZ4uT/8/ZfvzkBoCZSsSDqhBDo8i9DhdWtrtWz5WIrUpg4X8+Wi1tdu/LizE0CLrdbZ1yoE8Lge5tdDyulmYyNMYxDrdYXN+qEAHigvzL2VLMB9Wy5CML28z/RRJCMTGX8cRDub7PG2NAoBMR4NzM79mCzMbVsaXpLKesf4JPNvjY1mz/CzOcilhkLKoUAOMCEz1qWElKGI78A4KBMqbJoFQKsSzmfquQGmg2qZUvTTJzfeJpqQqqSG3DkL0KpDCCGk4vpd8akX1pZcc4/tjQ8/UOUkLj+MmovlPbcQbkD3rsLd82dbPuFSu3T1GaSIASIICVJMoDkCAHakJI0GUCyhADrUs5nzo6mggZmzo6mkiYDSJ4QgKhUPT6zHDSsenxmGYTXdqIkSZIlJMQ6YzPbLh4VkxwhLcpokDQpyRDSpowGSZKiXkjYFXjYFb1sdfLoFhJi1zY1mz/imC44ps+D9r4Cd4kVoFdI6xuF7W1IKkOnEOKpNjcKQ29IgnhKolRpNAqp9vX0vNJsQKqSG3BMCwB6t7jc65gWgqR0X//3VVhPPZhmPXUgUEaDQCnWUw9Js556SBkNAqVYTz0cW/bUG09TCCejQe92T19ae+paG1R/E9HErbVbHwFAZ0fnM7x+SK5bSd4G0g0qrUISw17sGO4pTIgyTIgyTIgyTIgyTIgyTIgyTIgyTIgy4hByLYZMnTCuSkeKCyHgN+lMtZD8vYoL8eB56Uy9yN+ruJDVTj8DoC6dq5Daqt93RjpUXMjK82+uEPshADeksxVxwxGG/jwx9Zd0cCxPWdWR6a+c848A+DmO/F2F8VOHdw8vZUtfxxEf739XKxRc/6F/jsH7YwTcDVBXrN8vNniVGYsgLNQXuy+iUPC7XZFhGIZhGIZhGIZhGIZhGMZt/AcMCr2r87Nh6AAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    </RevokeInvitationIconContainer>
)

const InviteMemberContainer = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.space[3]}px
        ${props => props.theme.space[2]}px;
    padding-bottom: ${props => props.theme.space[2]}px;
    > :first-child {
        margin-right: ${props => props.theme.space[4]}px;
    }
`

const InviteMemberContent = styled.div`
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
    background-color: ${props => props.theme.colors.divider};
    height: 2px;
`

interface IInvitation {
    invitationId: string
    communityId: string
    dateCreated: string
    dateExpiration: string
    dateClosed: string
    status: string
    recipientEmail: string
    recipientRole: string
}

const InvitationRow: React.FunctionComponent<{
    invitation: IInvitation
    revokeInvitationAction: any
    resendInvitationAction: () => void
    sendCommunityInvitationAction: () => void
}> = ({
    invitation,
    revokeInvitationAction,
    resendInvitationAction,
    sendCommunityInvitationAction,
}) => (
    <InviteMemberContainer>
        <Label>{String(invitation.status).replace('_', ' ')}</Label>
        <InviteMemberContent>
            <BodyCard>{String(invitation.recipientEmail)}</BodyCard>
            {invitation.status === 'PENDING' && (
                <Label
                    color="primary"
                    hoverColor="hoverTextColor"
                    onClick={() => resendInvitationAction()}
                >
                    RESEND
                </Label>
            )}
            {invitation.status === 'EXPIRED' && (
                <Label
                    color="primary"
                    hoverColor="hoverTextColor"
                    onClick={() => sendCommunityInvitationAction()}
                >
                    RESEND
                </Label>
            )}
            {invitation.status === 'PENDING' && (
                <RevokeInvitationIcon
                    revokeInvitationAction={revokeInvitationAction}
                />
            )}
        </InviteMemberContent>
    </InviteMemberContainer>
)

interface IProps {
    invitations: Array<IInvitation | null> | null
    revokeInvitationAction: (
        payload: Pick<revokeInvitationVariables, 'invitationId' | 'id'>
    ) => void
    resendInvitationAction: typeof resendInvitation
    sendCommunityInvitationAction: typeof sendCommunityInvitation
    id: string
}

const InvitationsPanel: React.SFC<IProps> = props => {
    if (
        !props.invitations ||
        (Array.isArray(props.invitations) && !props.invitations.length)
    ) {
        return null
    }
    return (
        <Section>
            <Header>
                <Title2>Invited</Title2>
                <BodyCard>
                    The following users have been invited to join as members. If
                    listed as “Pending”, they have yet to accept or reject the
                    invitation.
                </BodyCard>
            </Header>
            <Content>
                {props.invitations &&
                    Array.isArray(props.invitations) &&
                    props.invitations
                        .filter(
                            invitation =>
                                invitation && invitation.status !== 'ACCEPTED'
                        )
                        .map(
                            invitation =>
                                invitation &&
                                props.invitations && (
                                    <Fragment>
                                        <InvitationRow
                                            sendCommunityInvitationAction={() =>
                                                props.sendCommunityInvitationAction &&
                                                props.sendCommunityInvitationAction(
                                                    {
                                                        id: props.id,
                                                        invitation: {
                                                            email:
                                                                invitation.recipientEmail,
                                                            role: invitation.recipientRole as any,
                                                        },
                                                    }
                                                )
                                            }
                                            resendInvitationAction={() =>
                                                props.resendInvitationAction &&
                                                props.resendInvitationAction({
                                                    email:
                                                        invitation.recipientEmail,
                                                    id: props.id,
                                                    invitationId:
                                                        invitation.invitationId,
                                                })
                                            }
                                            revokeInvitationAction={() =>
                                                props.revokeInvitationAction &&
                                                props.revokeInvitationAction({
                                                    id: props.id,
                                                    invitationId:
                                                        invitation.invitationId,
                                                })
                                            }
                                            invitation={invitation}
                                        />
                                        <Divider />
                                    </Fragment>
                                )
                        )}
            </Content>
        </Section>
    )
}

export default InvitationsPanel
