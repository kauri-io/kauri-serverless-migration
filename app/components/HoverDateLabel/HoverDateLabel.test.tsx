import HoverDateLabel, { HoverDateStatus } from './index'
// import { mountWithTheme } from '../../setupTests'
import { shallow } from 'enzyme'

let props = {
    date: '2019-01-01',
    status: 'PUBLISHED' as HoverDateStatus,
}

describe('components/HoverDateLabel', () => {
    let wrapper = shallow(<HoverDateLabel {...props} />)
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should handle mouseEnter', () => {
        wrapper = shallow(<HoverDateLabel {...props} />)
        wrapper.simulate('mouseEnter')
        expect(wrapper.state('hovered')).toBe(true)
    })

    it('should handle mouseLeave', () => {
        wrapper.simulate('mouseLeave')
        expect(wrapper.state('hovered')).toBe(false)
    })

    it('should handle Drafted state', () => {
        wrapper.setProps({ status: 'DRAFT' })
        wrapper.simulate('mouseEnter')
        expect(wrapper.text()).toBe('Drafted 01 Jan 2019 00:00')
    })
})
