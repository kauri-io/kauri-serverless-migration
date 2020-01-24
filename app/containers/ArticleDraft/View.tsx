import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ArticleOutline from '../../components/Markdown/Outline'
import Image from '../../components/Image'
import Avatar from '../../components/Avatar'
import MDRenderer from '../../components/Markdown/Renderer'
import { Article } from '../../queries/Fragments/__generated__/Article'
import Hidden from '@material-ui/core/Hidden'
import { ArticleStyles } from '../Article/styles'
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
import { curateCommunityResourcesAction } from '../Community/Module'

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
    curateCommunityResourcesAction: typeof curateCommunityResourcesAction
    deleteDraftArticleAction: ({
        id,
        version,
    }: {
        id: string
        version: number
    }) => void
    userId: string
    user: any
    hostName: string
    communities: any
}

const ArticleComp = ({
    hostName,
    openModalAction,
    closeModalAction,
    routeChangeAction,
    deleteDraftArticleAction,
    userId,
    communities,
    curateCommunityResourcesAction,
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
            author,
            ownerId,
        },
    },
}: IProps) => {
    const classes = ArticleStyles({})
    const originalAuthor = contributors && contributors[0]
    const canonicalUrl = attributes.canonical

    const url = getArticleURL({ id, title }, 'draft')

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
                author={originalAuthor}
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
                                deleteDraftArticleAction={
                                    deleteDraftArticleAction
                                }
                                isBookmarked={false}
                                isLoggedIn={!!userId}
                                type={ResourceTypeInput.ARTICLE}
                                isAuthor={author && userId === author.id}
                                version={version}
                                communities={communities}
                                userId={userId}
                                isOwner={ownerId && ownerId.id === userId} //TODO should check if community admin/curator too
                                curateCommunityResourcesAction={
                                    curateCommunityResourcesAction
                                }
                            />
                        </Hidden>
                        <Grid
                            direction="row"
                            container={true}
                            justify="space-between"
                        >
                            <Grid className={classes.nameAndDate}>
                                {originalAuthor && (
                                    <Avatar
                                        avatar={originalAuthor.avatar}
                                        username={originalAuthor.username}
                                        id={originalAuthor.id}
                                        withName={true}
                                    />
                                )}
                                <Typography gutterBottom={true}>
                                    {content && estimateTime(content)} min read
                                    - Drafted{' '}
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
export default ArticleComp
