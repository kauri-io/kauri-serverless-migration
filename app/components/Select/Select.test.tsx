import Select from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/Select', () => {
    it('should match snapshot', () => {
        const SelectProps = {
            placeHolder: 'select me',
            value: 'test',
        }

        const wrapper = mountWithRedux(
            <Select {...SelectProps}>
                <div>Test</div>
            </Select>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
