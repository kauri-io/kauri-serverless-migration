import testEpic from '../../lib/test-epic'
import {
    openAddArticleToCollectionConfirmationModalEpic,
    openAddArticleToCollectionConfirmationModalAction,
} from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('openAddArticleToCollectionConfirmationModalEpic', () => {
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

    it('shows some confirmation modal with a close and go to collection button', async () => {
        const title = 'lol'
        const mockPersonalSign = () => Promise.resolve('abc')
        const mockApolloSubscriber = () => Promise.resolve(true)
        const id = '1234567890-'
        const getCollection = {
            title,
            id,
            __typename: 'CollectionDTO' as any,
            name: 'lol',
        }
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

        const sourceAction = openAddArticleToCollectionConfirmationModalAction({
            getCollection,
            routeChangeAction,
            closeModalAction,
        })
        const resultingActions = await testEpic(
            openAddArticleToCollectionConfirmationModalEpic,
            sourceAction,
            {},
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions[0].type).toEqual('OPEN_MODAL')
    })
})
