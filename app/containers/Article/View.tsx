import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ArticleOutline from './components/ArticleOutline'
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

interface IProps {
    id: string
    classes: any
    data: {
        getArticle: Article
    }
    RelatedArticles: relatedArticles
    router: any
    voteAction: any
    routeChangeAction: (route: string) => void
    userId: string
    openModalAction: (children: any) => void
    // closeModalAction: () => void;
    hostName: string
    addCommentAction: (e: string) => void
}

const ArticleComp = ({
    openModalAction,
    // closeModalAction,
    hostName,
    voteAction,
    routeChangeAction,
    addCommentAction,
    userId,
    RelatedArticles: { searchMoreLikeThis },
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
        },
    },
}: IProps) => {
    const classes = ArticleStyles({})
    const author = contributors && contributors[0]
    return (
        <>
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
                        userId={userId}
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
                            <ArticleOutline />
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    )
}
export default ArticleComp
