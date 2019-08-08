import testEpic from '../../lib/test-epic'
import {
    curateCommunityResourcesEpic,
    curateCommunityResourcesAction,
    capitalize,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

describe('curateCommunityResourcesEpic', () => {
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

    it('curates or proposes a resource to add to a community depending if the backend calculates whether you are a member', async () => {
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
        const resources = [
            {
                id,
                type: 'ARTICLE' as any,
                version,
            },
        ]

        const mockApolloSubscriber = () =>
            Promise.resolve({
                data: {
                    getEvent: {
                        output: {
                            id,
                            version,
                            hash: mockGetArticle.contentHash,
                            articleAuthor: mockGetArticle.author.id,
                            dateCreated: mockGetArticle.dateCreated,
                        },
                    },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                        curateCommunityResources: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const communityId = 'Community ID'

        const sourceAction = curateCommunityResourcesAction({
            id: communityId,
            resources,
        })

        const expectedAction = [
            showNotificationAction({
                description: `They have been proposed to the community!`,
                message: `${resources &&
                    capitalize(
                        (resources[0] as {
                            type: string
                        }).type.toLowerCase()
                    )}s curated!`,
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            curateCommunityResourcesEpic,
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
