interface IColors {
    [key: string]: string
    padding: string
    paddingTop: string
    primaryColor: string
    secondaryColor: string
    primaryTextColor: string
    secondaryTextColor: string
    hoverTextColor: string
    disabledTextColor: string
    tertiaryBackgroundColor: string
    disabledBackgroundColor: string
    contentBorder: string
    errorRedColor: string
    bgPrimary: string
    bgSecondary: string
    textPrimary: string
    primary: string
    primaryDark: string
    secondary: string
    secondaryBlue: string
    secondaryBlueDark: string
    white: string
    divider: string
    borderTextArea: string
}

type FontSizes = number[]

type FontWeight = Array<number | string>

type Breakpoints = string[]

type Space = number[]

const colors: IColors = {
    bgPrimary: '#1E2428',
    bgSecondary: '#1E3D3B',
    borderTextArea: '#979797',
    contentBorder: '1px solid rgba(30, 36, 40, 0.19)',
    disabledBackgroundColor: '#D6D6D6',
    disabledTextColor: '#9B9B9B',
    divider: '#EBEBEB',
    errorRedColor: '#C03030',
    hoverTextColor: '#108E72',
    padding: 'calc((100vw - ${props => props.theme.breakpoints[2]}) / 2)',
    paddingTop: '2.5em',
    primary: '#0BA986',
    primaryColor: '#0BA986',
    primaryDark: '#11856B',
    primaryTextColor: '#1E2428',
    secondary: '#11856B',
    secondaryBlue: 'rgb(81, 123, 162, 1)',
    secondaryBlueDark: 'rgb(81, 118, 142, 1)',
    secondaryColor: '#1E3D3B',
    secondaryTextColor: '#283035',
    tertiaryBackgroundColor: '#F7F7F7',
    textPrimary: '#1E2428',
    white: '#FFFFFF',
}

const MAIN_BODY_WIDTH = 1272

export const DEFAULT_CARD_WIDTH = 288

const fontSizes: FontSizes = [11, 13, 14, 16, 18, 20, 22, 28, 32]

const fontWeight: FontWeight = [300, 'normal', 500, 700]

const breakpoints: Breakpoints = ['500px', '52em', `${MAIN_BODY_WIDTH}px`]

const space: Space = [0, 10, 15, 30, 60]

const padContent = `
    max-width: ${MAIN_BODY_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${breakpoints[2]}) {
      min-width: ${MAIN_BODY_WIDTH}px;
    }
    @media (max-width: ${breakpoints[2]}) {
      min-width: 90%;
    }
  `

const themeConfig = {
    bg: colors,
    breakpoints,
    colors,
    fontSizes,
    fontWeight,
    space,
    ...colors, // TODO: Deprecate across the app
    padding: `calc((100vw - ${MAIN_BODY_WIDTH}px) / 2)`,
    padContent,
    paddingTop: '2.5em',
    DEFAULT_CARD_WIDTH,
    MAIN_BODY_WIDTH,
}

export type IThemeInterface = typeof themeConfig

export default themeConfig
