import AddOptions from './index'
import { mountWithTheme } from '../../setupTests'

let props = {}

describe('components/AddOptions', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <AddOptions {...props}>
                <div>test</div>
            </AddOptions>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
