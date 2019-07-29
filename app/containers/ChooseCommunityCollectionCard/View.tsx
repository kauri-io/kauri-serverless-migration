import React from 'react'
import styled from 'styled-components'
import CollectionCard from '../../components/Card/CollectionCard'
import ChooseCollectionContent, {
    Content,
} from '../../components/Modal/ChooseCollectionContent'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
import Tabs from '../../components/Tabs'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'

const Container = styled.div`
    display: flex;
    flex-diretion: column;
    overflow-y: auto;
    width: 100%;
    height: 100%;

    ${Content} {
        padding-top: 10px;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    :hover {
        color: ${props => props.theme.colors.hoverTextColor} !important;
        > * {
            color: ${props => props.theme.colors.hoverTextColor} !important;
            > * {
                color: ${props => props.theme.colors.hoverTextColor} !important;
                > * {
                    color: ${props =>
                        props.theme.colors.hoverTextColor} !important;
                }
            }
        }
    }
`

const CollectionsContent = ({
    chooseCollection,
    chosenCollections,
    collections,
    userId,
    setRef,
    allOtherChosenCollections,
    currentCollectionIdIfUpdating,
}) =>
    collections && collections.content && collections.content.length > 0 ? (
        <Container>
            <ChooseCollectionContent setRef={setRef}>
                {collections.content.map(({ resource: collection }) => {
                    // Don't show chosen Collections from other sections
                    if (
                        allOtherChosenCollections.find(
                            ({ resourcesId, id: collectionId }) => {
                                if (resourcesId) {
                                    return resourcesId.find(
                                        ({ id }) =>
                                            id === collection.id ||
                                            currentCollectionIdIfUpdating ===
                                                collection.id
                                    )
                                } else {
                                    return collectionId === collection.id
                                }
                            }
                        )
                    ) {
                        return null
                    }

                    const articleCount =
                        collection.sections &&
                        collection.sections.reduce((current, next) => {
                            if (next && Array.isArray(next.resources)) {
                                const articlesInSection = next.resources.filter(
                                    sectionResource =>
                                        sectionResource &&
                                        sectionResource.__typename
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
                            if (next && Array.isArray(next.resources)) {
                                const collectionsInSection = next.resources.filter(
                                    sectionResource =>
                                        sectionResource &&
                                        sectionResource.__typename
                                            .toLowerCase()
                                            .includes('collection')
                                )
                                current += collectionsInSection.length
                            }
                            return current
                        }, 0)

                    return (
                        <CollectionCard
                            key={collection.id + collection.version}
                            id={collection.id}
                            resourceType={collection.owner.__typename
                                .split('DTO')[0]
                                .toUpperCase()}
                            cardHeight={310}
                            description={collection.description}
                            date={collection.dateUpdated}
                            name={collection.name}
                            userId={collection.owner && collection.owner.id}
                            username={collection.owner && collection.owner.name}
                            userAvatar={
                                collection.owner && collection.owner.avatar
                            }
                            imageURL={collection.background}
                            isLoggedIn={!!userId}
                            articleCount={articleCount}
                            collectionCount={collectionCount}
                            linkComponent={children => <Link>{children}</Link>}
                            hoverChildren={({ hideDispatch }) => (
                                <React.Fragment>
                                    <PrimaryButton
                                        onClick={() => {
                                            chooseCollection({
                                                id: collection.id,
                                                version: collection.version,
                                            })
                                            hideDispatch()
                                        }}
                                    >
                                        Choose
                                    </PrimaryButton>
                                    <SecondaryButton
                                        onClick={() =>
                                            window.open(
                                                `${window.location.origin}/collection/${collection.id}`,
                                                '_blank'
                                            )
                                        }
                                    >
                                        View
                                    </SecondaryButton>
                                </React.Fragment>
                            )}
                            isChosenCollection={
                                !!chosenCollections.find(
                                    ({ id, version }) =>
                                        collection.id === id &&
                                        collection.version === version
                                )
                            }
                            triggerHoverChildrenOnFullCardClick
                        />
                    )
                })}
            </ChooseCollectionContent>
        </Container>
    ) : (
        <p>You have no community collections!</p>
    )

const CommunityPublishedCollections = withPagination(
    CollectionsContent,
    'getCommunityContent',
    'searchCommunityPublishedCollections'
)

interface IProps {
    searchCommunityPublishedCollections: {
        loading: boolean
        getCommunityContent: getCommunity_getCommunity
    }
    passChangeTabFunction: () => void
}

export default (props: IProps) => {
    if (
        props.searchCommunityPublishedCollections &&
        props.searchCommunityPublishedCollections.loading
    ) {
        return <Loading />
    }

    return (
        <Tabs
            centerTabs
            passChangeTabFunction={props.passChangeTabFunction}
            tabs={[{ name: 'Community Collections' }]}
            panels={[
                <CommunityPublishedCollections
                    {...props}
                    collections={
                        props.searchCommunityPublishedCollections
                            .getCommunityContent
                    }
                />,
            ]}
        />
    )
}

//   linkComponent?: (React.Node, string) => React.Node,
//   pageType?: PageType,
//   hoverAction?: { id: string, content: string } => void,
//   viewAction?: { id: string, version: string } => void,
//   isChosenArticle?: boolean,
// }
