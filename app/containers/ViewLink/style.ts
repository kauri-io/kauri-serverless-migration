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
            padding: theme.spacing(3),
        },
        recommended: {},
        root: {
            minHeight: '100%',
        },
        tool: {
            display: 'flex',
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
                color: theme.palette.common.white
            }
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
    }
})
