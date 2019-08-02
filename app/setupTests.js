import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import theme from './lib/theme-config'
import { ThemeProvider } from 'styled-components'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {
    app: {
        user: null
    }
}
const store = mockStore(initialState)


Enzyme.configure({ adapter: new Adapter() })

const observeMock = {
    unobserve: () => null,
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


export const mountWithRedux = children =>
    mount(<Provider store={store}><ThemeProvider theme={theme}>{children}</ThemeProvider></Provider>)

export const renderWithRedux = children =>
    render(<Provider store={store}><ThemeProvider theme={theme}>{children}</ThemeProvider></Provider>)

export const shallowWithRedux = children =>
    shallow(<Provider store={store}><ThemeProvider theme={theme}>{children}</ThemeProvider></Provider>)
