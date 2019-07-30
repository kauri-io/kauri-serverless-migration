import View from './View'
import { shallow } from 'enzyme'
import { Community } from '../../mocks'
import { Community as CommunityType } from '../../queries/Fragments/__generated__/Community'

describe('containers/ChooseCommunityCollectionCard', () => {
    it('should match the snapshot', () => {
        const props = {
            passChangeTabFunction: jest.fn(),
            searchCommunityPublishedCollections: {
                loading: false,
                getCommunityContent: Community.data
                    .getCommunity as CommunityType,
            },
        }
        const wrapper = shallow(<View {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
