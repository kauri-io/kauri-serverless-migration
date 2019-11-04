import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '../Avatar'
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'
import {
    Typography, Grid,
    // ListItemIcon
} from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import moment from 'moment-mini'
import Link from 'next/link'
// import IconButton from '@material-ui/core/IconButton'
// import Icon from '@material-ui/core/Icon'
// import { useState } from 'react'
// import ShareDialog from './ShareDialog'
import Image from '../Image'
import OpenNewIcon from '@material-ui/icons/OpenInNew'
import TruncateMarkup from 'react-truncate-markup'

export const LinkCardStyles = makeStyles((theme: Theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
        textTransform: 'uppercase',
        width: 24,
        height: 24,
    },
    card: {
        display: 'flex',
        '& > *:last-child': {
            alignSelf: 'center',
        },
        height: 184,
        width: '100%',
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
    author: {
        cursor: 'pointer',
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    content: {
        textAlign: 'left',
        cursor: 'pointer',
        height: '100%',
        padding: '0px !important',
        paddingLeft: `${theme.spacing(2)}px !important`,
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    header: {
        display: 'flex',
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        cursor: 'pointer',
    },
    mobileMedia: {
        marginLeft: 'auto',
        cursor: 'pointer',
        borderRadius: '4px',
        height: 152,
        width: 152,
        [theme.breakpoints.only('xs')]: {
            alignSelf: 'center',
            width: 76,
            height: 76,
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none !important',
        },
    },
    desktopMedia: {
        marginLeft: 'auto',
        cursor: 'pointer',
        borderRadius: '4px',
        height: 152,
        width: 152,
        marginRight: theme.spacing(2),
        [theme.breakpoints.only('xs')]: {
            display: 'none !important',
        },
    },
    menuButton: {
        padding: 0,
    },
    title: {
        [theme.breakpoints.only('xs')]: { maxWidth: `calc(100% - 100px)` },
    },
    cardActions: {
        display: 'flex',
        marginTop: 'auto',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        maxHeight: 83,
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(1),
        },
        '& > *': {
            lineHeight: '27px !important',
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
    menuItem: {
        padding: theme.spacing(0, 2),
    },
    openInBrowserIcon: {
        height: 10,
    },
    url: {
        maxWidth: '90%'
    }
}))

interface IProps {
    owner: any
    id: string
    version: number
    linkTitle: {
        value: string
        isEditable: boolean
    } | null
    author: {
        name: string | null
        username: string | null
        id: string
        avatar: string | null
    } | null
    linkAttributes: {
        background_image?: {
            value: string
            isEditable: boolean
        }
    } | null
    dateCreated: string | null
    linkDescription: {
        value: string
        isEditable: boolean
    } | null
    url: {
        value: string
        isEditable: boolean
    }
    className?: string
    href: {
        as: string
        href: string
    }
    isLoggedIn?: boolean
    comments: {
        totalElements: any
    } | null
    voteResult: {
        sum: number
    } | null
    addArticleToCollectionAction?: () => void
}

const LinkCard: React.FC<IProps> = ({
    owner,
    linkTitle,
    linkAttributes,
    dateCreated,
    linkDescription,
    className,
    href,
    id,
    url,
}) => {
    const classes = LinkCardStyles({})

    return (
        <Card
            key={id}
            className={`${classes.card} ${className ? className : ''}`}
        >
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <Link href={href.href} as={href.as}>
                        <a
                            data-testid={`LinkCard-${id}-title`}
                            className={classes.title}
                        >
                            {linkTitle && (
                                <Typography variant={'h5'}>
                                    {linkTitle.value}
                                </Typography>
                            )}
                        </a>
                    </Link>
                    <Link href={href.href} as={href.as}>
                        {linkAttributes && linkAttributes.background_image ? (
                            <Image
                                className={classes.mobileMedia}
                                data-testid={`LinkCard-${id}-image`}
                                width={76}
                                height={76}
                                image={linkAttributes.background_image.value}
                                borderRadius="4px"
                            />
                        ) : (
                                <img
                                    className={classes.mobileMedia}
                                    data-testid={`LinkCard-${id}-image`}
                                    src="/static/images/DefaultArticle.svg"
                                />
                            )}
                    </Link>
                </div>
                <Link href={href.href} as={href.as}>
                    <a>
                        <CardContent
                            data-testid={`LinkCard-${id}-description`}
                            className={classes.content}
                        >
                            {linkDescription && (
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        data-testid={`LinkCard-${id}-linkDescription`}
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {linkDescription.value}
                                    </Typography>
                                </TruncateMarkup>
                            )}
                            <Grid container={true} justify='flex-start' alignItems='center'>
                                <TruncateMarkup lines={1}>
                                    <Typography className={classes.url} variant="caption">
                                        {url.value}
                                    </Typography>
                                </TruncateMarkup>
                                <OpenNewIcon
                                    className={classes.openInBrowserIcon}
                                />
                            </Grid>
                        </CardContent>
                    </a>
                </Link>
                <CardActions className={classes.cardActions}>
                    <div className={classes.user}>
                        <Avatar
                            aria-label={String(owner && owner.username)}
                            data-testid={`ArticleCard-${id}-user`}
                            id={String(owner && owner.id)}
                            name={owner && owner.name}
                            username={owner && owner.username}
                            avatar={owner && owner.avatar}
                            withName={true}
                        />
                        {dateCreated && (
                            <Typography
                                data-testid={`ArticleCard-${id}-date`}
                                variant="body2"
                            >
                                {moment(String(dateCreated)).format(
                                    'DD MMM YY'
                                )}
                            </Typography>
                        )}
                    </div>
                </CardActions>
            </div>

            <Link href={href.href} as={href.as}>
                <a>
                    {linkAttributes && linkAttributes.background_image ? (
                        <Image
                            className={classes.desktopMedia}
                            data-testid={`LinkCard-${id}-image`}
                            width={152}
                            height={152}
                            image={linkAttributes.background_image.value}
                            borderRadius="4px"
                        />
                    ) : (
                            <img
                                className={classes.desktopMedia}
                                data-testid={`LinkCard-${id}-image`}
                                src="/static/images/DefaultArticle.svg"
                            />
                        )}
                </a>
            </Link>
        </Card>
    )
}

export default LinkCard
