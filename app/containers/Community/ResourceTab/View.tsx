import React from 'react'
import { makeStyles, Theme, Grid } from '@material-ui/core'
import Loading from '../../../components/Loading'
import { getCommunityContent_getCommunityContent } from '../../../queries/__generated__/getCommunityContent'
import {
    getArticleURL,
    getLinkUrl,
    getCollectionURL,
} from '../../../lib/getURLs'
import ArticleCard from '../../../components/Card/ArticleCard'
import LinkCard from '../../../components/Card/LinkCard'
import CollectionCard from '../../../components/Card/CollectionCard'
import ArticlesEmptyState from '../EmptyStates/Articles'
import CollectionsEmptyState from '../EmptyStates/Collections'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'

interface IProps {
    types: ResourceTypeInput[]
    getCommunityContentQuery: {
        loading: boolean
        getCommunityContent: getCommunityContent_getCommunityContent
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        padding: theme.spacing(1),
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        paddingTop: theme.spacing(4),
        width: '100%',
        maxWidth: 808,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(0, 1),
    },
}))

export const ResourceTab = ({ types, getCommunityContentQuery }: IProps) => {
    const classes = useStyles()
    if (getCommunityContentQuery.loading) {
        return <Loading />
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid container={true} spacing={2}>
                    {getCommunityContentQuery.getCommunityContent.content &&
                    getCommunityContentQuery.getCommunityContent.totalElements >
                        0 ? (
                        getCommunityContentQuery.getCommunityContent.content.map(
                            (res: any, key) => {
                                switch (res.resource.__typename) {
                                    case 'ArticleDTO': {
                                        return (
                                            <Grid
                                                key={key}
                                                item
                                                xs={12}
                                                sm={12}
                                                lg={12}
                                            >
                                                <ArticleCard
                                                    {...res.resource}
                                                    href={getArticleURL(
                                                        res.resource
                                                    )}
                                                />
                                            </Grid>
                                        )
                                    }
                                    case 'CollectionDTO': {
                                        return (
                                            <Grid
                                                key={key}
                                                item
                                                xs={12}
                                                sm={12}
                                                lg={12}
                                            >
                                                <CollectionCard
                                                    {...res.resource}
                                                    href={getCollectionURL(
                                                        res.resource
                                                    )}
                                                />
                                            </Grid>
                                        )
                                    }
                                    case 'ExternalLinkDTO': {
                                        return (
                                            <Grid
                                                key={key}
                                                item
                                                xs={12}
                                                sm={12}
                                                lg={12}
                                            >
                                                <LinkCard
                                                    {...res.resource}
                                                    href={getLinkUrl(
                                                        res.resource
                                                    )}
                                                />
                                            </Grid>
                                        )
                                    }

                                    default: {
                                        return null
                                    }
                                }
                            }
                        )
                    ) : (
                        <div style={{ width: '100%' }}>
                            {types.includes(ResourceTypeInput.COLLECTION) ? (
                                <CollectionsEmptyState />
                            ) : (
                                <ArticlesEmptyState />
                            )}
                        </div>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default ResourceTab
