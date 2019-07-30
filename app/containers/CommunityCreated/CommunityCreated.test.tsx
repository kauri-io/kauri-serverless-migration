import { shallow } from 'enzyme'
import CommunityCreated, { IProps } from './View'
import { Community } from '../../mocks'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'

describe('containers/CommunityCreated/View', () => {
    it('should match the snapshot', () => {
        const props = {
            data: {
                getCommunity: Community.data
                    .getCommunity as getCommunity_getCommunity,
            },
            routeChangeAction: jest.fn(),
            type: 'updated' as IProps['type'],
        }
        const wrapper = shallow(<CommunityCreated {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
