import testEpic from '../../lib/test-epic'
import {
    addArticleToCollectionEpic,
    addArticleToCollectionAction,
    openAddArticleToCollectionConfirmationModalAction,
} from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('addArticleToCollectionEpic', () => {
    beforeAll(() => {
        // global.window = {}
        global.window.web3 = {
            toHex: () => ({ slice: () => 'abc' }),
            padLeft: () => 'abc',
            padRight: () => 'abc',
            sha3: () => 'abc',
            fromAscii: () => 'abc',
        }
    })

    it('adds the article to the collection via backend then calls openAddArticleToCollectionConfirmationModalAction', async () => {
        const title = 'lol'

        const mockPersonalSign = () => Promise.resolve('abc')
        const mockApolloSubscriber = () => Promise.resolve(true)
        const id = '1234567890-'
        const version = 123
        const mockGetArticle = {
            id,
            version,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            authorId: id,
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice', type: 'USER' },
            author: { id: '123', name: 'Alice' },
            title,
        }
        const getCollection: any = { title, id }
        const mockApolloClient = {
            query: () =>
                Promise.resolve({
                    data: {
                        getArticle: { title },
                        getCollection,
                    },
                }),
            mutate: () =>
                Promise.resolve({
                    data: { addCollectionResource: { hash: '1234567890' } },
                }),
            resetStore: () => {},
        }

        const sourceAction = addArticleToCollectionAction(
            {
                id,
                position: 0,
                resourceId: {
                    id,
                    type: 'ARTICLE' as any,
                    version,
                },
                sectionId: id,
                closeModalAction,
                routeChangeAction,
            },
            () => {}
        )
        const expectedAction = [
            showNotificationAction({
                description: `The article "${mockGetArticle.title}" has been added to your collection!`,
                message: 'Article added to collection',
                notificationType: 'success',
            }),
            openAddArticleToCollectionConfirmationModalAction({
                getCollection,
                routeChangeAction: routeChangeAction,
                closeModalAction: closeModalAction,
            }),
        ]

        const resultingActions = await testEpic(
            addArticleToCollectionEpic,
            sourceAction,
            {},
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
