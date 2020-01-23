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
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
    },
    leftItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    leftItemRow: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: theme.spacing(2),
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 808,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
    border: {
        borderBottom: '1px solid #cbcbcb',
        paddingBottom: theme.spacing(2),
    },
    contributors: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        width: '200px',
        color: theme.palette.common.black,
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
                <Grid container spacing={2} className={classes.left}>
                    <Grid className={classes.leftItem}>
                        <Link href={back.href} as={back.as}>
                            <Button color="primary" variant="text">
                                Back to Topics
                            </Button>
                        </Link>
                    </Grid>

                    <Grid className={classes.leftItem}>
                        <VoteWidget
                            isLoggedIn={isLoggedIn}
                            id={discussionId}
                            resourceType="DISCUSSION"
                            voteAction={voteAction}
                            voteResult={data.getDiscussion.voteResult}
                            loginFirstToVote={login}
                        />
                    </Grid>

                    <Grid className={classes.leftItemRow} onClick={() => routeChangeAction(edit.as)}>

                        <Link href={edit.href} as={edit.as}>
                            <Button
                                //color="primary"
                                variant="text"
                                //className={classes.button}
                                size="small"
                                startIcon={<EditIcon />}
                            >
                                Edit discussion
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.right}>
                    <Typography variant="h6" style={{ marginBottom: -8 }}>
                        {data.getDiscussion.title}
                    </Typography>

                    <TagList
                        color="black"
                        maxTags={7}
                        tags={data.getDiscussion.tags}
                    />

                    <Grid className={[classes.row, classes.border].join(' ')}>
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

                    <Grid className={classes.row}>
                        <MDRenderer markdown={data.getDiscussion.message} />
                    </Grid>

                    <Grid className={[classes.row, classes.border].join(' ')}>
                        <Button color="primary" variant="text">
                            Leave a Comment
                        </Button>
                        <ShareWidget
                            href={self.as}
                            name={`Kauri discussion: ${data.getDiscussion.title}`}
                            row={true}
                        />
                    </Grid>

                    <Grid className={[classes.row, classes.border].join(' ')}>
                        <Typography variant="subtitle2">{`Replies (${data.getDiscussion.comments.totalElements})`}</Typography>
                        <Grid className={classes.contributors}>
                            <AvatarList 
                                list={data.getDiscussion.contributors.content}
                                total={data.getDiscussion.contributors.totalElements}
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
