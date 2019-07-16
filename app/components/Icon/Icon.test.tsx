import AddIcon from './AddIcon'
import UploadIcon from './UploadIcon'

import { mountWithTheme  } from '../../setupTests'

describe('components/AddIcon', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<AddIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadIcon', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<UploadIcon />)
        expect(wrapper).toMatchSnapshot()
    })
})
