import Grid from '@material-ui/core/Grid'
import LinkContent from './components/Content'
import LinkComments from './components/LinkComments'
import Toolbar from './components/Toolbar'
import { useStyles } from './style'
import Hidden from '@material-ui/core/Hidden'

const ViewLink = ({
    openModalAction,
    addCommentAction,
    user,
    data: { getExternalLink },
}) => {
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
                        linkId={getExternalLink.id}
                        openModalAction={openModalAction}
                        comments={getExternalLink.comments.totalElements}
                        classes={classes}
                    />
                    <LinkContent {...getExternalLink} />
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
