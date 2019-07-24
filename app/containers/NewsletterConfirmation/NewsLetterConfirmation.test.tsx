import NewsLetterConfirmation from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/NewsLetterConfirmation', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <NewsLetterConfirmation {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
