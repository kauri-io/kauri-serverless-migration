import Checkbox from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    checked: true,
    disabled: false,
    onChange: (e: any) => e,
}

describe('components/Checkbox', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
