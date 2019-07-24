import Checkbox from './index'
import { mountWithTheme } from '../../setupTests'

describe('components/Checkbox', () => {
    it('snapshot should match with checked true and disabled false', () => {
        const props = {
            checked: true,
            disabled: false,
            onChange: (e: boolean) => e,
        }
        const wrapper = mountWithTheme(<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('snapshot should match with checked false and disabled true', () => {
        const props = {
            checked: false,
            disabled: true,
            onChange: (e: boolean) => e,
        }
        const wrapper = mountWithTheme(<Checkbox {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
