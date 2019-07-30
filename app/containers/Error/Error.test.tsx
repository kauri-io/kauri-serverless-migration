import Error from './index'
import { mountWithTheme } from '../../setupTests'

describe('containers/Error', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithTheme(<Error {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
