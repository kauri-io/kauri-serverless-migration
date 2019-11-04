import Grid from '@material-ui/core/Grid'
import Avatar from '../../components/Avatar'
import { Hidden, Typography } from '@material-ui/core'
import { useStyles } from './style'
import Image from '../../components/Image'
import Button from '../../components/Button'
import moment from 'moment-mini'
import Toolbar from './components/Toolbar'
import OpenIcon from '@material-ui/icons/OpenInNew'
import Chip from '@material-ui/core/Chip'
import LinkComments from './components/LinkComments'
import Link from 'next/link'

const ViewLink = ({ addCommentAction, user, data: { getExternalLink } }) => {
    const classes = useStyles({})

    return (
        <Grid
            className={classes.root}
            container={true}
            justify="center"
            spacing={3}
        >
            <Hidden smDown={true}>
                <Grid item={true} sm={2} className={classes.floaterContainer}>
                    <div className={classes.floaterLeft}></div>
                </Grid>
            </Hidden>
            <Grid
                className={classes.centralColumn}
                item={true}
                xs={12}
                sm={8}
                md={8}
            >
                <div className={classes.header}>
                    <Toolbar
                        comments={getExternalLink.comments.totalElements}
                        classes={classes}
                    />
                    <Grid
                        container={true}
                        item={true}
                        sm={12}
                        alignItems="center"
                        justify="space-between"
                    >
                        {getExternalLink.owner && (
                            <Avatar
                                size={40}
                                avatar={getExternalLink.owner.avatar}
                                username={getExternalLink.owner.username}
                                id={getExternalLink.owner.id}
                                withName={true}
                            />
                        )}
                        <Typography variant="body2">
                            Posted{' '}
                            {moment(getExternalLink.dateCreated).format(
                                'DD MMM YY'
                            )}
                        </Typography>
                    </Grid>
                    <Typography
                        className={classes.title}
                        color="inherit"
                        variant="h4"
                        component="h1"
                    >
                        {getExternalLink.linkTitle.value}
                    </Typography>
                    <Grid container={true} justify="space-between">
                        <Typography
                            className={classes.url}
                            color="inherit"
                            variant="subtitle2"
                        >
                            {getExternalLink.url.value
                                .replace('https://', '')
                                .replace('http://', '')}
                        </Typography>
                        {getExternalLink.authorName.value && (
                            <Typography
                                className={classes.url}
                                color="inherit"
                                variant="subtitle2"
                            >
                                <b>Author:</b>{' '}
                                {getExternalLink.authorName.value}
                            </Typography>
                        )}
                    </Grid>

                    {getExternalLink.linkAttributes.background_image && (
                        <Image
                            height={350}
                            width="100%"
                            image={
                                getExternalLink.linkAttributes.background_image
                                    .value
                            }
                        />
                    )}

                    <Typography
                        className={classes.description}
                        color="inherit"
                        variant="body2"
                    >
                        {getExternalLink.linkDescription.value}
                    </Typography>
                    <Grid container={true} justify="center">
                        {getExternalLink.tags &&
                            getExternalLink.tags.map(text => (
                                <Link href={`/search-results?q=${text}`}>
                                    <a>
                                        <Chip
                                            className={classes.tag}
                                            variant="outlined"
                                            label={text}
                                        />
                                    </a>
                                </Link>
                            ))}
                    </Grid>
                    <Grid
                        className={classes.ctaContainer}
                        container={true}
                        justify="center"
                    >
                        <a href={getExternalLink.url.value} target="_blank">
                            <Button color="primary" variant="contained">
                                <OpenIcon className={classes.buttonIcon} /> Read
                                Article
                            </Button>
                        </a>
                    </Grid>

                    <Typography className={classes.summary} variant="body1">
                        {getExternalLink.summary.value}
                    </Typography>
                </div>
                <LinkComments
                    link={getExternalLink}
                    user={user}
                    addCommentAction={addCommentAction}
                />
            </Grid>
            <Hidden smDown={true}>
                <Grid item={true} xs={false} sm={2}>
                    <div className={classes.floaterRight}></div>
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default ViewLink
