import React from 'react'
import {
    makeStyles,
    Theme,
    Grid,
    Typography,
    Button,
    Paper,
} from '@material-ui/core'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../components/Modal/Module'
import { searchDiscussions_searchDiscussions } from '../../../queries/__generated__/searchDiscussions'
import Loading from '../../../components/Loading'
import DiscussionCard from '../../../components/Card/DiscussionCard'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'

interface IProps {
    isLoggedIn: boolean
    routeChangeAction: (payload: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    data: {
        loading: boolean
        searchDiscussions: searchDiscussions_searchDiscussions
    }
    parentType: ResourceTypeInput
    parentId: string
    parentName: string
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(1, 1),
    },
    root: {
        paddingTop: theme.spacing(4),
        width: '100%',
        maxWidth: 1024,
        marginBottom: theme.spacing(2),
    },
    topContainer: {
        borderBottom: '1px solid #cbcbcb',
        marginBottom: theme.spacing(4),
    },
    button: {
        width: '120px',
        color: theme.palette.common.white,
    },
    header: {
        padding: theme.spacing(2, 0, 2, 2),
    },
    headerLeft: {
        width: 660,
    },
    headerRight: {
        display: 'flex',
        width: 90,
    },
    empty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 48,
        marginTop: theme.spacing(2),
    },
}))

export const DiscussionList = ({
    isLoggedIn,
    routeChangeAction,
    data,
    parentId,
    parentType,
    parentName,
}: IProps) => {
    const classes = useStyles()

    if (data.loading) {
        return <Loading />
    }

    const createDiscussionRedirect = () => {
        const createURL = {
            as: `/discussions/create?parent_id=${parentId}&parent_type=${parentType}`,
            href: `/create-discussion?parent_id=${parentId}&parent_type=${parentType}`,
        }

        if (isLoggedIn) {
            return routeChangeAction(createURL.as)
        } else {
            return routeChangeAction(`/login?r=${createURL.as}`)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    justify="space-between"
                    className={classes.topContainer}
                >
                    <Grid item>
                        <Typography variant="h5">
                            {data.searchDiscussions.totalElements} Open
                            Discussion
                            {data.searchDiscussions.totalElements === 1
                                ? ''
                                : 's'}
                        </Typography>
                        <Typography variant="subtitle1">
                            This is an open forum for discussing the{' '}
                            {parentName} community and more.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={createDiscussionRedirect}
                        >
                            New Topic
                        </Button>
                    </Grid>
                </Grid>

                <Grid container={true} spacing={2} className={classes.header}>
                    <Grid className={classes.headerLeft}>
                        <Typography variant="subtitle2">TOPIC</Typography>
                    </Grid>
                    <Grid
                        justify="center"
                        alignItems="center"
                        className={classes.headerRight}
                    >
                        <Typography variant="subtitle2">VOTES</Typography>
                    </Grid>
                    <Grid
                        justify="center"
                        alignItems="center"
                        className={classes.headerRight}
                    >
                        <Typography variant="subtitle2">STATUS</Typography>
                    </Grid>
                    <Grid
                        justify="center"
                        alignItems="center"
                        className={classes.headerRight}
                    >
                        <Typography variant="subtitle2">REPLIES</Typography>
                    </Grid>
                    <Grid
                        justify="center"
                        alignItems="center"
                        className={classes.headerRight}
                    >
                        <Typography variant="subtitle2">ACTIVITY</Typography>
                    </Grid>
                </Grid>

                <Grid container={true} spacing={2}>
                    {data.searchDiscussions.totalElements > 0 &&
                        data.searchDiscussions.content.map(discussion => {
                            if (discussion === null) return

                            return <DiscussionCard {...discussion} />
                        })}
                    {data.searchDiscussions.totalElements === 0 && (
                        <Paper className={classes.empty}>
                            <Typography variant="subtitle1">
                                No discussions topics been started yet
                            </Typography>
                        </Paper>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default DiscussionList
