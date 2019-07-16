import DiffViewer from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    current: '# this is a test',
    proposed: '# this is an update to the test',
}

describe('components/DiffViewer', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<DiffViewer {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
