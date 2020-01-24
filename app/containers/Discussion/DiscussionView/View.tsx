import React from 'react'
import { makeStyles, Theme, Grid, Button, Typography } from '@material-ui/core'
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
import { IVoteAction } from '../../Article/Module'
import { voteVariables } from '../../../queries/__generated__/vote'
import EditIcon from '@material-ui/icons/Edit'
import TagList from '../../../components/Tags/TagList'
import Avatar from '../../../components/Avatar'
import AvatarList from '../../../components/AvatarList'
import moment from 'moment-mini'
import ShareWidget from '../../Article/components/ShareWidget'
import MDRenderer from '../../../components/Markdown/Renderer'

interface IProps {
    routeChangeAction: (payload: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    closeDiscussionAction: (
        payload: closeDiscussionVariables
    ) => ICloseDiscussionAction
    reopenDiscussionAction: (
        payload: reopenDiscussionVariables
    ) => IReopenDiscussionAction
    deleteDiscussionAction: (
        payload: deleteDiscussionVariables
    ) => IDeleteDiscussionAction
    voteAction: (payload: voteVariables) => IVoteAction
    data: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
    discussionId: string
    parentId: string
    parentName: string
    parentType: ResourceTypeInput
    isLoggedIn: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1272,
        width: '100%',
        margin: 'auto',
        flex: 1,
        height: '100%',
    },
    root: {
        paddingTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        display: 'flex',
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
    voteAction,
    routeChangeAction,
}: IProps) => {
    const classes = useStyles()

    if (data.loading) {
        return <Loading />
    }

    const back = getCommunityURL({ id: parentId, name: parentName, tab: 2 })
    const self = getDiscussionURL({ ...data.getDiscussion })
    const edit = {
        as: `/discussions/${data.getDiscussion.id}/edit`,
        href: `/create-discussion?discussion_id=${data.getDiscussion.id}`,
    }
    const login = () => routeChangeAction(`/login?r=${self.as}`)

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    className={classes.left}
                >
                    <Grid justify="center">
                        <Link href={back.href} as={back.as}>
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
                            loginFirstToVote={login}
                        />
                    </Grid>

                    <Grid
                        justify="center"
                        alignItems="center"
                        className={classes.action}
                        onClick={() => routeChangeAction(edit.as)}
                    >
                        <Link href={edit.href} as={edit.as}>
                            <Button
                                variant="text"
                                size="small"
                                startIcon={<EditIcon />}
                            >
                                Edit discussion
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    className={classes.right}
                >
                    <Typography variant="h6" style={{ marginBottom: -8 }}>
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
                        className={[
                            classes.row,
                            classes.border,
                            classes.flex,
                        ].join(' ')}
                    >
                        <Avatar
                            id={data.getDiscussion.author.id}
                            name={data.getDiscussion.author.publicUserName}
                            username={data.getDiscussion.author.username}
                            avatar={data.getDiscussion.author.avatar}
                            withName={true}
                        />
                        <Typography variant="body2">
                            Posted{' '}
                            <b>
                                {moment(
                                    String(data.getDiscussion.dateCreated)
                                ).format('DD MMM YY')}
                            </b>
                            &nbsp; Last Reply{' '}
                            <b>
                                {moment(
                                    String(data.getDiscussion.lastActivity)
                                ).format('DD MMM YY')}
                            </b>
                        </Typography>
                    </Grid>

                    <Grid
                        direction="row"
                        justify="space-between"
                        className={[classes.row, classes.flex].join(' ')}
                    >
                        <MDRenderer markdown={data.getDiscussion.message} />
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
                        <Button color="primary" variant="text">
                            Leave a Comment
                        </Button>
                        <ShareWidget
                            href={self.as}
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
                        <Typography variant="subtitle2">{`Replies (${data.getDiscussion.comments.totalElements})`}</Typography>
                        <Grid direction="row" className={classes.flex}>
                            <AvatarList
                                list={data.getDiscussion.contributors.content}
                                total={
                                    data.getDiscussion.contributors
                                        .totalElements
                                }
                                limit={10}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default DiscussionView
