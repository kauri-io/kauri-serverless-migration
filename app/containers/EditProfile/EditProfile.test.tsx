import EditProfile from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/EditProfile', () => {
    it('snapshot should match', () => {
        const props = {
            showNotificationAction: jest.fn(),
            routeChangeAction: jest.fn(),
            router: {
                query: {
                    r: 'route',
                    redirected: true,
                },
            },
            user: {
                id: '123',
                name: 'test name',
                username: 'test userename',
                email: 'test@test.com',
                dateCreated: '2019-01-01',
            },
            userId: '123',
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <EditProfile {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
