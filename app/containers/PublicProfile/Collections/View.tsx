import React from 'react'
import CollectionCard from '../../../components/Card/CollectionCard'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import Button from '../../../components/Button'
import withPagination from '../../../lib/with-pagination'
import { getCollectionsForUser } from '../../../queries/__generated__/getCollectionsForUser'
import {
    Collection_owner_CommunityDTO,
    Collection_owner_PublicUserDTO,
} from '../../../queries/Fragments/__generated__/Collection'
import { getCollectionURL } from '../../../lib/getURLs'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import Loading from '../../../components/Loading'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

interface ICollectionQuery extends getCollectionsForUser {
    loading: boolean
}

interface IProps {
    CollectionQuery: ICollectionQuery
    routeChangeAction: typeof routeChangeAction
    isLoggedIn: boolean
    loading: boolean
}

const Collections = ({
    CollectionQuery,
    routeChangeAction,
    isLoggedIn,
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        grid: {
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),
            maxWidth: 870,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
        },
    }))
    const classes = useStyles()

    if (CollectionQuery.loading) {
        return <Loading />
    }

    return CollectionQuery.searchCollections &&
        CollectionQuery.searchCollections.content.length > 0 ? (
        <Grid className={classes.grid} container spacing={2}>
            {CollectionQuery.searchCollections.content.map(collection => {
                if (collection) {
                    const owner = collection.owner as
                        | Collection_owner_CommunityDTO
                        | Collection_owner_PublicUserDTO

                    return (
                        <Grid key={collection.id} item xs={12}>
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
}

export default withPagination(Collections, 'searchCollections')
