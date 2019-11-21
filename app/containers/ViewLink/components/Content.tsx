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

// Replace when Twitter Icon builds correctly in Now
const Twitter = () => (
    <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
    >
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
)

const LinkContent = ({
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
}) => {
    const classes = useStyles({})
    return (
        <>
            <Grid
                container={true}
                item={true}
                sm={12}
                alignItems="center"
                justify="space-between"
            >
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
                    >
                        <Typography
                            className={classes.url}
                            color="inherit"
                            variant="subtitle2"
                        >
                            <b>Author:</b> {authorName.value}
                        </Typography>
                        {authorSocial && authorSocial.twitter && (
                            <a
                                target="_blank"
                                href={`https://www.twitter.com/${authorSocial.twitter.value}`}
                            >
                                <Twitter />
                            </a>
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
