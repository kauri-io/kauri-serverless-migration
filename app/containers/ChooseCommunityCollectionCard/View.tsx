import React from 'react'
import styled from 'styled-components'
import CollectionCard from '../../components/Card/CollectionCard'
import ChooseCollectionContent, {
    Content,
} from '../../components/Modal/ChooseCollectionContent'
import Tabs from '../../components/Tabs'
import withPagination from '../../lib/with-pagination'
import Loading from '../../components/Loading'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'
import { getCollectionURL } from '../../lib/getURLs'

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
    // chooseCollection,
    // chosenCollections,
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

                    return (
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
