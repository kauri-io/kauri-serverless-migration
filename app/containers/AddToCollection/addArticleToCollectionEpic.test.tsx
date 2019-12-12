import testEpic from '../../lib/test-epic'
import {
    addResourceToCollectionEpic,
    addResourceToCollectionAction,
    openAddArticleToCollectionConfirmationModalAction,
} from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { closeModalAction } from '../../components/Modal/Module'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('addResourceToCollectionEpic', () => {
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

        const sourceAction = addResourceToCollectionAction(
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
            openAddArticleToCollectionConfirmationModalAction({
                getCollection,
                routeChangeAction: routeChangeAction,
                closeModalAction: closeModalAction,
            }),
        ]

        const resultingActions = await testEpic(
            addResourceToCollectionEpic,
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
