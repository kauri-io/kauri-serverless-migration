import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { Typography } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Link from 'next/link'

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
}

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

const ArticleCard: React.FC<IProps> = ({
    author,
    title,
    attributes,
    datePublished,
    description,
    className,
    href,
    id,
}) => {
    const classes = ArticleCardStyles({})
    const authorHref = {
        href: `/public-profile?user_id=${author && author.id}`,
        as: `/public-profile/${author && author.id}`,
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
                            author &&
                            (author.name || author.username || author.id)
                        }
                        subheader={moment(String(datePublished)).fromNow()}
                    />
                </a>
            </Link>
            <Link href={href.href} as={href.as}>
                <a>
                    {attributes && attributes.background && (
                        <CardMedia
                            className={classes.media}
                            image={attributes.background}
                            title={String(title)}
                        />
                    )}
                    <CardContent className={classes.content}>
                        <Typography variant="h6">{title}</Typography>
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
                    </CardContent>
                </a>
            </Link>
        </Card>
    )
}

export default ArticleCard
