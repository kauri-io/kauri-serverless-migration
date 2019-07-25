import LoginForm from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/LoginForm', () => {
    it('should match snapshot', () => {
        const props = {
            registerAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <LoginForm {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
