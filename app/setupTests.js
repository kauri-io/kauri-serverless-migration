import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import theme from './lib/theme-config'
import { ThemeProvider } from 'styled-components'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { ThemeProvider as MaterialTheme } from '@material-ui/styles'
import materialTheme from './lib/mui-theme'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {
    app: {
        user: {
            id: 'testid',
            username: 'test-username',
            communities: []
        }
    }
}
const store = mockStore(initialState)


Enzyme.configure({ adapter: new Adapter() })

const IntersectionObserver = jest.fn(() => ({
    unobserve: () => null,
    observe: () => null,
    disconnect: () => null, // maybe not needed
}))

window.IntersectionObserver = IntersectionObserver

export const mountWithTheme = children =>
    mount(<MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme>)

export const renderWithTheme = children =>
    render(<MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme>)

export const shallowWithTheme = children =>
    shallow(<MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme>)


export const mountWithRedux = children =>
    mount(<Provider store={store}><MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme></Provider>)

export const renderWithRedux = children =>
    render(<Provider store={store}><MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme></Provider>)

export const shallowWithRedux = children =>
    shallow(<Provider store={store}><MaterialTheme theme={materialTheme}><ThemeProvider theme={theme}>{children}</ThemeProvider></MaterialTheme></Provider>)
