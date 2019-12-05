import PublishingSelector from './index'
import { mountWithRedux } from '../../setupTests'

import { MockedProvider } from '@apollo/react-testing'

describe('containers/PublishingSelector', () => {
    it('should match snapshot', () => {
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
