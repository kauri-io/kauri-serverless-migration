import React from 'react'
import styled from 'styled-components'
import {
    searchResultsAutocomplete_searchAutocomplete_content,
    searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO,
} from '../../queries/__generated__/searchResultsAutocomplete'
import ArticleCard from '../../components/Card/ArticleCard'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'
import CollectionCard from '../../components/Card/CollectionCard'
import CommunityCard from '../../components/Card/CommunityCard'
import PublicProfileCard from '../../components/Card/PublicProfileCard'

const ResourceSection = styled.section`
    display: flex;
    flex-direction: column;
    > div:not(:last-child) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    flex: 1
`
interface IElementsBreakdown {
    [key: string]: number
}

const isArticleResource = (
    resource: any
): resource is searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO =>
    resource !== 'undefined'

const isCollectionResource = (
    resource: any
): resource is searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO =>
    resource !== 'undefined'

const isCommunityResource = (
    resource: any
): resource is searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO =>
    resource !== 'undefined'

const isProfileResource = (
    resource: any
): resource is searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO =>
    resource !== 'undefined'

interface IProps {
    totalElementsBreakdown: IElementsBreakdown
    loading: boolean
    viewedSearchCategory: string | null | undefined
    setSearchCategory: (viewedSearchCategory: string) => void
}

interface ISearchResultsAutocompleteData {
    data?: {
        searchAutocomplete: {
            content: searchResultsAutocomplete_searchAutocomplete_content[]
        }
    }
}

class ResourceRows extends React.Component<
    IProps & ISearchResultsAutocompleteData
    > {
    render() {
        const values = Object.keys(this.props.totalElementsBreakdown).map(
            key => this.props.totalElementsBreakdown[key]
        )
        return values.filter(amount => amount > 0).length ? (
            <ResourceSection>
                {this.props.data &&
                    this.props.data.searchAutocomplete &&
                    Array.isArray(
                        this.props.data &&
                        this.props.data.searchAutocomplete.content
                    ) &&
                    this.props.data.searchAutocomplete.content
                        .filter(
                            resource =>
                                resource.resourceIdentifier &&
                                resource.resourceIdentifier.type ===
                                this.props.viewedSearchCategory
                        )
                        .map(resource => {
                            if (resource) {
                                switch (
                                resource.resourceIdentifier &&
                                resource.resourceIdentifier.type
                                ) {
                                    case 'ARTICLE':
                                        if (
                                            isArticleResource(resource.resource)
                                        ) {
                                            return (
                                                <ArticleCard
                                                    href={getArticleURL(
                                                        resource.resource
                                                    )}
                                                    {...resource.resource}
                                                />
                                            )
                                        }
                                    case 'COLLECTION':
                                        if (
                                            isCollectionResource(
                                                resource.resource
                                            )
                                        ) {
                                            const typedOwner = resource.resource
                                                .owner as
                                                | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO
                                                | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO
                                            return (
                                                <CollectionCard
                                                    href={getCollectionURL(
                                                        resource.resource
                                                    )}
                                                    {...resource.resource}
                                                    owner={typedOwner}
                                                />
                                            )
                                        }
                                    case 'COMMUNITY':
                                        if (
                                            isCommunityResource(
                                                resource.resource
                                            )
                                        ) {
                                            return (
                                                <CommunityCard
                                                    href={getCommunityURL(
                                                        resource.resource
                                                    )}
                                                    {...resource.resource}
                                                />
                                            )
                                        }
                                    case 'USER':
                                        if (isProfileResource(resource.resource)) {
                                            return <PublicProfileCard
                                                name={resource.resource.publicUserName}
                                                articleCount={0}
                                                collectionCount={0}
                                                title={resource.resource.userTitle}
                                                {...resource.resource}
                                            />
                                        }

                                    default:
                                        return null
                                }
                            }
                            return null
                        })}
            </ResourceSection>
        ) : null
    }
}

export default ResourceRows
