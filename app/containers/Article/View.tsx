import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react'
import ArticleOutline from '../../components/Markdown/Outline'
import Image from '../../components/Image'
import Avatar from '../../components/Avatar'
import ArticleActions from './components/ArticleActions'
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
import Head from 'next/head'
import ApolloClient from 'apollo-client'
import ScrollIndicator from '../../components/ScrollIndicator'
import { recordViewMutation, markAsreadMutation } from '../../queries/Utils'
import {
    recordView,
    recordViewVariables,
} from '../../queries/__generated__/recordView'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { openModalAction } from '../../components/Modal/Module'

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
    // closeModalAction: () => void;
    hostName: string
    addCommentAction: (e: string) => void
    client?: ApolloClient<{}>
}

const ArticleComp = ({
    openModalAction,
    // closeModalAction,
    hostName,
    voteAction,
    routeChangeAction,
    addCommentAction,
    userId,
    user,
    RelatedArticles: { searchMoreLikeThis },
    client,
    data: {
        getArticle: {
            id,
            contributors,
            content,
            attributes,
            title,
            voteResult,
            version,
            comments,
            resourceIdentifier,
            isBookmarked,
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
            {canonicalUrl && canonicalUrl.length > 0 && (
                <Head>
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
            )}
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
                        <Typography color="inherit" variant="h4" component="h1">
                            {title}
                        </Typography>
                        <Grid
                            className={classes.controls}
                            container={true}
                            justify="space-between"
                        >
                            <Grid item={true} sm={6}>
                                {author && (
                                    <Avatar
                                        avatar={author.avatar}
                                        username={author.username}
                                        id={author.id}
                                        withName={true}
                                    />
                                )}
                            </Grid>
                            <ArticleActions
                                article={{
                                    id,
                                    title,
                                    version,
                                    isBookmarked,
                                }}
                                userId={userId}
                                id={String(id)}
                                version={Number(version)}
                                openModalAction={openModalAction}
                                routeChangeAction={routeChangeAction}
                                title={String(title)}
                                hostName={hostName}
                            />
                        </Grid>
                    </div>
                    {attributes.background && (
                        <Image
                            height={160}
                            width="100%"
                            image={attributes.background}
                        />
                    )}
                    <div id="content" className={classes.content}>
                        <MDRenderer markdown={JSON.parse(content).markdown} />
                    </div>
                    <Comments
                        article={resourceIdentifier}
                        addCommentAction={addCommentAction}
                        user={user}
                        comments={comments}
                    />
                    <Grid
                        className={classes.related}
                        spacing={3}
                        container={true}
                    >
                        {searchMoreLikeThis &&
                            searchMoreLikeThis.content &&
                            searchMoreLikeThis.content.map(
                                (recommendedArticle, key: number) =>
                                    recommendedArticle &&
                                    recommendedArticle.resource &&
                                    recommendedArticle.resource.__typename ===
                                        'ArticleDTO' ? (
                                        <Grid item={true} sm={12} key={key}>
                                            <ArticleCard
                                                className={classes.card}
                                                href={getArticleURL(
                                                    recommendedArticle.resource
                                                )}
                                                {...recommendedArticle.resource}
                                            />
                                        </Grid>
                                    ) : null
                            )}
                    </Grid>
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
