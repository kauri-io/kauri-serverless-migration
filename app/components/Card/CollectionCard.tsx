import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getCollectionURL } from '../../lib/getURLs'
import { Theme, makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Icon,
    IconButton,
} from '@material-ui/core'
import TruncateMarkup from 'react-truncate-markup'
import useridTrim from '../../lib/userid-trim'
import ShareDialog from './ShareDialog'

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
}) => {
    const classes = CollectionCardStyles({})
    const ownerHref = getCollectionURL({ name, id }) // TODO update as contributors[0]

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
            <CardMedia
                data-testid={`CollectionCard-${id}-image`}
                className={classes.desktopMedia}
                image={
                    background ||
                    'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU'
                }
                title={String(name)}
            />
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <div className={classes.stripHeader}>
                        <Icon>folder</Icon>
                        <Typography variant="subtitle2">Collection</Typography>
                        <Typography
                            data-testid={`CollectionCard-${id}-date`}
                            variant="body2"
                        >
                            {moment(String(dateUpdated)).format('MMM DD')}
                        </Typography>
                    </div>
                    <Link href={href.href} as={href.as}>
                        <a className={classes.name}>
                            <TruncateMarkup lines={1}>
                                <Typography
                                    data-testid={`CollectionCard-${id}-name`}
                                    variant={'h5'}
                                >
                                    {name}
                                </Typography>
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
                        <Link href={ownerHref.href} as={ownerHref.as}>
                            <a>
                                {owner && owner.avatar ? (
                                    <Avatar
                                        className={classes.avatar}
                                        src={owner && owner.avatar}
                                        aria-label={String(
                                            owner && owner.username
                                        )}
                                        data-testid={`CollectionCard-${id}-avatar`}
                                    />
                                ) : (
                                    <Avatar
                                        data-testid={`CollectionCard-${id}-avatar`}
                                        className={classes.avatar}
                                        aria-label={String(
                                            owner && owner.username
                                        )}
                                    >
                                        {(owner &&
                                            owner.username &&
                                            owner.username.charAt(0)) ||
                                            (owner &&
                                                owner.id &&
                                                owner.id.charAt(0))}
                                    </Avatar>
                                )}
                            </a>
                        </Link>
                        <Typography
                            data-testid={`CollectionCard-${id}-owner`}
                            variant="subtitle2"
                            className={classes.owner}
                        >
                            {owner &&
                                (owner.name ||
                                    owner.username ||
                                    useridTrim(owner.id))}
                        </Typography>
                    </div>

                    <div className={classes.statistics}>
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
