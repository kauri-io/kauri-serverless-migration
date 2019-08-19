import UserAvatarComponent, {
    IProps as UserAvatarComponentProps,
} from '../UserAvatar'
import { Label, Title2, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import Button from '../../components/Button'
import slugify from 'slugify'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

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
    IProps & UserAvatarComponentProps
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
    const slug = slugify(title, { lower: true })
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid container={true} className={classes.container} spacing={2}>
                <Grid item={true} sm={9} direction="column" container={true}>
                    <Label>Featured</Label>
                    <Link
                        href={
                            resourceType === 'article'
                                ? `/${slug}/${id}/a`
                                : resourceType === 'collection'
                                ? `/${slugify(name, { lower: true })}/${id}/c`
                                : `/community/${id}`
                        }
                    >
                        <a>
                            <Title2>{title && String(title)}</Title2>
                            <BodyCard>
                                {description && String(description)}
                            </BodyCard>
                        </a>
                    </Link>
                    <TagList maxTags={3} color="textPrimary" tags={tags} />
                    <Link
                        href={
                            ownerResourceType === 'COMMUNITY'
                                ? `/community/${userId}`
                                : `/public-profile/${userId}`
                        }
                    >
                        <a>
                            <UserAvatarComponent
                                userId={userId}
                                username={username}
                                avatar={avatar}
                            />
                        </a>
                    </Link>
                </Grid>
                <Grid
                    item={true}
                    sm={3}
                    container={true}
                    justify="center"
                    alignItems="center"
                >
                    <Link
                        href={
                            resourceType === 'article'
                                ? `/${slug}/${id}/a`
                                : resourceType === 'collection'
                                ? `/${slugify(name, { lower: true })}/${id}/c`
                                : `/community/${id}`
                        }
                    >
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
