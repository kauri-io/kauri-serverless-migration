import React from 'react'
import {
    searchResultsAutocomplete_searchAutocomplete_content,
    searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO,
    searchResultsAutocomplete_searchAutocomplete_content_resource_ExternalLinkDTO,
} from '../../queries/__generated__/searchResultsAutocomplete'
import ArticleCard from '../../components/Card/ArticleCard'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
    getLinkUrl,
} from '../../lib/getURLs'
import CollectionCard from '../../components/Card/CollectionCard'
import CommunityCard from '../../components/Card/CommunityCard'
import PublicProfileCard from '../../components/Card/PublicProfileCard'
import LinkCard from '../../components/Card/LinkCard'
import { Grid, withStyles } from '@material-ui/core'

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

const isLinkResource = (
    resource: any
): resource is searchResultsAutocomplete_searchAutocomplete_content_resource_ExternalLinkDTO =>
    resource !== 'undefined'

interface IProps {
    totalElementsBreakdown: IElementsBreakdown
    loading: boolean
    viewedSearchCategory: string | null | undefined
    setSearchCategory: (viewedSearchCategory: string) => void
    classes: any
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
            <Grid className={this.props.classes.grid} container spacing={2}>
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
                                                <Grid
                                                    key={resource.resource.id}
                                                    item
                                                    xs={12}
                                                    container={true}
                                                    justify="center"
                                                >
                                                    <ArticleCard
                                                        href={getArticleURL(
                                                            resource.resource
                                                        )}
                                                        {...resource.resource}
                                                    />
                                                </Grid>
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
                                                <Grid
                                                    key={resource.resource.id}
                                                    item
                                                    xs={12}
                                                    container={true}
                                                    justify="center"
                                                >
                                                    <CollectionCard
                                                        href={getCollectionURL(
                                                            resource.resource
                                                        )}
                                                        {...resource.resource}
                                                        owner={typedOwner}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    case 'COMMUNITY':
                                        if (
                                            isCommunityResource(
                                                resource.resource
                                            )
                                        ) {
                                            return (
                                                <Grid
                                                    key={resource.resource.id}
                                                    item
                                                    xs={12}
                                                    container={true}
                                                    justify="center"
                                                >
                                                    <CommunityCard
                                                        href={getCommunityURL(
                                                            resource.resource
                                                        )}
                                                        {...resource.resource}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    case 'USER':
                                        if (
                                            isProfileResource(resource.resource)
                                        ) {
                                            return (
                                                <Grid
                                                    key={resource.resource.id}
                                                    item
                                                    xs={12}
                                                    container={true}
                                                    justify="center"
                                                >
                                                    <PublicProfileCard
                                                        name={
                                                            resource.resource
                                                                .publicUserName
                                                        }
                                                        title={
                                                            resource.resource
                                                                .userTitle
                                                        }
                                                        {...resource.resource}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    case 'LINK':
                                        if (isLinkResource(resource.resource)) {
                                            return (
                                                <Grid
                                                    key={resource.resource.id}
                                                    item
                                                    xs={12}
                                                    container={true}
                                                    justify="center"
                                                >
                                                    <LinkCard
                                                        href={getLinkUrl(
                                                            resource.resource
                                                        )}
                                                        {...resource.resource}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    default:
                                        return null
                                }
                            }
                            return null
                        })}
            </Grid>
        ) : null
    }
}

export default withStyles({
    grid: {
        maxWidth: 870,
        margin: 'auto',
        width: '100%',
    },
    root: {
        display: 'flex',
    },
})(ResourceRows)
