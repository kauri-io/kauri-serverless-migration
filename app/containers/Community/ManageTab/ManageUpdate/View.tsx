import React from 'react'
import { makeStyles, Theme, Grid } from '@material-ui/core'
import { searchArticles_searchArticles } from '../../../../queries/__generated__/searchArticles'
import ArticleCard from '../../../../components/Card/ArticleCard'
import { getArticleURL } from '../../../../lib/getURLs'

interface IProps {
    communityId: string | null
    data: {
        searchArticles: searchArticles_searchArticles
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        padding: theme.spacing(1),
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        paddingBotton: theme.spacing(4),
        width: '100%',
        maxWidth: 808,
    },
    container: {
        display: 'flex',
        padding: theme.spacing(0, 1),
    },
}))

export const ManageUpdate = ({ data }: IProps) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid container={true} spacing={2}>
                    {data.searchArticles.content &&
                    data.searchArticles.totalElements > 0 ? (
                        data.searchArticles.content.map(
                            (resource: any, key) => {
                                switch (resource.__typename) {
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
                                                    {...resource}
                                                    href={getArticleURL(
                                                        resource,
                                                        'review'
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
                            <p>No Pending articles</p>
                        </div>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default ManageUpdate
