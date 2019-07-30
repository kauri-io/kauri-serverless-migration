import Loading from './index'

import { mountWithTheme } from '../../setupTests'

let props = {}

describe('components/Loading', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<Loading {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
