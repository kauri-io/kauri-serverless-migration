import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { Typography, Icon, CardActions } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TruncateMarkup from 'react-truncate-markup'
import Link from 'next/link'
import { getProfileURL } from '../../lib/getURLs'
import useridTrim from '../../lib/userid-trim'

export const PublicProfileCardStyles = makeStyles((theme: Theme) => ({
    profileLabel: {
        display: 'flex',
        '& >*:first-child': { marginRight: theme.spacing(1) },
        marginBottom: theme.spacing(1),
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        textTransform: 'uppercase',
        width: 152,
        height: 152,
        marginRight: theme.spacing(1.5),
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    avatarContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        padding: theme.spacing(2),
        height: 152,
        maxWidth: 870,
    },
    cardActualContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'left',
    },
    author: {
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
    name: {
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    title: {},
    statistics: {
        display: 'flex',
        padding: '0px !important',
        marginTop: 'auto !important',
        marginLeft: 'auto !important',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
}))

interface IProps {
    id: string
    username: string | null
    name: string | null
    avatar: string | null
    title: string | null
    articleCount: number
    collectionCount: number
    className?: string
}

const PublicProfileCard: React.FC<IProps> = ({
    id,
    username,
    articleCount,
    collectionCount,
    name,
    avatar,
    title,
    className,
}) => {
    const classes = PublicProfileCardStyles({})
    const href = getProfileURL({ username: name || username, id, userId: id })

    return (
        <Card
            key={id}
            className={`${classes.card} ${className ? className : ''}`}
        >
            <div className={classes.avatarContainer}>
                {avatar ? (
                    <Avatar
                        sizes={'152'}
                        className={classes.avatar}
                        src={avatar}
                        aria-label={String(username)}
                        data-testid={`PublicProfileCard-${id}-avatar`}
                    />
                ) : (
                    <Avatar
                        sizes={'152'}
                        data-testid={`PublicProfileCard-${id}-avatar`}
                        className={classes.avatar}
                        aria-label={String(username)}
                    >
                        {(username && username.charAt(0)) ||
                            useridTrim(id).charAt(0)}
                    </Avatar>
                )}
            </div>

            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <div className={classes.profileLabel}>
                        <Icon>people</Icon>
                        <Typography
                            data-testid={`PublicProfileCard-${id}-profileLabel`}
                            variant={'body1'}
                        >
                            Profile
                        </Typography>
                    </div>

                    <Link href={href.href} as={href.as}>
                        <a className={classes.name}>
                            <Typography
                                className={classes.name}
                                data-testid={`PublicProfileCard-${id}-name`}
                                variant={'h5'}
                            >
                                {name || username || id}
                            </Typography>
                        </a>
                    </Link>
                </div>
                <Link href={href.href} as={href.as}>
                    <a>
                        <CardContent className={classes.content}>
                            <TruncateMarkup lines={2}>
                                <Typography
                                    data-testid={`PublicProfileCard-${id}-title`}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {title}
                                </Typography>
                            </TruncateMarkup>
                        </CardContent>
                    </a>
                </Link>
                <CardActions className={classes.statistics}>
                    <Icon data-testid={`PublicProfileCard-${id}-articleIcon`}>
                        insert_drive_file
                    </Icon>
                    <Typography
                        data-testid={`PublicProfileCard-${id}-articleCount`}
                        variant="subtitle1"
                    >
                        {articleCount}
                    </Typography>

                    <Icon
                        data-testid={`PublicProfileCard-${id}-collectionIcon`}
                    >
                        folder
                    </Icon>
                    <Typography
                        data-testid={`PublicProfileCard-${id}-collectionCount`}
                        variant="subtitle1"
                    >
                        {collectionCount}
                    </Typography>
                </CardActions>
            </div>
        </Card>
    )
}

export default PublicProfileCard
