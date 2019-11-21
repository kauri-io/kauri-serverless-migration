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
        controlsMobile: {
            '& svg': {
                marginLeft: theme.spacing(2),
            },
            alignItems: 'center',
            display: 'flex',
            marginBottom: theme.spacing(2),
            justifyContent: 'space-between',
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
        header: {
            background: theme.palette.common.white,
            padding: theme.spacing(2),
        },
        headerImage: {
            padding: theme.spacing(0, 2),
            background: theme.palette.common.white,
        },
        recommended: {},
        root: {
            minHeight: '100%',
        },
    }
})
