import CuratedCategories from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    content: [
        {
            category: 'test',
            description: 'test',
            background: 'https://test.com/image.png',
        },
    ],
}

describe('components/CuratedCategory', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<CuratedCategories {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
