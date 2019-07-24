import Image from './index'
import { mount } from 'enzyme'

describe('components/Image', () => {
    it('snapshot should match', () => {
        let props = {
            image: 'http://test.com/image.png',
            width: 100,
        }
        const wrapper = mount(<Image {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
