import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import CollectionCard from '../../../components/Card/CollectionCard'
import { Grid, Container, withStyles } from '@material-ui/core'
import Loading from '../../../components/Loading'
import {
    searchAutocompleteCollections_searchAutocomplete,
    searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO,
    // searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO,
    // searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO,
} from '../../../queries/__generated__/searchAutocompleteCollections'
import { getCollectionURL } from '../../../lib/getURLs'

interface IProps {
    CollectionQuery: {
        error: string
        searchAutocomplete?: searchAutocompleteCollections_searchAutocomplete
    }
    hostName: string
    routeChangeAction(route: string): void
    classes: { grid: any }
}

export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
    padding-bottom: 0;
    max-width: ${props => props.theme.breakpoints[2]};
    > div {
        margin: 15px;
    }
`

class Collections extends Component<IProps> {
    render() {
        if (this.props.CollectionQuery.error) {
            return null
        } // TODO replace with an error message if exists

        const { searchAutocomplete } = this.props.CollectionQuery

        return (
            <Fragment>
                <Head>
                    <title>
                        Beginner to Advanced Blockchain & Ethereum Tutorials |
                        Collections - Kauri
                    </title>
                    <meta
                        name="description"
                        content="Discover the best collections of blockchain related articles, tutorials and how-to guides"
                    />
                    <link
                        rel="canonical"
                        href={`https://${this.props.hostName}/collections`}
                    />
                </Head>
                <Container>
                    {searchAutocomplete ? (
                        <Grid
                            className={this.props.classes.grid}
                            container
                            spacing={3}
                        >
                            {searchAutocomplete &&
                                searchAutocomplete.content &&
                                searchAutocomplete.content.map(collection => {
                                    const collectionResource =
                                        collection &&
                                        (collection.resource as searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO)

                                    if (collectionResource) {
                                        const owner =
                                            collectionResource &&
                                            collectionResource.owner &&
                                            collectionResource.owner
                                                .__typename === 'PublicUserDTO'
                                                ? {
                                                      avatar:
                                                          collectionResource
                                                              .owner.avatar,
                                                      id:
                                                          collectionResource
                                                              .owner.id ||
                                                          'not_found',
                                                      type: 'USER',
                                                      username:
                                                          collectionResource
                                                              .owner.username,
                                                  }
                                                : collectionResource &&
                                                  collectionResource.owner &&
                                                  collectionResource.owner
                                                      .__typename ===
                                                      'CommunityDTO'
                                                ? {
                                                      avatar:
                                                          collectionResource
                                                              .owner.avatar,
                                                      id:
                                                          collectionResource
                                                              .owner.id ||
                                                          'not_found',
                                                      type: 'COMMUNITY',
                                                      username:
                                                          collectionResource
                                                              .owner
                                                              .communityName,
                                                  }
                                                : {
                                                      avatar: '',
                                                      id: '',
                                                      username: '',
                                                  }

                                        return (
                                            <Grid
                                                key={collectionResource.id}
                                                item
                                                xs={12}
                                                sm={12}
                                                lg={6}
                                            >
                                                <CollectionCard
                                                    {...collectionResource}
                                                    owner={owner}
                                                    href={getCollectionURL(
                                                        collectionResource as searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO
                                                    )}
                                                    key={String(
                                                        collectionResource &&
                                                            collectionResource.id
                                                    )}
                                                />
                                            </Grid>
                                        )
                                    }
                                })}
                        </Grid>
                    ) : (
                        <Loading />
                    )}
                </Container>
            </Fragment>
        )
    }
}

export default withStyles({
    grid: {
        paddingTop: '24px',
    },
})(Collections)
