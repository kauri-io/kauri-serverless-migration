import Error from './index'
import { mountWithTheme } from '../../setupTests'

describe('containers/Error', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithTheme(<Error {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
