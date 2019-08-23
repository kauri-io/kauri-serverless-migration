import Error from './index'
import { mountWithTheme } from '../../setupTests'

describe('containers/Error', () => {
    it('should match snapshot', () => {
        const props = { code: '404' }
        const wrapper = mountWithTheme(<Error {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
