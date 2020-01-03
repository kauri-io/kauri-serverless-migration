import Card from '@material-ui/core/Card'
import Image from '../Image'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography, Hidden } from '@material-ui/core'
import anchorme from 'anchorme'
import ArticleIcon from '@material-ui/icons/InsertDriveFile'
import CollectionIcon from '@material-ui/icons/Folder'
import CommunityIcon from '@material-ui/icons/GroupWork'
import { getProfileURL } from '../../lib/getURLs'
import Link from 'next/link'
import { Article_contributors } from '../../queries/Fragments/__generated__/Article'

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        padding: theme.spacing(2),
        width: '100%',
        maxWidth: 808,
        height: 122,
    },
    link: {
        width: '100%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& svg': {
            margin: theme.spacing(1, 1, 0, 1),
        },
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        height: 90,
        width: '100%',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 600,
    },
    avatar: {
        marginRight: theme.spacing(2),
        flexShrink: 0,
        [theme.breakpoints.down('xs')]: {
            height: 80,
            width: 80,
        },
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    counter: {
        marginTop: theme.spacing(1),
    },
}))

const getURL = (string, type) => {
    const split = string.split('/')
    switch (type) {
        case 'website':
            const url = anchorme(string, { list: true })[0]
            return `${url && `${url.protocol}${url.encoded}`}`
        case 'twitter':
            return `https://www.twitter.com/${split[split.length - 1]}`
        case 'github':
            return `https://www.github.com/${split[split.length - 1]}`
        default:
            return ''
    }
}

export default ({
    id,
    name,
    username,
    avatar,
    title,
    social,
    articles,
    links,
    collections,
    communities,
}: Article_contributors) => {
    const classes = useStyles({})
    const url = getProfileURL({ id, username })

    return (
        <Link href={url.href} as={url.as}>
            <a className={classes.link}>
                <Card className={classes.card}>
                    <div className={classes.row}>
                        {avatar && (
                            <Image
                                className={classes.avatar}
                                borderRadius="4px"
                                height={90}
                                width={90}
                                image={avatar}
                            />
                        )}
                        <div className={classes.column}>
                            <Typography
                                className={classes.name}
                                variant="body2"
                            >
                                {name || username}
                            </Typography>
                            <Typography variant="body2">{title}</Typography>
                            <div className={classes.bottom}>
                                <div
                                    onClick={e => {
                                        e.stopPropagation()
                                    }}
                                >
                                    {social && social.github && (
                                        <a
                                            href={getURL(
                                                social.github,
                                                'github'
                                            )}
                                            target="_blank"
                                        >
                                            <svg
                                                className="MuiSvgIcon-root"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                role="presentation"
                                            >
                                                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {social && social.twitter && (
                                        <a
                                            href={getURL(
                                                social.twitter,
                                                'twitter'
                                            )}
                                            target="_blank"
                                        >
                                            <svg
                                                className="MuiSvgIcon-root"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                role="presentation"
                                            >
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <Hidden implementation="css" smDown={true}>
                                    <div className={classes.row}>
                                        <ArticleIcon />
                                        <Typography className={classes.counter}>
                                            {articles &&
                                                articles.totalElements +
                                                    links.totalElements}
                                        </Typography>
                                        <CollectionIcon />
                                        <Typography className={classes.counter}>
                                            {collections &&
                                                collections.totalElements}
                                        </Typography>
                                        <CommunityIcon />
                                        <Typography className={classes.counter}>
                                            {communities && communities.length}
                                        </Typography>
                                    </div>
                                </Hidden>
                            </div>
                        </div>
                    </div>
                </Card>
            </a>
        </Link>
    )
}
