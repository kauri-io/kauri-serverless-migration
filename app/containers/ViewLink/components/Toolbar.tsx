import CommentIcon from '@material-ui/icons/Comment'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import FolderIcon from '@material-ui/icons/Folder'
import GroupIcon from '@material-ui/icons/GroupWork'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddToCollection from '../../AddToCollection'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'

const Toolbar = ({ classes, comments, openModalAction, linkId }) => (
    <Grid className={classes.toolbar}>
        <a href="#comments">
            <Grid className={classes.tool} item={true}>
                <CommentIcon />
                <Typography variant="subtitle2">
                    {comments} Comment{comments !== 1 ? 's' : ''}
                </Typography>
            </Grid>
        </a>

        <Grid className={classes.tool} item={true}>
            <BookmarkIcon />
            <Typography variant="subtitle2">Bookmark</Typography>
        </Grid>

        <Grid
            className={classes.tool}
            item={true}
            onClick={() =>
                openModalAction({
                    children: (
                        <AddToCollection
                            resourceId={linkId}
                            type={'LINK' as ResourceTypeInput.LINK}
                        />
                    ),
                })
            }
        >
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
