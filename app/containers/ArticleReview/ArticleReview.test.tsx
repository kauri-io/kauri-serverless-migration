import ArticleReview from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { generateArticle } from '../../mocks'

describe('containers/ArticleReview', () => {
    it('should match snapshot', () => {
        const article1 = generateArticle(1)
        const article2 = generateArticle(2)
        const props = {
            id: '123',
            userId: '234',
            classes: {},
            CurrentArticle: {
                getArticle: article1,
            },
            ProposedUpdate: {
                getArticle: article2,
            },
            router: {},
            voteAction: jest.fn(),
            routeChangeAction: jest.fn(),
            openModalAction: jest.fn(),
            hostName: 'test hostname',
            version: '3',
            communities: [],
            closeModalAction: jest.fn(),
            rejectArticleAction: jest.fn(),
            approveArticleAction: jest.fn(),
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ArticleReview {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
