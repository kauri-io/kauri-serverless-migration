import Divider from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {}

describe('components/Divider', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<Divider {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
