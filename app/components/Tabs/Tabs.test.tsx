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
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<Tabs {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
