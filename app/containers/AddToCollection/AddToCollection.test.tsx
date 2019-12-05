import AddToCollection from './View'
import { mountWithTheme } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

describe('containers/AddToCollection', () => {
    it('should match snapshot', () => {
        const props = {
            closeModalAction: jest.fn(),
            userId: 'test user id',
            routeChangeAction: jest.fn(),
            resourceId: '123',
            addResourceToCollectionAction: jest.fn(),
            type: 'ARTICLE' as ResourceTypeInput.ARTICLE,
        }
        const wrapper = mountWithTheme(
            <MockedProvider>
                <AddToCollection {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
