import LatestContent from './index'

import { mountWithTheme  } from '../../setupTests'

let props = {
    content: [
        {
            id: '123',
            resource: {
                __typename: 'ArticleDTO',
                title: 'test',
            },
        },
    ],
    linkComponent: jest.fn(),
    Link: jest.fn(),
}

describe('components/LatestContent', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme (<LatestContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
