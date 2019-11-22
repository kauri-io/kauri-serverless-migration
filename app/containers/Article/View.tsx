import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react'
import ArticleOutline from '../../components/Markdown/Outline'
import Image from '../../components/Image'
import Avatar from '../../components/Avatar'
import ArticleCard from '../../components/Card/ArticleCard'
import { relatedArticles } from '../../queries/__generated__/relatedArticles'
import MDRenderer from '../../components/Markdown/Renderer'
import { Article } from '../../queries/Fragments/__generated__/Article'
import Hidden from '@material-ui/core/Hidden'
import { ArticleStyles } from './styles'
import VoteWidget from './components/VoteWidget'
import slugify from 'slugify'
import { getArticleURL } from '../../lib/getURLs'
import Comments from './components/ArticleComments'
import ApolloClient from 'apollo-client'
import ScrollIndicator from '../../components/ScrollIndicator'
import { recordViewMutation, markAsreadMutation } from '../../queries/Utils'
import {
    recordView,
    recordViewVariables,
} from '../../queries/__generated__/recordView'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { openModalAction } from '../../components/Modal/Module'
import Schema from '../../lib/with-schema'
import ProfileCard from '../../components/Card/PublicProfileCard'
import CardActions from '../../components/Card/CardComponents/CardActions'
import estimateTime from '../../lib/estimateTime'
import moment from 'moment-mini'
import Toolbar from '../ViewLink/components/Toolbar'

interface IProps {
    id: string
    classes: any
    data: {
        getArticle: Article
    }
    RelatedArticles: relatedArticles
    router: any
    voteAction: any
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
    userId: string
    user: any
    hostName: string
    addCommentAction: (e: string) => void
    client?: ApolloClient<{}>
}

const ArticleComp = ({
    hostName,
    openModalAction,
    voteAction,
    routeChangeAction,
    addCommentAction,
    userId,
    user,
    RelatedArticles: { searchMoreLikeThis },
    client,
    data: {
        getArticle: {
            dateCreated,
            id,
            contributors,
            content,
            description,
            attributes,
            title,
            voteResult,
            comments,
            resourceIdentifier,
            isBookmarked,
            tags,
            datePublished,
        },
    },
}: IProps) => {
    const classes = ArticleStyles({})
    const author = contributors && contributors[0]
    const canonicalUrl = attributes.canonical

    const markAsRead = () => {
        client &&
            client.mutate({
                fetchPolicy: 'no-cache',
                mutation: markAsreadMutation,
                variables: {
                    resourceId: {
                        id: id,
                        type: 'ARTICLE' as any,
                    },
                },
            })
    }

    useEffect(() => {
        client &&
            client.mutate<recordView, recordViewVariables>({
                fetchPolicy: 'no-cache',
                mutation: recordViewMutation,
                variables: {
                    resourceId: {
                        id: id,
                        type: 'ARTICLE' as any,
                    },
                    referrer: window.document.referrer
                        ? window.document.referrer
                        : null,
                },
            })
    }, [])
    return (
        <>
            <Schema
                url={getArticleURL({ id, title })}
                canonicalURL={canonicalUrl}
                id={id}
                title={title}
                description={description}
                dateCreated={dateCreated}
                datePublished={datePublished}
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
                        <div className={classes.floaterLeft}>
                            <VoteWidget
                                isLoggedIn={!!userId}
                                id={String(id)}
                                voteAction={voteAction}
                                voteResult={voteResult}
                                loginFirstToVote={() =>
                                    routeChangeAction(
                                        `/login?r=/${slugify(String(title), {
                                            lower: true,
                                        })}/${id}/a`
                                    )
                                }
                            />
                        </div>
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
                                comments={comments.totalElements}
                                classes={classes}
                                routeChangeAction={routeChangeAction}
                                isBookmarked={isBookmarked}
                                isLoggedIn={!!userId}
                                type="ARTICLE"
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
                                    - Posted{' '}
                                    {moment(datePublished).format('DD MMM YY')}
                                </Typography>
                            </Grid>
                            <Hidden lgUp={true}>
                                <CardActions
                                    type="ARTICLE"
                                    id={id}
                                    isBookmarked={isBookmarked}
                                    isLoggedIn={!!userId}
                                    name={title}
                                    url={getArticleURL({ id, title })}
                                    openModalAction={openModalAction}
                                    hideAddtoCollection={true}
                                    routeChangeAction={routeChangeAction}
                                />
                            </Hidden>
                        </Grid>
                        <Typography color="inherit" variant="h4" component="h1">
                            {title}
                        </Typography>
                    </div>
                    <div className={classes.headerImage}>
                        {attributes.background && (
                            <Image
                                height={160}
                                width="100%"
                                image={attributes.background}
                            />
                        )}
                    </div>
                    <div id="content" className={classes.content}>
                        <MDRenderer markdown={JSON.parse(content).markdown} />
                    </div>
                    {author && (
                        <div className={classes.section}>
                            <Typography variant="h6">Article Author</Typography>
                            <ProfileCard {...author} />
                        </div>
                    )}
                    <div className={classes.section}>
                        <Comments
                            article={resourceIdentifier}
                            addCommentAction={addCommentAction}
                            user={user}
                            comments={comments}
                        />
                    </div>
                    <div className={classes.section}>
                        <Typography variant="h6">Related Articles</Typography>
                        {searchMoreLikeThis &&
                            searchMoreLikeThis.content &&
                            searchMoreLikeThis.content.map(
                                (recommendedArticle, key: number) =>
                                    recommendedArticle &&
                                    recommendedArticle.resource &&
                                    recommendedArticle.resource.__typename ===
                                        'ArticleDTO' ? (
                                        <ArticleCard
                                            key={key}
                                            className={classes.card}
                                            href={getArticleURL(
                                                recommendedArticle.resource
                                            )}
                                            {...recommendedArticle.resource}
                                        />
                                    ) : null
                            )}
                    </div>
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} xs={false} sm={2}>
                        <div className={classes.floaterRight}>
                            {process.browser && (
                                <ArticleOutline
                                    markdown={JSON.parse(content).markdown}
                                    withComments={true}
                                    commentsCount={
                                        (comments && comments.content.length) ||
                                        0
                                    }
                                />
                            )}
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
            <ScrollIndicator markAsRead={() => markAsRead()} />
        </>
    )
}
export default ArticleComp
