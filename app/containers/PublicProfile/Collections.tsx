import React from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import styled from 'styled-components'
import PublicProfileEmptyState from '../../components/PublicProfileEmptyState'
import PrimaryButton from '../../components/Button/PrimaryButton'
import { BodyCard } from '../../components/Typography'
import withPagination from '../../lib/with-pagination'
import Masonry from '../../components/Masonry'
import { getCollectionsForUser } from '../../queries/__generated__/getCollectionsForUser'
import {
    Collection_owner_CommunityDTO,
    Collection_owner_PublicUserDTO,
} from '../../queries/Fragments/__generated__/Collection'
import { getCollectionURL } from '../../lib/getURLs'

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.paddingTop};
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
    padding-top: 1em;
    padding-bottom: 0px;
    max-width: ${props => props.theme.breakpoints[2]};
    > div {
        margin: 15px;
    }
`

interface IProps {
    data: getCollectionsForUser
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
}

const Collections = ({ data, routeChangeAction, isLoggedIn }: IProps) =>
    data.searchCollections && data.searchCollections.content.length > 0 ? (
        <Masonry>
            {data.searchCollections.content.map(collection => {
                if (collection) {
                    const articleCount =
                        collection.sections &&
                        collection.sections.reduce((current, next) => {
                            if (next && Array.isArray(next.resourcesId)) {
                                const articlesInSection = next.resourcesId.filter(
                                    sectionResource =>
                                        sectionResource &&
                                        sectionResource.type &&
                                        sectionResource.type
                                            .toLowerCase()
                                            .includes('article')
                                )
                                current += articlesInSection.length
                            }
                            return current
                        }, 0)

                    const collectionCount =
                        collection.sections &&
                        collection.sections.reduce((current, next) => {
                            if (next && Array.isArray(next.resourcesId)) {
                                const collectionsInSection = next.resourcesId.filter(
                                    sectionResource =>
                                        sectionResource &&
                                        sectionResource.type &&
                                        sectionResource.type
                                            .toLowerCase()
                                            .includes('collection')
                                )
                                current += collectionsInSection.length
                            }
                            return current
                        }, 0)

                    const owner = collection.owner as
                        | Collection_owner_CommunityDTO
                        | Collection_owner_PublicUserDTO
                    return (
                        <CollectionCard
                            href={getCollectionURL(collection)}
                            key={collection.id}
                            id={collection.id}
                            name={collection.name}
                            date={collection.dateUpdated}
                            description={String(collection.description)}
                            resourceType={owner.__typename}
                            username={
                                owner.__typename === 'PublicUserDTO'
                                    ? (owner as Collection_owner_PublicUserDTO)
                                          .username
                                    : (owner as Collection_owner_CommunityDTO)
                                          .communityName
                            }
                            userId={owner && owner.id}
                            userAvatar={owner && owner.avatar}
                            articleCount={String(articleCount)}
                            collectionCount={String(collectionCount)}
                            imageURL={collection.background}
                            cardHeight={310}
                        />
                    )
                } else {
                    return null
                }
            })}
        </Masonry>
    ) : (
        <Centered>
            <PublicProfileEmptyState
                iconSrc={'/static/images/icons/no-collections-created.svg'}
                description={
                    <DescriptionContainer>
                        <BodyCard>
                            Collections are ways to group and organize articles
                            on Kauri.
                        </BodyCard>
                        <BodyCard>
                            Common collections are tutorial series, articles
                            about a single product, multiple projects, or even
                            just a user's favourite articles
                        </BodyCard>
                    </DescriptionContainer>
                }
                title="No Collections Created"
                primaryButton={
                    isLoggedIn ? (
                        <PrimaryButton
                            onClick={() =>
                                routeChangeAction('/create-collection')
                            }
                        >
                            Create Collection
                        </PrimaryButton>
                    ) : null
                }
            />{' '}
        </Centered>
    )

export default withPagination(Collections, 'searchCollections')
