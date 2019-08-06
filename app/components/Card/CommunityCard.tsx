import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getCommunityURL } from '../../lib/getURLs'
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
    Dialog,
    List,
    DialogTitle,
    ListItem,
    ListItemText,
} from '@material-ui/core'
import TruncateMarkup from 'react-truncate-markup'
import { Community_members } from '../../queries/Fragments/__generated__/Community'

export const CommunityCardStyles = makeStyles((theme: Theme) => ({
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
    members: {
        display: 'flex',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
    },
    moreMembers: {
        backgroundColor: theme.palette.primary.main,
    },
    content: {
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

const sharePlatforms = ['twitter', 'linkedin', '']

interface IShareDialogProps {
    id: string
    open: boolean
    onClose: (value: string) => void
}

const ShareDialog: React.FC<IShareDialogProps> = ({ onClose, open, id }) => (
    <Dialog
        data-testid={`CommunityCard-${id}-shareDialog`}
        onClose={onClose}
        aria-labelledby="share-dialog"
        open={open}
    >
        <DialogTitle id="share-dialog-title">
            Choose social platform to share on
        </DialogTitle>
        <List>
            {sharePlatforms.map(sharePlatform => (
                <ListItem
                    button={true}
                    data-testid={`CommunityCard-${id}-${sharePlatform}ShareButton`}
                    onClick={() => onClose(sharePlatform)}
                    key={sharePlatform}
                >
                    <ListItemText primary={sharePlatform} />
                </ListItem>
            ))}
        </List>
    </Dialog>
)

interface IMemberProps {
    memberHref: { as: string; href: string }
    member: Community_members | null
    id: string
    classes: any
}

const Member: React.FC<IMemberProps> = ({ member, id, classes, memberHref }) =>
    member && (
        <Link href={memberHref.href} as={memberHref.as}>
            <a>
                {member && member.avatar ? (
                    <Avatar
                        className={classes.avatar}
                        src={member && member.avatar}
                        aria-label={String(member && member.username)}
                        data-testid={`CommunityCard-${id}-avatar`}
                    />
                ) : (
                    <Avatar
                        data-testid={`CommunityCard-${id}-avatar`}
                        className={classes.avatar}
                        aria-label={String(member && member.username)}
                    >
                        {(member &&
                            member.username &&
                            member.username.charAt(0)) ||
                            (member && member.id && member.id.charAt(0))}
                    </Avatar>
                )}
            </a>
        </Link>
    )

interface IProps {
    id: string
    name: string | null
    dateUpdated: string | null
    description: string | null
    background: string | null
    className?: string
    href: {
        as: string
        href: string
    }
    sections: (any | null)[] | null
    members: (Community_members | null)[] | null
}

const CommunityCard: React.FC<IProps> = ({
    name,
    background,
    dateUpdated,
    description,
    className,
    href,
    id,
    sections,
    members,
}) => {
    const classes = CommunityCardStyles({})

    const [open, setOpen] = React.useState(false)
    const [, setSelectedValue] = React.useState<string | null>(null)

    function handleClickOpen() {
        setOpen(true)
    }

    const handleClose = (value: string) => {
        setOpen(false)
        setSelectedValue(value)
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
                data-testid={`CommunityCard-${id}-image`}
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
                        <Typography variant="subtitle2">Community</Typography>
                        <Typography
                            data-testid={`CommunityCard-${id}-date`}
                            variant="body2"
                        >
                            {moment(String(dateUpdated)).format('MMM DD')}
                        </Typography>
                    </div>
                    <Link href={href.href} as={href.as}>
                        <a className={classes.name}>
                            <TruncateMarkup lines={1}>
                                <Typography
                                    data-testid={`CommunityCard-${id}-name`}
                                    variant={'h5'}
                                >
                                    {name}
                                </Typography>
                            </TruncateMarkup>
                        </a>
                    </Link>
                    <CardContent
                        data-testid={`CommunityCard-${id}-description`}
                        className={classes.content}
                    >
                        <Link href={href.href} as={href.as}>
                            <a>
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        data-testid={`CommunityCard-${id}-description`}
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
                    <div className={classes.members}>
                        {members &&
                            members.map(
                                member =>
                                    member && (
                                        <Member
                                            key={member.id}
                                            classes={classes}
                                            // TODO update as contributors[0]
                                            member={member}
                                            id={id}
                                            memberHref={getCommunityURL({
                                                name,
                                                id,
                                            })}
                                        ></Member>
                                    )
                            )}
                        {members && members.length > 3 ? (
                            <Avatar
                                data-testid={`CommunityCard-${id}-moreMembers`}
                                className={classes.moreMembers}
                                aria-label={'more-members'}
                            >
                                {`+${members.length - 3}`}
                            </Avatar>
                        ) : null}
                    </div>

                    <div className={classes.statistics}>
                        <Icon data-testid={`CommunityCard-${id}-articleIcon`}>
                            document
                        </Icon>
                        <Typography
                            data-testid={`CommunityCard-${id}-articleCount`}
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
                            data-testid={`CommunityCard-${id}-shareIcon`}
                            aria-label="share button"
                        >
                            <Icon>share</Icon>
                        </IconButton>
                        <ShareDialog
                            id={id}
                            open={open}
                            onClose={handleClose}
                        ></ShareDialog>
                    </div>
                </CardActions>
            </div>
        </Card>
    )
}

export default CommunityCard
