import TermsOfUse from './index'
import { mountWithTheme } from '../../setupTests'

describe('containers/TermsOfUse', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithTheme(<TermsOfUse {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
