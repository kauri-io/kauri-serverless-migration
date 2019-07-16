import Loading from './index'

import { mountWithTheme  } from '../../setupTests'

let props = {}

describe('components/Loading', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<Loading {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
