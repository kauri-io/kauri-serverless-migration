import React, { useState } from 'react'
import styled from 'styled-components'
import CollectionCard from '../../components/Card/CollectionCard'
import ChooseCollectionContent, {
    Content,
} from '../../components/Modal/ChooseCollectionContent'
import Button from '@material-ui/core/Button'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { searchCollections_searchCollections } from '../../queries/__generated__/searchCollections'
import { getCollectionURL } from '../../lib/getURLs'
import { Tab, Tabs } from '@material-ui/core';

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
                {collections.content.map(collection => {
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
                            href={getCollectionURL(collection)}
                            key={collection.id + collection.version}
                            resourceType={collection.owner.__typename
                                .split('DTO')[0]
                                .toUpperCase()}
                            cardHeight={310}
                            id={collection.id}
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
                            hoverChildren={({ hideDispatch }) => (
                                <React.Fragment>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={() => {
                                            chooseCollection({
                                                id: collection.id,
                                                version: collection.version,
                                            })
                                            hideDispatch()
                                        }}
                                    >
                                        Choose
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        onClick={() =>
                                            window.open(
                                                `${window.location.origin}/collection/${collection.id}`,
                                                '_blank'
                                            )
                                        }
                                    >
                                        View
                                    </Button>
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
            <p>You have no published collections!</p>
        )

const PublishedCollections = withPagination(
    CollectionsContent,
    'searchCollections',
    'searchPublishedCollections'
)
const PersonalPublishedCollections = withPagination(
    CollectionsContent,
    'searchCollections',
    'searchPersonalPublishedCollections'
)

interface IProps {
    userId?: string
    allOtherChosenCollections?: { id: string }[]
    chosenCollections?: { id: string }[]
    chooseCollection?: ({ id: string, version: number }) => void
    currentCollectionIdIfUpdating?: string
    searchPersonalPublishedCollections: {
        loading: boolean
        searchCollections: searchCollections_searchCollections
    }
    searchPublishedCollections: {
        loading: boolean
        searchCollections: searchCollections_searchCollections
    }
    passChangeTabFunction: (changeTab?: any) => void
}

export default (props: IProps) => {
    if (
        (props.searchPublishedCollections &&
            props.searchPublishedCollections.loading) ||
        (props.searchPersonalPublishedCollections &&
            props.searchPersonalPublishedCollections.loading)
    ) {
        return <Loading />
    }

    const [tab, setTab] = useState(0)

    return (
        <>
            <Tabs
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                centered={true}
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="My Collections" />
                <Tab label="All Collections" />
            </Tabs>
            {tab === 0 && <PersonalPublishedCollections
                {...props}
                collections={
                    props.searchPersonalPublishedCollections
                        .searchCollections
                }
            />}
            {tab === 1 && <PublishedCollections
                {...props}
                collections={
                    props.searchPublishedCollections.searchCollections
                }
            />}
        </>
    )
}
