import EditProfile from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'
import {
    getMyProfile_getMyProfile,
    getMyProfile_getMyProfile_articles,
    getMyProfile_getMyProfile_collections,
} from '../../queries/__generated__/getMyProfile'
import { UserStatusInput } from '../../__generated__/globalTypes'

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
                getMyProfile: {
                    __typename: 'UserDTO' as getMyProfile_getMyProfile['__typename'],
                    id: '123',
                    name: 'test name',
                    username: 'test username',
                    email: 'test@test.com',
                    dateCreated: '2019-01-01',
                    title: 'title',
                    website: 'website',
                    avatar: 'avatar',
                    social: {
                        github: 'github',
                        twitter: 'twitter',
                    },
                    status: UserStatusInput.CREATED,
                    communities: [],
                    subscriptions: {
                        newsletter: false,
                    },
                    articles: {
                        __typename: 'ResponsePage_ArticleDTO' as getMyProfile_getMyProfile_articles['__typename'],
                        totalElements: 5,
                    },
                    collections: {
                        __typename: 'ResponsePage_CollectionDTO' as getMyProfile_getMyProfile_collections['__typename'],
                        totalElements: 2,
                    },
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
            saveUserDetailsAction,
            resendEmailVerificationAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EditProfile {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
