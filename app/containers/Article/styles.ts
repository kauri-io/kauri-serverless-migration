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
                fontWeight: 600,
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
            height: '100%',
            justifyContent: 'flex-start',
            overflowY: 'scroll',
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
            '& svg': {
                margin: theme.spacing(1),
            },
        },
        tag: {
            transition: 'all 0.2s',
            cursor: 'pointer',
            margin: theme.spacing(1),
            textTransform: 'capitalize',
            '&.MuiChip-outlined': {
                borderColor: 'rgba(102, 102, 102, 1)',
            },
            '&:hover': {
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
        header: {
            background: theme.palette.common.white,
            padding: theme.spacing(2),
        },
        headerImage: {
            padding: theme.spacing(0, 2),
            background: theme.palette.common.white,
        },
        nameAndDate: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.down('md')]: {
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
                fontWeight: 600,
            },
        },
        toolbar: {
            marginBottom: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            justifyContent: 'space-around',
            borderBottom: '1px solid #cbcbcb',
            display: 'flex',
            flexDirection: 'row',
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
        },
    }
})
