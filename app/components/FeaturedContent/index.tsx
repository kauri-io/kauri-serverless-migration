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
} from '../../lib/getURLs'
import CommunityCard from '../Card/CommunityCard'
import { makeStyles } from '@material-ui/styles'

interface IProps {
    content: any[]
}

const FeaturedContent: React.FunctionComponent<IProps> = ({ content }) => {
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            maxWidth: (1242 / 12) * 9,
            marginLeft: 'auto',
            width: '100%',
            '& > *': {
                marginBottom: theme.spacing(2),
            },
        },
    }))
    const classes = useStyles()
    return (
        <Grid className={classes.container}>
            <Typography variant="h5">Featured Content</Typography>
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

                    default: {
                        return null
                    }
                }
            })}
        </Grid>
    )
}

export default FeaturedContent
