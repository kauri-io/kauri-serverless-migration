import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Link from 'next/link'
import { getProfileURL } from '../../lib/getURLs'
import { Article_author } from '../../queries/Fragments/__generated__/Article'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import {
    searchApprovedArticles_searchArticles_content_comments,
    searchApprovedArticles_searchArticles_content_voteResult,
} from '../../queries/__generated__/searchApprovedArticles'
import { useState } from 'react'

export const ArticleCardStyles = makeStyles((theme: Theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
        textTransform: 'uppercase',
    },
    card: {},
    content: {
        cursor: 'pointer',
        height: '100%',
    },
    header: {
        cursor: 'pointer',
    },
    media: {
        cursor: 'pointer',
        height: 160,
    },
}))

interface IProps {
    id: string
    version: number
    title: string | null
    author: {
        name: string | null
        username: string | null
        id: string | null
        avatar: string | null
    } | null
    attributes: {
        background?: string
    }
    datePublished: string | null
    description: string | null
    className?: string
    href: {
        as: string
        href: string
    }
    isLoggedIn: boolean
    comments: searchApprovedArticles_searchArticles_content_comments | null
    voteResult: searchApprovedArticles_searchArticles_content_voteResult | null
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
    comments,
    voteResult,
    isLoggedIn,
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

    return (
        <Card
            key={id}
            className={`${classes.card} ${className ? className : ''}`}
        >
            <Link href={authorHref.href} as={authorHref.as}>
                <a>
                    <CardHeader
                        className={classes.header}
                        avatar={
                            author && author.avatar ? (
                                <Avatar src={author && author.avatar} />
                            ) : (
                                <Avatar
                                    data-testid={`ArticleCard-${id}-avatar`}
                                    className={classes.avatar}
                                    aria-label={String(
                                        author && author.username
                                    )}
                                >
                                    {author &&
                                        author.username &&
                                        author.username.charAt(0)}
                                </Avatar>
                            )
                        }
                        title={
                            <Typography
                                data-testid={`ArticleCard-${id}-author`}
                                variant="h6"
                            >
                                {author &&
                                    (author.name ||
                                        author.username ||
                                        author.id)}
                            </Typography>
                        }
                        subheader={
                            <Typography
                                data-testid={`ArticleCard-${id}-date`}
                                variant="subtitle1"
                            >
                                {moment(String(datePublished)).fromNow()}
                            </Typography>
                        }
                    />
                </a>
            </Link>
            <Link href={href.href} as={href.as}>
                <a>
                    <CardMedia
                        data-testid={`ArticleCard-${id}-image`}
                        className={classes.media}
                        image={attributes.background || 'default image prop'}
                        title={String(title)}
                    />
                    <CardContent
                        data-testid={`ArticleCard-${id}-description`}
                        className={classes.content}
                    >
                        <Typography
                            data-testid={`ArticleCard-${id}-title`}
                            variant="h6"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {String(
                                description && description.length < 160
                                    ? description
                                    : description &&
                                          `${description.substring(0, 157)}...`
                            )}
                        </Typography>
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
                            aria-label="more options"
                        >
                            <Icon>more_vert</Icon>
                        </IconButton>
                        <Menu
                            id="more-options-menu"
                            data-testid={`ArticleCard-${id}-moreOptionsMenu`}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Share</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                            {isLoggedIn && (
                                <MenuItem
                                    data-testid={`ArticleCard-${id}-addToCollectionButton`}
                                    onClick={handleClose}
                                >
                                    Add To Collection
                                </MenuItem>
                            )}
                        </Menu>
                    </CardContent>
                </a>
            </Link>
        </Card>
    )
}

export default ArticleCard
