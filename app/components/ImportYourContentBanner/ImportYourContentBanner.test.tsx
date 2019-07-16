import ImportYourContentBanner from './index'

import { mountWithTheme } from '../../setupTests'

describe('components/ImportYourContentBanner', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<ImportYourContentBanner />)
        expect(wrapper).toMatchSnapshot()
    })
})
