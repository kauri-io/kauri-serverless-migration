import Masonry from './index'

import { mountWithTheme } from '../../setupTests'

const props = {}

describe('components/Masonry', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <Masonry {...props}>
                <div>Test</div>
            </Masonry>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
