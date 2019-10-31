import Grid from '@material-ui/core/Grid'
import Avatar from '../../components/Avatar'
import { Hidden, Typography } from '@material-ui/core'
import { useStyles } from './style'
import Image from '../../components/Image'
import Button from '../../components/Button'
import moment from 'moment-mini'

export default ({ getLink: { getExternalLink } }) => {
    const classes = useStyles({})

    console.log(getExternalLink)

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
                    <Grid item={true} sm={6}>
                        {getExternalLink.owner && (
                            <Avatar
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
                    <Typography color="inherit" variant="h4" component="h1">
                        {getExternalLink.linkTitle.value}
                    </Typography>
                    <Typography color="inherit" variant="caption">
                        {getExternalLink.url.value}
                    </Typography>

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

                    <Typography color="inherit" variant="body2">
                        {getExternalLink.linkDescription.value}
                    </Typography>
                    <a href={getExternalLink.url.value} target="_blank">
                        <Button color="primary" variant="contained">
                            Read Article
                        </Button>
                    </a>
                    <Typography variant="body2">
                        {getExternalLink.summary.value}
                    </Typography>
                </div>
            </Grid>
            <Hidden smDown={true}>
                <Grid item={true} xs={false} sm={2}>
                    <div className={classes.floaterRight}></div>
                </Grid>
            </Hidden>
        </Grid>
    )
}
