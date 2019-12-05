import EmailVerification from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'
describe('containers/EmailVerification', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EmailVerification {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
