import PublishingSelector from './index'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
describe('containers/PublishingSelector', () => {
    it('snapshot should match', () => {
        const props = {
            type: 'ARTICLE',
            userId: '123',
            communities: [],
            handleSubmit: jest.fn(),
            closeModalAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <PublishingSelector {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
