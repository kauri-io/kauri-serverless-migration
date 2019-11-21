import Avatar from '../Avatar'
import TagList from '../Tags/TagList'
import Button from '../../components/Button'
import Link from 'next/link'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.common.white,
        width: '100%',
        padding: theme.spacing(2, 0),
    },
    container: {
        maxWidth: 1272,
        margin: 'auto',
        width: '100%',
    },
}))

interface IProps {
    id: string
    version: string | null
    title: string
    description: string
    tags: string[]
    resourceType: string
    ownerResourceType: string
}

const FeaturedResource: React.FunctionComponent<
    IProps & { userId: string; username: string; avatar: string }
> = ({
    title,
    description,
    resourceType,
    id,
    userId,
    tags,
    username,
    avatar,
    ownerResourceType,
}) => {
    const classes = useStyles()

    let resourceURL

    if (resourceType === 'article') {
        resourceURL = getArticleURL({
            id,
            title,
        })
    }
    if (resourceType === 'collection') {
        resourceURL = getCollectionURL({
            id,
            name,
        })
    }
    if (resourceType == 'community') {
        resourceURL = getCommunityURL({
            id,
            name,
        })
    }

    return (
        <Grid className={classes.root}>
            <Grid container={true} className={classes.container} spacing={4}>
                <Grid item={true} sm={12} md={9}>
                    <Link as={resourceURL.as} href={resourceURL.href}>
                        <a>
                            <Typography variant="caption">Featured</Typography>
                            <Typography variant="h5">
                                {title && String(title)}
                            </Typography>
                            <Typography variant="body1">
                                {description && String(description)}
                            </Typography>
                        </a>
                    </Link>
                    <TagList maxTags={3} color="textPrimary" tags={tags} />
                    <Avatar
                        id={userId}
                        username={username}
                        avatar={avatar}
                        type={ownerResourceType}
                        withName={true}
                    />
                </Grid>
                <Grid
                    item={true}
                    sm={12}
                    md={3}
                    container={true}
                    justify="center"
                    alignItems="center"
                >
                    <Link href={resourceURL.href} as={resourceURL.as}>
                        <a>
                            <Button
                                fullWidth={true}
                                color="primary"
                                variant="outlined"
                            >{`View ${resourceType}`}</Button>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FeaturedResource
