import CheckpointArticles, { IProps } from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/CheckpointArticles', () => {
    it('should match snapshot', () => {
        const props = {
            checkpointArticlesAction: jest.fn(),
            pageType: 'public-profile' as IProps['pageType'],
            isOwner: true,
            isLoggedIn: true,
            routeChangeAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <CheckpointArticles {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
