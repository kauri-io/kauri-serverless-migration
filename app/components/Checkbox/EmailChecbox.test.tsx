import EmailCheckbox from './EmailCheckbox'
import { mountWithTheme } from '../../setupTests'

let props = {
    checked: true,
    disabled: false,
    onChange: (e: boolean) => e,
}

describe('components/EmailCheckbox', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<EmailCheckbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
