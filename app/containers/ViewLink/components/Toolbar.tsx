import CommentIcon from '@material-ui/icons/Comment'
import FolderIcon from '@material-ui/icons/Folder'
// import GroupIcon from '@material-ui/icons/GroupWork'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AddToCollection from '../../AddToCollection'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import BookmarkResource from '../../../containers/Bookmark/BookmarkResourceWidget'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import PencilIcon from '@material-ui/icons/Edit'
import { getArticleURL } from '../../../lib/getURLs'

const Toolbar = ({
    classes,
    comments,
    openModalAction,
    isBookmarked,
    routeChangeAction,
    isLoggedIn,
    type,
    id,
    isAuthor,
    version,
}) => (
    <Grid className={classes.toolbar}>
        <a href="#comments">
            <Grid className={classes.tool} item={true}>
                <CommentIcon />
                <Typography variant="subtitle2">
                    {comments} Comment{comments !== 1 ? 's' : ''}
                </Typography>
            </Grid>
        </a>
        {console.log(getArticleURL({ id, title: '' }, 'update'))}
        <Grid
            className={classes.tool}
            item={true}
            onClick={() => {
                return isLoggedIn && openModalAction
                    ? openModalAction({
                          children: (
                              <BookmarkResource
                                  resourceId={id}
                                  resourceType={ResourceTypeInput[type]}
                              />
                          ),
                      })
                    : routeChangeAction && routeChangeAction(`/login`)
            }}
        >
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            <Typography variant="subtitle2">Bookmark</Typography>
        </Grid>

        <Grid
            className={classes.tool}
            item={true}
            onClick={() =>
                openModalAction({
                    children: <AddToCollection resourceId={id} type={type} />,
                })
            }
        >
            <FolderIcon />
            <Typography variant="subtitle2">Add to collection</Typography>
        </Grid>
        {type === 'ARTICLE' && (
            <Grid
                className={classes.tool}
                onClick={() =>
                    routeChangeAction(
                        getArticleURL({ id, title: '', version }, 'update').as
                    )
                }
            >
                <PencilIcon />
                <Typography variant="subtitle2">
                    {isAuthor ? 'Edit Article' : 'Suggest Edit'}
                </Typography>
            </Grid>
        )}

        {/* <Grid className={classes.tool} item={true}>
            <GroupIcon />
            <Typography variant="subtitle2">Share To Community</Typography>
        </Grid> */}
    </Grid>
)

export default Toolbar
