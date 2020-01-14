import React, { useState } from 'react'
import styled from 'styled-components'
import ResourceCategory from '../../../components/ResourceCategory'
import ManageMembers from '../../CreateCommunityForm/ManageMembers'
import { IInvitation } from '../../CreateCommunityForm/ManageMembers/FormInviteMembersPanel'
import { searchArticles_searchArticles } from '../../../queries/__generated__/searchArticles'
import Loading from '../../../components/Loading'
import { Community_members } from '../../../queries/Fragments/__generated__/Community'
import { getCommunityContent_getCommunityContent } from '../../../queries/__generated__/getCommunityContent'
import ManageUpdate from './ManageUpdate/View'
import ManageResources from './ManageResources'

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
    communityId: string
    isCommunityAdmin: boolean
    members: Community_members
    openAddMemberModal: () => void
    pageType?: string // CreateCommunityForm
    formInvitations?: IInvitation[] | null | undefined
    getCommunityContent: {
        getCommunityContent: getCommunityContent_getCommunityContent
    }
    searchArticles: {
        searchArticles: searchArticles_searchArticles
    }
}

const Manage: React.FunctionComponent<IProps> = ({
    members,
    isCommunityAdmin,
    communityId,
    pageType,
    cancelInvitation,
    formInvitations,
    openAddMemberModal,
    getCommunityContent,
    searchArticles,
}) => {
    const [tabIndex, setTabIndex] = useState(isCommunityAdmin ? 0 : 1)

    if (
        !searchArticles.searchArticles ||
        !getCommunityContent.getCommunityContent
    ) {
        return <Loading />
    }

    return (
        <Container>
            <Column>
                {isCommunityAdmin && (
                    <ResourceCategory
                        active={tabIndex === 0}
                        category="Manage Members"
                        amount={members ? members.totalElements : 0}
                        onClick={() => setTabIndex(0)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 1}
                        category="Resources for approval"
                        amount={
                            getCommunityContent.getCommunityContent
                                .totalElements
                        }
                        onClick={() => setTabIndex(1)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 2}
                        category="Pending Updates"
                        amount={searchArticles.searchArticles.totalElements}
                        onClick={() => setTabIndex(2)}
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
                    <ManageResources
                        communityId={communityId}
                        data={getCommunityContent}
                    />
                )}
                {tabIndex === 2 && pageType !== 'CreateCommunityForm' && (
                    <ManageUpdate
                        communityId={communityId}
                        data={searchArticles}
                    />
                )}
            </Column>
        </Container>
    )
}

export default Manage
