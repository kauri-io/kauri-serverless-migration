import TopTags from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    tags: ['test', 'solidity', 'typescript'],
    routeChangeAction: jest.fn(),
}

describe('components/TopTags', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<TopTags {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
