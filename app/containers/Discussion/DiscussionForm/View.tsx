import React, { useState } from 'react'
import {
    makeStyles,
    Theme,
    Button,
    Grid,
    Typography,
    TextField,
    Paper,
} from '@material-ui/core'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../components/Modal/Module'
import { ICreateDiscussionAction, IEditDiscussionAction } from '../Module'
import { createDiscussionVariables } from '../../../queries/__generated__/createDiscussion'
import { editDiscussionVariables } from '../../../queries/__generated__/editDiscussion'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import { getDiscussion_getDiscussion } from '../../../queries/__generated__/getDiscussion'
import Loading from '../../../components/Loading'
import { getCommunityURL, getDiscussionURL } from '../../../lib/getURLs'
import Link from 'next/link'
import TagSelector from '../../CreateLink/components/TagSelector'
import ApolloClient from 'apollo-client'
import Editor from '../../../components/Markdown/Editor'
import { IShowNotificationPayload } from '../../../lib/Epics/ShowNotificationEpic'

interface IProps {
    routeChangeAction: (payload: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    createDiscussionAction: (
        payload: createDiscussionVariables
    ) => ICreateDiscussionAction
    editDiscussionAction: (
        payload: editDiscussionVariables
    ) => IEditDiscussionAction
    showNotificationAction: (payload: IShowNotificationPayload) => void
    discussionId?: string
    parentId: string
    parentName: string
    parentType: ResourceTypeInput
    data?: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
    client: ApolloClient<{}>
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
    right: {
        maxWidth: 808,
    },
    button: {
        width: '150px',
        marginLeft: theme.spacing(1),
    },
    colorWhite: {
        color: theme.palette.common.white,
    },
    paper: {
        width: '100%',
        margin: 'auto',
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
    },
    message: {
        paddingTop: 0,
    },
}))

export const DiscussionForm = ({
    discussionId,
    parentId,
    parentType,
    parentName,
    data,
    client,
    createDiscussionAction,
    editDiscussionAction,
    openModalAction,
    closeModalAction,
    showNotificationAction,
}: IProps) => {
    const classes = useStyles()

    if (data && data.loading) {
        return <Loading />
    }

    const parent = { id: parentId, type: parentType }
    const back = data
        ? getDiscussionURL({ ...data.getDiscussion })
        : getCommunityURL({ id: parentId, name: parentName, tab: 2 })
    const isEditing = !!data

    const [title, setTitle] = useState<string>(
        data ? data.getDiscussion.title : ''
    )
    const [message, setMessage] = useState<string>(
        data ? data.getDiscussion.message : ''
    )
    const [tags, setTags] = useState<any[]>([])

    React.useEffect(() => {
        if (data && data.getDiscussion.tags) {
            setTags(
                data.getDiscussion.tags.map(tag => {
                    return {
                        label: tag,
                        value: tag,
                    }
                })
            )
        }
    }, [])

    const save = () => {
        if (title === '' || tags.length === 0 || message === '') {
            showNotificationAction({
                description: 'Please complete the form',
                message: 'Invalid form',
                notificationType: 'error',
            })
            return
        }

        let t: string[] = tags.map(i => i.label)

        if (isEditing && discussionId) {
            editDiscussionAction({ id: discussionId, title, message, tags: t })
        } else {
            createDiscussionAction({ parent, title, message, tags: t })
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid container spacing={2} className={classes.left}></Grid>

                <Grid
                    direction="column"
                    container
                    spacing={2}
                    className={classes.right}
                >
                    <Grid container justify="space-between">
                        <Typography variant="h5">
                            {isEditing ? `Edit Topic` : `Create New Topic`}
                        </Typography>
                        <Grid direction="row">
                            <Link href={back.href} as={back.as}>
                                <Button
                                    color="primary"
                                    variant="text"
                                    className={classes.button}
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                color="primary"
                                variant="contained"
                                className={[
                                    classes.button,
                                    classes.colorWhite,
                                ].join(' ')}
                                onClick={save}
                            >
                                {isEditing ? `Edit Topic` : `Create Topic`}
                            </Button>
                        </Grid>
                    </Grid>

                    <Paper className={classes.paper}>
                        <Grid direction="column">
                            <TextField
                                fullWidth={true}
                                value={title}
                                required={true}
                                disabled={false}
                                onChange={e => setTitle(e.target.value)}
                                label="Title"
                            />
                            <TagSelector
                                tags={tags}
                                setTags={setTags}
                                client={client}
                            />
                        </Grid>
                    </Paper>

                    <Paper
                        className={[classes.paper, classes.message].join(' ')}
                    >
                        <Editor
                            minHeight={200}
                            withTabPreview={true}
                            withToolbar={true}
                            compact={true}
                            text={message}
                            placeholder="Enter your message"
                            onChange={e => setMessage(e)}
                            openModalAction={openModalAction}
                            closeModalAction={closeModalAction}
                        />
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default DiscussionForm
