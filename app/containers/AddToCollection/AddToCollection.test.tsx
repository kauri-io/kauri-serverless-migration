import AddToCollection from './View'
import { mountWithTheme } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/AddToCollection', () => {
    it('snapshot should match', () => {
        const props = {
            closeModalAction: jest.fn(),
            userId: 'test user id',
            routeChangeAction: jest.fn(),
            articleId: '123',
            addArticleToCollectionAction: jest.fn(),
            version: 1,
        }
        const wrapper = mountWithTheme(
            <MockedProvider>
                <AddToCollection {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
