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
    Link: React.ReactNode
}

const FeaturedContent: React.FunctionComponent<IProps> = ({ content }) => {
    return (
        <Grid direction="column" sm={9} spacing={2} container={true}>
            <Grid>
                <Typography variant="h5">Featured Content</Typography>
            </Grid>
            {content.map(({ resource }: { resource: any }) => {
                switch (resource.__typename) {
                    case 'ArticleDTO': {
                        return (
                            <Grid item={true}>
                                <ArticleCard
                                    {...resource}
                                    href={getArticleURL(resource)}
                                />
                            </Grid>
                        )
                    }

                    case 'CollectionDTO': {
                        return (
                            <Grid item={true}>
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
                            <Grid item={true}>
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
