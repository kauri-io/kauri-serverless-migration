import React from 'react'
import moment from 'moment-mini'
import Link from 'next/link'
import { getCollectionURL } from '../../lib/getURLs'
import { Theme, makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    Icon,
    IconButton,
    Tooltip,
} from '@material-ui/core'
import TruncateMarkup from 'react-truncate-markup'
import ShareDialog from './ShareDialog'
import Avatar from '../Avatar'
import Image from '../Image'
import BookmarkResource from '../../containers/Bookmark/BookmarkResourceWidget'
import { ResourceTypeInput } from '../../__generated__/globalTypes'
import { openModalAction } from '../Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

export const CollectionCardStyles = makeStyles((theme: Theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
        textTransform: 'uppercase',
        width: 24,
        height: 24,
    },
    stripHeader: {
        display: 'flex',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
    },
    card: {
        display: 'flex',
        padding: theme.spacing(2),
        height: 184,
        maxWidth: 870,
        width: '100%',
    },
    cardActualContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% - 152px)',
        },
    },
    owner: {
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    content: {
        textAlign: 'left',
        cursor: 'pointer',
        height: '100%',
        padding: '0px !important',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
    },
    desktopMedia: {
        cursor: 'pointer',
        borderRadius: '4px',
        height: 152,
        width: 152,
        marginRight: theme.spacing(1.5),
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    name: {
        textAlign: 'left',
        [theme.breakpoints.only('xs')]: { maxWidth: `calc(100% - 100px)` },
    },
    bookmark: {
        cursor: 'pointer',
    },
    cardActions: {
        display: 'flex',
        marginTop: 'auto',
        alignItems: 'center',
        padding: `0px !important`,
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
        '& > *': {
            lineHeight: '1.57 !important',
        },
    },
    statistics: {
        display: 'flex',
        marginLeft: 'auto !important',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
    },
}))

interface IProps {
    id: string
    name: string | null
    owner: {
        name?: string | null
        username?: string | null
        id: string
        avatar?: string | null
    } | null
    dateUpdated: string | null
    description: string | null
    background: string | null
    className?: string
    href: {
        as: string
        href: string
    }
    sections: (any | null)[] | null
    isLoggedIn?: boolean
    isBookmarked: boolean
    openModalAction: typeof openModalAction
    routeChangeAction: typeof routeChangeAction
}

const CollectionCard: React.FC<IProps> = ({
    owner,
    name,
    background,
    dateUpdated,
    description,
    className,
    href,
    id,
    sections,
    isBookmarked,
    isLoggedIn = false,
    openModalAction,
    routeChangeAction,
}) => {
    const classes = CollectionCardStyles({})

    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const articleCount =
        (sections &&
            sections.reduce((current, next) => {
                if (next && next.resourcesId) {
                    const articlesInSection = next.resourcesId.filter(
                        resource => resource && resource.type === 'ARTICLE'
                    ).length
                    if (articlesInSection > 0) {
                        current += articlesInSection
                    }
                }
                return current
            }, 0)) ||
        0

    const collectionCount =
        (sections &&
            sections.reduce((current, next) => {
                if (next && next.resourcesId) {
                    const collectionsInSection = next.resourcesId.filter(
                        resource => resource && resource.type === 'COLLECTION'
                    ).length
                    if (collectionsInSection > 0) {
                        current += collectionsInSection
                    }
                }
                return current
            }, 0)) ||
        0

    return (
        <Card
            key={id}
            className={`${classes.card} ${className ? className : ''}`}
        >
            <Link href={href.href} as={href.as}>
                <a>
                    {background ? (
                        <Image
                            className={classes.desktopMedia}
                            data-testid={`CollectionCard-${id}-image`}
                            width={152}
                            height={152}
                            image={background}
                            borderRadius="4px"
                        />
                    ) : (
                        <img
                            className={classes.desktopMedia}
                            data-testid={`CollectionCard-${id}-image`}
                            src="/static/images/DefaultCollection.svg"
                        />
                    )}
                </a>
            </Link>
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <div className={classes.stripHeader}>
                        <Link href={href.href} as={href.as}>
                            <a className={classes.stripHeader}>
                                <Icon>folder</Icon>
                                <Typography variant="subtitle2">
                                    Collection
                                </Typography>
                            </a>
                        </Link>
                        <Typography
                            data-testid={`CollectionCard-${id}-date`}
                            variant="body2"
                        >
                            {moment(String(dateUpdated)).format('MMM DD')}
                        </Typography>
                    </div>
                    <Link href={href.href} as={href.as}>
                        <a
                            data-testid={`CollectionCard-${id}-name`}
                            className={classes.name}
                        >
                            <TruncateMarkup lines={1}>
                                <Typography variant={'h5'}>{name}</Typography>
                            </TruncateMarkup>
                        </a>
                    </Link>
                    <CardContent
                        data-testid={`CollectionCard-${id}-description`}
                        className={classes.content}
                    >
                        <Link href={href.href} as={href.as}>
                            <a>
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        data-testid={`CollectionCard-${id}-description`}
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {description}
                                    </Typography>
                                </TruncateMarkup>
                            </a>
                        </Link>
                    </CardContent>
                </div>
                <CardActions className={classes.cardActions}>
                    <div className={classes.user}>
                        <Avatar
                            aria-label={String(owner && owner.username)}
                            data-testid={`CollectionCard-${id}-avatar`}
                            id={String(owner && owner.id)}
                            name={owner && owner.name}
                            username={owner && owner.username}
                            avatar={owner && owner.avatar}
                            withName={true}
                        />
                    </div>

                    <div className={classes.statistics}>
                        <Tooltip
                            title={isBookmarked ? 'Unbookmark' : 'Bookmark'}
                        >
                            <Icon
                                onClick={() =>
                                    isLoggedIn
                                        ? openModalAction({
                                              children: (
                                                  <BookmarkResource
                                                      resourceId={id}
                                                      resourceType={
                                                          ResourceTypeInput.COLLECTION
                                                      }
                                                  />
                                              ),
                                          })
                                        : routeChangeAction(`/login`)
                                }
                                data-testid={`ArticleCard-${id}-bookmark`}
                                className={classes.bookmark}
                            >
                                {isBookmarked
                                    ? 'bookmark'
                                    : 'bookmark_border_icon'}
                            </Icon>
                        </Tooltip>
                        <Icon data-testid={`CollectionCard-${id}-articleIcon`}>
                            insert_drive_file
                        </Icon>
                        <Typography
                            data-testid={`CollectionCard-${id}-articleCount`}
                            variant="subtitle1"
                        >
                            {articleCount}
                        </Typography>
                        <Icon
                            data-testid={`CommunityCard-${id}-collectionIcon`}
                        >
                            folder
                        </Icon>
                        <Typography
                            data-testid={`CommunityCard-${id}-collectionCount`}
                            variant="subtitle1"
                        >
                            {collectionCount}
                        </Typography>

                        <IconButton
                            onClick={handleClickOpen}
                            data-testid={`CollectionCard-${id}-shareIcon`}
                            aria-label="share button"
                        >
                            <Icon>share</Icon>
                        </IconButton>
                        <ShareDialog
                            href={getCollectionURL({ name, id }).href}
                            name={name}
                            id={id}
                            open={open}
                            handleClose={handleClose}
                        ></ShareDialog>
                    </div>
                </CardActions>
            </div>
        </Card>
    )
}

export default CollectionCard
