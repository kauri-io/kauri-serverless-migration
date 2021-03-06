import CollectionHeader from './CollectionHeader'
import { mountWithTheme } from '../../setupTests'

let props = {
    articleCount: 2,
    collectionCount: 5,
    description: 'test description',
    id: '123',
    name: 'test collection',
    imageURL: 'Image URL',
    ownerId: '345',
    tags: ['test', 'jest'],
    routeChangeAction: jest.fn(),
    url: 'test url',
    userAvatar: 'avatar url',
    userId: '678',
    username: 'test username',
    isMemberOfCommunityOwner: false,
    updated: '2019-01-01',
    linkComponent: jest.fn(),
    isBookmarked: true,
    isLoggedIn: false,
    openModalAction: jest.fn(),
}

describe('components/CollectionHeader', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<CollectionHeader {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
