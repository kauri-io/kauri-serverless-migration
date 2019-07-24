import Tabs from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    tabs: [
        { name: 'First', callback: jest.fn() },
        { name: 'second', callback: jest.fn() },
    ],
    panels: [<div>Test</div>, <div>Test 2</div>],
}

describe('components/Tabs', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<Tabs {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
