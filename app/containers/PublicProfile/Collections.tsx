import React from 'react'
import CollectionCard from '../../components/Card/CollectionCard'
import PublicProfileEmptyState from '../../components/PublicProfileEmptyState'
import Button from '../../components/Button'
import withPagination from '../../lib/with-pagination'
import { getCollectionsForUser } from '../../queries/__generated__/getCollectionsForUser'
import {
    Collection_owner_CommunityDTO,
    Collection_owner_PublicUserDTO,
} from '../../queries/Fragments/__generated__/Collection'
import { getCollectionURL } from '../../lib/getURLs'
import { Grid, Typography } from '@material-ui/core'

interface IProps {
    data: getCollectionsForUser
    routeChangeAction: (route: string) => void
    isLoggedIn: boolean
}

const Collections = ({ data, routeChangeAction, isLoggedIn }: IProps) =>
    data.searchCollections && data.searchCollections.content.length > 0 ? (
        <Grid container={true} spacing={2}>
            {data.searchCollections.content.map(collection => {
                if (collection) {
                    const owner = collection.owner as
                        | Collection_owner_CommunityDTO
                        | Collection_owner_PublicUserDTO

                    return (
                        <Grid
                            item={true}
                            sm={12}
                            container={true}
                            justify="center"
                        >
                            <CollectionCard
                                {...collection}
                                href={getCollectionURL(collection)}
                                key={collection.id}
                                owner={owner}
                            />
                        </Grid>
                    )
                } else {
                    return null
                }
            })}
        </Grid>
    ) : (
        <Grid justify="center">
            <PublicProfileEmptyState
                iconSrc={'/static/images/icons/no-collections-created.svg'}
                description={
                    <Grid>
                        <Typography>
                            Collections are ways to group and organize articles
                            on Kauri.
                        </Typography>
                        <Typography>
                            Common collections are tutorial series, articles
                            about a single product, multiple projects, or even
                            just a user's favourite articles
                        </Typography>
                    </Grid>
                }
                title="No Collections Created"
                primaryButton={
                    isLoggedIn ? (
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() =>
                                routeChangeAction('/create-collection')
                            }
                        >
                            Create Collection
                        </Button>
                    ) : null
                }
            />{' '}
        </Grid>
    )

export default withPagination(Collections, 'searchCollections')
