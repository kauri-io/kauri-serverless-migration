import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'
import ArticleCard from '../Card/ArticleCard'
import CollectionCard from '../Card/CollectionCard'
import CommunityCard from '../Card/CommunityCard'

const useStyles = makeStyles(() => ({
    container: {
        maxWidth: 1242,
        margin: 'auto',
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
                {content.map((resource: any) => {
                    switch (resource.__typename) {
                        case 'ArticleDTO': {
                            return (
                                <Grid item={true} sm={6}>
                                    <ArticleCard
                                        {...resource}
                                        href={getArticleURL(resource)}
                                    />
                                </Grid>
                            )
                        }

                        case 'CollectionDTO': {
                            return (
                                <Grid item={true} sm={6}>
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
                                <Grid item={true} sm={6}>
                                    {' '}
                                    <CommunityCard
                                        {...resource}
                                        href={getCommunityURL(resource)}
                                    />
                                </Grid>
                            )

                        default: {
                            return null
                        }
                    }
                })}
            </Grid>
            <Grid justify="space-around" container={true}>
                <Grid item={true}>
                    <Link href="/articles" as="/articles">
                        <a>
                            <Button color="primary" variant="outlined">
                                All Articles
                            </Button>
                        </a>
                    </Link>
                </Grid>

                <Grid item={true}>
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
