import FeaturedContent from './index'
import { shallowWithTheme } from '../../setupTests'

let props = {
    content: [
        {
            resource: [
                {
                    id: 'test',
                    __typename: 'ArticleDTO',
                },
                {
                    id: 'test2',
                    __typename: 'CollectionDTO',
                },
            ],
        },
    ],
    Link: jest.fn(),
}

describe('components/FeaturedContent', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<FeaturedContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
