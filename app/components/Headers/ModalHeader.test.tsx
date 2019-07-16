import ModalHeader from './ModalHeader'
import { mountWithTheme  } from '../../setupTests'

let props = {
    title: <div>Test</div>,
    actions: <div>Test Button</div>,
}

describe('components/ModalHeader', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<ModalHeader {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
