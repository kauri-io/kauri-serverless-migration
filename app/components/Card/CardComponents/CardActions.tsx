import { makeStyles } from '@material-ui/styles'
import {
    Theme,
    Typography,
    Tooltip,
    ListItemIcon,
    Icon,
    MenuItem,
    Menu,
} from '@material-ui/core'
import ShareDialog from '../ShareDialog'
import BookmarkResource from '../../../containers/Bookmark/BookmarkResourceWidget'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import IconButton from '@material-ui/core/IconButton'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    actions: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            marginLeft: theme.spacing(1),
        },
    },
}))

export default ({
    id,
    name,
    isBookmarked,
    isLoggedIn,
    openModalAction,
    routeChangeAction,
    url,
    addArticleToCollectionAction,
}) => {
    const classes = useStyles({})

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    const [shareDialogOpen, setShareDialogOpen] = useState<boolean>(false)

    function handleClickShareDialogOpen() {
        setShareDialogOpen(true)
    }

    function handleClickShareDialogClose() {
        setShareDialogOpen(false)
        handleClose()
    }

    return (
        <div
            className={classes.actions}
            onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
            }}
        >
            <Tooltip title={isBookmarked ? 'Unbookmark' : 'Bookmark'}>
                <IconButton
                    onClick={() =>
                        isLoggedIn && openModalAction
                            ? openModalAction({
                                  children: (
                                      <BookmarkResource
                                          resourceId={id}
                                          resourceType={
                                              ResourceTypeInput.ARTICLE
                                          }
                                      />
                                  ),
                              })
                            : routeChangeAction && routeChangeAction(`/login`)
                    }
                >
                    {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
            </Tooltip>
            <IconButton
                onClick={handleClick}
                data-testid={`ArticleCard-${id}-moreOptionsButton`}
                aria-label="simple-menu"
                aria-haspopup="true"
            >
                <Icon>more_vert</Icon>
            </IconButton>
            <ShareDialog
                href={url}
                name={name}
                open={shareDialogOpen}
                handleClose={handleClickShareDialogClose}
            ></ShareDialog>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClickShareDialogOpen}>
                    <ListItemIcon>
                        <Icon>share</Icon>
                    </ListItemIcon>
                    <Typography variant="inherit">Share</Typography>
                </MenuItem>
                {isLoggedIn && (
                    <MenuItem
                        data-testid={`ArticleCard-${id}-addToCollectionButton`}
                        onClick={() => {
                            addArticleToCollectionAction &&
                                addArticleToCollectionAction()
                        }}
                    >
                        <ListItemIcon>
                            <Icon>folder</Icon>
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Add To Collection
                        </Typography>
                    </MenuItem>
                )}
            </Menu>
        </div>
    )
}
