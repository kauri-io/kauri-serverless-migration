import Divider from './index'
import { mountWithTheme  } from '../../setupTests'

let props = {}

describe('components/Divider', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<Divider {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
