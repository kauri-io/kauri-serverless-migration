import Footer from './index'
import { mountWithTheme } from '../../setupTests'

describe('components/Footer', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<Footer />)
        expect(wrapper).toMatchSnapshot()
    })
})
