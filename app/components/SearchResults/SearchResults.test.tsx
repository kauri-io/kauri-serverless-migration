import ResourceRowWithImage from './ResourceRowWithImage'
import { mountWithRedux } from '../../setupTests'

describe('components/ResourceRowWithImage', () => {
    it('should match snapshot', () => {
        const ResourceRowWithImageProps = {
            id: '123',
            title: 'test',
            description: 'test description',
            date: '2019-01-01',
            imageURL: 'test url',
            tags: ['test'],
            username: 'jimi',
            userId: '0x',
            userAvatar: 'test avatar',
            linkComponent: jest.fn(),
            ownerType: 'COMMUNITY',
            resourceType: 'ARTICLE',
        }

        const wrapper = mountWithRedux(
            <ResourceRowWithImage {...ResourceRowWithImageProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
