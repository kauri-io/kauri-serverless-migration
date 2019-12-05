import ChooseCommunityArticleCard from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'

describe('containers/ChooseCommunityArticleCard', () => {
    it('should match snapshot', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ChooseCommunityArticleCard {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
