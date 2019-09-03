import Button from '../../components/Button'
import Link from 'next/link'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'
import ArticleCard from '../Card/ArticleCard'
import CollectionCard from '../Card/CollectionCard'
import CommunityCard from '../Card/CommunityCard'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxWidth: 1242,
        margin: 'auto',
        '& > *': {
            marginBottom: theme.spacing(1),
        },
    },
}))

interface IProps {
    content: any
}

const LatestContent: React.FunctionComponent<IProps> = ({ content }) => {
    const classes = useStyles()
    console.log(classes)
    return (
        <Grid direction="column" container={true} className={classes.container}>
            <Typography variant="h5">Latest Content</Typography>
            <Grid container={true} spacing={2}>
                {content.map((resource: any, key) => {
                    switch (resource.__typename) {
                        case 'ArticleDTO': {
                            return (
                                <Grid key={key} item={true} xs={12}>
                                    <ArticleCard
                                        {...resource}
                                        href={getArticleURL(resource)}
                                    />
                                </Grid>
                            )
                        }

                        case 'CollectionDTO': {
                            return (
                                <Grid key={key} item={true} sm={12}>
                                    {' '}
                                    <CollectionCard
                                        {...resource}
                                        href={getCollectionURL(resource)}
                                    />
                                </Grid>
                            )
                        }

                        case 'CommunityDTO':
                            return (
                                <Grid key={key} item={true} sm={12}>
                                    {' '}
                                    <CommunityCard
                                        {...resource}
                                        href={getCommunityURL({
                                            name: resource.communityName,
                                            id: resource.id,
                                        })}
                                    />
                                </Grid>
                            )

                        default: {
                            return null
                        }
                    }
                })}
            </Grid>
            <Grid justify="flex-start" spacing={2} container={true}>
                <Grid
                    container={true}
                    justify="flex-end"
                    sm={6}
                    md={4}
                    item={true}
                >
                    <Link href="/articles" as="/articles">
                        <a>
                            <Button color="primary" variant="outlined">
                                All Articles
                            </Button>
                        </a>
                    </Link>
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} md={1} />
                </Hidden>

                <Grid sm={6} md={4} item={true}>
                    <Link href="/collections" as="/collections">
                        <a>
                            <Button color="primary" variant="outlined">
                                All Collections
                            </Button>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LatestContent
