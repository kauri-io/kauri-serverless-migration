import CommentIcon from '@material-ui/icons/Comment'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import FolderIcon from '@material-ui/icons/Folder'
import GroupIcon from '@material-ui/icons/GroupWork'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Toolbar = ({ classes, comments }) => (
    <Grid className={classes.toolbar}>
        <Grid className={classes.tool} item={true}>
            <CommentIcon />
            <Typography variant="subtitle2">
                {comments} Comment{comments !== 1 ? 's' : ''}
            </Typography>
        </Grid>

        <Grid className={classes.tool} item={true}>
            <BookmarkIcon />
            <Typography variant="subtitle2">Bookmark</Typography>
        </Grid>

        <Grid className={classes.tool} item={true}>
            <FolderIcon />
            <Typography variant="subtitle2">Add to collection</Typography>
        </Grid>

        <Grid className={classes.tool} item={true}>
            <GroupIcon />
            <Typography variant="subtitle2">Share To Community</Typography>
        </Grid>
    </Grid>
)

export default Toolbar
