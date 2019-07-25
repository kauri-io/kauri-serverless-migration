import SignupBanner from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    linkComponent: jest.fn(),
}

describe('components/SignupBanner', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<SignupBanner {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
