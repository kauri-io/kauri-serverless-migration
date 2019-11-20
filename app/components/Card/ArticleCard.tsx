import { Card, Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CardImage from './CardComponents/CardImage'
import TruncateMarkup from 'react-truncate-markup'
import { openModalAction } from '../Modal/Module'

import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

import { connect } from 'react-redux'

import { getArticleURL } from '../../lib/getURLs'
import Link from 'next/link'
import Details from './CardComponents/CardDetails'
import Actions from './CardComponents/CardActions'

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
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
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        textAlign: 'left'
    },
    bottom: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
}))

const calculateMinutes = content => {
    const words = content.split(' ').length
    return Math.ceil(words / 200)
}

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
}: any) => {
    const minutes = content && calculateMinutes(content)
    const classes = useStyles({})
    const articleURL = getArticleURL({ id, title })

    return (
        <Link href={articleURL.href} as={articleURL.as}>
            <a>
                <>
                    <Hidden smUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        className={classes.title}
                                        variant="h5"
                                    >
                                        {title}
                                    </Typography>
                                </TruncateMarkup>
                                <CardImage
                                    image={attributes && attributes.background}
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
                    <Hidden xsDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.row}>
                                <Grid className={classes.column}>
                                    <TruncateMarkup lines={2}>
                                        <Typography
                                            className={classes.title}
                                            variant="h5"
                                        >
                                            {title}
                                        </Typography>
                                    </TruncateMarkup>
                                    <TruncateMarkup lines={2}>
                                        <Typography variant="body2">
                                            {description}
                                        </Typography>
                                    </TruncateMarkup>
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
                                            url={getArticleURL({ id, title })}
                                        />
                                    </Grid>
                                </Grid>
                                <CardImage
                                    image={attributes && attributes.background}
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
