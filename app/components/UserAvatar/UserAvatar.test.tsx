import UserAvatar from './index'
import { mountWithTheme  } from '../../setupTests'

let props = {
    avatar: 'https://test.com/image.png',
}

describe('components/UserAvatar', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<UserAvatar {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
