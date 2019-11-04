import Avatar from '../../../components/Avatar'
import Image from '../../../components/Image'
import Button from '../../../components/Button'
import moment from 'moment-mini'
import OpenIcon from '@material-ui/icons/OpenInNew'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import { useStyles } from '../style'

const LinkContent = ({ owner, dateCreated, linkTitle, authorName, linkAttributes,tags, url, linkDescription, summary }) => {
    const classes = useStyles({})
    return <>
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
                            Posted{' '}
                            {moment(dateCreated).format(
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
                        {linkTitle.value}
                    </Typography>
                    <Grid container={true} justify="space-between">
                        <Typography
                            className={classes.url}
                            color="inherit"
                            variant="subtitle2"
                        >
                            {url.value
                                .replace('https://', '')
                                .replace('http://', '')}
                        </Typography>
                        {authorName.value && (
                            <Typography
                                className={classes.url}
                                color="inherit"
                                variant="subtitle2"
                            >
                                <b>Author:</b>{' '}
                                {authorName.value}
                            </Typography>
                        )}
                    </Grid>

                    {linkAttributes.background_image && (
                        <Image
                            height={350}
                            width="100%"
                            image={
                                linkAttributes.background_image
                                    .value
                            }
                        />
                    )}

                    <Typography
                        className={classes.description}
                        color="inherit"
                        variant="body2"
                    >
                        {linkDescription.value}
                    </Typography>
                    <Grid container={true} justify="center">
                        {console.log(tags)}
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
                                <OpenIcon className={classes.buttonIcon} /> Read
                                Article
                            </Button>
                        </a>
                    </Grid>

                    <Typography className={classes.summary} variant="body1">
                        {summary.value}
                    </Typography>
    </>
}
export default LinkContent