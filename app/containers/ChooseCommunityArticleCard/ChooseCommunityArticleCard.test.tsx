import ChooseCommunityArticleCard from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/ChooseCommunityArticleCard', () => {
    it('snapshot should match', () => {
        const props = {}
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ChooseCommunityArticleCard {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
