import Image from './index'
import { mount } from 'enzyme'

let props = {
    image: 'http://test.com/image.png',
    width: 100,
}

describe('components/Image', () => {
    const observeMock = {
        observe: () => null,
        disconnect: () => null, // maybe not needed
    }

    beforeEach(async () => {
        ;(window as any).IntersectionObserver = () => observeMock
    })

    it('snapshot should match', () => {
        const wrapper = mount(<Image {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
