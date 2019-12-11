import { Theme, makeStyles } from '@material-ui/core/styles'

export const ArticleStyles = makeStyles((theme: Theme) => {
    return {
        authorAvatar: {
            marginRight: theme.spacing(2),
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2),
            '& > *': {
                fontWeight: 500,
                marginBottom: theme.spacing(2),
            },
        },
        buttons: {
            alignItems: 'center',
            display: 'flex',
        },
        card: {},
        centralColumn: {},
        content: {
            background: theme.palette.common.white,
            padding: theme.spacing(2),
        },
        floaterContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        floaterLeft: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: theme.spacing(5),
            position: 'fixed',
        },
        floaterRight: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: theme.spacing(2, 2, 20, 2),
            position: 'relative',
        },
        checkpointAndIPFS: {
            [theme.breakpoints.down('lg')]: {
                display: 'flex',
                flexDirection: 'column',
            },
            [theme.breakpoints.up('lg')]: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
        },
        tags: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2),
            flexWrap: 'wrap',
            '& svg': {
                margin: theme.spacing(1),
            },
        },
        tag: {
            transition: 'all 0.2s',
            cursor: 'pointer',
            margin: theme.spacing(1),
            '&:hover': {
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
        header: {
            background: theme.palette.common.white,
            padding: theme.spacing(0, 2),
            position: 'relative',
        },
        headerImage: {
            padding: theme.spacing(2),
            background: theme.palette.common.white,
            '& > *': {
                width: '100%',
            },
        },
        nameAndDate: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: theme.spacing(2),
                paddingTop: theme.spacing(8),
            },
            [theme.breakpoints.down('md')]: {
                paddingTop: theme.spacing(2),
                flexDirection: 'column',
                '& > *': {
                    marginBottom: theme.spacing(1),
                },
            },
        },
        tool: {
            display: 'flex',
            cursor: 'pointer',
            '& > *': {
                marginRight: theme.spacing(1),
                fontWeight: 500,
            },
        },
        toolbar: {
            padding: theme.spacing(2, 0),
            justifyContent: 'space-around',
            borderBottom: '1px solid #cbcbcb',
            display: 'flex',
            flexDirection: 'row',
            position: 'fixed',
            background: theme.palette.common.white,
            zIndex: 1,
            width: '100%',
            maxWidth: 808,
        },
        iconContainer: {
            '& span': {
                display: 'none',
            },
            height: 24,
            width: 24,
            margin: theme.spacing(1),
        },
        root: {
            border: 'none',
        },
        container: {
            height: 200,
            display: 'flex',
            flexDirection: 'column',
        },
        contentLink: {
            color: theme.palette.primary.main,
            fontWeight: 600,
            margin: theme.spacing(1),
        },
    }
})
