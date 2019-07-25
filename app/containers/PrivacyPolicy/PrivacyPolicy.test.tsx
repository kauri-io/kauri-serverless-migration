import PrivacyPolicy from './index'
import { mountWithRedux } from '../../setupTests'

describe('containers/PrivacyPolicy', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(<PrivacyPolicy {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
