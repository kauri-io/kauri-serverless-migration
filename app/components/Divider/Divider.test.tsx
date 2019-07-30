import Divider from './index'
import { mountWithTheme } from '../../setupTests'

let props = {}

describe('components/Divider', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<Divider {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
