import Footer from './index'
import { mountWithTheme  } from '../../setupTests'

describe('components/Footer', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<Footer />)
        expect(wrapper).toMatchSnapshot()
    })
})
