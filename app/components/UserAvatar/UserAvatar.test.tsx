import UserAvatar from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    avatar: 'https://test.com/image.png',
}

describe('components/UserAvatar', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<UserAvatar {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
