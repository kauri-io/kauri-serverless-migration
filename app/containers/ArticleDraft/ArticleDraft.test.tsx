import ArticleDraft from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import { generateArticle } from '../../mocks'

describe('containers/ArticleDraft', () => {
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
            voteAction: jest.fn(),
            routeChangeAction: jest.fn(),
            openModalAction: jest.fn(),
            hostName: 'test hostname',
            deleteDraftArticleAction: jest.fn(),
            closeModalAction: jest.fn(),
            publishArticleAction: jest.fn(),
            communities: [],
        }
        const wrapper = mountWithRedux(
            <MockedProvider>
                <ArticleDraft {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
