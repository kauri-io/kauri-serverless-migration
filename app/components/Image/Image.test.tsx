import Image from './index'
import { mount } from 'enzyme'

let props = {
    image: 'http://test.com/image.png',
    width: 100,
}

describe('components/Image', () => {
    it('snapshot should match', () => {
        const wrapper = mount(<Image {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
