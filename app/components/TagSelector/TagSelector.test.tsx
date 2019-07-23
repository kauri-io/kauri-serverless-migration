import TagSelector from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {}

describe('components/TagSelector', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<TagSelector {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
