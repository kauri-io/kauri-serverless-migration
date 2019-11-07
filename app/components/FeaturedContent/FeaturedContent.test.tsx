import FeaturedContent from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    content: [],
    isLoggedIn: true,
    openModalAction: jest.fn(),
    routeChangeAction: jest.fn(),
    Link: jest.fn(),
}

describe('components/FeaturedContent', () => {
    it('should match snapshot', () => {
        const wrapper = shallowWithTheme(<FeaturedContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
