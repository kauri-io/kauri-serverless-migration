import LatestContent from './index'

import { shallowWithTheme } from '../../setupTests'

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
        const wrapper = shallowWithTheme(<LatestContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
