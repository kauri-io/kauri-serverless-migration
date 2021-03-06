import Typography from '@material-ui/core/Typography'
import {
    Grid,
    Theme,
    // Theme
} from '@material-ui/core'
import CollectionCard from '../Card/CollectionCard'
import ArticleCard from '../Card/ArticleCard'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
    getLinkUrl,
} from '../../lib/getURLs'
import CommunityCard from '../Card/CommunityCard'
import { makeStyles } from '@material-ui/styles'
import LinkCard from '../Card/LinkCard'

interface IProps {
    content: any[]
}

const FeaturedContent: React.FunctionComponent<IProps> = ({ content }) => {
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            marginLeft: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            fontWeight: 400,
            padding: theme.spacing(2, 0),
            lineHeight: '24px',
        },
        cards: {
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: theme.spacing(2),
            },
        },
    }))
    const classes = useStyles()
    return (
        <Grid className={classes.container}>
            <Typography variant="h6" component="h3" className={classes.title}>
                Featured Content
            </Typography>
            <div className={classes.cards}>
                {content.map(({ resource }: { resource: any }, key) => {
                    switch (resource.__typename) {
                        case 'ArticleDTO': {
                            return (
                                <ArticleCard
                                    key={key}
                                    {...resource}
                                    href={getArticleURL(resource)}
                                />
                            )
                        }

                        case 'CollectionDTO': {
                            return (
                                <CollectionCard
                                    key={key}
                                    {...resource}
                                    href={getCollectionURL(resource)}
                                />
                            )
                        }

                        case 'CommunityDTO':
                            return (
                                <CommunityCard
                                    key={key}
                                    {...resource}
                                    href={getCommunityURL({
                                        name: resource.communityName,
                                        id: resource.id,
                                    })}
                                />
                            )

                        case 'ExternalLinkDTO':
                            return (
                                <Grid key={key} item={true} xs={12}>
                                    {' '}
                                    <LinkCard
                                        {...resource}
                                        href={getLinkUrl({
                                            linkTitle: resource.linkTitle,
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
            </div>
        </Grid>
    )
}

export default FeaturedContent
