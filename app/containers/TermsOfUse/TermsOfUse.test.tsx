import TermsOfUse from './index'
import { mountWithTheme } from '../../setupTests'

describe('containers/TermsOfUse', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithTheme(<TermsOfUse {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
