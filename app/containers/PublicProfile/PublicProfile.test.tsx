import PublicProfile from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/PublicProfile', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <PublicProfile {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
