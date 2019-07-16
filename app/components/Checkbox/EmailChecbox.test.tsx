import EmailCheckbox from './EmailCheckbox'
import { shallowWithTheme } from '../../setupTests'

let props = {
    checked: true,
    disabled: false,
    onChange: (e: any) => e,
}

describe('components/EmailCheckbox', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<EmailCheckbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
