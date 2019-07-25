import EditProfileForm from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { getMyProfile_getMyProfile } from '../../queries/__generated__/getMyProfile'
import { UserStatusInput } from '../../__generated__/globalTypes'

describe('containers/EditProfileForm', () => {
    it('should match snapshot', () => {
        const props = {
            OwnProfile: {
                getMyProfile: {
                    __typename: 'UserDTO' as getMyProfile_getMyProfile['__typename'],
                    id: '123',
                    email: 'email@test.com',
                    username: 'test username',
                    name: 'test name',
                    title: 'test title',
                    website: 'test website',
                    avatar: 'test avatar',
                    social: {
                        twitter: 'test twitter',
                        github: 'test github',
                    },
                    status: UserStatusInput.EMAIL_VERIFIED,
                    communities: [],
                    subscriptions: {},
                    dateCreated: '2019-01-01',
                },
            },
            saveUserDetailsAction: jest.fn(),
            resendEmailVerificationAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EditProfileForm {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
