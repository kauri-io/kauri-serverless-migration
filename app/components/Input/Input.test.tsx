import { Input } from './index'

import { mountWithTheme  } from '../../setupTests'

describe('components/Input', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<Input />)
        expect(wrapper).toMatchSnapshot()
    })
})
