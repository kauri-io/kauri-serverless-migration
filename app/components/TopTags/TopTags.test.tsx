import TopTags from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    tags: ['test', 'solidity', 'typescript'],
    routeChangeAction: jest.fn(),
}

describe('components/TopTags', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<TopTags {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
