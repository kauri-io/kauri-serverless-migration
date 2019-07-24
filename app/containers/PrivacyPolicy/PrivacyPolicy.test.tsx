import PrivacyPolicy from './index'
import { mountWithRedux } from '../../setupTests'

describe('containers/PrivacyPolicy', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(<PrivacyPolicy {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
