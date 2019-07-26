import SearchResults from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/SearchResults', () => {
    it('should match snapshot', () => {
        const props = {
            query: {
                q: 'eth',
            },
            router: {},
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <SearchResults {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
