import Navbar from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/Navbar', () => {
    it('should match snapshot', () => {
        const NavbarProps = {}

        const wrapper = mountWithRedux(<Navbar {...NavbarProps} />)
        expect(wrapper).toMatchSnapshot()
    })
})
