import EditProfile from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { getMyProfile_getMyProfile } from '../../queries/__generated__/getMyProfile';
import { UserStatusInput } from '../../__generated__/globalTypes';

const saveUserDetailsAction = jest.fn()

describe('containers/EditProfile', () => {
    it('should match snapshot', () => {
        const props = {
            showNotificationAction: jest.fn(),
            routeChangeAction: jest.fn(),
            router: {
                query: {
                    r: 'route',
                    redirected: true,
                },
            },
            OwnProfile: {
                getMyProfile:
                {
                    __typename: 'UserDTO' as getMyProfile_getMyProfile['__typename'],
                    id: '123',
                    name: 'test name',
                    username: 'test username',
                    email: 'test@test.com',
                    dateCreated: '2019-01-01',
                    title: 'title', website: 'website', avatar: 'avatar', social: {
                        github: 'github',
                        twitter: 'twitter'
                    },
                    status: UserStatusInput.CREATED, communities: [], subscriptions: {
                        newsletter: false
                    }
                },
            },
            userId: '123',
            user: {
                id: '123',
                name: 'test name',
                username: 'test userename',
                email: 'test@test.com',
                dateCreated: '2019-01-01',
            },
            saveUserDetailsAction
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EditProfile {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
