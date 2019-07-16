import React from 'react'
import withPagination from '../../../lib/with-pagination'
import CategorySection from '../../../components/Section/CategorySection'
import ResourceCategory from '../../../components/ResourceCategory'
import Drafts from '../Drafts/View'
import Awaiting from '../Awaiting/View'
import Pending from '../Pending/View'
import Transfers from './Transfers'
import MyCommunities from './MyCommunities'
import styled from 'styled-components'
import { path } from 'ramda'

const categories = [
    'drafts',
    'awaiting approval',
    'submitted updates',
    // "communities",
]

const ManageContentSection = styled.section`
    display: flex;
    flex-direction: row;
    padding-top: ${props => props.theme.paddingTop};
    ${props => props.theme.padContent};
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

interface IState {
    currentCategory: string
}

const Manage: React.FunctionComponent<
    any & {
        isLoggedIn: boolean
    }
> = props => {
    const [state, setState] = React.useState<IState>({
        currentCategory: 'drafts',
    })

    const communities = path(
        ['ownProfile', 'getMyProfile', 'communities'],
        props
    )
    const transfers = path(
        ['transfersQuery', 'getArticleTransfers', 'content'],
        props
    )

    if (
        (transfers as []).length > 0 &&
        categories.indexOf('pending transfers') === -1
    ) {
        categories.push('pending transfers')
    }
    if (
        (communities as []).length > 0 &&
        categories.indexOf('communities') === -1
    ) {
        categories.push('communities')
    }

    return (
        <ManageContentSection>
            <CategorySection>
                {categories.map(category => (
                    <ResourceCategory
                        key={category}
                        active={category === state.currentCategory}
                        category={category}
                        amount={null}
                        onClick={() => setState({ currentCategory: category })}
                    />
                ))}
            </CategorySection>
            {state.currentCategory === 'drafts' && (
                <Drafts {...props} data={props.draftsQuery} />
            )}
            {state.currentCategory === 'awaiting approval' && (
                <Awaiting
                    {...props}
                    communities={
                        Array.isArray(communities) &&
                        communities.map(({ community: { id } }) => id)
                    }
                />
            )}
            {state.currentCategory === 'submitted updates' && (
                <Pending
                    {...props}
                    communities={
                        Array.isArray(communities) &&
                        communities.map(({ community: { id } }) => id)
                    }
                />
            )}
            {state.currentCategory === 'pending transfers' && (
                <Transfers {...props} data={transfers} />
            )}
            {state.currentCategory === 'communities' && (
                <MyCommunities {...props} data={communities} />
            )}
        </ManageContentSection>
    )
}
//
export default withPagination(Manage, 'searchArticles')