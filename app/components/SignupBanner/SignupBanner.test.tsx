import SignupBanner from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    linkComponent: jest.fn(),
}

describe('components/SignupBanner', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<SignupBanner {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
