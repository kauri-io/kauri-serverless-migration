import React from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import Link from '../../components/Link'
import styled from 'styled-components'
import PublicProfileEmptyState from '../../components/PublicProfileEmptyState'
import PrimaryButton from '../../components/Button/PrimaryButton'
import { BodyCard } from '../../components/Typography'
import withPagination from '../../lib/with-pagination'
import Masonry from '../../components/Masonry'
import { getCollectionsForUser } from '../../queries/__generated__/getCollectionsForUser'

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
                    return (
                        <CollectionCard
                            changeRoute={routeChangeAction}
                            key={collection.id}
                            id={collection.id}
                            name={collection.name}
                            date={collection.dateUpdated}
                            description={String(collection.description)}
                            username={
                                collection.owner && collection.owner.username
                            }
                            userId={collection.owner && collection.owner.id}
                            userAvatar={
                                collection.owner && collection.owner.avatar
                            }
                            articleCount={String(articleCount)}
                            collectionCount={String(collectionCount)}
                            imageURL={collection.background}
                            cardHeight={310}
                            linkComponent={(childrenProps, route) => (
                                <Link
                                    toSlug={
                                        route &&
                                        route.includes('collection') &&
                                        collection.name
                                    }
                                    useAnchorTag
                                    href={route}
                                >
                                    {childrenProps}
                                </Link>
                            )}
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
