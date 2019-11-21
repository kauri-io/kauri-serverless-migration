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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        '& > *': {
            marginLeft: theme.spacing(1),
        },
        '& > button': {
            color: theme.palette.common.black,
        },
    },
    bookmarkIcon: {
        display: 'flex',
        alignItems: 'center',
    },
}))

interface IProps {
    id: string
    name: string
    isBookmarked: boolean
    isLoggedIn: boolean
    openModalAction: any
    routeChangeAction: any
    url: {
        as: string
        href: string
    }
    addArticleToCollectionAction?: any
    type: string
    hideAddtoCollection?: boolean
}

export default ({
    id,
    name,
    isBookmarked,
    isLoggedIn,
    openModalAction,
    routeChangeAction,
    url,
    addArticleToCollectionAction,
    hideAddtoCollection,
    type,
}: IProps) => {
    const classes = useStyles({})

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
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
                <div
                    className={classes.bookmarkIcon}
                    onClick={() => {
                        console.log('Bookmarking..', openModalAction)
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
                </div>
            </Tooltip>
            <div
                onClick={handleClick}
                data-testid={`ArticleCard-${id}-moreOptionsButton`}
                aria-label="simple-menu"
                aria-haspopup="true"
                className={classes.bookmarkIcon}
            >
                <Icon>more_vert</Icon>
            </div>
            <ShareDialog
                href={url.as}
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
                {isLoggedIn && !hideAddtoCollection && (
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
