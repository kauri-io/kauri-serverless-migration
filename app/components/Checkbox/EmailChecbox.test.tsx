import EmailCheckbox from './EmailCheckbox'
import { mountWithTheme } from '../../setupTests'

let props = {
    checked: true,
    disabled: false,
    onChange: (e: any) => e,
}

describe('components/EmailCheckbox', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<EmailCheckbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
