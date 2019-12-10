import Empty from '../PublicProfile/Empty'
import ArticleCard from '../../components/Card/ArticleCard'
import { Article } from '../../queries/Fragments/__generated__/Article'
import { Collection } from '../../queries/Fragments/__generated__/Collection'
import CollectionCard from '../../components/Card/CollectionCard'
import { openModalAction } from '../../components/Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import LinkCard from '../../components/Card/LinkCard'
import { Link } from '../../queries/Fragments/__generated__/Link'
import { getArticleURL, getCollectionURL, getLinkUrl } from '../../lib/getURLs'
import { Theme, makeStyles, Typography } from '@material-ui/core'

interface IProps {
    resources: [Article | Collection | Link]
    currentUser: string | undefined
    description: string | null
    isLoggedIn: boolean
    isOwnedByCurrentUser: boolean
    name: string
    openModalAction: typeof openModalAction
    routeChangeAction: typeof routeChangeAction
}

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        padding: theme.spacing(1),
        maxWidth: 870,
        margin: 'auto',
        '& > *': {
            marginBottom: theme.spacing(2),
            display: 'block',
        },
    },
    root: {
        maxWidth: '808px',
        width: '100%',
        paddingTop: theme.spacing(4),
    },
    title: {
        marginBottom: 0,
        textAlign: 'center',
        fontWeight: 500,
    },
    description: {
        fontWeight: 400,
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
}))

const CollectionSection: React.SFC<IProps> = props => {
    const { name, description, resources } = props
    const classes = useStyles({})
    if (resources) {
        return (
            <div className={classes.root}>
                <Typography
                    className={classes.title}
                    gutterBottom={false}
                    variant="h6"
                >
                    {name}
                </Typography>
                <Typography className={classes.description} variant="body1">
                    {description}
                </Typography>
                <div className={classes.grid}>
                    {resources.map(resource => {
                        if (resource.__typename === 'ArticleDTO') {
                            return (
                                <ArticleCard
                                    href={getArticleURL(resource)}
                                    {...resource}
                                />
                            )
                        } else if (resource.__typename === 'ExternalLinkDTO') {
                            const link = resource

                            const ownerResource =
                                link.owner &&
                                link.owner.__typename === 'PublicUserDTO'
                                    ? {
                                          avatar: link.owner.avatar,
                                          id: link.owner.id || 'not_found',
                                          type: 'USER',
                                          username: link.owner.username,
                                      }
                                    : link.owner &&
                                      link.owner.__typename === 'CommunityDTO'
                                    ? {
                                          avatar: link.owner.avatar,
                                          id: link.owner.id || 'not_found',
                                          type: 'COMMUNITY',
                                          username: link.owner.communityName,
                                      }
                                    : {
                                          avatar: '',
                                          id: '',

                                          username: '',
                                      }
                            return (
                                <LinkCard
                                    {...link}
                                    owner={ownerResource}
                                    href={getLinkUrl(link)}
                                    key={String(link.id)}
                                />
                            )
                        } else if (resource.__typename === 'CollectionDTO') {
                            const collection = resource
                            const ownerResource =
                                collection.owner &&
                                collection.owner.__typename === 'PublicUserDTO'
                                    ? {
                                          avatar: collection.owner.avatar,
                                          id:
                                              collection.owner.id ||
                                              'not_found',
                                          type: 'USER',
                                          username: collection.owner.username,
                                      }
                                    : collection.owner &&
                                      collection.owner.__typename ===
                                          'CommunityDTO'
                                    ? {
                                          avatar: collection.owner.avatar,
                                          id:
                                              collection.owner.id ||
                                              'not_found',
                                          type: 'COMMUNITY',
                                          username:
                                              collection.owner.communityName,
                                      }
                                    : {
                                          avatar: '',
                                          id: '',

                                          username: '',
                                      }

                            return (
                                <CollectionCard
                                    {...collection}
                                    owner={ownerResource}
                                    href={getCollectionURL(collection)}
                                    key={String(collection.id)}
                                />
                            )
                        }
                        return null
                    })}
                </div>
            </div>
        )
    }
    return <Empty />
}

export default CollectionSection
