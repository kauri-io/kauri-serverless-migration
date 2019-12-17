import React, { useState } from 'react'
import styled from 'styled-components'
import ResourceCategory from '../../../components/ResourceCategory'
import ManageMembers from '../../CreateCommunityForm/ManageMembers'
import { getCommunity_getCommunity_members } from '../../../queries/__generated__/getCommunity'
import { IInvitation } from '../../CreateCommunityForm/ManageMembers/FormInviteMembersPanel'
import { searchArticles_searchArticles } from '../../../queries/__generated__/searchArticles'
import Loading from '../../../components/Loading'

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
    members: Array<getCommunity_getCommunity_members | null> | null
    openAddMemberModal: () => void
    pageType?: string // CreateCommunityForm
    formInvitations?: IInvitation[] | null | undefined
    data: {
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
    data,
}) => {
    const [tabIndex, setTabIndex] = useState(isCommunityAdmin ? 0 : 1)

    if (!data.searchArticles) {
        return <Loading />
    }

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
                {/* {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 1}
                        category="Articles for approval"
                        amount={null}
                        onClick={() => setTabIndex(1)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 2}
                        category="Collections for approval"
                        amount={null}
                        onClick={() => setTabIndex(2)}
                    />
                )} */}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 3}
                        category="Pending Updates"
                        amount={data.searchArticles.totalElements}
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
                {/* {tabIndex === 1 && pageType !== 'CreateCommunityForm' && (
                    <div></div>
                )}
                {tabIndex === 2 && pageType !== 'CreateCommunityForm' && (
                    <div></div>
                )} */}
                {tabIndex === 3 && pageType !== 'CreateCommunityForm' && (
                    <div></div>
                )}
            </Column>
        </Container>
    )
}

export default Manage
