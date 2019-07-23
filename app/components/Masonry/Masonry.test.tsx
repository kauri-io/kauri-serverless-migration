import Masonry from './index'

import { mountWithTheme } from '../../setupTests'

const props = {}

describe('components/Masonry', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(
            <Masonry {...props}>
                <div>Test</div>
            </Masonry>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
