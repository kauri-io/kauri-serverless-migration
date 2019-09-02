import React from 'react'
import Link from 'next/link'
import { getCommunityURL } from '../../lib/getURLs'
import { Theme, makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    Icon,
    IconButton,
} from '@material-ui/core'
import TruncateMarkup from 'react-truncate-markup'
import ShareDialog from './ShareDialog'
import Avatar from '../Avatar'
import Image from '../Image'

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
        maxWidth: 870,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
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

interface IMember {
    id: string
    username: string | null
    name: string | null
    avatar: string | null
}

interface IMemberProps {
    member: IMember
    id: string
    classes: any
}

const Member: React.FC<IMemberProps> = ({ member, id }) =>
    member && (
        <Avatar
            aria-label={String(member && member.username)}
            data-testid={`CommunityCard-${id}-avatar`}
            id={String(member && member.id)}
            name={member && member.name}
            username={member && member.username}
            avatar={member && member.avatar}
            withName={false}
        />
    )

interface IProps {
    id: string
    name: string | null
    communityName?: string | null
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
    communityName,
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
            <Link href={href.href} as={href.as}>
                <a>
                    <Image
                        className={classes.desktopMedia}
                        data-testid={`CommunityCard-${id}-image`}
                        width={152}
                        height={152}
                        image={
                            (attributes && attributes.background) ||
                            'https://dev.kauri.io/static/images/DefaultCommunity.png'
                        }
                        borderRadius="4px"
                    />
                </a>
            </Link>
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <div className={classes.stripHeader}>
                        <Link href={href.href} as={href.as}>
                            <a className={classes.stripHeader}>
                                <Icon>people</Icon>
                                <Typography variant="subtitle2">
                                    Community
                                </Typography>
                            </a>
                        </Link>
                    </div>
                    <Link href={href.href} as={href.as}>
                        <a
                            data-testid={`CommunityCard-${id}-name`}
                            className={classes.name}
                        >
                            <TruncateMarkup lines={1}>
                                <Typography variant={'h5'}>
                                    {name || communityName}
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
                                        ></Member>
                                    )
                            )}
                        {members && members.length > 3 ? (
                            <div
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
                            </div>
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
                            handleClose={handleClose}
                        ></ShareDialog>
                    </div>
                </CardActions>
            </div>
        </Card>
    )
}

export default CommunityCard
