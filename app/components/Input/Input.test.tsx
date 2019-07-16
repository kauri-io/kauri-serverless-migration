import { Input } from './index'

import { shallowWithTheme } from '../../setupTests'

describe('components/Input', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<Input />)
        expect(wrapper).toMatchSnapshot()
    })
})
