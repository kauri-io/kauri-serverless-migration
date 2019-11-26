import Avatar from '../../../components/Avatar'
import Image from '../../../components/Image'
import Button from '../../../components/Button'
import moment from 'moment-mini'
import OpenIcon from '@material-ui/icons/OpenInNew'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
// import Twitter from '@material-ui/icons/Twitter'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import { useStyles } from '../style'
import TruncateMarkup from 'react-truncate-markup'
// import CardActions from '../../../components/Card/CardComponents/CardActions'
// import { getLinkUrl } from '../../../lib/getURLs'
import { Hidden, makeStyles, Theme } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import { useState } from 'react'
import ShareDialog from '../../../components/Card/ShareDialog'
import SocialWebsiteIcon from '../../../components/Social/SocialWebsiteIcon'

const LinkContent = ({
    // id,
    owner,
    dateCreated,
    linkTitle,
    authorName,
    authorSocial,
    linkAttributes,
    tags,
    url,
    linkDescription,
    summary,
    // isBookmarked,
    // openModalAction,
    // routeChangeAction,
    // userId,
}) => {
    const useSocialStyles = makeStyles((theme: Theme) => ({
        social: {
            '& > *': {
                marginLeft: theme.spacing(2),
            },
        },
    }))

    const socialClasses = useSocialStyles()
    const classes = useStyles({})

    const [shareDialogOpen, setShareDialogOpen] = useState(false)

    return (
        <>
            <Grid
                container={true}
                item={true}
                sm={12}
                alignItems="center"
                justify="space-between"
            >
                <div className={classes.nameAndDate}>
                    {owner && (
                        <Avatar
                            size={40}
                            avatar={owner.avatar}
                            username={owner.username}
                            id={owner.id}
                            withName={true}
                        />
                    )}
                    <Typography variant="body2">
                        Posted {moment(dateCreated).format('DD MMM YY')}
                    </Typography>
                </div>
                <Hidden lgUp={true}>
                    <ShareIcon onClick={() => setShareDialogOpen(true)} />
                    <ShareDialog
                        href={url.as}
                        name={linkTitle}
                        open={shareDialogOpen}
                        handleClose={() => setShareDialogOpen(false)}
                    />
                    {/* <CardActions
                        type="LINK"
                        id={id}
                        isBookmarked={isBookmarked}
                        isLoggedIn={!!userId}
                        name={linkTitle.value}
                        url={getLinkUrl({ id, linkTitle })}
                        openModalAction={openModalAction}
                        routeChangeAction={routeChangeAction}
                        hideAddtoCollection={true}
                        hideShare={true}
                    /> */}
                </Hidden>
            </Grid>
            <Typography
                className={classes.title}
                color="inherit"
                variant="h4"
                component="h1"
            >
                {linkTitle.value}
            </Typography>
            <Grid container={true} justify="space-between">
                <Grid item={true} sm={authorName ? 6 : 12}>
                    <a href={url.value} target="__blank">
                        <TruncateMarkup lines={1}>
                            <Typography
                                className={classes.url}
                                color="inherit"
                                variant="subtitle2"
                            >
                                {url.value
                                    .replace('https://', '')
                                    .replace('http://', '')}
                            </Typography>
                        </TruncateMarkup>
                    </a>
                </Grid>
                {authorName.value && (
                    <Grid
                        item={true}
                        sm={6}
                        container={true}
                        alignItems="center"
                        justify="flex-end"
                        className={socialClasses.social}
                    >
                        <Typography
                            className={classes.url}
                            color="inherit"
                            variant="subtitle2"
                        >
                            <b>Author:</b> {authorName.value}
                        </Typography>
                        {authorSocial && authorSocial.twitter && (
                            <SocialWebsiteIcon
                                brand="twitter"
                                height={20}
                                invert={false}
                                socialURL={`https://www.twitter.com/${authorSocial.twitter.value}`}
                            />
                        )}
                        {authorSocial && authorSocial.linkedin && (
                            <SocialWebsiteIcon
                                brand="linkedin"
                                height={20}
                                invert={false}
                                socialURL={`https://www.linkedin.com/in/${authorSocial.linkedin.value}`}
                            />
                        )}
                    </Grid>
                )}
            </Grid>

            {url.value.indexOf('youtube.com') === -1 &&
                linkAttributes.background_image && (
                    <Image
                        height={350}
                        width="100%"
                        image={linkAttributes.background_image.value}
                    />
                )}
            {url.value.indexOf('youtube.com') !== -1 && (
                <iframe
                    width="725"
                    height="350"
                    src={url.value.replace('watch?v=', 'embed/')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                ></iframe>
            )}

            <Typography
                className={classes.description}
                color="inherit"
                variant="body2"
            >
                {linkDescription.value}
            </Typography>
            <Grid container={true} justify="center">
                {' '}
                className={classes.tags}>
                {tags &&
                    tags.map((text, key) => (
                        <Link key={key} href={`/search-results?q=${text}`}>
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
                <a href={url.value} target="_blank">
                    <Button color="primary" variant="contained">
                        <OpenIcon className={classes.buttonIcon} /> Read Article
                    </Button>
                </a>
            </Grid>

            <Typography className={classes.summary} variant="body1">
                {summary.value}
            </Typography>
        </>
    )
}
export default LinkContent
