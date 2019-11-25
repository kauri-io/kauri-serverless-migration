import { Card, Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CardImage from './CardComponents/CardImage'
import TruncateMarkup from 'react-truncate-markup'
import { openModalAction } from '../Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { connect } from 'react-redux'
import { getCommunityURL } from '../../lib/getURLs'
import Link from 'next/link'
import Actions from './CardComponents/CardActions'
import moment from 'moment-mini'
import GroupIcon from '@material-ui/icons/GroupWork'

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            height: 130,
        },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 808,
    },
    link: {
        width: '100%',
    },
    name: {
        textTransform: 'capitalize',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        wordWrap: 'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    description: {
        marginLeft: theme.spacing(2),
    },
    actions: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
    bottom: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 0),
        '& > span': {
            fontWeight: 600,
            marginLeft: theme.spacing(2),
        },
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
        '& > h6': {
            fontWeight: '600',
        },
        '& > *': {
            marginRight: theme.spacing(1),
        },
    },
}))

const CommunityCard = ({
    id,
    name,
    isBookmarked,
    openModalAction,
    routeChangeAction,
    description,
    isLoggedIn,
    dateUpdated,
    members,
    avatar,
}: any) => {
    const classes = useStyles({})
    const collectionURL = getCommunityURL({ id, name: name })

    return (
        <Link href={collectionURL.href} as={collectionURL.as}>
            <a className={classes.link}>
                <>
                    {/*  Mobile Version */}
                    <Hidden implementation="css" smUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage image={avatar} type="Community" />
                                <div className={classes.column}>
                                    <div className={classes.header}>
                                        <GroupIcon />
                                        <Typography variant="subtitle2">
                                            Community
                                        </Typography>
                                        <Typography variant="body2">
                                            {moment(String(dateUpdated)).format(
                                                'MMM DD'
                                            )}
                                        </Typography>
                                    </div>
                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.name}
                                            variant="h5"
                                        >
                                            {name}
                                        </Typography>
                                    </TruncateMarkup>
                                </div>
                            </Grid>
                            {members && (
                                <Grid className={classes.bottom}>
                                    <Typography variant="caption">
                                        {members.length} member
                                        {members.length !== 1 && 's'}
                                    </Typography>
                                </Grid>
                            )}
                        </Card>
                    </Hidden>
                    {/* Desktop Version */}
                    <Hidden implementation="css" xsDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage image={avatar} type="Community" />
                                <Grid className={classes.column}>
                                    <div className={classes.header}>
                                        <GroupIcon />
                                        <Typography variant="subtitle2">
                                            Community
                                        </Typography>
                                        <Typography variant="body2">
                                            {moment(String(dateUpdated)).format(
                                                'MMM DD'
                                            )}
                                        </Typography>
                                    </div>

                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.name}
                                            variant="h5"
                                        >
                                            {name}
                                        </Typography>
                                    </TruncateMarkup>
                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.description}
                                            variant="body2"
                                        >
                                            {description}
                                        </Typography>
                                    </TruncateMarkup>
                                    <Grid className={classes.bottom}>
                                        {members && (
                                            <Typography variant="caption">
                                                {members.length} member
                                                {members.length !== 1 && 's'}
                                            </Typography>
                                        )}
                                        <Actions
                                            id={id}
                                            name={name}
                                            isBookmarked={isBookmarked}
                                            isLoggedIn={isLoggedIn}
                                            openModalAction={openModalAction}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            // addArticleToCollectionAction={
                                            //     addArticleToCollectionAction
                                            // }
                                            type="COMMUNITY"
                                            url={collectionURL}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Hidden>
                </>
            </a>
        </Link>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}
export default connect(
    mapStateToProps,
    {
        openModalAction,
        routeChangeAction,
    }
)(CommunityCard)
