import React, { useState, useEffect } from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { searchCollections_searchCollections } from '../../queries/__generated__/searchCollections'
import { getCollectionURL } from '../../lib/getURLs'
import { Tab, Tabs, makeStyles, Theme, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    chosenResource: {
        '& > :first-child': {
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
            pointerEvents: 'none',
            borderRadius: '4px',
        },
        cursor: 'pointer',
    },
    unchosenResource: {
        '& > :first-child': {
            pointerEvents: 'none',
            borderRadius: '4px',
        },
        cursor: 'pointer',
    },
}))

const CollectionsContent = ({
    chooseCollection,
    chosenCollections,
    collections,
    userId,
    setRef,
    allOtherChosenCollections,
    currentCollectionIdIfUpdating,
}) => {
    const classes = useStyles()

    const collectionsToDisplay =
        collections &&
        collections.content &&
        collections.content.filter(collection => {
            // Don't show chosen Collections from other sections
            return !(
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
                    //Also don't show the current collection!
                ) || collection.id === currentCollectionIdIfUpdating
            )
        })

    return collectionsToDisplay && collectionsToDisplay.length > 0 ? (
        <div
            ref={ref => {
                // console.log(setRef)
                setRef && setRef(ref)
            }}
        >
            <Grid container spacing={3}>
                {collectionsToDisplay.map(collection => {
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
                            <div
                                className={
                                    chosenCollections.find(
                                        ({ id }) => id === collection.id
                                    )
                                        ? classes.chosenResource
                                        : classes.unchosenResource
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
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    ) : (
        <p>You have no published collections to select!</p>
    )
}

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
    useEffect(() => {
        props.passChangeTabFunction(setTab)
        return () => {}
    }, [])

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
