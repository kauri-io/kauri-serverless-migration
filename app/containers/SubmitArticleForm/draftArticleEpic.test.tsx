import testEpic from '../../lib/test-epic'
import { draftArticleEpic, draftArticleAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic';
import { getArticleURL } from '../../lib/getURLs';

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('draftArticleEpic', () => {
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

    it('drafts a fresh article', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const title = 'Test Title'
        const mockGetArticle = {
            id,
            version,
            title,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            authorId: id,
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice', type: 'USER' },
            author: { id: '123', name: 'Alice' },
        }
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version, title } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { draftArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = draftArticleAction({
            text,
            subject,
            tags,
            attributes,
        })

        const expectedAction = [
            showNotificationAction({
                description:
                    'The draft has just been saved. You can go back and submit it whenever you are ready.',
                message: 'Draft Created',
                notificationType: 'info',
            }),
            routeChangeAction(getArticleURL(mockGetArticle).as),
        ]

        const resultingActions = await testEpic(
            draftArticleEpic,
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
