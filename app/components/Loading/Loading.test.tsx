import Loading from './index'

import { shallowWithTheme } from '../../setupTests'

let props = {}

describe('components/Loading', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<Loading {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
