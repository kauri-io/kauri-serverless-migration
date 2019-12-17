import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
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
// import CardActions from '../../components/Card/CardComponents/CardActions'
import estimateTime from '../../lib/estimateTime'
import moment from 'moment-mini'
import Toolbar from '../ViewLink/components/Toolbar'
import ShareIcon from '@material-ui/icons/Share'
import ShareDialog from '../../components/Card/ShareDialog'
import ShareWidget from './components/ShareWidget'
import { Chip } from '@material-ui/core'
import Link from 'next/link'
import CheckpointArticles from '../CheckpointArticles'
import config from '../../config'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

const IPFSIcon = () => (
    <svg width="12px" height="14px" viewBox="0 0 12 14" version="1.1">
        <desc>Created with Sketch.</desc>
        <defs />
        <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="1.0.1-Article"
                transform="translate(-559.000000, -1118.000000)"
                fillRule="nonzero"
            >
                <g id="Group-22" transform="translate(559.000000, 1117.000000)">
                    <g id="Group-11" transform="translate(0.000000, 1.000000)">
                        <polygon
                            id="Shape"
                            fill="#469EA2"
                            points="0 10.3313609 5.96449704 13.7751479 11.9289941 10.3313609 11.9289941 3.44378698 5.96449704 0 7.5679108e-16 3.44378698"
                        />
                        <path
                            d="M5.29704142,0.852071006 L0.965680473,3.35147929 C0.972780085,3.42942447 0.972780085,3.50785364 0.965680473,3.58579882 L5.28994083,6.0852071 C5.65494443,5.81534416 6.1533396,5.81534416 6.5183432,6.0852071 L10.8426036,3.58579882 C10.8355039,3.50785364 10.8355039,3.42942447 10.8426036,3.35147929 L6.52544379,0.852071006 C6.16044019,1.12193395 5.66204502,1.12193395 5.29704142,0.852071006 Z M11.2615385,4.27455621 L6.93017751,6.80236686 C6.97832719,7.2520848 6.73195556,7.68180276 6.31952663,7.86745562 L6.32662722,12.8378698 C6.39665318,12.8687558 6.46328267,12.9068298 6.52544379,12.9514793 L10.8497041,10.452071 C10.8015545,10.0023531 11.0479261,9.57263511 11.460355,9.38698225 L11.460355,4.38816568 C11.3911327,4.35570934 11.3246445,4.31771604 11.2615385,4.27455621 Z M0.553846154,4.30295858 C0.491685041,4.34760806 0.425055549,4.38568206 0.355029586,4.41656805 L0.355029586,9.41538462 C0.773127728,9.59472991 1.02213771,10.0290497 0.965680473,10.4804734 L5.28994083,12.9798817 C5.35210194,12.9352322 5.41873143,12.8971582 5.4887574,12.8662722 L5.4887574,7.86745562 C5.07065925,7.68811032 4.82164927,7.25379058 4.87810651,6.80236686 L0.553846154,4.30295858 Z"
                            id="Shape"
                            fill="#6ACAD1"
                        />
                        <path
                            d="M5.96449704,0.802366864 L11.2970414,3.88402367 L11.2970414,10.0402367 L5.96449704,13.1218935 L0.631952663,10.0402367 L0.631952663,3.87692308 L5.96449704,0.802366864 Z M5.96449704,0.0710059172 L0,3.5147929 L0,10.4023669 L5.96449704,13.8461538 L11.9289941,10.4023669 L11.9289941,3.5147929 L5.96449704,0.0710059172 Z"
                            id="Shape"
                            fill="#469EA2"
                        />
                        <path
                            d="M6.00710059,8.11597633 L5.92189349,8.11597633 C5.62600069,8.11673309 5.34200884,7.99952507 5.13278035,7.79029657 C4.92355186,7.58106808 4.80634383,7.29707624 4.80710059,7.00118343 L4.80710059,6.91597633 C4.80634383,6.62008353 4.92355186,6.33609168 5.13278035,6.12686319 C5.34200884,5.9176347 5.62600069,5.80042667 5.92189349,5.80118343 L6.00710059,5.80118343 C6.3029934,5.80042667 6.58698524,5.9176347 6.79621373,6.12686319 C7.00544223,6.33609168 7.12265025,6.62008353 7.12189349,6.91597633 L7.12189349,7.00118343 C7.12265025,7.29707624 7.00544223,7.58106808 6.79621373,7.79029657 C6.58698524,7.99952507 6.3029934,8.11673309 6.00710059,8.11597633 Z M6.00710059,12.695858 L5.92189349,12.695858 C5.51857503,12.6946436 5.14626077,12.9120534 4.94911243,13.2639053 L5.96449704,13.8461538 L6.97988166,13.2639053 C6.78273331,12.9120534 6.41041905,12.6946436 6.00710059,12.695858 Z M11.9360947,9.25206736 L11.8934911,9.25207101 C11.5975983,9.25131424 11.3136065,9.36852227 11.104378,9.57775076 C10.8951495,9.78697926 10.7779415,10.0709711 10.7786982,10.3668639 L10.7786982,10.452071 C10.7776771,10.6413211 10.826667,10.8274828 10.9207101,10.991716 L11.9360947,10.4023669 L11.9360947,9.25206736 Z M10.9207101,2.93254438 C10.8274994,3.09711736 10.7785689,3.28305323 10.7786982,3.47218935 L10.7786982,3.55739645 C10.7779415,3.85328926 10.8951495,4.1372811 11.104378,4.34650959 C11.3136065,4.55573808 11.5975983,4.67294611 11.8934911,4.67218935 L11.9360947,4.67219299 L11.9360947,3.5147929 L10.9207101,2.93254438 Z M5.96449704,0.0710059172 L4.94911243,0.653254438 C5.14530944,1.00696996 5.51741124,1.22697175 5.92189349,1.22840237 L6.00710059,1.22840237 C6.41041905,1.22961675 6.78273331,1.01220696 6.97988166,0.66035503 L5.96449704,0.0710059172 Z M1.01538462,2.92544379 L3.55271368e-15,3.5147929 L3.55271368e-15,4.67219299 L0.0426035503,4.67218935 C0.338496356,4.67294611 0.622488198,4.55573808 0.831716692,4.34650959 C1.04094519,4.1372811 1.15815321,3.85328926 1.15739645,3.55739645 L1.15739645,3.47218935 C1.15499059,3.28113548 1.10625899,3.09351882 1.01538462,2.92544379 Z M0.0426035503,9.25207101 L0,9.25206736 L0,10.4023669 L1.01538462,10.991716 C1.10859525,10.827143 1.15752574,10.6412071 1.15739645,10.452071 L1.15739645,10.3668639 C1.15815321,10.0709711 1.04094519,9.78697926 0.831716692,9.57775076 C0.622488198,9.36852227 0.338496356,9.25131424 0.0426035503,9.25207101 Z"
                            id="Shape"
                            fill="#469EA2"
                        />
                        <polygon
                            id="Shape"
                            fillOpacity="0.15"
                            fill="#083B54"
                            points="5.96449704 13.8887574 5.96449704 6.99408284 0 3.55029586 0 10.4449704"
                        />
                        <polygon
                            id="Shape"
                            fillOpacity="0.05"
                            fill="#083B54"
                            points="11.9289941 10.3668639 11.9289941 3.47928994 5.96449704 6.92307692 5.96449704 13.8177515"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

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
            version,
            contentHash,
            checkpoint,
        },
    },
}: IProps) => {
    attributes = attributes !== null ? attributes : {}

    const classes = ArticleStyles({})
    const author = contributors && contributors[0]
    const canonicalUrl = attributes.canonical

    const [shareDialogOpen, setShareDialogOpen] = useState(false)

    const markAsRead = () => {
        userId &&
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

    const url = getArticleURL({ title, id })

    return (
        <>
            <Schema
                url={url}
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
                                resourceType="ARTICLE"
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
                            <ShareWidget href={url.as} name={title} />
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
                                type={ResourceTypeInput.ARTICLE}
                                isAuthor={author && userId === author.id}
                                version={version}
                            />
                        </Hidden>
                        <Grid
                            direction="row"
                            container={true}
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid className={classes.nameAndDate}>
                                {author && (
                                    <Avatar
                                        size={40}
                                        avatar={author.avatar}
                                        username={author.username}
                                        id={author.id}
                                        withName={true}
                                    />
                                )}
                                <Typography gutterBottom={true} variant="body2">
                                    {content && estimateTime(content)} min read
                                    - Posted{' '}
                                    {moment(datePublished).format('DD MMM YY')}
                                </Typography>
                            </Grid>
                            <Hidden lgUp={true}>
                                <ShareIcon
                                    onClick={() => setShareDialogOpen(true)}
                                />
                                <ShareDialog
                                    href={url.as}
                                    name={title}
                                    open={shareDialogOpen}
                                    handleClose={() =>
                                        setShareDialogOpen(false)
                                    }
                                />
                                {/* <CardActions
                                    type="ARTICLE"
                                    id={id}
                                    isBookmarked={isBookmarked}
                                    isLoggedIn={!!userId}
                                    name={title}
                                    url={url}
                                    openModalAction={openModalAction}
                                    hideAddtoCollection={true}
                                    routeChangeAction={routeChangeAction}
                                /> */}
                            </Hidden>
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
                                        <a style={{ cursor: 'pointer' }}>
                                            <Chip
                                                className={classes.tag}
                                                variant="outlined"
                                                label={text}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </a>
                                    </Link>
                                ))}
                        </div>
                        <div className={classes.checkpointAndIPFS}>
                            <div className={classes.tags}>
                                <IPFSIcon />
                                <a
                                    className={classes.contentLink}
                                    href={`https://${config.gateway}/ipfs/${contentHash}`}
                                >
                                    Content
                                </a>
                                <span> is</span>
                                <a
                                    className={classes.contentLink}
                                    href={
                                        'https://creativecommons.org/licenses/by-sa/4.0/'
                                    }
                                >{`"CC-BY-SA 4.0" licensed`}</a>
                            </div>
                            <div className={classes.tags}>
                                <CheckpointArticles
                                    isOwner={true}
                                    articleCheckpointed={!!checkpoint}
                                    pageType={'approved-article'}
                                />
                            </div>
                        </div>
                        <Hidden mdUp={true}>
                            <ShareWidget href={url.as} name={title} />
                        </Hidden>
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
                                    withComments={false}
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
