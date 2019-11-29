import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
    return {
        authorAvatar: {
            marginRight: theme.spacing(2),
        },
        buttons: {
            alignItems: 'center',
            display: 'flex',
        },
        card: {},
        centralColumn: {},
        content: {
            background: theme.palette.common.white,
            padding: theme.spacing(3),
        },
        related: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        controls: {
            '& svg': {
                marginLeft: theme.spacing(2),
            },
            alignItems: 'center',
            display: 'flex',
            marginTop: theme.spacing(2),
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
            position: 'fixed',
        },
        header: {
            background: theme.palette.common.white,
            padding: theme.spacing(0, 2, 2, 2),
            position: 'relative',
        },
        recommended: {},
        root: {
            minHeight: '100%',
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
        title: {
            margin: theme.spacing(1, 0),
        },
        url: {
            margin: theme.spacing(1, 0),
        },
        description: {
            margin: theme.spacing(2, 0),
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
        ctaContainer: {
            padding: theme.spacing(2),
            borderBottom: '1px solid #cbcbcb',
        },
        buttonIcon: {
            marginRight: theme.spacing(1),
        },
        summary: {
            margin: theme.spacing(2, 0, 0, 0),
        },
        nameAndDate: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
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
        social: {
            '& > *': {
                marginLeft: theme.spacing(2),
            },
        },
    }
})
