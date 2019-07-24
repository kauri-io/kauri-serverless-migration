import ArticleApproved, { IProps } from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { generateArticle } from '../../mocks'

describe('containers/ArticleApproved', () => {
    it('snapshot should match', () => {
        const article1 = generateArticle(1)
        const props = {
            id: '123',
            userId: '234',
            classes: {},
            data: {
                getArticle: article1,
            },
            router: {},
            routeChangeAction: jest.fn(),
            hostName: 'test hostname',
            type: 'published' as IProps['type'],
            user: { id: '234' },
            isLoggedIn: false,
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ArticleApproved {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
