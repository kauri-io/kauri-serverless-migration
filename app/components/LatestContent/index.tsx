import { Grid, Typography, Card } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'
import ArticleCard from '../Card/ArticleCard'
import CollectionCard from '../Card/CollectionCard'
import CommunityCard from '../Card/CommunityCard'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        maxWidth: 1272,
        margin: 'auto',
        '& > *': {
            marginBottom: theme.spacing(1),
        },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    buttons: {
        maxWidth: 870,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 400,
        padding: theme.spacing(2, 0),
        lineHeight: '24px',
    },
    explore: {
        maxWidth: 824,
        '& > *': {
            width: '100%',
        },
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: theme.spacing(2),
        '& h6': {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '19px',
        },
        '& p': {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '14px',
            textAlign: 'center',
        },
    },
}))

interface IProps {
    content: any
}

const LatestContent: React.FunctionComponent<IProps> = ({ content }) => {
    const classes = useStyles()
    return (
        <Grid direction="column" container={true} className={classes.container}>
            <Typography variant="h6" component="h3" className={classes.title}>
                Recent Content
            </Typography>
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
                                <Grid key={key} item={true} xs={12}>
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
                                <Grid key={key} item={true} xs={12}>
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
            <Typography variant="h6" component="h3" className={classes.title}>
                Explore Content
            </Typography>
            <Grid
                container={true}
                spacing={2}
                item={true}
                className={classes.explore}
            >
                <Grid item={true} sm={12} md={4}>
                    <Link href="/articles">
                        <a>
                            <Card className={classes.card}>
                                <Typography variant="h6" component="h6">
                                    Articles
                                </Typography>
                                <Typography variant="body2">
                                    User and Community Articles
                                </Typography>
                            </Card>
                        </a>
                    </Link>
                </Grid>
                <Grid item={true} sm={12} md={4}>
                    <Link href="/collections">
                        <a>
                            <Card className={classes.card}>
                                <Typography variant="h6" component="h6">
                                    Collections
                                </Typography>
                                <Typography variant="body2">
                                    User curated collections
                                </Typography>
                            </Card>
                        </a>
                    </Link>
                </Grid>
                <Grid item={true} sm={12} md={4}>
                    <Link href="/communities">
                        <a>
                            <Card className={classes.card}>
                                <Typography variant="h6" component="h6">
                                    Communities
                                </Typography>
                                <Typography variant="body2">
                                    Get involved with Kauri Communities
                                </Typography>
                            </Card>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LatestContent
