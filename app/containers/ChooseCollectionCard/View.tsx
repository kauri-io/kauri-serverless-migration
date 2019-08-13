import React, { useState } from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { searchCollections_searchCollections } from '../../queries/__generated__/searchCollections'
import { getCollectionURL } from '../../lib/getURLs'
import { Tab, Tabs } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const CollectionsContent = ({
    chooseCollection,
    // chosenCollections,
    collections,
    userId,
    setRef,
    allOtherChosenCollections,
    currentCollectionIdIfUpdating,
}) =>
    collections && collections.content && collections.content.length > 0 ? (
        <div
            ref={ref => {
                // console.log(setRef)
                setRef && setRef(ref)
            }}
        >
            <Grid container spacing={3}>
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

                    return (
                        <Grid
                            key={collection.id}
                            item
                            xs={12}
                            sm={12}
                            lg={12}
                            onClick={() =>
                                chooseCollection({
                                    id: collection.id,
                                })
                            }
                        >
                            <CollectionCard
                                {...collection}
                                href={getCollectionURL(collection)}
                                key={collection.id}
                                isLoggedIn={!!userId}
                            // hoverChildren={({ hideDispatch }) => (
                            //     <React.Fragment>
                            //         <PrimaryButton
                            //             onClick={() => {
                            //                 chooseCollection({
                            //                     id: collection.id,
                            //                     version: collection.version,
                            //                 })
                            //                 hideDispatch()
                            //             }}
                            //         >
                            //             Choose
                            //         </PrimaryButton>
                            //         <SecondaryButton
                            //             onClick={() =>
                            //                 window.open(
                            //                     `${window.location.origin}/collection/${collection.id}`,
                            //                     '_blank'
                            //                 )
                            //             }
                            //         >
                            //             View
                            //         </SecondaryButton>
                            //     </React.Fragment>
                            // )}
                            // isChosenCollection={
                            //     !!chosenCollections.find(
                            //         ({ id, version }) =>
                            //             collection.id === id &&
                            //             collection.version === version
                            //     )
                            // }
                            // triggerHoverChildrenOnFullCardClick
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
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
            {tab === 0 && (
                <PersonalPublishedCollections
                    {...props}
                    collections={
                        props.searchPersonalPublishedCollections
                            .searchCollections
                    }
                />
            )}
            {tab === 1 && (
                <PublishedCollections
                    {...props}
                    collections={
                        props.searchPublishedCollections.searchCollections
                    }
                />
            )}
        </>
    )
}
