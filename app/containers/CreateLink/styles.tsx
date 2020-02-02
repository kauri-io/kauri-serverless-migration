import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
    return {
        navbar: {
            margin: 'auto',
            maxWidth: 1272,
            width: '100%',
            justifyContent: 'space-between',
        },
        logo: {
            height: 30,
            marginRight: theme.spacing(2),
            width: 30,
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        details: {
            maxWidth: 870,
            margin: 'auto',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
        },
        editor: {
            maxWidth: 870,
            margin: 'auto',
            marginTop: theme.spacing(2),
            padding: theme.spacing(0, 2, 2, 2),
        },
        linkInputContainer: {
            padding: theme.spacing(2),
            maxWidth: 870,
            margin: '32px auto',
        },
        linkInput: {},
        preview: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: theme.spacing(2),
        },
        fullPreview: {
            background: theme.palette.common.white,
            margin: 'auto',
            maxWidth: 870,
            padding: theme.spacing(3),
        },
        previewText: {
            width: '100%',
        },
        error: {
            color: theme.palette.error.main,
            marginTop: theme.spacing(1),
        },
        existing: {
            marginTop: theme.spacing(2),
        },
    }
})
