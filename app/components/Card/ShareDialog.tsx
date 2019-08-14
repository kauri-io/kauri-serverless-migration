import React from 'react'
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
} from 'react-share'
import analytics from '../../lib/analytics'

const iconSize = 36

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.spacing(2),
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(3),
            },
        },
        icon: {
            width: iconSize,
            height: iconSize,
        },
        HNShareButton: {
            height: iconSize,
            width: iconSize,
            borderRadius: iconSize / 2,
        },
        iconContainer: {
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *:first-child': {
                marginBottom: theme.spacing(1.5),
            },
        },
    })

const handleHNShareClick = ({
    url,
    title,
    share,
}: {
    url: string
    title: string | null
    share: any
}) => () => {
    window.open(
        `https://news.ycombinator.com/submitlink?u=${url}&t=${title}`,
        '_blank',
        'menubar=yes'
    )
    share()
}

export interface IHNShareButtonProps extends WithStyles<typeof styles> {
    onClick: any
    children: React.ReactNode
}

const HNShareButton = withStyles(styles)(
    ({ children, classes, onClick }: IHNShareButtonProps) => (
        <div onClick={onClick} className={classes.HNShareButton}>
            {children}
        </div>
    )
)

const HackerNewsShareButton = ({
    url,
    title,
    children,
    share,
}: {
    url: string
    title: string | null
    children: React.ReactElement<any>
    share: any
}) => (
    <HNShareButton onClick={handleHNShareClick({ url, title, share })}>
        {children}
    </HNShareButton>
)

const HackerNewsIcon = withStyles(styles)(
    ({ classes }: WithStyles<typeof styles>) => (
        <div className={classes.icon}>
            <svg
                viewBox="0 0 30 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <circle
                        id="path-1"
                        cx="14.8935398"
                        cy="14.8938053"
                        r="14.8932743"
                    />
                </defs>
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="#FF6602"
                    fillRule="evenodd"
                >
                    <g
                        id="Basic-UI-Framework"
                        transform="translate(-151.000000, -2005.000000)"
                    >
                        <g
                            id="hackernews"
                            transform="translate(151.000000, 2005.000000)"
                        >
                            <mask id="mask-2" fill="white">
                                <use xlinkHref="#path-1" />
                            </mask>
                            <use
                                id="Oval"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                                xlinkHref="#path-1"
                            />
                            <path
                                d="M0,30 L30,30 L30,0 L0,0 L0,30 Z M16.0034802,16.6192355 L16.0034802,22.1686842 L13.9925279,22.1686842 L13.9925279,16.6192355 L9.048125,6.83006579 L11.3771585,6.83006579 L14.9929751,14.2006238 L18.7524311,6.83006579 L20.935625,6.83006579 L16.0034802,16.6192355 Z"
                                id="Fill-1"
                                fill="#FF6602"
                                mask="url(#mask-2)"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
)

const RedditIcon = withStyles(styles)(
    ({ classes }: WithStyles<typeof styles>) => (
        <div className={classes.icon}>
            <svg
                viewBox="0 0 64 64"
                className="social-icon social-icon--reddit "
            >
                <g>
                    {' '}
                    <circle cx="32" cy="32" r="31" fill="#FF4500" />{' '}
                </g>
                <g>
                    <path
                        d="m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"
                        fill="white"
                    />
                </g>
            </svg>
        </div>
    )
)

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string
    children: React.ReactNode
    onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

interface IProps {
    id: string
    href: string
    name: string | null
    open: boolean
    handleClose: () => void
}

const ShareDialogComponent: React.FC<WithStyles<typeof styles> & IProps> = ({
    id,
    open,
    handleClose,
    classes,
    name,
    href,
}) => {
    const url = `${global.window && global.window.location.origin}${href}`

    return (
        <Dialog
            data-testid={`Card-${id}-shareDialog`}
            onClose={handleClose}
            aria-labelledby="share-dialog"
            open={open}
        >
            <DialogTitle id="share-dialog-title" onClose={handleClose}>
                Share Article
            </DialogTitle>
            <DialogContent dividers>
                <div className={classes.container}>
                    <div className={classes.iconContainer}>
                        <LinkedinShareButton
                            onShareWindowClose={() => {
                                handleClose && handleClose()
                                analytics.track('Share', {
                                    category: 'generic',
                                    platform: 'LinkedIn',
                                })
                            }}
                            url={url}
                            title={name}
                        >
                            <LinkedinIcon size={iconSize} round={true} />
                        </LinkedinShareButton>
                        <Typography variant="caption">LinkedIn</Typography>
                    </div>
                    <div className={classes.iconContainer}>
                        <TwitterShareButton
                            onShareWindowClose={() => {
                                handleClose && handleClose()
                                analytics.track('Share', {
                                    category: 'generic',
                                    platform: 'Twitter',
                                })
                            }}
                            url={url}
                            title={name}
                        >
                            <TwitterIcon size={iconSize} round={true} />
                        </TwitterShareButton>
                        <Typography variant="caption">Twitter</Typography>
                    </div>

                    <div className={classes.iconContainer}>
                        <RedditShareButton
                            onShareWindowClose={() => {
                                handleClose && handleClose()
                                analytics.track('Share', {
                                    category: 'generic',
                                    platform: 'Reddit',
                                })
                            }}
                            url={url}
                            title={name}
                        >
                            <RedditIcon />
                        </RedditShareButton>
                        <Typography variant="caption">Reddit</Typography>
                    </div>
                    <div className={classes.iconContainer}>
                        <HackerNewsShareButton
                            share={() => {
                                analytics.track('Share', {
                                    category: 'generic',
                                    platform: 'HackerNews',
                                })
                            }}
                            url={url}
                            title={name}
                        >
                            <HackerNewsIcon />
                        </HackerNewsShareButton>
                        <Typography variant="caption">HN</Typography>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

const ShareDialog = withStyles(styles)(ShareDialogComponent)

export default ShareDialog
