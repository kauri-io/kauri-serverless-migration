import Avatar from '../Avatar'
import { Label, Title2, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import Button from '../../components/Button'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
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
        maxWidth: 1242,
        margin: 'auto',
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

    console.log(resourceType)

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
            <Grid container={true} className={classes.container} spacing={2}>
                <Grid item={true} sm={9} direction="column" container={true}>
                    <Label>Featured</Label>
                    <Link href={resourceURL.as}>
                        <a>
                            <Title2>{title && String(title)}</Title2>
                            <BodyCard>
                                {description && String(description)}
                            </BodyCard>
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
                    sm={3}
                    container={true}
                    justify="center"
                    alignItems="center"
                >
                    <Link href={resourceURL.as}>
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
