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
    avatar: 'avatar url',
    userId: 'test user id',
    username: 'test username',
}

describe('components/FeaturedResource', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<FeaturedResource {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
