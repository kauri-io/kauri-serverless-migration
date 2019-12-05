import Articles from './Articles/index'
import Collections from './Collections/index'
import Communities from './Communities/index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'

describe('containers/Discover/Articles', () => {
    it('should match snapshot', () => {
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
    it('should match snapshot', () => {
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
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <Communities {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
