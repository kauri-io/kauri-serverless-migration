import FeaturedResource from './index'
import { mountWithTheme } from '../../setupTests'

let props = {
    id: '11',
    version: null,
    title: 'Test Title',
    description: 'test description',
    tags: ['test'],
    resourceType: 'ARTICLE',
    ownerResourceType: 'COMMUNITY',
    linkComponent: jest.fn(),
    avatar: 'avatar url',
}

describe('components/FeaturedResource', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<FeaturedResource {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
