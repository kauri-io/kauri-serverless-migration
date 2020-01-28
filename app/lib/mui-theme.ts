import { createMuiTheme } from '@material-ui/core/styles'

const disabledColour = '#e0e0e0'

export default createMuiTheme({
    palette: {
        common: {
            black: '#1E2428',
        },
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#0BA986',
        },
        secondary: {
            main: '#ffffff',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    overrides: {
        MuiButton: {
            contained: {
                '&&:disabled': {
                    backgroundColor: disabledColour,
                },
            },
            containedPrimary: {
                color: '#fff',
            },
            outlined: {
                '&&:disabled': {
                    backgroundColor: disabledColour,
                },
            },
        },
    },
})
