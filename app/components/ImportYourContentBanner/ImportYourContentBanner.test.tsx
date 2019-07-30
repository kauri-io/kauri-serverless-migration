import ImportYourContentBanner from './index'

import { mountWithTheme } from '../../setupTests'

describe('components/ImportYourContentBanner', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<ImportYourContentBanner />)
        expect(wrapper).toMatchSnapshot()
    })
})
