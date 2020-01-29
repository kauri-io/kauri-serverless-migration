import React from 'react'
import { makeStyles, Theme, Grid, Button, Typography, Hidden } from '@material-ui/core'
import {
    ICloseDiscussionAction,
    IReopenDiscussionAction,
    IDeleteDiscussionAction,
} from '../Module'
import {
    ICloseModalAction,
    IOpenModalPayload,
    IOpenModalAction,
} from '../../../components/Modal/Module'
import Loading from '../../../components/Loading'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { closeDiscussionVariables } from '../../../queries/__generated__/closeDiscussion'
import { reopenDiscussionVariables } from '../../../queries/__generated__/reopenDiscussion'
import { deleteDiscussionVariables } from '../../../queries/__generated__/deleteDiscussion'
import { getDiscussion_getDiscussion } from '../../../queries/__generated__/getDiscussion'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import { getCommunityURL, getDiscussionURL } from '../../../lib/getURLs'
import Link from 'next/link'
import VoteWidget from '../../Article/components/VoteWidget'
import CommentsWidget from '../../Article/components/ArticleComments'
import {
    IVoteAction,
    IAddCommentAction,
    IEditCommentAction,
    IDeleteCommentAction,
} from '../../Article/Module'
import { voteVariables } from '../../../queries/__generated__/vote'
import EditIcon from '@material-ui/icons/Edit'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import DeleteIcon from '@material-ui/icons/Delete'
import TagList from '../../../components/Tags/TagList'
import Avatar from '../../../components/Avatar'
import AvatarList from '../../../components/AvatarList'
import moment from 'moment-mini'
import ShareWidget from '../../Article/components/ShareWidget'
import MDRenderer from '../../../components/Markdown/Renderer'
import { addCommentVariables } from '../../../queries/__generated__/addComment'
import { editCommentVariables } from '../../../queries/__generated__/editComment'
import { deleteCommentVariables } from '../../../queries/__generated__/deleteComment'
import Head from 'next/head'

interface IProps {
    routeChangeAction: (href: string, as?: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    closeDiscussionAction: (
        payload: closeDiscussionVariables
    ) => ICloseDiscussionAction
    reopenDiscussionAction: (
        payload: reopenDiscussionVariables
    ) => IReopenDiscussionAction
    deleteDiscussionAction: (
        payload: deleteDiscussionVariables,
        callback: any
    ) => IDeleteDiscussionAction
    voteAction: (payload: voteVariables) => IVoteAction
    addCommentAction: (
        payload: addCommentVariables,
        callback: any
    ) => IAddCommentAction
    editCommentAction: (
        payload: editCommentVariables,
        callback: any
    ) => IEditCommentAction
    deleteCommentAction: (
        payload: deleteCommentVariables,
        callback: any
    ) => IDeleteCommentAction
    data: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
    discussionId: string
    parentId: string
    parentName: string
    parentType: ResourceTypeInput
    isLoggedIn: boolean
    user: any
    permissionToDelete: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: theme.spacing(2),
        width: '100%',
        maxWidth: 1272,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    left: {
        width: 300,
    },
    action: {
        marginTop: theme.spacing(2),
    },
    right: {
        maxWidth: 808,
    },
    content: {
        minHeight: 100,
        textAlign: 'justify',
    },
    row: {
        marginTop: theme.spacing(2),
    },
    border: {
        borderBottom: '1px solid #cbcbcb',
        paddingBottom: theme.spacing(2),
    },
    button: {
        width: '200px',
        color: theme.palette.common.black,
    },
    flex: {
        display: 'flex',
    },
}))

export const DiscussionView = ({
    discussionId,
    data,
    parentId,
    parentName,
    isLoggedIn,
    user,
    voteAction,
    addCommentAction,
    editCommentAction,
    deleteCommentAction,
    openModalAction,
    closeModalAction,
    routeChangeAction,
    closeDiscussionAction,
    reopenDiscussionAction,
    deleteDiscussionAction,
    permissionToDelete = false,
}: IProps) => {
    const classes = useStyles()

    if (data.loading) {
        return <Loading />
    }

    const isAuthor = user && user.id == data.getDiscussion.authorId
    const title = data.getDiscussion.title
    const description = `${data.getDiscussion.message.slice(0, 151)}...`

    const backURL = getCommunityURL({ id: parentId, name: parentName, tab: 2 })
    const selfURL = getDiscussionURL({ ...data.getDiscussion })
    const editURL = {
        as: `/discussions/${data.getDiscussion.id}/edit`,
        href: `/create-discussion?discussion_id=${data.getDiscussion.id}`,
    }
    const loginRedirect = () => routeChangeAction(`/login?r=${selfURL.as}`)
    const editRedirect = () => routeChangeAction(editURL.href, editURL.as)

    return (
        <>
            <Head>
                <title
                    dangerouslySetInnerHTML={{
                        __html: `${title} - Discussion - Kauri`,
                    }}
                />
                <meta name="description" content={description} />
                <link rel="canonical" href={selfURL.as} />
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="kauri.io" />
                <meta property="og:url" content={selfURL.as} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="discussion" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={selfURL.as} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:creator" content="@kauri_io" />
            </Head>

            <div className={classes.container}>
                <div className={classes.root}>

                    <Hidden mdUp={true}>
                        <Grid container justify="center" style={{marginBottom: 16}}>
                            <Link href={backURL.href} as={backURL.as}>
                                <Button color="primary" variant="outlined">
                                    Back to Topics
                                </Button>
                            </Link>
                        </Grid>
                    </Hidden>

                    <Hidden smDown={true}>
                        <Grid
                            container
                            spacing={2}
                            direction="column"
                            alignItems="center"
                            className={classes.left}
                        >
                            <Grid justify="center">
                                <Link href={backURL.href} as={backURL.as}>
                                    <Button color="primary" variant="text">
                                        Back to Topics
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid
                                direction="column"
                                justify="center"
                                alignItems="center"
                                className={classes.flex}
                            >
                                <VoteWidget
                                    isLoggedIn={isLoggedIn}
                                    id={discussionId}
                                    resourceType="DISCUSSION"
                                    voteAction={voteAction}
                                    voteResult={data.getDiscussion.voteResult}
                                    loginFirstToVote={loginRedirect}
                                />
                            </Grid>

                            {isAuthor && (
                                <Grid
                                    justify="center"
                                    alignItems="center"
                                    className={classes.action}
                                >
                                    <Button
                                        variant="text"
                                        size="small"
                                        startIcon={<EditIcon />}
                                        onClick={editRedirect}
                                    >
                                        Edit discussion
                                    </Button>
                                </Grid>
                            )}

                            {isAuthor && data.getDiscussion.status === 'OPENED' && (
                                <Grid
                                    justify="center"
                                    alignItems="center"
                                    className={classes.action}
                                    onClick={() =>
                                        closeDiscussionAction({
                                            id: data.getDiscussion.id,
                                        })
                                    }
                                >
                                    <Button
                                        variant="text"
                                        size="small"
                                        startIcon={<HighlightOffIcon />}
                                    >
                                        Close discussion
                                    </Button>
                                </Grid>
                            )}

                            {isAuthor && data.getDiscussion.status === 'CLOSED' && (
                                <Grid
                                    justify="center"
                                    alignItems="center"
                                    className={classes.action}
                                    onClick={() => {}}
                                >
                                    <Button
                                        variant="text"
                                        size="small"
                                        startIcon={<OpenInNewIcon />}
                                        onClick={() =>
                                            reopenDiscussionAction({
                                                id: data.getDiscussion.id,
                                            })
                                        }
                                    >
                                        Repoen discussion
                                    </Button>
                                </Grid>
                            )}

                            {permissionToDelete && (
                                <Grid
                                    justify="center"
                                    alignItems="center"
                                    className={classes.action}
                                    onClick={() => {}}
                                >
                                    <Button
                                        variant="text"
                                        size="small"
                                        startIcon={<DeleteIcon />}
                                        onClick={() =>
                                            deleteDiscussionAction(
                                                { id: data.getDiscussion.id },
                                                () => routeChangeAction(backURL.as)
                                            )
                                        }
                                    >
                                        Delete discussion
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </Hidden>

                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        className={classes.right}
                    >
                        <Typography variant="h5" style={{ marginBottom: -8 }}>
                            {data.getDiscussion.title}
                        </Typography>

                        <TagList
                            color="black"
                            maxTags={7}
                            tags={data.getDiscussion.tags}
                        />

                        <Grid
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            className={[classes.row, classes.flex, classes.border].join(' ')}
                        >
                            <Avatar
                                id={data.getDiscussion.author.id}
                                name={data.getDiscussion.author.publicUserName}
                                username={data.getDiscussion.author.username}
                                avatar={data.getDiscussion.author.avatar}
                                withName={true}
                                size={40}
                            />
                            <Typography variant="body2">
                                Posted{' '}
                                <b>
                                    {moment(data.getDiscussion.dateCreated).format('DD MMM YY')}
                                </b>
                                <Hidden smDown={true}>
                                &nbsp; Last Reply{' '}
                                <b>
                                    {moment(data.getDiscussion.lastActivity).format('DD MMM YY')}
                                </b>
                                </Hidden>
                            </Typography>
                        </Grid>

                        <Grid
                            direction="row"
                            justify="space-between"
                            className={[
                                classes.row,
                                classes.flex,
                                classes.content,
                            ].join(' ')}
                        >
                            <MDRenderer markdown={data.getDiscussion.message} />
                        </Grid>

                        <Grid
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            className={[
                                classes.row,
                                classes.border,
                                classes.flex,
                            ].join(' ')}
                        >
                            <ShareWidget
                                href={selfURL.as}
                                name={`Kauri discussion: ${data.getDiscussion.title}`}
                                row={true}
                            />
                        </Grid>

                        <Grid
                            direction="row"
                            justify="space-between"
                            className={[
                                classes.row,
                                classes.border,
                                classes.flex,
                            ].join(' ')}
                        >
                            <Typography variant="subtitle1">{`Replies (${data.getDiscussion.comments.totalElements})`}</Typography>
                            <Grid direction="row" className={classes.flex}>
                                <AvatarList
                                    list={
                                        data.getDiscussion.contributors.content
                                    }
                                    total={
                                        data.getDiscussion.contributors
                                            .totalElements
                                    }
                                    limit={10}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            direction="row"
                            justify="space-between"
                            className={classes.row}
                        >
                            <CommentsWidget
                                openModalAction={openModalAction}
                                routeChangeAction={routeChangeAction}
                                closeModalAction={closeModalAction}
                                parent={data.getDiscussion.resourceIdentifier}
                                addCommentAction={addCommentAction}
                                editCommentAction={editCommentAction}
                                deleteCommentAction={deleteCommentAction}
                                user={user}
                                currentURL={selfURL.as}
                                comments={data.getDiscussion.comments.content}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default DiscussionView
