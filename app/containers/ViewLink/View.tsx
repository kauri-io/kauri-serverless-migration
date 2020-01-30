import Grid from '@material-ui/core/Grid'
import LinkContent from './components/Content'
import Toolbar from './components/Toolbar'
import { useStyles } from './style'
import Hidden from '@material-ui/core/Hidden'
import Schema from '../../lib/with-schema'
import VoteWidget from '../Article/components/VoteWidget'
import ShareWidget from '../Article/components/ShareWidget'
import { getLinkUrl } from '../../lib/getURLs'
import { slugify } from '../../lib/slugify'
import { ResourceTypeInput } from '../../__generated__/globalTypes'
import TipWidget from '../Article/components/TipWidget'
import { Typography } from '@material-ui/core'
import Comments from '../Article/components/ArticleComments'

const ViewLink = ({
    hostName,
    openModalAction,
    closeModalAction,
    routeChangeAction,
    addCommentAction,
    editCommentAction,
    deleteCommentAction,
    curateCommunityResourcesAction,
    voteAction,
    user,
    data: { getExternalLink },
    userId,
    communities,
}) => {
    const classes = useStyles({})

    const url = getLinkUrl({
        id: String(getExternalLink.id),
        linkTitle: getExternalLink.linkTitle,
    })

    return (
        <>
            <Schema
                type="Link"
                url={url}
                id={getExternalLink.id}
                title={getExternalLink.linkTitle.value}
                description={getExternalLink.linkDescription.value || ''}
                dateCreated={getExternalLink.dateCreated}
                datePublished={getExternalLink.dateCreated}
                tags={getExternalLink.tags}
                background={getExternalLink.linkAttributes.background_image.value !== null ? getExternalLink.linkAttributes.background_image.value : undefined}
                author={getExternalLink.owner}
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
                                id={String(getExternalLink.id)}
                                resourceType="LINK"
                                voteAction={voteAction}
                                voteResult={getExternalLink.voteResult}
                                loginFirstToVote={() =>
                                    routeChangeAction(
                                        `/login?r=/${slugify(getExternalLink.linkTitle.value)}/${getExternalLink.id}/l`
                                    )
                                }
                            />
                            <TipWidget
                                isLoggedIn={!!userId}
                                resourceId={String(getExternalLink.id)}
                                resourceType="LINK"
                                tipAction={{}}
                                tips={{}}
                                loginFirstToTip={() => {}}
                                isDisabled={true}
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
                                communities={communities}
                                userId={userId}
                                closeModalAction={closeModalAction}
                                curateCommunityResourcesAction={
                                    curateCommunityResourcesAction
                                }
                            />
                        </Hidden>
                        <LinkContent
                            openModalAction={openModalAction}
                            routeChangeAction={routeChangeAction}
                            userId={userId}
                            {...getExternalLink}
                        />
                    </div>

                    <div className={classes.section}>
                        <Typography
                            className={classes.commentTitle}
                            variant="h6"
                        >
                            {getExternalLink.comments.totalElements} Comment
                            {getExternalLink.comments.totalElements !== 1
                                ? 's'
                                : ''}
                        </Typography>

                        <Comments
                            openModalAction={openModalAction}
                            closeModalAction={closeModalAction}
                            parent={getExternalLink.resourceIdentifier}
                            addCommentAction={addCommentAction}
                            editCommentAction={editCommentAction}
                            deleteCommentAction={deleteCommentAction}
                            user={user}
                            comments={getExternalLink.comments.content}
                            currentURL={url.as}
                            routeChangeAction={routeChangeAction}
                        />
                    </div>
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
