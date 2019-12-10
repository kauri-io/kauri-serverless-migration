import { Card, Typography, Theme, Grid, Hidden, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CardImage from './CardComponents/CardImage'
import TruncateMarkup from 'react-truncate-markup'
import { openModalAction } from '../Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { connect } from 'react-redux'
import { getCollectionURL } from '../../lib/getURLs'
import Link from 'next/link'
import Details from './CardComponents/CardDetails'
import Actions from './CardComponents/CardActions'
import CardStatistics from './CardComponents/CardStatistics'
import moment from 'moment-mini'

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
        display: 'block',
    },
    name: {
        textTransform: 'capitalize',
        marginLeft: theme.spacing(2),
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
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            height: 150,
        },
        [theme.breakpoints.down('sm')]: {
            height: 90,
        },
    },
    bottom: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
        '& > h6': {
            fontWeight: 500,
        },
        '& > *': {
            marginRight: theme.spacing(1),
        },
    },
    collection: {
        fontWeight: 500,
    },
}))

const CollectionCard = ({
    id,
    name,
    owner,
    background,
    isBookmarked,
    sections,
    openModalAction,
    routeChangeAction,
    description,
    isLoggedIn,
    dateUpdated,
}: any) => {
    const classes = useStyles({})
    const collectionURL = getCollectionURL({ id, name })

    const articleCount =
        (sections &&
            sections.reduce((current, next) => {
                if (next && next.resourcesId) {
                    const articlesInSection = next.resourcesId.filter(
                        resource => resource && resource.type === 'ARTICLE'
                    ).length
                    if (articlesInSection > 0) {
                        current += articlesInSection
                    }
                }
                return current
            }, 0)) ||
        0

    return (
        <Link href={collectionURL.href} as={collectionURL.as}>
            <a className={classes.link}>
                <>
                    {/*  Mobile Version */}
                    <Hidden implementation="css" smUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage
                                    image={background}
                                    type="Collection"
                                />
                                <div className={classes.column}>
                                    <div className={classes.header}>
                                        <Icon>folder</Icon>
                                        <Typography
                                            className={classes.collection}
                                            variant="subtitle2"
                                        >
                                            Collection
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
                            <Grid className={classes.row}>
                                <Details user={owner} />
                                <CardStatistics articleCount={articleCount} />
                            </Grid>
                        </Card>
                    </Hidden>
                    {/* Desktop Version */}
                    <Hidden implementation="css" xsDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage
                                    image={background}
                                    type="Collection"
                                />
                                <Grid className={classes.column}>
                                    <div className={classes.header}>
                                        <Icon>folder</Icon>
                                        <Typography variant="subtitle2">
                                            Collection
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
                                        <Details user={owner} />
                                        <CardStatistics
                                            articleCount={articleCount}
                                        />
                                        <Actions
                                            id={id}
                                            name={name}
                                            isBookmarked={isBookmarked}
                                            isLoggedIn={isLoggedIn}
                                            openModalAction={openModalAction}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            url={collectionURL}
                                            type="COLLECTION"
                                            hideAddtoCollection={true}
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
)(CollectionCard)
