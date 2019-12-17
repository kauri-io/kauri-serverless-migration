import { Card, Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { openModalAction } from '../Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { connect } from 'react-redux'
import { getLinkUrl } from '../../lib/getURLs'
import Link from 'next/link'
import Details from './CardComponents/CardDetails'
import Actions from './CardComponents/CardActions'
import CardImage from './CardComponents/CardImage'
import TruncateMarkup from 'react-truncate-markup'
import LinkIcon from '@material-ui/icons/OpenInNew'
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
        position: 'relative',
        width: '100%',
        maxWidth: 808,
    },
    title: {
        textTransform: 'capitalize',
        marginRight: theme.spacing(1),
        wordWrap: 'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
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
        textAlign: 'left',
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            height: 150,
        },
        [theme.breakpoints.down('xs')]: {
            height: 90,
        },
    },
    bottom: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    url: {
        fontSize: 12,
        width: '90%',
    },
    linkIndicator: {
        background: theme.palette.common.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 4,
        zIndex: 1000,
        [theme.breakpoints.down('sm')]: {
            height: 36,
            width: 36,
        },
        [theme.breakpoints.up('sm')]: {
            height: 40,
            width: 40,
        },
    },
    link: {
        width: '100%',
    },
    community: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textTransform: 'capitalize',
        '& > *': {
            marginRight: theme.spacing(1),
        },
        '& svg': {
            height: 12,
            width: 12,
        },
    },
}))

const LinkCard = ({
    id,
    linkTitle,
    linkDescription,
    linkAttributes,
    isBookmarked,
    isLoggedIn,
    dateCreated,
    owner,
    url,
    submitter,
    openModalAction,
    routeChangeAction,
}: any) => {
    const classes = useStyles({})
    const linkURL = getLinkUrl({ id, linkTitle })

    return (
        <Link href={linkURL.href} as={linkURL.as}>
            <a className={classes.link}>
                <>
                    <Hidden implementation="css" smUp={true}>
                        <Card className={classes.card}>
                            <div className={classes.linkIndicator}>
                                <LinkIcon color="primary" />
                            </div>
                            <Grid className={classes.row}>
                                <Grid className={classes.column}>
                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.title}
                                            variant="h5"
                                        >
                                            {linkTitle.value}
                                        </Typography>
                                    </TruncateMarkup>
                                    <TruncateMarkup lines={1}>
                                        <Typography
                                            color="primary"
                                            className={classes.url}
                                        >
                                            {url.value}
                                        </Typography>
                                    </TruncateMarkup>
                                    {owner && owner.communityName && (
                                        <Grid className={classes.community}>
                                            <GroupIcon />
                                            <Typography variant="caption">
                                                {owner.communityName}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>
                                <CardImage
                                    type={'Article'}
                                    image={
                                        linkAttributes &&
                                        linkAttributes.background_image &&
                                        linkAttributes.background_image.value
                                    }
                                />
                            </Grid>
                            <Grid className={classes.row}>
                                <Details user={submitter} date={dateCreated} />
                            </Grid>
                        </Card>
                    </Hidden>
                    <Hidden implementation="css" xsDown={true}>
                        <Card className={classes.card}>
                            <div className={classes.linkIndicator}>
                                <LinkIcon color="primary" />
                            </div>
                            <Grid className={classes.row}>
                                <Grid className={classes.column}>
                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.title}
                                            variant="h5"
                                        >
                                            {linkTitle.value}
                                        </Typography>
                                    </TruncateMarkup>
                                    {owner && !owner.communityName && (
                                        <TruncateMarkup lines={2}>
                                            <Typography variant="body2">
                                                {linkDescription.value}
                                            </Typography>
                                        </TruncateMarkup>
                                    )}
                                    <TruncateMarkup lines={1}>
                                        <Typography
                                            color="primary"
                                            className={classes.url}
                                        >
                                            {url.value}
                                        </Typography>
                                    </TruncateMarkup>
                                    {owner && owner.communityName && (
                                        <Grid className={classes.community}>
                                            <GroupIcon />
                                            <Typography variant="caption">
                                                {owner.communityName}
                                            </Typography>
                                        </Grid>
                                    )}
                                    <Grid className={classes.bottom}>
                                        <Details
                                            user={submitter}
                                            date={dateCreated}
                                        />
                                        <Actions
                                            id={id}
                                            name={linkTitle.value}
                                            isBookmarked={isBookmarked}
                                            isLoggedIn={isLoggedIn}
                                            openModalAction={openModalAction}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            // addArticleToCollectionAction={
                                            //     addArticleToCollectionAction
                                            // }
                                            url={linkURL}
                                            type="LINK"
                                        />
                                    </Grid>
                                </Grid>
                                <CardImage
                                    type={'Article'}
                                    image={
                                        linkAttributes &&
                                        linkAttributes.background_image &&
                                        linkAttributes.background_image.value
                                    }
                                />
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
)(LinkCard)
