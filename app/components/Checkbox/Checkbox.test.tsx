import Checkbox from './index'
import { shallowWithTheme } from '../../setupTests'

describe('components/Checkbox', () => {
    it('should match snapshot with checked true and disabled false', () => {
        const props = {
            checked: true,
            disabled: false,
            onChange: (e: boolean) => e,
        }
        const wrapper = shallowWithTheme(<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot with checked false and disabled true', () => {
        const props = {
            checked: false,
            disabled: true,
            onChange: (e: boolean) => e,
        }
        const wrapper = shallowWithTheme(<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
