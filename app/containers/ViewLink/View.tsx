import Grid from '@material-ui/core/Grid'
import LinkContent from './components/Content'
import LinkComments from './components/LinkComments'
import Toolbar from './components/Toolbar'
import { useStyles } from './style'
import Hidden from '@material-ui/core/Hidden'
import Head from 'next/head'
import VoteWidget from '../Article/components/VoteWidget'
import ShareWidget from '../Article/components/ShareWidget'
import { getLinkUrl } from '../../lib/getURLs'
import slugify from 'slugify'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

const ViewLink = ({
    openModalAction,
    routeChangeAction,
    addCommentAction,
    voteAction,
    user,
    data: { getExternalLink },
    userId,
}) => {
    const classes = useStyles({})

    const url = getLinkUrl({
        id: String(getExternalLink.id),
        linkTitle: getExternalLink.linkTitle,
    })

    return (
        <>
            <Head>
                <title
                    dangerouslySetInnerHTML={{
                        __html: getExternalLink.linkTitle.value,
                    }}
                />
            </Head>
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
                                id={String(getExternalLink.id)}
                                resourceType="LINK"
                                voteAction={voteAction}
                                voteResult={getExternalLink.voteResult}
                                loginFirstToVote={() =>
                                    routeChangeAction(
                                        `/login?r=/${slugify(
                                            String(
                                                getExternalLink.linkTitle.value
                                            ),
                                            {
                                                lower: true,
                                            }
                                        )}/${getExternalLink.id}/l`
                                    )
                                }
                            />
                            <ShareWidget
                                href={url.as}
                                name={getExternalLink.linkTitle.value}
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
                                id={getExternalLink.id}
                                openModalAction={openModalAction}
                                comments={
                                    getExternalLink.comments.totalElements
                                }
                                classes={classes}
                                routeChangeAction={routeChangeAction}
                                isBookmarked={getExternalLink.isBookmarked}
                                isLoggedIn={!!userId}
                                type={ResourceTypeInput.LINK}
                                isAuthor={false}
                                isOwner={
                                    getExternalLink.ownerId &&
                                    getExternalLink.ownerId.id === userId
                                }
                                version={0}
                            />
                        </Hidden>
                        <LinkContent
                            openModalAction={openModalAction}
                            routeChangeAction={routeChangeAction}
                            userId={userId}
                            {...getExternalLink}
                        />
                    </div>
                    <LinkComments
                        link={getExternalLink.resourceIdentifier}
                        addCommentAction={addCommentAction}
                        user={user}
                        comments={getExternalLink.comments}
                    />
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} xs={false} sm={2}>
                        <div className={classes.floaterRight}></div>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    )
}

export default ViewLink
