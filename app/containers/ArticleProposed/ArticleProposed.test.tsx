import ArticleProposed from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { generateArticle } from '../../mocks'

describe('containers/ArticleProposed', () => {
    it('should match snapshot', () => {
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
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ArticleProposed {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
