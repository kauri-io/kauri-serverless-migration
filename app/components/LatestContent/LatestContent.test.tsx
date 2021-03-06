import LatestContent from './index'

import { mountWithTheme } from '../../setupTests'

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
    isLoggedIn: true,
    openModalAction: jest.fn(),
    routeChangeAction: jest.fn(),
}

describe('components/LatestContent', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<LatestContent {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
