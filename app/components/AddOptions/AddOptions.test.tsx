import AddOptions from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {}

describe('components/AddOptions', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(
            <AddOptions {...props}>
                <div>test</div>
            </AddOptions>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
