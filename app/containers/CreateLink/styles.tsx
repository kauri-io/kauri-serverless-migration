import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
    return {
        navbar: {
            margin: 'auto',
            maxWidth: 1242,
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
            maxWidth: 800,
            margin: 'auto',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2),
        },
        editor: {
            maxWidth: 800,
            margin: 'auto',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
        },
        linkInputContainer: {
            padding: theme.spacing(2),
            maxWidth: 800,
            margin: 'auto',
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
            maxWidth: 800,
            padding: theme.spacing(3)
        }
    }
})
