import Article from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from '@apollo/react-testing'
import { generateArticle } from '../../mocks'
import {
    relatedArticles_searchMoreLikeThis,
    relatedArticles_searchMoreLikeThis_content,
    relatedArticles_searchMoreLikeThis_content_resourceIdentifier,
} from '../../queries/__generated__/relatedArticles'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

describe('containers/Article', () => {
    it('should match snapshot', () => {
        const article1 = generateArticle(1)
        const article2 = generateArticle(2)
        const article3 = generateArticle(3)

        const props = {
            id: '123',
            userId: '234',
            user: {
                id: '234',
                username: 'test-username',
            },
            classes: {},
            data: {
                getArticle: article1,
            },
            addCommentAction: jest.fn(),
            RelatedArticles: {
                searchMoreLikeThis: {
                    totalElements: 2,
                    totalPages: 1,
                    totalElementsBreakdown: {},
                    content: [
                        {
                            __typename: 'SearchResultDTO' as relatedArticles_searchMoreLikeThis_content['__typename'],
                            resourceIdentifier: {
                                id: 'id',
                                type: ResourceTypeInput.ARTICLE,
                                __typename: 'ResourceIdentifier' as relatedArticles_searchMoreLikeThis_content_resourceIdentifier['__typename'],
                            },
                            resource: article2,
                        },
                        {
                            __typename: 'SearchResultDTO' as relatedArticles_searchMoreLikeThis_content['__typename'],
                            resourceIdentifier: {
                                id: 'id',
                                type: ResourceTypeInput.ARTICLE,
                                __typename: 'ResourceIdentifier' as relatedArticles_searchMoreLikeThis_content_resourceIdentifier['__typename'],
                            },
                            resource: article3,
                        },
                    ],
                    __typename: 'ResponseBreakdownPage_SearchResultDTO' as relatedArticles_searchMoreLikeThis['__typename'],
                },
            },
            router: {},
            voteAction: jest.fn(),
            routeChangeAction: jest.fn(),
            openModalAction: jest.fn(),
            hostName: 'test hostname',
        }

        const wrapper = mountWithRedux(
            <MockedProvider>
                <Article {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
