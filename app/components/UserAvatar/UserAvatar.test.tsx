import UserAvatar, { IProps } from './index'
import { mountWithTheme } from '../../setupTests'

let props: IProps = {
    avatar: 'https://test.com/image.png',
}

describe('components/UserAvatar', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<UserAvatar {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
