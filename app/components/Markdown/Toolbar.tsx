import BoldIcon from '@material-ui/icons/FormatBold'
import ItalicIcon from '@material-ui/icons/FormatItalic'
import StrikeIcon from '@material-ui/icons/FormatStrikethrough'
import CodeIcon from '@material-ui/icons/Code'
import QuoteIcon from '@material-ui/icons/FormatQuote'
import TitleIcon from '@material-ui/icons/Title'
import ImageIcon from '@material-ui/icons/ImageOutlined'
// import VideoIcon from '@material-ui/icons/VideocamOutlined'
import LinkIcon from '@material-ui/icons/LinkOutlined'
import ListIcon from '@material-ui/icons/FormatListBulletedOutlined'
import NumberedListIcon from '@material-ui/icons/FormatListNumberedOutlined'
// import TableIcon from '@material-ui/icons/TableChartOutlined'
import { makeStyles } from '@material-ui/styles'
import { Theme, Tooltip } from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube'

import URLModal from './URLModal'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'

const Toolbar = ({ format, compact, openModalAction, closeModalAction }) => {
    let uppy: {
        on: (arg0: string, arg1: (_data: any, data2: any) => void) => void
        close: () => void | (() => void | undefined)
    }

    useEffect(() => {
        if (!compact) {
            uppy = initUppy({
                allowGifs: true,
                trigger: '#article-image-upload',
            })
            uppy.on('upload-success', (_data, data2) => {
                const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
                format('image', url)
            })
            return () => {
                uppy.close()
            }
        }
    }, [])
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        iconButton: {
            cursor: 'pointer',
            margin: theme.spacing(1),
        },
        urlContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: 400,
        },
    }))
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Tooltip title="bold">
                <div
                    className={classes.iconButton}
                    onClick={() => format('bold')}
                >
                    <BoldIcon />
                </div>
            </Tooltip>
            <Tooltip title="italic">
                <div
                    className={classes.iconButton}
                    onClick={() => format('italic')}
                >
                    <ItalicIcon />
                </div>
            </Tooltip>
            {!compact && (
                <Tooltip title="strike-through">
                    <div
                        className={classes.iconButton}
                        onClick={() => format('strike')}
                    >
                        <StrikeIcon />
                    </div>
                </Tooltip>
            )}
            <Tooltip title="code">
                <div
                    className={classes.iconButton}
                    onClick={() => format('code')}
                >
                    <CodeIcon />
                </div>
            </Tooltip>
            <Tooltip title="quote">
                <div
                    className={classes.iconButton}
                    onClick={() => format('quote')}
                >
                    <QuoteIcon />
                </div>
            </Tooltip>
            {!compact && (
                <Tooltip title="title">
                    <div
                        className={classes.iconButton}
                        onClick={() => format('title')}
                    >
                        <TitleIcon />
                    </div>
                </Tooltip>
            )}
            <Tooltip title="list">
                <div
                    className={classes.iconButton}
                    onClick={() => format('list')}
                >
                    <ListIcon />
                </div>
            </Tooltip>
            <Tooltip title="numbered list">
                <div
                    className={classes.iconButton}
                    onClick={() => format('numbered-list')}
                >
                    <NumberedListIcon />
                </div>
            </Tooltip>
            {!compact && (
                <>
                    <Tooltip title="upload image">
                        <div
                            id="article-image-upload"
                            className={classes.iconButton}
                        >
                            <ImageIcon />
                        </div>
                    </Tooltip>
                    <Tooltip title="Embed Youtube">
                        <div
                            onClick={() =>
                                openModalAction({
                                    children: (
                                        <URLModal
                                            type="youtube"
                                            format={format}
                                            classes={classes}
                                            closeModalAction={closeModalAction}
                                        />
                                    ),
                                })
                            }
                        >
                            <YouTubeIcon />
                        </div>
                    </Tooltip>
                </>
            )}
            {/* {!compact && <Tooltip title='embed video'><div className={classes.iconButton}>
                <VideoIcon />
            </div></Tooltip>} */}
            <Tooltip title="Hyperlink">
                <div
                    onClick={() =>
                        openModalAction({
                            children: (
                                <URLModal
                                    type="url"
                                    format={format}
                                    classes={classes}
                                    closeModalAction={closeModalAction}
                                />
                            ),
                        })
                    }
                    className={classes.iconButton}
                >
                    <LinkIcon />
                </div>
            </Tooltip>
            {/* 
            <Tooltip title=''></Tooltip><div className={classes.iconButton}>
                <TableIcon />
            </div> */}
        </div>
    )
}

export default Toolbar
