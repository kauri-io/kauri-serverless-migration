import React from 'react'
import LinkCard from '../../../components/Card/LinkCard'
// import CheckpointArticles from '../../CheckpointArticles'
import withPagination from '../../../lib/with-pagination'
// import { getArticleURL } from '../../../lib/getURLs'
import Empty from './Empty'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import Loading from '../../../components/Loading'
import { getLinkUrl } from '../../../lib/getURLs'


export interface IArticlesProps {
    LinksQuery: any
    type: string
    isLoggedIn: boolean
    isOwner: boolean
    classes: { grid: any }
}

const Articles: React.FC<IArticlesProps> = ({
    LinksQuery,
    // type,
    isLoggedIn,
    isOwner,
}) => {
    if (LinksQuery.loading) {
        return <Loading />
    }

    const links =
        LinksQuery.searchExternalLinks && LinksQuery.searchExternalLinks.content
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            paddingTop: theme.spacing(4),
        },
    }))
    const classes = useStyles()

    if (links) {
        return links.length > 0 ? (
            <Grid
                className={classes.container}
                container
                spacing={2}
                justify="center"
            >

                {LinksQuery.searchExternalLinks.content.map((link, key) =>
                    <Grid
                        key={link.id}
                        item
                        xs={12}
                        container={true}
                        justify="center"
                    >
                        <LinkCard key={key} href={getLinkUrl(link)} {...link} />
                    </Grid>
                )}
            </Grid>
        ) : (
                <Empty isLoggedIn={isLoggedIn} isOwner={isOwner} />
            )
    }
    return null
}

export default withPagination(Articles, 'searchArticles')
