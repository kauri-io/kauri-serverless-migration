import AddIcon from './AddIcon'
import UploadIcon from './UploadIcon'

import { shallow } from 'enzyme'

describe('components/AddIcon', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<AddIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadIcon', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<UploadIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})
