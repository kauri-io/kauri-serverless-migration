import { mountWithRedux } from '../../setupTests'
import Community from './View'
import { Community as mock } from '../../mocks'
import { MockedProvider } from 'react-apollo/test-utils'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'

describe('containers/Community/View', () => {
    it('should match the snapshot', () => {
        const props = {
            acceptCommunityInvitationAction: jest.fn(),
            currentUser: '123',
            isCommunityAdmin: false,
            secret: null,
            communityId: '234',
            data: {
                getCommunity: mock.data
                    .getCommunity as getCommunity_getCommunity,
            },
            closeModalAction: jest.fn(),
            openModalAction: jest.fn(),
            routeChangeAction: jest.fn(),
            removeResourceAction: jest.fn(),
            curateCommunityResourcesAction: jest.fn(),
            sendCommunityInvitationAction: jest.fn(),
            transferArticleToCommunityAction: jest.fn(),
            changeOwnerExtenalLinkAction: jest.fn(),
            showNotificationAction: jest.fn(),
            isLoggedIn: true,
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <Community {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
