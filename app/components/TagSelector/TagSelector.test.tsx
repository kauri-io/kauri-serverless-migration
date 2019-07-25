import TagSelector from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {}

describe('components/TagSelector', () => {
    it('should match snapshot', () => {
        const wrapper = shallowWithTheme(<TagSelector {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
