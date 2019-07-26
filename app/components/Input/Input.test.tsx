import { Input } from './index'

import { mountWithTheme } from '../../setupTests'

describe('components/Input', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<Input />)
        expect(wrapper).toMatchSnapshot()
    })
})
