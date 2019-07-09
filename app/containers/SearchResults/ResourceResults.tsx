import React from 'react'
import styled from 'styled-components'
import ContentSection from '../../components/Section/ContentSection'
import ResourceCategory from '../../components/ResourceCategory'
import { Title2 } from '../../components/Typography'
import Empty from '../PublicProfile/Empty'
import Loading from '../../components/Loading'
import ResourceRows from './PaginatedResourceResults'
import { searchResultCategories } from './index'

interface IElementsBreakdown {
    [key: string]: number
}

const CategorySection = styled.section`
    display: flex;
    flex-direction: column;
    > div:not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const CenterContent = styled.div`
    display: flex;
    min-width: ${props => props.theme.breakpoints[2]};
    justify-content: center;
`

interface IProps {
    totalElementsBreakdown: IElementsBreakdown
    loading: boolean
    viewedSearchCategory: string | null | undefined
    setSearchCategory: (viewedSearchCategory: string) => void
    query: string
}

const PaginatedResourceResults: React.FunctionComponent<IProps> = props => (
    <ResourceRows {...props} />
)

class ResourceResults extends React.Component<IProps> {
    render() {
        if (this.props.loading) {
            return <Loading />
        }

        return (
            <ContentSection gridAutoFlow={['', 'column']}>
                <CategorySection>
                    {Object.keys(this.props.totalElementsBreakdown).filter(
                        category =>
                            this.props.totalElementsBreakdown[category] > 0 &&
                            searchResultCategories &&
                            searchResultCategories.includes(category)
                    ).length ? (
                        Object.keys(this.props.totalElementsBreakdown)
                            .filter(
                                category =>
                                    searchResultCategories &&
                                    searchResultCategories.includes(category) &&
                                    this.props.totalElementsBreakdown[
                                        category
                                    ] > 0
                            )
                            .sort()
                            .map(category => (
                                <ResourceCategory
                                    key={category}
                                    onClick={() =>
                                        this.props.setSearchCategory(category)
                                    }
                                    active={
                                        category ===
                                        this.props.viewedSearchCategory
                                    }
                                    category={category}
                                    amount={
                                        this.props.totalElementsBreakdown[
                                            category
                                        ]
                                    }
                                />
                            ))
                    ) : (
                        <CenterContent>
                            <Empty>
                                <Title2>No Results found! :(</Title2>
                            </Empty>
                        </CenterContent>
                    )}
                </CategorySection>
                <PaginatedResourceResults {...this.props} />
            </ContentSection>
        )
    }
}

export default ResourceResults
