import DiffViewer from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    current: '# this is a test',
    proposed: '# this is an update to the test',
}

describe('components/DiffViewer', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<DiffViewer {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
