import EmailVerification from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/EmailVerification', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EmailVerification {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
