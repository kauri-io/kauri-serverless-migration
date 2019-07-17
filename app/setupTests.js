import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import theme from './lib/theme-config'
import { ThemeProvider } from 'styled-components'

Enzyme.configure({ adapter: new Adapter() })

const observeMock = {
    observe: () => null,
    disconnect: () => null, // maybe not needed
}

window.IntersectionObserver = () => observeMock

export const mountWithTheme = children =>
    mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const renderWithTheme = children =>
    render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export const shallowWithTheme = children =>
    shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
