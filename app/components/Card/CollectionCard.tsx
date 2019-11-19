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
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.common.black,
    },
    name: {
        textTransform: 'capitalize',
        marginLeft: theme.spacing(1),
        wordWrap: 'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    description: {
        marginLeft: theme.spacing(1),
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
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
        '& > h6': {
            fontWeight: 600,
        },
        '& > *': {
            marginRight: theme.spacing(1),
        },
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
    addArticleToCollectionAction,
    description,
    isLoggedIn,
    dateUpdated,
}: any) => {
    const classes = useStyles({})
    const articleURL = getCollectionURL({ id, name })

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
        <Link href={articleURL.href} as={articleURL.as}>
            <a>
                <>
                    {/*  Mobile Version */}
                    <Hidden smUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage image={background} />
                                <div className={classes.column}>
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
                                </div>
                            </Grid>
                            <Grid className={classes.row}>
                                <Details user={owner} />
                                <CardStatistics articleCount={articleCount} />
                            </Grid>
                        </Card>
                    </Hidden>
                    {/* Desktop Version */}
                    <Hidden xsDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <CardImage image={background} />
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
                                            addArticleToCollectionAction={
                                                addArticleToCollectionAction
                                            }
                                            url={getCollectionURL({ id, name })}
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
