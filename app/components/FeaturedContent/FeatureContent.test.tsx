import FeaturedContent from './index'
import { mountWithTheme  } from '../../setupTests'

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
        const wrapper = mountWithTheme (<FeaturedContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
