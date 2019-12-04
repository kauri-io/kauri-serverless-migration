import { Card, Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CardImage from './CardComponents/CardImage'
import { openModalAction } from '../Modal/Module'

import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

import { connect } from 'react-redux'
import { getArticleURL } from '../../lib/getURLs'
import Link from 'next/link'
import Details from './CardComponents/CardDetails'
import GroupIcon from '@material-ui/icons/GroupWork'
import Actions from './CardComponents/CardActions'
import estimateTime from '../../lib/estimateTime'

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
        width: '100%',
        textAlign: 'left',
        paddingRight: theme.spacing(2),
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
        justifyContent: 'space-between',
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
            height: 16,
            width: 16,
        },
    },
}))

const ArticleCard = ({
    id,
    title,
    author,
    attributes,
    content,
    isBookmarked,
    openModalAction,
    routeChangeAction,
    addArticleToCollectionAction,
    // version,
    description,
    isLoggedIn,
    datePublished,
    owner,
}: any) => {
    const minutes = content && estimateTime(content)
    const classes = useStyles({})
    const articleURL = getArticleURL({ id, title })

    return (
        <Link href={articleURL.href} as={articleURL.as}>
            <a className={classes.link}>
                <>
                    <Hidden implementation="css" smUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <Grid className={classes.column}>
                                    <Typography
                                        className={classes.title}
                                        variant="h5"
                                    >
                                        {title}
                                    </Typography>
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
                                    image={attributes && attributes.background}
                                    type={'Article'}
                                />
                            </Grid>
                            <Grid className={classes.row}>
                                <Details
                                    user={author}
                                    minutes={minutes}
                                    date={datePublished}
                                />
                            </Grid>
                        </Card>
                    </Hidden>
                    <Hidden implementation="css" xsDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <Grid className={classes.column}>
                                    <Typography
                                        className={classes.title}
                                        variant="h5"
                                    >
                                        {title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {description.substring(0, 160)}...
                                    </Typography>
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
                                            user={author}
                                            minutes={minutes}
                                            date={datePublished}
                                        />
                                        <Actions
                                            id={id}
                                            name={title}
                                            isBookmarked={isBookmarked}
                                            isLoggedIn={isLoggedIn}
                                            openModalAction={openModalAction}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            addArticleToCollectionAction={
                                                addArticleToCollectionAction
                                            }
                                            url={articleURL}
                                            type="ARTICLE"
                                        />
                                    </Grid>
                                </Grid>
                                <CardImage
                                    image={attributes && attributes.background}
                                    type={'Article'}
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
)(ArticleCard)
