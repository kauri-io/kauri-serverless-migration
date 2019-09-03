import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import CollectionCard from '../Card/CollectionCard'
import ArticleCard from '../Card/ArticleCard'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'
import CommunityCard from '../Card/CommunityCard'

interface IProps {
    content: any[]
}

const FeaturedContent: React.FunctionComponent<IProps> = ({ content }) => {
    return (
        <Grid direction="column" sm={9} spacing={2} container={true}>
            <Grid item={true}>
                <Typography variant="h5">Featured Content</Typography>
            </Grid>
            {content.map(({ resource }: { resource: any }, key) => {
                switch (resource.__typename) {
                    case 'ArticleDTO': {
                        return (
                            <Grid key={key} item={true}>
                                <ArticleCard
                                    {...resource}
                                    href={getArticleURL(resource)}
                                />
                            </Grid>
                        )
                    }

                    case 'CollectionDTO': {
                        return (
                            <Grid key={key} item={true}>
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
                            <Grid key={key} item={true}>
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
    )
}

export default FeaturedContent
