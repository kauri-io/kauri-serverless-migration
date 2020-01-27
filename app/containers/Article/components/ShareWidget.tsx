import {
    TwitterShareButton,
    LinkedinShareButton,
    RedditShareButton,
} from 'react-share'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    containerColumn: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
    },
    containerRow: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
    },
    iconContainer: {
        margin: theme.spacing(0,1),
        '& svg': {
            height: 24,
            width: 24,
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
                transform: 'scale(1.3)',
            },
        },
    },
}))

const LinkedIn = () => (
    <svg
        fill="#0277b5"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
    >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
    </svg>
)

const Twitter = () => (
    <svg
        fill="#1da1f2"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
    >
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
)

const Reddit = () => (
    <svg
        fill="#ff4502"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
    >
        <path d="M22 12.14a2.19 2.19 0 0 0-3.71-1.57 10.93 10.93 0 0 0-5.86-1.87l1-4.7 3.27.71a1.56 1.56 0 1 0 .16-.76l-3.64-.77c-.11-.02-.22 0-.29.06-.09.05-.14.14-.16.26l-1.11 5.22c-2.33.07-4.43.78-5.95 1.86A2.2 2.2 0 0 0 4.19 10a2.16 2.16 0 0 0-.9 4.15 3.6 3.6 0 0 0-.05.66c0 3.37 3.92 6.12 8.76 6.12s8.76-2.73 8.76-6.12c0-.21-.01-.44-.05-.66A2.21 2.21 0 0 0 22 12.14M7 13.7c0-.86.68-1.56 1.54-1.56s1.56.7 1.56 1.56a1.56 1.56 0 0 1-1.56 1.56c-.86.02-1.54-.7-1.54-1.56m8.71 4.14C14.63 18.92 12.59 19 12 19c-.61 0-2.65-.1-3.71-1.16a.4.4 0 0 1 0-.57.4.4 0 0 1 .57 0c.68.68 2.14.91 3.14.91s2.47-.23 3.14-.91a.4.4 0 0 1 .57 0c.14.16.14.41 0 .57m-.29-2.56c-.86 0-1.56-.7-1.56-1.56a1.56 1.56 0 0 1 1.56-1.56c.86 0 1.58.7 1.58 1.56a1.6 1.6 0 0 1-1.58 1.56z"></path>
    </svg>
)

export default ({ href, name, row = false }) => {
    const url = `${global.window && global.window.location.origin}${href}`

    const classes = useStyles({})
    const direction = row ? classes.containerRow : classes.containerColumn

    return (
        <div className={direction}>
            <div className={classes.iconContainer}>
                <LinkedinShareButton url={url} title={name}>
                    <LinkedIn />
                </LinkedinShareButton>
            </div>
            <div className={classes.iconContainer}>
                <TwitterShareButton url={url} title={name}>
                    <Twitter />
                </TwitterShareButton>
            </div>

            <div className={classes.iconContainer}>
                <RedditShareButton url={url} title={name}>
                    <Reddit />
                </RedditShareButton>
            </div>
        </div>
    )
}
