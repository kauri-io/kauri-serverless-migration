import FeaturedContent from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    content: [],
    Link: jest.fn(),
}

describe('components/FeaturedContent', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<FeaturedContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
