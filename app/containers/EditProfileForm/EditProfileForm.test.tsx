import EditProfileForm, { StyledUpload } from './View'
import { shallow } from 'enzyme'
import { getMyProfile_getMyProfile } from '../../queries/__generated__/getMyProfile'
import { UserStatusInput } from '../../__generated__/globalTypes'
import { saveUserDetailsEpic, saveUserDetailsAction } from './Module'
import testEpic from '../../lib/test-epic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import EmailCheckbox from '../../components/Checkbox/EmailCheckbox'
import Input from '../../components/Input/Input'
import EmailField from './EmailField'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

describe('containers/EditProfileForm', () => {
    let mockProfile,
        mockState,
        callback,
        mockApolloClient,
        mockApolloSubscriber,
        getResultingActions,
        wrapper,
        props

    beforeAll(() => {
        callback = jest.fn()
        mockProfile = {
            id: '1234567890',
        }

        mockState = {
            user: mockProfile,
        }

        mockApolloClient = {
            mutate: () =>
                Promise.resolve({ data: { saveUser: { hash: 'testHash' } } }),
            query: () =>
                Promise.resolve({ data: { getMyProfile: mockProfile } }),
        }

        mockApolloSubscriber = () => Promise.resolve({ data: { output: {} } })

        getResultingActions = async (apolloSubscriber, sourceAction) =>
            await testEpic(
                saveUserDetailsEpic,
                sourceAction,
                { app: mockState },
                {
                    apolloClient: mockApolloClient,
                    apolloSubscriber,
                }
            )
    })

    it('should update the profile on the server and return a success action', async () => {
        const sourceAction = saveUserDetailsAction(
            {
                name: 'test',
                redirectURL: 'testRedirectURL',
            },
            callback
        )

        const expectedActions = [
            routeChangeAction('testRedirectURL'),
            {
                type: 'UPDATE_USER_SUCCESS',
            },
            showNotificationAction({
                notificationType: 'success',
                message: 'Submission Successful',
                description: 'You have successfully updated your profile',
            } as any),
        ]

        const resultingActions = await getResultingActions(
            mockApolloSubscriber,
            sourceAction
        )

        expect(resultingActions).toEqual(expectedActions)
    })

    it('should fire the callback if provided', async () => {
        const sourceAction = saveUserDetailsAction(
            {
                name: 'test',
                redirectURL: 'testRedirectURL',
            },
            callback
        )
        await getResultingActions(mockApolloSubscriber, sourceAction)
        expect(callback).toHaveBeenCalled()
    })

    it('should update the profile on the server and show a notification on network error', async () => {
        const sourceAction = saveUserDetailsAction(
            {
                name: 'test',
                redirectURL: 'testRedirectURL',
            },
            callback
        )

        mockApolloSubscriber = () =>
            Promise.resolve({ data: { output: { error: 'Test Error' } } })

        const expectedActions = [
            showNotificationAction({
                notificationType: 'error',
                message: 'Submission error',
                description: 'Please try again',
            } as any),
        ]

        const resultingActions = await getResultingActions(
            mockApolloSubscriber,
            sourceAction
        )
        expect(resultingActions).toEqual(expectedActions)
    })

    it('should match snapshot when OwnProfile props exists', () => {
        props = {
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
        wrapper = shallow(<EditProfileForm {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot when OwnProfile props does not exists', () => {
        props = {
            OwnProfile: {
                getMyProfile: null,
            },
            saveUserDetailsAction: jest.fn(),
            resendEmailVerificationAction: jest.fn(),
        }
        wrapper = shallow(<EditProfileForm {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should create a newsletter subscribed state when clicking the checkbox', () => {
        expect(wrapper.state('subscriptions')).toEqual({})
        const checkbox = wrapper.find(EmailCheckbox)
        checkbox.simulate('change', true)
        expect(wrapper.state('subscriptions')).toEqual({
            newsletter: true,
        })
    })

    it('should should set the newsletter subscribe state to false', () => {
        expect(wrapper.state('subscriptions')).toEqual({ newsletter: true })
        const checkbox = wrapper.find(EmailCheckbox)
        checkbox.simulate('change', false)
        expect(wrapper.state('subscriptions')).toEqual({
            newsletter: false,
        })
    })

    it('should should handle name change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(0).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('name')).toEqual('test')
    })

    it('should should handle title change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(1).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('title')).toEqual('test')
    })

    it('should should handle username change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(2).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('username')).toEqual('test')
    })

    it('should should handle website change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(3).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('website')).toEqual('test')
    })

    it('should should handle twitter change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(4).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('twitter')).toEqual('test')
    })

    it('should should handle github change', () => {
        const inputs = wrapper.find(Input)
        inputs.get(5).props.onChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('github')).toEqual('test')
    })

    it('should should handle email change', () => {
        const email = wrapper.find(EmailField)
        email.get(0).props.handleChange({
            target: {
                value: 'test',
            },
        })
        expect(wrapper.state('email')).toEqual('test')
    })

    it('should open the image uploader', () => {
        const email = wrapper.find(StyledUpload)
        const imageUploaderMock = jest.fn()
        wrapper.instance().uploadImage = imageUploaderMock
        email.get(0).props.handleClick()
        expect(imageUploaderMock).toHaveBeenCalled()
    })

    it('should should match the styling', () => {
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EditProfileForm {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
