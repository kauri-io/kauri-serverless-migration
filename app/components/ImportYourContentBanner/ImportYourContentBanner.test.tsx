import ImportYourContentBanner from './index'

import { shallowWithTheme } from '../../setupTests'

describe('components/ImportYourContentBanner', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<ImportYourContentBanner />)
        expect(wrapper).toMatchSnapshot()
    })
})
