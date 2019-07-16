import Checkbox from './index'
import { mountWithTheme  } from '../../setupTests'

let props = {
    checked: true,
    disabled: false,
    onChange: (e: any) => e,
}

describe('components/Checkbox', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
