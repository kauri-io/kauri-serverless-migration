import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '../Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography, ListItemIcon } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TruncateMarkup from 'react-truncate-markup'
import moment from 'moment'
import Link from 'next/link'
import { getProfileURL, getArticleURL } from '../../lib/getURLs'
import { Article_author } from '../../queries/Fragments/__generated__/Article'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { useState } from 'react'
import ShareDialog from './ShareDialog'

export const ArticleCardStyles = makeStyles((theme: Theme) => ({
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
            lineHeight: '27 !important',
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
}))

interface IProps {
    id: string
    version: number
    title: string | null
    author: {
        name: string | null
        username: string | null
        id: string
        avatar: string | null
    } | null
    attributes: {
        background?: string
    } | null
    datePublished: string | null
    description: string | null
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

const ArticleCard: React.FC<IProps> = ({
    author,
    title,
    attributes,
    datePublished,
    description,
    className,
    href,
    id,
    version,
    comments,
    voteResult,
    isLoggedIn = false,
    addArticleToCollectionAction,
}) => {
    const classes = ArticleCardStyles({})
    const authorHref = getProfileURL(author as Article_author) // TODO update as contributors[0]
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    const [shareDialogOpen, setShareDialogOpen] = useState<boolean>(false)

    function handleClickShareDialogOpen() {
        setShareDialogOpen(true)
    }

    return (
        <Card
            key={id}
            className={`${classes.card} ${className ? className : ''}`}
        >
            <div className={classes.cardActualContent}>
                <div className={classes.header}>
                    <Link href={href.href} as={href.as}>
                        <a className={classes.title}>
                            <TruncateMarkup lines={2}>
                                <Typography
                                    data-testid={`ArticleCard-${id}-title`}
                                    variant={'h5'}
                                >
                                    {title}
                                </Typography>
                            </TruncateMarkup>
                        </a>
                    </Link>
                    <Link href={href.href} as={href.as}>
                        <CardMedia
                            data-testid={`ArticleCard-${id}-image`}
                            className={classes.mobileMedia}
                            image={
                                (attributes && attributes.background) ||
                                'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU'
                            }
                            title={String(title)}
                        />
                    </Link>
                </div>
                <Link href={href.href} as={href.as}>
                    <a>
                        <CardContent
                            data-testid={`ArticleCard-${id}-description`}
                            className={classes.content}
                        >
                            <TruncateMarkup lines={2}>
                                <Typography
                                    data-testid={`ArticleCard-${id}-description`}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {description}
                                </Typography>
                            </TruncateMarkup>
                        </CardContent>
                    </a>
                </Link>
                <CardActions className={classes.cardActions}>
                    <div className={classes.user}>
                        <Link href={authorHref.href} as={authorHref.as}>
                            <a>
                                <Avatar
                                    aria-label={String(
                                        author && author.username
                                    )}
                                    data-testid={`ArticleCard-${id}-author`}
                                    id={String(author && author.id)}
                                    name={author && author.name}
                                    username={author && author.username}
                                    avatar={author && author.avatar}
                                    withName={true}
                                />
                            </a>
                        </Link>
                        <Typography
                            data-testid={`ArticleCard-${id}-date`}
                            variant="body2"
                        >
                            {moment(String(datePublished)).format('DD MMM YY')}
                        </Typography>
                    </div>

                    <div className={classes.statistics}>
                        <Icon data-testid={`ArticleCard-${id}-commentIcon`}>
                            comment
                        </Icon>
                        <Typography
                            data-testid={`ArticleCard-${id}-commentCount`}
                            variant="subtitle1"
                        >
                            {comments && comments.totalElements}
                        </Typography>

                        <Icon data-testid={`ArticleCard-${id}-upvoteIcon`}>
                            arrow_drop_up
                        </Icon>
                        <Typography
                            data-testid={`ArticleCard-${id}-upvoteCount`}
                            variant="subtitle1"
                        >
                            {voteResult && voteResult.sum}
                        </Typography>

                        <IconButton
                            onClick={handleClick}
                            data-testid={`ArticleCard-${id}-moreOptionsButton`}
                            aria-label="simple-menu"
                            aria-haspopup="true"
                        >
                            <Icon>more_vert</Icon>
                        </IconButton>
                        <ShareDialog
                            href={
                                getArticleURL({
                                    title: String(title),
                                    id,
                                    version: Number(version),
                                }).href
                            }
                            name={title}
                            id={id}
                            open={shareDialogOpen}
                            handleClose={() => {}}
                        ></ShareDialog>

                        <Menu
                            id="simple-menu"
                            data-testid={`ArticleCard-${id}-moreOptionsMenu`}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClickShareDialogOpen}>
                                <ListItemIcon>
                                    <Icon>share</Icon>
                                </ListItemIcon>
                                <Typography variant="inherit">Share</Typography>
                            </MenuItem>
                            {isLoggedIn && (
                                <MenuItem
                                    data-testid={`ArticleCard-${id}-addToCollectionButton`}
                                    onClick={() => {
                                        addArticleToCollectionAction &&
                                            addArticleToCollectionAction()
                                    }}
                                >
                                    <ListItemIcon>
                                        <Icon>folder</Icon>
                                    </ListItemIcon>
                                    <Typography variant="inherit">
                                        Add To Collection
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </div>
                </CardActions>
            </div>
            <Link href={href.href} as={href.as}>
                <a>
                    <CardMedia
                        data-testid={`ArticleCard-${id}-image`}
                        className={classes.desktopMedia}
                        image={
                            (attributes && attributes.background) ||
                            'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU'
                        }
                        title={String(title)}
                    />
                </a>
            </Link>
        </Card>
    )
}

export default ArticleCard
