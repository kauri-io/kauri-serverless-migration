import testEpic from '../../lib/test-epic'
import { rejectArticleEpic, rejectArticleAction } from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic';

describe('rejectArticleEpic', () => {
    it('rejects a proposed article update, notifies and shows confirmation page', async () => {
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { rejectArticle: { hash: '1234567890' } },
                }),
            resetStore: () => {},
        }
        const mockApolloSubscriber = () => Promise.resolve(true)
        const id = '1234567890-'
        const version = 123

        const sourceAction = rejectArticleAction({
            id,
            version,
            cause: 'yungblud',
        })
        const expectedAction = [
          routeChangeAction(`/article/${id}/v${version}/article-rejected`),
          showNotificationAction({
            description: `It will not show up in your approvals queue anymore!`,
            message: 'Article rejected!',
            notificationType: 'success',
        })
        ]

        const resultingActions = await testEpic(
            rejectArticleEpic,
            sourceAction,
            {},
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})