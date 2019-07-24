import Articles from './Articles/index'
import Collections from './Collections/index'
import Communities from './Communities/index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/Discover/Articles', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <Articles {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
describe('containers/Discover/Collections', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <Collections {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('containers/Discover/Communities', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <Communities {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
