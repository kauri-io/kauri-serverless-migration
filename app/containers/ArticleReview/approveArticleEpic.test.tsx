import testEpic from '../../lib/test-epic'
import { approveArticleEpic, approveArticleAction } from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('approveArticleEpic', () => {
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

    it('approves a proposed article update, notifies and shows confirmation page', async () => {
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { approveArticle: { hash: '1234567890' } },
                }),
            resetStore: () => {},
        }
        const mockPersonalSign = () => Promise.resolve('abc')
        const mockApolloSubscriber = () => Promise.resolve(true)
        const id = '1234567890-'
        const author = 'julz'
        const contentHash = 'LJLREW68184'
        const version = 123
        const dateCreated = '2019'

        const sourceAction = approveArticleAction({
            author,
            contentHash,
            dateCreated,
            id,
            version,
        })
        const expectedAction = [
            routeChangeAction(
                `/article/${id}/v${version}/article-${'published'}`
            ),
            showNotificationAction({
                description: 'The update has been approved!',
                message: `Article approved`,
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            approveArticleEpic,
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
