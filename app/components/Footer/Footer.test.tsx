import Footer from './index'
import { shallowWithTheme } from '../../setupTests'

describe('components/Footer', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<Footer />)
        expect(wrapper).toMatchSnapshot()
    })
})
