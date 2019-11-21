import React, { useState } from 'react'
import styled from 'styled-components'
import ResourceCategory from '../../components/ResourceCategory'
import ManageMembers from '../CreateCommunityForm/ManageMembers'
import { DisplayManagedResources } from './DisplayResources'
import {
    getCommunity_getCommunity_pending,
    getCommunity_getCommunity_members,
} from '../../queries/__generated__/getCommunity'
import { IInvitation } from '../CreateCommunityForm/ManageMembers/FormInviteMembersPanel'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.space[3]}px ${props => props.theme.padding};
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    &:not(:first-child) {
        flex: 1;
    }
`

interface IProps {
    cancelInvitation?: (payload: { index: number }) => void
    communityId: string | null
    isCommunityAdmin: boolean
    pendingUpdates: any
    pending: Array<getCommunity_getCommunity_pending | null> | null
    members: Array<getCommunity_getCommunity_members | null> | null
    openAddMemberModal: () => void
    pageType?: string // CreateCommunityForm
    formInvitations?: IInvitation[] | null | undefined
}

const Manage: React.FunctionComponent<IProps> = ({
    pending,
    members,
    isCommunityAdmin,
    communityId,
    pendingUpdates,
    pageType,
    cancelInvitation,
    formInvitations,
    openAddMemberModal,
}) => {
    const [tabIndex, setTabIndex] = useState(isCommunityAdmin ? 0 : 1)
    const pendingArticles =
        pending && pending.filter(i => i && i.__typename === 'ArticleDTO')
    const pendingCollections =
        pending && pending.filter(i => i && i.__typename === 'CollectionDTO')

    return (
        <Container>
            <Column>
                {isCommunityAdmin && (
                    <ResourceCategory
                        active={tabIndex === 0}
                        category="Manage Members"
                        amount={members ? members.length : 0}
                        onClick={() => setTabIndex(0)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 1}
                        category="Articles for approval"
                        amount={pendingArticles ? pendingArticles.length : 0}
                        onClick={() => setTabIndex(1)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 2}
                        category="Collections for approval"
                        amount={
                            pendingCollections ? pendingCollections.length : 0
                        }
                        onClick={() => setTabIndex(2)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 3}
                        category="Pending Updates"
                        amount={(pendingUpdates && pendingUpdates.length) || 0}
                        onClick={() => setTabIndex(3)}
                    />
                )}
            </Column>
            <Column>
                {tabIndex === 0 && (
                    <ManageMembers
                        id={communityId}
                        members={members}
                        cancelInvitation={cancelInvitation}
                        formInvitations={formInvitations}
                        openAddMemberModal={openAddMemberModal}
                    />
                )}
                {tabIndex === 1 && pageType !== 'CreateCommunityForm' && (
                    <DisplayManagedResources
                        isMember={false}
                        communityId={communityId}
                        resources={pendingArticles}
                    />
                )}
                {tabIndex === 2 && pageType !== 'CreateCommunityForm' && (
                    <DisplayManagedResources
                        isMember={false}
                        communityId={communityId}
                        resources={pendingCollections}
                    />
                )}
                {tabIndex === 3 && pageType !== 'CreateCommunityForm' && (
                    <DisplayManagedResources
                        isMember={false}
                        communityId={communityId}
                        review={true}
                        resources={pendingUpdates}
                    />
                )}
            </Column>
        </Container>
    )
}

export default Manage
