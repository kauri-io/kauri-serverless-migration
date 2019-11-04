import Grid from '@material-ui/core/Grid'
import AddToCollectionConnection from '../../AddToCollection'
import Add from '@material-ui/icons/Add'
import Share from '@material-ui/icons/Share'
// import MoreVert from "@material-ui/icons/MoreVert";
import slugify from 'slugify'
import { Theme, makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import { useState } from 'react'
import { ShareButtons } from '../../../components/Tooltip/ShareButtons'
import Edit from '@material-ui/icons/Edit'
import { getArticleURL } from '../../../lib/getURLs'
import Link from 'next/link'
import { Tooltip, Icon } from '@material-ui/core'
import BookmarkResource from '../../Bookmark/BookmarkResourceWidget'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import { openModalAction } from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

export const ArticleActionStyles = makeStyles((theme: Theme) => ({
    buttons: {
        alignItems: 'center',
        display: 'flex',
    },
    hover: {
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.2)',
        },
        transition: 'all 0.3s',
    },
    typography: {
        padding: theme.spacing(2),
    },
}))

interface IProps {
    userId: string
    openModalAction: typeof openModalAction
    routeChangeAction: typeof routeChangeAction
    id: string
    version: number
    title: string
    hostName: string
    article: {
        id: string
        title: string
        version: number
        isBookmarked: boolean
    }
}

export default ({
    userId,
    openModalAction,
    id,
    version,
    routeChangeAction,
    title,
    hostName,
    article,
}: IProps) => {
    const classes = ArticleActionStyles({})
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null)
    const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const href = getArticleURL(article, 'update')

    return (
        <Grid item={true} className={classes.buttons}>
            <Tooltip title={article.isBookmarked ? 'Unbookmark' : 'Bookmark'}>
                <Icon
                    className={classes.hover}
                    color="primary"
                    onClick={() =>
                        userId
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
                            : routeChangeAction(
                                  `/login?r=/${slugify(title, {
                                      lower: true,
                                  })}/${id}/a`
                              )
                    }
                    data-testid={`Article-${id}-bookmark`}
                >
                    {article.isBookmarked ? 'bookmark' : 'bookmark_border_icon'}
                </Icon>
            </Tooltip>
            <Tooltip title="Update article">
                <div>
                    <Link href={href.href} as={href.as}>
                        <a>
                            <Edit className={classes.hover} color="primary" />
                        </a>
                    </Link>
                </div>
            </Tooltip>
            <Tooltip title="Add to collection">
                <Add
                    className={classes.hover}
                    color="primary"
                    onClick={() =>
                        userId
                            ? openModalAction({
                                  children: (
                                      <AddToCollectionConnection
                                          articleId={String(id)}
                                          version={Number(version)}
                                      />
                                  ),
                              })
                            : routeChangeAction(
                                  `/login?r=/${slugify(title, {
                                      lower: true,
                                  })}/${id}/a`
                              )
                    }
                />
            </Tooltip>
            <Tooltip title="share">
                <Share
                    aria-describedby={id}
                    onClick={handleClick}
                    className={classes.hover}
                    color="primary"
                />
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom',
                }}
                transformOrigin={{
                    horizontal: 'center',
                    vertical: 'top',
                }}
            >
                <ShareButtons
                    horizontal={true}
                    url={`${hostName}/${slugify(title, {
                        lower: true,
                    })}/${id}/a?utm_campaign=read`}
                    title={title}
                />
            </Popover>
            {/* <MoreVert color="primary" /> */}
        </Grid>
    )
}
