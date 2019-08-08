import React from 'react'
import Link from 'next/link'
import { getProfileURL, getCommunityURL } from '../../lib/getURLs'
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
} from '@material-ui/core'
import TruncateMarkup from 'react-truncate-markup'
import { ShareButtons } from '../Tooltip/ShareButtons'

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
    moreMembersCount: {
        color: 'white',
    },
    moreMembers: {
        backgroundColor: theme.palette.primary.main,
        width: 24,
        height: 24,
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

interface IShareDialogProps {
    id: string
    href: string
    name: string | null
    open: boolean
    onClose: () => void
}

export const ShareDialog: React.FC<IShareDialogProps> = ({
    onClose,
    open,
    id,
    name,
    href,
}) => (
    <Dialog
        data-testid={`Card-${id}-shareDialog`}
        onClose={onClose}
        aria-labelledby="share-dialog"
        open={open}
    >
        <DialogTitle id="share-dialog-title">
            Choose social platform to share on
        </DialogTitle>
        <List>
            <ShareButtons
                onClose={onClose}
                title={String(name)}
                url={`${global.window && global.window.location.origin}${href}`}
            ></ShareButtons>
        </List>
    </Dialog>
)

interface IMember {
    id: string
    username: string | null
    name: string | null
    avatar: string | null
}

interface IMemberProps {
    memberHref: { as: string; href: string }
    member: IMember
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
    description: string | null
    attributes: any | null
    className?: string
    href: {
        as: string
        href: string
    }
    approvedId: (any | null)[] | null
    members: (IMember | null)[] | null
}

const CommunityCard: React.FC<IProps> = ({
    name,
    attributes,
    description,
    className,
    href,
    id,
    approvedId,
    members,
}) => {
    const classes = CommunityCardStyles({})

    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const articleCount =
        (approvedId &&
            approvedId.filter(resource => resource.type === 'ARTICLE')
                .length) ||
        0

    const collectionCount =
        (approvedId &&
            approvedId.filter(resource => resource.type === 'COLLECTION')
                .length) ||
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
                    (attributes && attributes.background) ||
                    'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU'
                }
                title={String(name)}
            />
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <div className={classes.stripHeader}>
                        <Icon>people</Icon>
                        <Typography variant="subtitle2">Community</Typography>
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
                            members.slice(0, 3).map(
                                member =>
                                    member && (
                                        <Member
                                            key={member.id}
                                            classes={classes}
                                            // TODO update as contributors[0]
                                            member={member}
                                            id={id}
                                            memberHref={getProfileURL({
                                                username: member.username,
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
                                <Typography
                                    className={classes.moreMembersCount}
                                    variant="caption"
                                >
                                    {`+${members.length - 3}`}
                                </Typography>
                            </Avatar>
                        ) : null}
                    </div>

                    <div className={classes.statistics}>
                        <Icon data-testid={`CommunityCard-${id}-articleIcon`}>
                            insert_drive_file
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
                            href={getCommunityURL({ name, id }).href}
                            name={name}
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
