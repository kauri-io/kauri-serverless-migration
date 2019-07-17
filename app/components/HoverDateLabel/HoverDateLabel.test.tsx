import HoverDateLabel, { HoverDateStatus } from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    date: '2019-01-01',
    status: 'PUBLISHED' as HoverDateStatus,
}

describe('components/HoverDateLabel', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<HoverDateLabel {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
