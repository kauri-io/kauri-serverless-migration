import CuratedCategory from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    linkComponent: (e: any) => e,
    category: 'test',
    description: 'test',
    background: 'https://test.com/image.png',
}

describe('components/CuratedCategory', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<CuratedCategory {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
