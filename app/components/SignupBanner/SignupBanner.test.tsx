import SignupBanner from './index'
import { mountWithTheme } from '../../setupTests'

describe('components/SignupBanner', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<SignupBanner />)
        expect(wrapper).toMatchSnapshot()
    })
})
