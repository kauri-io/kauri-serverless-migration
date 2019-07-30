import testEpic from '../../lib/test-epic'
import {
    approveResourceEpic,
    approveResourceAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('approveResourceEpic', () => {
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

    it('approves a proposed resource to add to a community', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
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
        }

        const mockApolloSubscriber = () =>
            Promise.resolve({
                data: {
                    output: {
                        id,
                        version,
                        hash: mockGetArticle.contentHash,
                        articleAuthor: mockGetArticle.author.id,
                        dateCreated: mockGetArticle.dateCreated,
                    },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                      approveResource: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const communityId = 'Community ID'

        const sourceAction = approveResourceAction({
            id: communityId,
            resource: {
                id,
                type: 'ARTICLE' as any,
            },
        })

        const expectedAction = [
            showNotificationAction({
                description: `The proposed resource has been added to the community`,
                message: 'Resource approved',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            approveResourceEpic,
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
