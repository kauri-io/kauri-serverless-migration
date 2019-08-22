import React from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'
import { getCollectionURL } from '../../lib/getURLs'
import { Grid, makeStyles, Theme } from '@material-ui/core'

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

    return collections &&
        collections.content &&
        collections.content.length > 0 ? (
        <div
            ref={ref => {
                // console.log(setRef)
                setRef && setRef(ref)
            }}
        >
            <Grid container spacing={3}>
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
                                    key={collection.id + collection.version}
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
        <p>You have no community collections!</p>
    )
}

const CommunityPublishedCollections = withPagination(
    CollectionsContent,
    'getCommunityContent',
    'searchCommunityPublishedCollections'
)

interface IProps {
    userId?: string
    allOtherChosenCollections?: { id: string }[]
    chosenCollections?: { id: string }[]
    chooseCollection?: ({ id: string, version: number }) => void
    currentCollectionIdIfUpdating?: string
    searchCommunityPublishedCollections: {
        loading: boolean
        getCommunityContent: getCommunity_getCommunity
    }
    passChangeTabFunction: (changeTab?: any) => void
}

export default (props: IProps) => {
    if (
        props.searchCommunityPublishedCollections &&
        props.searchCommunityPublishedCollections.loading
    ) {
        return <Loading />
    }

    return (
        <CommunityPublishedCollections
            {...props}
            collections={
                props.searchCommunityPublishedCollections.getCommunityContent
            }
        />
    )
}
