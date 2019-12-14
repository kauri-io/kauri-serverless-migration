import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ArticleOutline from '../../components/Markdown/Outline'
import Image from '../../components/Image'
import Avatar from '../../components/Avatar'
import MDRenderer from '../../components/Markdown/Renderer'
import { Article } from '../../queries/Fragments/__generated__/Article'
import Hidden from '@material-ui/core/Hidden'
import { ArticleStyles } from './styles'
import { getArticleURL } from '../../lib/getURLs'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import Schema from '../../lib/with-schema'
import estimateTime from '../../lib/estimateTime'
import moment from 'moment-mini'
import Toolbar from '../ViewLink/components/Toolbar'
import { Chip } from '@material-ui/core'
import Link from 'next/link'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

interface IProps {
    id: string
    classes: any
    data: {
        getArticle: Article
    }
    router: any
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    userId: string
    user: any
    hostName: string
}

const ArticleSubmittedUpdate = ({
    hostName,
    openModalAction,
    closeModalAction,
    routeChangeAction,
    userId,
    data: {
        getArticle: {
            dateCreated,
            id,
            contributors,
            content,
            description,
            attributes,
            title,
            tags,
            version,
        },
    },
}: IProps) => {
    const classes = ArticleStyles({})
    const author = contributors && contributors[0]
    const canonicalUrl = attributes.canonical

    const url = getArticleURL({ title, id, version }, 'submitted-update')

    return (
        <>
            <Schema
                url={url}
                canonicalURL={canonicalUrl}
                id={id}
                title={title}
                description={description}
                dateCreated={dateCreated}
                datePublished={dateCreated}
                tags={tags}
                attributes={attributes}
                author={author}
                hostName={hostName}
            />
            <Grid
                className={classes.root}
                container={true}
                justify="center"
                spacing={3}
            >
                <Hidden smDown={true}>
                    <Grid
                        item={true}
                        sm={2}
                        className={classes.floaterContainer}
                    >
                        <div className={classes.floaterLeft}></div>
                    </Grid>
                </Hidden>
                <Grid
                    className={classes.centralColumn}
                    item={true}
                    xs={12}
                    sm={8}
                    md={8}
                >
                    <div className={classes.header}>
                        <Hidden mdDown={true}>
                            <Toolbar
                                id={id}
                                openModalAction={openModalAction}
                                closeModalAction={closeModalAction}
                                classes={classes}
                                routeChangeAction={routeChangeAction}
                                isBookmarked={false}
                                isLoggedIn={!!userId}
                                type={ResourceTypeInput.ARTICLE}
                                isAuthor={author && userId === author.id}
                                version={version}
                            />
                        </Hidden>
                        <Grid
                            direction="row"
                            container={true}
                            justify="space-between"
                        >
                            <Grid className={classes.nameAndDate}>
                                {author && (
                                    <Avatar
                                        avatar={author.avatar}
                                        username={author.username}
                                        id={author.id}
                                        withName={true}
                                    />
                                )}
                                <Typography gutterBottom={true}>
                                    {content && estimateTime(content)} min read
                                    - Submitted{' '}
                                    {moment(dateCreated).format('DD MMM YY')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="inherit" variant="h4" component="h1">
                            {title}
                        </Typography>
                    </div>
                    <div className={classes.headerImage}>
                        {attributes.background && (
                            <Image
                                height={360}
                                width={808}
                                image={attributes.background}
                            />
                        )}
                    </div>
                    <div id="content" className={classes.content}>
                        <MDRenderer markdown={JSON.parse(content).markdown} />
                        <div className={classes.tags}>
                            {tags &&
                                tags.map((text, key) => (
                                    <Link
                                        key={key}
                                        href={`/search-results?q=${text}`}
                                    >
                                        <a>
                                            <Chip
                                                className={classes.tag}
                                                variant="outlined"
                                                label={text}
                                            />
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} xs={false} sm={2}>
                        <div className={classes.floaterRight}>
                            {process.browser && (
                                <ArticleOutline
                                    markdown={JSON.parse(content).markdown}
                                    withComments={false}
                                    commentsCount={0}
                                />
                            )}
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    )
}
export default ArticleSubmittedUpdate
