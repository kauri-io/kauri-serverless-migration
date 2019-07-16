import AddIcon from './AddIcon'
import UploadIcon from './UploadIcon'

import { shallowWithTheme } from '../../setupTests'

describe('components/AddIcon', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<AddIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadIcon', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<UploadIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})
