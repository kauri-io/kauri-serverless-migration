import ModalHeader from './ModalHeader'
import { shallowWithTheme } from '../../setupTests'

let props = {
    title: <div>Test</div>,
    actions: <div>Test Button</div>,
}

describe('components/ModalHeader', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<ModalHeader {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
