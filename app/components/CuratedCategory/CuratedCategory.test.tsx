import CuratedCategory from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    linkComponent: (e: any) => e,
    category: 'test',
    description: 'test',
    background: 'https://test.com/image.png',
}

describe('components/CuratedCategory', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<CuratedCategory {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
