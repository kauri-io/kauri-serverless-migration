import LoginForm from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import testEpic from '../../lib/test-epic'
import loginEpic, { registerAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

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
