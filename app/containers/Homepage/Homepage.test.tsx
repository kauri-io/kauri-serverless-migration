import { HomePageComponent } from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'

import mockData from './mock'
import { homePageContent_getLatestHomepageDescriptor } from '../../queries/__generated__/homePageContent'

describe('containers/Homepage/View', () => {
    it('should match the snapshot', async () => {
        const props = {
            isLoggedIn: false,
            hostName: 'test hostname',
            data: {
                getLatestHomepageDescriptor: mockData.data
                    .getLatestHomepageDescriptor as homePageContent_getLatestHomepageDescriptor,
            },
            routeChangeAction: jest.fn(),
            emailSubscribeAction: jest.fn(),
            showNotificationAction: jest.fn(),
        }

        const wrapper = mountWithRedux(
            <MockedProvider addTypename={true}>
                <HomePageComponent {...props} />
            </MockedProvider>
        )

        await wait(100)

        wrapper.update()
        expect(wrapper).toMatchSnapshot()
    })
})
