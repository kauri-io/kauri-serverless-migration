import HoverDateLabel, { HoverDateStatus } from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    date: '2019-01-01',
    status: 'PUBLISHED' as HoverDateStatus,
}

describe('components/HoverDateLabel', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<HoverDateLabel {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
