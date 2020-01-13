import {
    Article,
    Article_resourceIdentifier,
    Article_comments,
    Article_voteResult,
    Article_author,
    Article_owner_PublicUserDTO,
    Article_owner_PublicUserDTO_resourceIdentifier,
    Article_contributors_articles,
    Article_contributors_links,
    Article_contributors_collections,
    Article_tips,
} from '../queries/Fragments/__generated__/Article'
import {
    ResourceTypeInput,
    ArticleStatusInput,
} from '../__generated__/globalTypes'

export const generateArticle = (mod: number) => ({
    associatedNfts: null,
    isRead: true,
    __typename: 'ArticleDTO' as Article['__typename'],
    resourceIdentifier: {
        __typename: 'ResourceIdentifier' as Article_resourceIdentifier['__typename'],
        type: 'ResourceIdentifier' as ResourceTypeInput,
        id: `123${mod}`,
        version: 1,
    },
    contributors: [
        {
            __typename: 'PublicUserDTO' as Article_author['__typename'],
            id: `679${mod}`,
            username: `test-author-username-${mod}`,
            name: `test author name ${mod}`,
            avatar: `test avatar ${mod}`,
            title: 'test title',
            social: {
                github: 'test github',
                twitter: 'twst twitter',
            },
            links: {
                __typename: 'ResponsePage_ExternalLinkDTO' as Article_contributors_links['__typename'],
                totalElements: 3,
            },
            collections: {
                __typename: 'ResponsePage_CollectionDTO' as Article_contributors_collections['__typename'],
                totalElements: 3,
            },
            articles: {
                __typename: 'ResponsePage_ArticleDTO' as Article_contributors_articles['__typename'],
                totalElements: 3,
            },
            communities: [],
        },
    ],
    description: `test description ${mod}`,
    id: `123${mod}`,
    version: 1,
    title: `test title ${mod}`,
    content: `{"markdown" : "test contet ${mod}"}`,
    authorId: `345${mod}`,
    dateCreated: '2019-01-01',
    datePublished: '2019-01-02',
    status: ArticleStatusInput.PUBLISHED,
    attributes: {},
    contentHash: `hash${mod}`,
    checkpoint: null,
    tags: ['Test', 'test2'],
    voteResult: {
        sum: 3,
        count: 3,
        hasVoted: false,
        quantity: 1,
        __typename: 'VoteResultDTO' as Article_voteResult['__typename'],
    },
    author: {
        __typename: 'PublicUserDTO' as Article_author['__typename'],
        id: `679${mod}`,
        username: `test-author-username-${mod}`,
        name: `test author name ${mod}`,
        avatar: `test avatar ${mod}`,
    },
    owner: {
        __typename: 'PublicUserDTO' as Article_owner_PublicUserDTO['__typename'],
        id: `678${mod}`,
        name: `test author name ${mod}`,
        avatar: `test avatar ${mod}`,
        publicUserName: `test-public-username-${mod}`,
        username: `test-author-username-${mod}`,
        resourceIdentifier: {
            id: `678${mod}`,
            type: 'ResourceIdentifier' as ResourceTypeInput,
            __typename: 'PublicUserDTO' as Article_owner_PublicUserDTO_resourceIdentifier['__typename'],
        },
    },
    comments: {
        content: [],
        totalPages: 0,
        totalElements: 0,
        isLast: true,
        __typename: 'ResponsePage_CommentDTO' as Article_comments['__typename'],
    },
    updateComment: `test update comment${mod}`,
    isBookmarked: true,
    tips: {
        __typename: 'TipTotalsDTO' as Article_tips['__typename'],
        totals: {},
    },
})

export const Community = {
    data: {
        getCommunity: {
            id: '5df81fc59c39750001a48158',
            dateCreated: '2019-12-17T00:22:29.703Z',
            dateUpdated: '2019-12-17T00:28:33.775Z',
            creatorId: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
            creator: {
                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                username: 'gregjeanmart',
                name: 'Gregoire Jeanmart',
                __typename: 'PublicUserDTO',
            },
            name: 'AFTER QUERY REFACTORING',
            description: 'fdsfdsfds',
            status: 'OPENED',
            website: '',
            avatar:
                'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
            social: {
                twitter: 'dfdfdf',
            },
            tags: ['testing'],
            resourceIdentifier: {
                type: 'COMMUNITY',
                id: '5df81fc59c39750001a48158',
                __typename: 'ResourceIdentifier',
            },
            attributes: null,
            homepage: [
                {
                    name: '',
                    description: null,
                    resourcesId: [
                        {
                            id: 'df5cedcc4eb5495ca443a630ad93b343',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: 'f1ac39e882394b0e99d26621aa78826e',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: 'UicniThmUz',
                            type: 'LINK',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '5df820999c39750001a4815b',
                            type: 'COLLECTION',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: 'ebd3386c34ff4e2cba8e5f62150f84fb',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                    ],
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'df5cedcc4eb5495ca443a630ad93b343',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 3,
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Gregoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    title: 'Kauri Software Engineer',
                                    social: {
                                        twitter: 'gregjeanmart',
                                        github: 'gjeanmart',
                                    },
                                    articles: {
                                        totalElements: 31,
                                        __typename: 'ResponsePage_ArticleDTO',
                                    },
                                    collections: {
                                        totalElements: 9,
                                        __typename:
                                            'ResponsePage_CollectionDTO',
                                    },
                                    links: {
                                        totalElements: 6,
                                        __typename:
                                            'ResponsePage_ExternalLinkDTO',
                                    },
                                    communities: [
                                        {
                                            community: {
                                                id: '5d2c6edefe402500014349f5',
                                                name: 'Kauri Help',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5d2f30daaba2920001c82409',
                                                name: 'Java Ethereum',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5dcbe80b8d121600010bb89c',
                                                name: 'test greg',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddfe56a3466a300019c04dd',
                                                name: 'My community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff7ce3466a300019c5306',
                                                name: 'test2',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff8523466a300019c55fd',
                                                name: 'vbnbvnbvvn',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f7293466a30001a3166e',
                                                name: 'test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8423466a30001a3248d',
                                                name: 'test test',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8823466a30001a3282a',
                                                name: 'sdfdsfdsfsdf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f91f3466a30001a33246',
                                                name: 'fggfhgf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de1223fb76d240001ede274',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122b0b76d240001ede279',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122e5b76d240001ede27e',
                                                name:
                                                    '#TEST_COMMUNITY  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de123d9b76d240001ede283',
                                                name: 'test community 45',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de2f25e0c973e0001d9e199',
                                                name: 'Hello World community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de532d30c973e0001d9e221',
                                                name: 'Test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de5344a0c973e0001d9e278',
                                                name: 'Test Invites',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de790246bd16500012979d6',
                                                name: 'TheBug',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de798456bd16500012979e3',
                                                name: 'test greg 333',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5df81fc59c39750001a48158',
                                                name: 'AFTER QUERY REFACTORING',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                    ],
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            isRead: false,
                            description: 'tesddsdsd EDIT',
                            id: 'df5cedcc4eb5495ca443a630ad93b343',
                            version: 3,
                            title: 'dfdsfsdf EDIT2',
                            content: '{"markdown":"tesddsdsd EDIT"}',
                            authorId:
                                'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            dateCreated: '2019-12-19T15:33:55.881Z',
                            datePublished: '2019-12-19T15:33:59.497Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background: null,
                                canonical: null,
                            },
                            contentHash:
                                'QmWiWrAQP82bpPGbK9CLFit9KQVhztsKdh4ZCzfVeMQQiL',
                            checkpoint:
                                'QmYqVmWMfP7z9hhPfHjTTN2aSx2AGmYCsNBTychoR1DL1F',
                            tags: ['testing'],
                            voteResult: {
                                sum: 0,
                                count: 0,
                                hasVoted: false,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                name: 'Gregoire Jeanmart',
                                username: 'gregjeanmart',
                                avatar:
                                    'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5df81fc59c39750001a48158',
                                communityName: 'AFTER QUERY REFACTORING',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
                                resourceIdentifier: {
                                    id: '5df81fc59c39750001a48158',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                isLast: true,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            isBookmarked: false,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'f1ac39e882394b0e99d26621aa78826e',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Gregoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    title: 'Kauri Software Engineer',
                                    social: {
                                        twitter: 'gregjeanmart',
                                        github: 'gjeanmart',
                                    },
                                    articles: {
                                        totalElements: 31,
                                        __typename: 'ResponsePage_ArticleDTO',
                                    },
                                    collections: {
                                        totalElements: 9,
                                        __typename:
                                            'ResponsePage_CollectionDTO',
                                    },
                                    links: {
                                        totalElements: 6,
                                        __typename:
                                            'ResponsePage_ExternalLinkDTO',
                                    },
                                    communities: [
                                        {
                                            community: {
                                                id: '5d2c6edefe402500014349f5',
                                                name: 'Kauri Help',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5d2f30daaba2920001c82409',
                                                name: 'Java Ethereum',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5dcbe80b8d121600010bb89c',
                                                name: 'test greg',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddfe56a3466a300019c04dd',
                                                name: 'My community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff7ce3466a300019c5306',
                                                name: 'test2',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff8523466a300019c55fd',
                                                name: 'vbnbvnbvvn',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f7293466a30001a3166e',
                                                name: 'test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8423466a30001a3248d',
                                                name: 'test test',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8823466a30001a3282a',
                                                name: 'sdfdsfdsfsdf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f91f3466a30001a33246',
                                                name: 'fggfhgf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de1223fb76d240001ede274',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122b0b76d240001ede279',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122e5b76d240001ede27e',
                                                name:
                                                    '#TEST_COMMUNITY  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de123d9b76d240001ede283',
                                                name: 'test community 45',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de2f25e0c973e0001d9e199',
                                                name: 'Hello World community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de532d30c973e0001d9e221',
                                                name: 'Test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de5344a0c973e0001d9e278',
                                                name: 'Test Invites',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de790246bd16500012979d6',
                                                name: 'TheBug',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de798456bd16500012979e3',
                                                name: 'test greg 333',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5df81fc59c39750001a48158',
                                                name: 'AFTER QUERY REFACTORING',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                    ],
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            isRead: false,
                            description: 'xcvcxvcxv',
                            id: 'f1ac39e882394b0e99d26621aa78826e',
                            version: 1,
                            title: 'cxvcxvcxv',
                            content: '{"markdown":"xcvcxvcxv"}',
                            authorId:
                                'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            dateCreated: '2019-12-17T00:23:29.177Z',
                            datePublished: '2019-12-17T00:23:32.255Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background: null,
                                canonical: null,
                            },
                            contentHash:
                                'QmNevLr8z8EcttLoqRz78wVrRESpPhLMwK1WxwYGGdPWDB',
                            checkpoint:
                                'QmUS2ErEQrR3hkf3dN73FK4f3wLTbcb2NTR6GFUrq3LCtJ',
                            tags: ['vxcvcxvcx'],
                            voteResult: {
                                sum: 1,
                                count: 1,
                                hasVoted: false,
                                quantity: {
                                    '1': 1,
                                },
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                name: 'Gregoire Jeanmart',
                                username: 'gregjeanmart',
                                avatar:
                                    'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5df81fc59c39750001a48158',
                                communityName: 'AFTER QUERY REFACTORING',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
                                resourceIdentifier: {
                                    id: '5df81fc59c39750001a48158',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                isLast: true,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            isBookmarked: false,
                            __typename: 'ArticleDTO',
                        },
                        {
                            id: 'UicniThmUz',
                            resourceIdentifier: {
                                type: 'LINK',
                                id: 'UicniThmUz',
                                __typename: 'ResourceIdentifier',
                            },
                            dateCreated: '2019-12-17T00:25:24.022Z',
                            dateUpdated: '2019-12-17T00:25:24.022Z',
                            submitterId:
                                'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            isBookmarked: false,
                            owner: {
                                id: '5df81fc59c39750001a48158',
                                communityName: 'AFTER QUERY REFACTORING',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
                                resourceIdentifier: {
                                    id: '5df81fc59c39750001a48158',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            submitter: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                username: 'gregjeanmart',
                                name: 'Gregoire Jeanmart',
                                avatar:
                                    'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            url: {
                                value:
                                    'https://decrypt.co/14795/watch-out-google-brave-surpasses-350000-publisher-milestone?utm_source=reddit&utm_medium=social&utm_campaign=sm',
                                isEditable: false,
                                __typename: 'ExternalLinkField_String',
                            },
                            linkTitle: {
                                value:
                                    'Watch out Google: Brave surpasses 350,000 publisher milestone - Decrypt',
                                isEditable: false,
                                __typename: 'ExternalLinkField_String',
                            },
                            linkDescription: {
                                value:
                                    'Brave, the plucky alternative to traditional web browsers, is picking up steam in terms of adoption.',
                                isEditable: false,
                                __typename: 'ExternalLinkField_String',
                            },
                            summary: {
                                value: 'sdfsfdsfsf',
                                isEditable: true,
                                __typename: 'ExternalLinkField_String',
                            },
                            linkAttributes: {
                                background_image: {
                                    value:
                                        'https://screenshot.dmedia.cloud/capture/aHR0cHM6Ly9kZWNyeXB0LmNvL3NjcmVlbnNob3QvMTQ3OTUvP3NlbGVjdG9yPS5wb3N0Q2FyZC1TdHlsZWRDYXJkJmhlaWdodD00NzBweCZ3aWR0aD05MDBweA==.png',
                                    isEditable: false,
                                },
                            },
                            authorName: {
                                value: 'Decrypt / Will Heasman',
                                isEditable: false,
                                __typename: 'ExternalLinkField_String',
                            },
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                isLast: true,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            authorSocial: {},
                            tags: ['testing'],
                            voteResult: {
                                sum: 0,
                                count: 0,
                                hasVoted: false,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ExternalLinkDTO',
                        },
                        {
                            id: '5df820999c39750001a4815b',
                            name: 'sdfdsf',
                            description: 'dsfdsfds',
                            dateCreated: '2019-12-17T00:26:01.824Z',
                            tags: ['ethdenver-2019-submission'],
                            background: null,
                            dateUpdated: '2019-12-17T00:26:01.824Z',
                            owner: {
                                id: '5df81fc59c39750001a48158',
                                communityName: 'AFTER QUERY REFACTORING',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
                                resourceIdentifier: {
                                    id: '5df81fc59c39750001a48158',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            sections: [
                                {
                                    id: '295d632b-7ee6-401d-b007-0ae8f010bfd1',
                                    name: '',
                                    description: null,
                                    resourcesId: [
                                        {
                                            id: 'CdgiiRV3mf',
                                            type: 'LINK',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'd04682d588e643f1af714ef255de798b',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id: 'CdgiiRV3mf',
                                            resourceIdentifier: {
                                                type: 'LINK',
                                                id: 'CdgiiRV3mf',
                                                __typename:
                                                    'ResourceIdentifier',
                                            },
                                            dateCreated:
                                                '2019-12-17T00:24:28.297Z',
                                            dateUpdated:
                                                '2019-12-17T00:24:28.297Z',
                                            submitterId:
                                                'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                            isBookmarked: false,
                                            owner: {
                                                id: '5de122b0b76d240001ede279',
                                                communityName:
                                                    '#TEST  Community is being "mined". ',
                                                avatar:
                                                    'https://api.dev.kauri.io:443/ipfs/QmbX1WSNSadzjrrsYtuSs2y9cq9Rscp9AUbggfVshNZqB2',
                                                resourceIdentifier: {
                                                    id:
                                                        '5de122b0b76d240001ede279',
                                                    type: 'COMMUNITY',
                                                    __typename:
                                                        'ResourceIdentifier',
                                                },
                                                __typename: 'CommunityDTO',
                                            },
                                            submitter: {
                                                id:
                                                    'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                                username: 'gregjeanmart',
                                                name: 'Gregoire Jeanmart',
                                                avatar:
                                                    'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                                __typename: 'PublicUserDTO',
                                            },
                                            url: {
                                                value:
                                                    'http://ir.amd.com/news-releases/news-release-details/amd-and-industry-partners-develop-new-blockchain-based-gaming',
                                                isEditable: false,
                                                __typename:
                                                    'ExternalLinkField_String',
                                            },
                                            linkTitle: {
                                                value:
                                                    'AMD and Industry Partners to Develop New Blockchain-based Gaming Platforms | Advanced Micro Devices',
                                                isEditable: false,
                                                __typename:
                                                    'ExternalLinkField_String',
                                            },
                                            linkDescription: {
                                                value:
                                                    "The Investor Relations website contains information about Advanced Micro Devices's business for stockholders, potential investors, and financial analysts.",
                                                isEditable: false,
                                                __typename:
                                                    'ExternalLinkField_String',
                                            },
                                            summary: {
                                                value: 'dfdfdfdf',
                                                isEditable: true,
                                                __typename:
                                                    'ExternalLinkField_String',
                                            },
                                            linkAttributes: {
                                                background_image: {
                                                    value: null,
                                                    isEditable: true,
                                                },
                                            },
                                            authorName: {
                                                value: 'ddfdfdf',
                                                isEditable: true,
                                                __typename:
                                                    'ExternalLinkField_String',
                                            },
                                            comments: {
                                                content: [],
                                                totalPages: 0,
                                                totalElements: 0,
                                                isLast: true,
                                                __typename:
                                                    'ResponsePage_CommentDTO',
                                            },
                                            authorSocial: {},
                                            tags: ['testing'],
                                            voteResult: {
                                                sum: -1,
                                                count: 1,
                                                hasVoted: false,
                                                quantity: {
                                                    '-1': 1,
                                                },
                                                __typename: 'VoteResultDTO',
                                            },
                                            __typename: 'ExternalLinkDTO',
                                        },
                                        {
                                            associatedNfts: null,
                                            resourceIdentifier: {
                                                id:
                                                    'd04682d588e643f1af714ef255de798b',
                                                type: 'ARTICLE',
                                                __typename:
                                                    'ResourceIdentifier',
                                                version: 2,
                                            },
                                            contributors: [
                                                {
                                                    id:
                                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                                    name: 'Gregoire Jeanmart',
                                                    username: 'gregjeanmart',
                                                    avatar:
                                                        'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                                    title:
                                                        'Kauri Software Engineer',
                                                    social: {
                                                        twitter: 'gregjeanmart',
                                                        github: 'gjeanmart',
                                                    },
                                                    articles: {
                                                        totalElements: 31,
                                                        __typename:
                                                            'ResponsePage_ArticleDTO',
                                                    },
                                                    collections: {
                                                        totalElements: 9,
                                                        __typename:
                                                            'ResponsePage_CollectionDTO',
                                                    },
                                                    links: {
                                                        totalElements: 6,
                                                        __typename:
                                                            'ResponsePage_ExternalLinkDTO',
                                                    },
                                                    communities: [
                                                        {
                                                            community: {
                                                                id:
                                                                    '5d2c6edefe402500014349f5',
                                                                name:
                                                                    'Kauri Help',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5d2f30daaba2920001c82409',
                                                                name:
                                                                    'Java Ethereum',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5dcbe80b8d121600010bb89c',
                                                                name:
                                                                    'test greg',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5ddfe56a3466a300019c04dd',
                                                                name:
                                                                    'My community',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5ddff7ce3466a300019c5306',
                                                                name: 'test2',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5ddff8523466a300019c55fd',
                                                                name:
                                                                    'vbnbvnbvvn',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de0f7293466a30001a3166e',
                                                                name:
                                                                    'test community',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de0f8423466a30001a3248d',
                                                                name:
                                                                    'test test',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de0f8823466a30001a3282a',
                                                                name:
                                                                    'sdfdsfdsfsdf',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de0f91f3466a30001a33246',
                                                                name: 'fggfhgf',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de1223fb76d240001ede274',
                                                                name:
                                                                    '#TEST  Community is being "mined". ',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de122b0b76d240001ede279',
                                                                name:
                                                                    '#TEST  Community is being "mined". ',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de122e5b76d240001ede27e',
                                                                name:
                                                                    '#TEST_COMMUNITY  Community is being "mined". ',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de123d9b76d240001ede283',
                                                                name:
                                                                    'test community 45',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de2f25e0c973e0001d9e199',
                                                                name:
                                                                    'Hello World community',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de532d30c973e0001d9e221',
                                                                name:
                                                                    'Test community',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de5344a0c973e0001d9e278',
                                                                name:
                                                                    'Test Invites',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de790246bd16500012979d6',
                                                                name: 'TheBug',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5de798456bd16500012979e3',
                                                                name:
                                                                    'test greg 333',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                        {
                                                            community: {
                                                                id:
                                                                    '5df81fc59c39750001a48158',
                                                                name:
                                                                    'AFTER QUERY REFACTORING',
                                                                __typename:
                                                                    'CommunityDTO',
                                                            },
                                                            __typename:
                                                                'MemberRoleCommunityDTO',
                                                        },
                                                    ],
                                                    __typename: 'PublicUserDTO',
                                                },
                                            ],
                                            isRead: true,
                                            description:
                                                'DCO Sign-Off DCO signoff What is the DCO sign off? This stack overflow answer does a good job of explaining it: It was introduced in the wake of the SCO lawsuit',
                                            id:
                                                'd04682d588e643f1af714ef255de798b',
                                            version: 2,
                                            title:
                                                'DCO Sign-Off: Commiting code to Hyperledger Besu',
                                            content:
                                                '{"markdown":"# DCO Sign-Off\\n![DCO signoff](https://i.imgur.com/4ZBslvZ.png)\\n\\n## What is the DCO sign off?\\n\\nThis stack overflow answer does a good job of explaining it:\\n\\n> It was introduced in the wake of the SCO lawsuit [...] as a Developers Certificate of Origin. It is used to say that you certify that you have created the patch in question, or that you certify that to the best of your knowledge, it was created under an appropriate open-source license, or that it has been provided to you by someone else under those terms. \\n\\n\\nhttps://stackoverflow.com/questions/1962094/what-is-the-sign-off-feature-in-git-for\\n\\nThe answer also mentions only a few projects use the DCO sign off feature, and well, we\'re one of those projects. [Since submitting Besu to the Hyperledger Foundation](https://www.hyperledger.org/blog/2019/08/29/announcing-hyperledger-besu) (hosted by the [Linux Foundation](http://linuxfoundation.org/)) we now require contributors to add a line of text essentially signing their comment in order to affirm that the code submitted has originated from themselves (or that they have permission to use it).\\n\\nIf you want to read the contents of the Developer Certificate of Origin, see here: https://developercertificate.org.\\n\\n---\\n\\n## How to sign off?\\n\\nThis should be done after following the [instructions on how to commit](https://wiki.hyperledger.org/display/BESU/How+to+Contribute#ContributingCodeorDocumentation).\\n\\nThere are several ways to add the line \\"Signed-off-by: Your Legal Name <your-email@address>\\" to each of your commits.\\n\\n### 1. Manually adding it.\\nYou can add this line of text manually to your commit body on each commit. \\nAlthough cumbersome, it possible and simple.\\n\\n``` shell\\ngit commit -m \\"Fix typo in documentation\\nSigned-off-by: Legal Name <email@domain>\\"\\n```\\n\\nor\\n\\n``` shell\\ngit commit -m \\"Fix typo in documentation\\" -m \\"Signed-off-by: Legal Name <email@domain>\\"\\n```\\n\\n### 2. Automating this boring step\\n\\nComputers can do things for us, so lets configure that.\\n\\n``` shell\\ngit config user.name \\"Legal Name\\"\\ngit config user.email \\"email@domain\\" \\n```\\n> You can use `-global` or ``-g` in order to configure this globally on your machine.\\n\\nNow all you need to do is add `-s` or `--signoff` to your `git commit` commands.\\n\\n``` shell\\ngit commit -s -m \\"Fix typo in documentation\\"\\n```\\n\\n3. Adding it if you forgot to sign-off.\\nIf you forgot to add the sign-off, you can also amend your commit with the sign-off.\\n\\n``` shell\\ngit commit --amend -s\\n```\\n\\n### 3. Adding alias\\n\\nIf you\'re already added your name and email to the config, you can add an alias to your local setup in order to automatically add that `-s` t every commit command.\\n\\nThis can be done wither on your local CLI setup, or through a git alias as follows:\\n\\n``` shell\\ngit config --global alias.c \'commit --signoff\'\\n```\\nAnd now you can run `git commit c -m` instead of `git commit -s -m`.\\n\\nFor an example of the former using zsh:\\n``` shell\\necho alias gco=\'git commit -s\' >> ~/.zshrc\\n```\\n> For bash, replace `.zshrc` with `.bashrc`.\\n\\nIf you want to reduce your typing even futher, add the `-m` flag.\\n\\n``` shell\\necho alias gco=\'git commit -s -m\' >> ~/.zshrc\\n```\\n\\nVerify that your config was written.\\n``` shell\\n$ tail ~/.zshrc\\n```\\nYou should see the following, or similar:\\n``` shell\\nalias gco=git commit -s\\n```\\n\\nIn order to test this last option out, you have to re-source the config file:\\n\\n``` shell\\nsource ~/.zshrc\\n```\\n> For bash, replace `.zshrc` with `.bashrc`.\\n\\n\\nIf you\'ve already pushed your changes to Github, you will have to `force push` your branch after this with `git push -f`.\\n\\n## DCO Errors\\n\\nfor more information on DCO sign-off, including how to deal with DCO errors flagged by our bot, check out our wiki: https://wiki.hyperledger.org/display/BESU/How+to+Contribute#HowtoContribute-HowtoworkwithDCO"}',
                                            authorId:
                                                'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                            dateCreated:
                                                '2019-12-13T15:41:24.521Z',
                                            datePublished:
                                                '2019-12-13T15:41:30.110Z',
                                            status: 'PUBLISHED',
                                            attributes: {
                                                background: null,
                                                canonical: null,
                                            },
                                            contentHash:
                                                'QmQMgvFsXHiFJoDXG4HUZNk3j1brMe7NRGV3vhXY7iDswj',
                                            checkpoint:
                                                'QmQa2jsQEuRnb9gawjetq9qaxmLRTAxcMmWjjwg18ECxDT',
                                            tags: ['dco', 'github', 'pegasys'],
                                            voteResult: {
                                                sum: 0,
                                                count: 0,
                                                hasVoted: false,
                                                quantity: {},
                                                __typename: 'VoteResultDTO',
                                            },
                                            author: {
                                                id:
                                                    'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                                name: 'Gregoire Jeanmart',
                                                username: 'gregjeanmart',
                                                avatar:
                                                    'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                                __typename: 'PublicUserDTO',
                                            },
                                            owner: {
                                                id: '5de122e5b76d240001ede27e',
                                                communityName:
                                                    '#TEST_COMMUNITY  Community is being "mined". ',
                                                avatar:
                                                    'https://api.dev.kauri.io:443/ipfs/QmbX1WSNSadzjrrsYtuSs2y9cq9Rscp9AUbggfVshNZqB2',
                                                resourceIdentifier: {
                                                    id:
                                                        '5de122e5b76d240001ede27e',
                                                    type: 'COMMUNITY',
                                                    __typename:
                                                        'ResourceIdentifier',
                                                },
                                                __typename: 'CommunityDTO',
                                            },
                                            comments: {
                                                content: [],
                                                totalPages: 0,
                                                totalElements: 0,
                                                isLast: true,
                                                __typename:
                                                    'ResponsePage_CommentDTO',
                                            },
                                            updateComment: null,
                                            isBookmarked: false,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                            ],
                            resourceIdentifier: {
                                type: 'COLLECTION',
                                id: '5df820999c39750001a4815b',
                                __typename: 'ResourceIdentifier',
                            },
                            isBookmarked: false,
                            __typename: 'CollectionDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'ebd3386c34ff4e2cba8e5f62150f84fb',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 3,
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Gregoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    title: 'Kauri Software Engineer',
                                    social: {
                                        twitter: 'gregjeanmart',
                                        github: 'gjeanmart',
                                    },
                                    articles: {
                                        totalElements: 31,
                                        __typename: 'ResponsePage_ArticleDTO',
                                    },
                                    collections: {
                                        totalElements: 9,
                                        __typename:
                                            'ResponsePage_CollectionDTO',
                                    },
                                    links: {
                                        totalElements: 6,
                                        __typename:
                                            'ResponsePage_ExternalLinkDTO',
                                    },
                                    communities: [
                                        {
                                            community: {
                                                id: '5d2c6edefe402500014349f5',
                                                name: 'Kauri Help',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5d2f30daaba2920001c82409',
                                                name: 'Java Ethereum',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5dcbe80b8d121600010bb89c',
                                                name: 'test greg',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddfe56a3466a300019c04dd',
                                                name: 'My community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff7ce3466a300019c5306',
                                                name: 'test2',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5ddff8523466a300019c55fd',
                                                name: 'vbnbvnbvvn',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f7293466a30001a3166e',
                                                name: 'test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8423466a30001a3248d',
                                                name: 'test test',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f8823466a30001a3282a',
                                                name: 'sdfdsfdsfsdf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de0f91f3466a30001a33246',
                                                name: 'fggfhgf',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de1223fb76d240001ede274',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122b0b76d240001ede279',
                                                name:
                                                    '#TEST  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de122e5b76d240001ede27e',
                                                name:
                                                    '#TEST_COMMUNITY  Community is being "mined". ',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de123d9b76d240001ede283',
                                                name: 'test community 45',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de2f25e0c973e0001d9e199',
                                                name: 'Hello World community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de532d30c973e0001d9e221',
                                                name: 'Test community',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de5344a0c973e0001d9e278',
                                                name: 'Test Invites',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de790246bd16500012979d6',
                                                name: 'TheBug',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5de798456bd16500012979e3',
                                                name: 'test greg 333',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                        {
                                            community: {
                                                id: '5df81fc59c39750001a48158',
                                                name: 'AFTER QUERY REFACTORING',
                                                __typename: 'CommunityDTO',
                                            },
                                            __typename:
                                                'MemberRoleCommunityDTO',
                                        },
                                    ],
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        '00a329c0648769a73afac7f9381e08fb43dbea72',
                                    name: '',
                                    username: 'bla',
                                    avatar: null,
                                    title: null,
                                    social: null,
                                    articles: {
                                        totalElements: 0,
                                        __typename: 'ResponsePage_ArticleDTO',
                                    },
                                    collections: {
                                        totalElements: 0,
                                        __typename:
                                            'ResponsePage_CollectionDTO',
                                    },
                                    links: {
                                        totalElements: 0,
                                        __typename:
                                            'ResponsePage_ExternalLinkDTO',
                                    },
                                    communities: [],
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            isRead: false,
                            description: 'dfdfdfdf EDIT BY BLA',
                            id: 'ebd3386c34ff4e2cba8e5f62150f84fb',
                            version: 3,
                            title: 'ffffffffff EDIT BY BLA',
                            content: '{"markdown":"dfdfdfdf\\n\\nEDIT BY BLA"}',
                            authorId:
                                '00a329c0648769a73afac7f9381e08fb43dbea72',
                            dateCreated: '2019-12-17T09:08:29.850Z',
                            datePublished: '2019-12-17T09:21:58.698Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background: null,
                                canonical: null,
                            },
                            contentHash:
                                'QmSgmWrQ53ufReEhmZyuWuJTioTyQvsp79SLpuH2KqFuqo',
                            checkpoint:
                                'QmUS2ErEQrR3hkf3dN73FK4f3wLTbcb2NTR6GFUrq3LCtJ',
                            tags: ['fd'],
                            voteResult: {
                                sum: -2,
                                count: 2,
                                hasVoted: true,
                                quantity: {
                                    '-1': 2,
                                },
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '00a329c0648769a73afac7f9381e08fb43dbea72',
                                name: '',
                                username: 'bla',
                                avatar: null,
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5df81fc59c39750001a48158',
                                communityName: 'AFTER QUERY REFACTORING',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmNcLPRxnB895dstAuRKewvUmVC8uTaSX4Htsz7asvNQma',
                                resourceIdentifier: {
                                    id: '5df81fc59c39750001a48158',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            comments: {
                                content: [
                                    {
                                        author: {
                                            id:
                                                '37648fc15a8365735289e002d65d44d80c505e8b',
                                            name: 'Kauri Team',
                                            username: 'kauri',
                                            avatar:
                                                'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-12-17T14:41:29.293Z',
                                        body: 'Test 1 comment',
                                        __typename: 'CommentDTO',
                                    },
                                ],
                                totalPages: 1,
                                totalElements: 1,
                                isLast: true,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: 'EDIT BY BLA',
                            isBookmarked: false,
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
            ],
            members: {
                totalElements: 2,
                totalElementsBreakdown: {
                    ADMIN: 2,
                },
                content: [
                    {
                        id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                        role: 'ADMIN',
                        user: {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev2.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                        __typename: 'CommunityMemberDTO',
                    },
                    {
                        id: 'dd6325c45ae6fabd028d19fa1539663df14813a8',
                        role: 'ADMIN',
                        user: {
                            id: 'dd6325c45ae6fabd028d19fa1539663df14813a8',
                            username: 'greg123',
                            avatar: null,
                            __typename: 'PublicUserDTO',
                        },
                        __typename: 'CommunityMemberDTO',
                    },
                ],
                __typename: 'ResponseBreakdownPage_CommunityMemberDTO',
            },
            approvedId: [
                {
                    id: 'df5cedcc4eb5495ca443a630ad93b343',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: 'f1ac39e882394b0e99d26621aa78826e',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: 'UicniThmUz',
                    type: 'LINK',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '5df820999c39750001a4815b',
                    type: 'COLLECTION',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: 'ebd3386c34ff4e2cba8e5f62150f84fb',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
            ],
            pendingId: [],
            __typename: 'CommunityDTO',
        },
    },
    dataPresent: true,
}

export const Collection = {
    data: {
        getCollection: {
            id: '5cb55c871325f2000141df73',
            name: 'Getting Started',
            description:
                'Learn about blockchains, smart contracts, Ethereum, and what you can build with them',
            tags: ['ethereum', 'web3', 'solidity'],
            background:
                'https://api.kauri.io:443/ipfs/QmQTsd7FhCLBQVJCYNP8a5Vf1G68AsxLPyDtWP3gToc7g4',
            dateCreated: '2019-04-16T04:39:35.351Z',
            dateUpdated: '2019-04-16T04:39:35.351Z',
            owner: {
                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                name: 'Kauri Team',
                username: 'kauri',
                avatar:
                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                resourceIdentifier: {
                    id: '37648fc15a8365735289e002d65d44d80c505e8b',
                    type: 'USER',
                    __typename: 'ResourceIdentifier',
                },
                __typename: 'PublicUserDTO',
            },
            sections: [
                {
                    name: 'Start Here',
                    description:
                        "Don't know where to begin, these articles take you from no knowledge to zero knowledge",
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd55684513211466da7f8cc03987607d5',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'What is blockchain anyway? In this article, I will try to provide an in-depth yet simple to understand explanation. I will tell you about what is a blockchain, what features it has, which groups of users exist in blockchain network, and how they interact with each other. Note: this article mostly covers public blockchains, and of that public blockchains, it’s mostly about their use for cryptocurrencies. There are other uses of public blockchains, and there are also private blockchains. Private (',
                            id: 'd55684513211466da7f8cc03987607d5',
                            version: 2,
                            title: 'Blockchain Explained',
                            content:
                                '{"markdown":"\\n----\\n\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmWRdtskZTBhm39uQjaphrQcc4sXdTeUVuZ2s3ZWfdZ42m)\\n\\nWhat is blockchain anyway? In this article, I will try to provide an in-depth yet simple to understand explanation. I will tell you about what is a blockchain, what features it has, which groups of users exist in blockchain network, and how they interact with each other.\\n \\n_Note: this article mostly covers public blockchains, and of that public blockchains, it’s mostly about their use for cryptocurrencies. There are other uses of public blockchains, and there are also private blockchains. Private (or permissioned) blockchains have a similar structure, but different functions and mechanics._\\n \\n\\n## Overview\\nThe blockchain is just a bunch of blocks. Each block contains pieces of information. In cryptocurrencies, the information is usually a set of transactions. Each block is connected to the previous one.\\nTo date, the main usage of blockchain is cryptocurrencies. Cryptocurrency is an electronic cash system that runs without a central authority. Cryptocurrencies got adoption because they solved a problem of double-spending — a situation when a dishonest user of a decentralized cash system spends same coins twice. In Bitcoin, Ethereum, and other cryptocurrencies spending the same coins twice is almost impossible.\\nThe blockchain is a method of organizing and storing data. There are other methods, of course, though blockchain has several unique features.\\n\\n## Features\\nWhy use blockchain? Why not use traditional storage methods, like SQL database or key-value storage? Blockchain provides 2 features that make it a great use for cryptocurrencies: it’s distributed and trustless.\\nEven if a company uses data replication, it is usually 2–5 copies. In blockchain, the number of copies can be hundreds or thousands. In that way, the blockchain is \\n**distributed**\\n . The number of copies of Bitcoin ledger is equal to the number of full nodes. To wipe the information about transactions from existence, you need to delete it from each full node around the globe. To stop the blockchain, you can’t just hack the single computer or even a whole country. You need to break computers from different locations, running different operating systems and taking different security measures. Stopping the blockchain by hacking each full node is practically impossible.\\nIn PayPal, you believe that all transactions will complete and you’ll able to withdraw the money from your balance at any moment. In blockchain, you don’t need to trust any corporation. You don’t need to trust any particular user either. Instead, you believe that most of the users will behave honestly. In that sense, the blockchain is a \\n**trustless**\\n system. One of the features of trustless systems is fair rules for everyone. For example, PayPal is a monopoly in digital money, so it can increase the commission, lock your funds, and delay withdrawals. Basically, it can do everything with your money. In blockchain, no one has the power to make their own rules. Instead, it is driven by the majority and the free market.\\n\\n## Drawbacks\\nThe blockchain is not a silver bullet, and it has its own drawbacks. Most of them are partially fixable and negligible, though some of them might become a problem.\\nNote that this is just an overview of possible problems; the list is not exhaustive.\\n\\n## Sybil Attack\\nThe first problem is a possibility of Sybil Attack. It is a situation where a single person controls few nodes and persuades another user that all these nodes belong to different users. Basically, when succeeded, this attack allows a user to block another user from the network completely. This can result in transaction censoring when the attacker can decide which transactions to show you and which not. An attacker can also block your transactions from the network by not broadcasting them to other users. It can lead to double-spending and can block you from the rest of the network. To protect from Sybil Attack, nodes can limit the outbound connections to one per subnet. Another way to mitigate attack is to look for nodes with suspiciously-low hashrate.\\n\\n## Denial-of-Service Attack\\nAnother possible problem is a Denial-of-Service (DoS) attack. An attacker can overload a node by sending a lot of data to it. For example, it can send a really big block or transactions with scripts that take too long to execute. Bitcoin and other cryptocurrencies have some protection from DoS attacks. For example, many cryptocurrencies have a maximum possible block size.\\n\\n## Scalability\\nPublic blockchain systems are hard to scale. Hard means neither easy nor impossible. It is not impossible, because there aren’t any technological barriers to increase the throughput of the network. It is not easy, because just increasing it would make the system more centralized. Increasing the capacity of the blockchain means increasing hardware requirements of running a full node, and that means fewer people want and be able to maintain nodes.\\nIt is a question of whether a blockchain should be hugely scalable in the first place. First, blockchain is not a silver bullet — no need to use it for everything, even if it’s related to money and finance. Second, blockchain can be scaled by off-chain solutions. For example, Bitcoin throughput can be increased via Lightning Network.\\n\\n## Block content\\nEach block is made of two parts: header and data.\\nBlock header is a metadata. Usually, it contains such information as block number, timestamp (the record of when the block was created), block hash, and nonce.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmcM7hwg6HU9kzB3LgCXzdSAMqZQKegksTfBqSkHRAgz9Y)\\n\\nBlock data is a payload. It is the useful information that we need to store. The data usually contains multiple pieces of information that share the same structure. In Bitcoin, each block contains about a hundred of such pieces. Each piece is a transaction. To simplify, each transaction is sender address, recipient address, amount of transaction, and fee. In Ethereum, each transaction also contains “input data” field, which is used to pass data to smart contracts.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmPLLGmY7T75rjGGHvbSEr71ZBE2xUqdDCGy3tnmdeLXtZ)\\n\\n\\n## Genesis block\\nGenesis block is the block number zero, the first block that is ever created in the blockchain. Genesis block is the same block as others, except it doesn’t have a link to the previous block.\\nGenesis block in Bitcoin: \\n[Bitcoin Block #0](https://blockchain.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f)\\n .\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmVfrPPnqYxzJahKTtmrfrDBoHWgpFTWfdEkwYHP6EtLxp)\\n\\n\\n## Block generation\\nThe only way to add new information to the blockchain is to add a block to the end of it.\\nThe amount of added information is usually limited by software, otherwise, it may become bloated, and impossible for most of the users to keep the whole history of the blockchain. The general idea is to add new blocks in equal periods of time. Qualified users create blocks and send them to other network participants. If the block is valid, other users accept it. If it’s invalid, they ignore it and may punish block creator. The valid block propagates through the network in a few seconds.\\n\\n## Proof-of-Work\\nIn proof-of-work (PoW) systems, adding new block is usually called “ \\n**mining**\\n ”. Each miner independently tries to find a valid hash with the desired difficulty. This difficulty is automatically defined by software to control the number of new blocks. The first miner who finds the correct hash becomes the creator of a new block.\\nAs more and more miners join the network, the total hash rate — the combined computing power of all miners — increases. If there would be no constraints, miners would find hashes, and therefore blocks, more and more often. But most of the coins seek constant rate of finding new blocks, so they change a difficulty of mining based on the hash rate.\\nThe difficulty tells users how many hashes miners should find to get a correct one. The higher the difficulty, the more hashes is required. The difficulty increases when the hash rate increases. In that way, mining difficulty counterbalances ever-increasing computing power of miners. The difficulty of the network is rebalanced based on how often new blocks are mined in past. In can readjust after each block or after several blocks. In Bitcoin, for example, the difficulty readjusts every 2016 blocks, which takes about 2 weeks.\\n\\n## Proof-of-Stake\\nIn proof-of-stake (PoS), block producers are selected based on how many coins they have. This selection can be made randomly or by choosing those who get the most votes. The more coins you have, the higher the probability that you’ll be selected as the next producer or the bigger voting power you have. Selected producers then make blocks in specified time.\\nTo stop nodes from voting on wrong blocks, a punishment can be introduced. One way is to punish those nodes who vote on multiple blocks in the same round. Another way is to punish those nodes who voted for the unpopular choice, assuming that block that got few votes is incorrect.\\nThe process of staking can be delegated to other nodes. For example, if a user has a large number of coins, but he doesn’t want to or can’t vote regularly, he can delegate staking to another user. That user will have the voting power combined with the coins of the other user. After earning a profit, the delegate can then share part of his earnings. The whole process of delegation and sharing profits can be done automatically.\\n\\n## Hashing\\nThe hash is like a footprint of a digital file. Different files produce different hashes, and equal files produce equal hashes. You can easily find a hash of each file, but it’s very hard to find the original file by its hash. Moreover, slightly different files produce very different hashes, so you can’t tell how different are two files based on their hashes.\\nIn blockchain, each block contains the hash of the previous block. That way, if some block will be changed even slightly, its hash will also change, and the hash of all subsequent blocks will change too.\\nThe hash of each transaction is based on the previous hash and the block data. It can also contain a timestamp. If blocks are created by mining, network difficulty and nonce are also included in the hash.\\n\\n## Immutability\\nImmutability means that something can’t be changed. When people say that blockchain is immutable, they mean that changing old blocks is impractical. If you change a transaction, the hash of this transaction will also change, which in turn will change the hash of the Merkle root, and that will change block’s hash. As each block keeps the hash of the previous block, all blocks that come after changed block will also become invalid.\\nImagine an attacker wants to change a transaction that was made 1 hour ago. The attacker will need to mine all blocks from the one that was changed to the latest one. Moreover, he will also need to mine all future blocks that will be created while he mines previous blocks.\\nIt is indeed possible to change even the earliest blocks, but it would require controlling more than a half of total mining power, hence the meaning of 51% attack. In general, the older the block, the less probable that an attacker will successfully change it. Merchants often wait for 6 blocks to ensure that they will get the money, hence the 6 confirmations rule.\\n\\n## Nodes\\nNodes are computers that read and write to the blockchain. Different types of nodes have different roles and abilities.\\n\\n## Mining node\\nMining nodes are nodes that produce blocks. They usually have huge computing resources. Miners usually don’t validate the blocks, as they don’t store the blockchain. To make new blocks, all they need is a set of recent transactions and a hash of the last block.\\n\\n## Full node\\nFull nodes are the nodes that store the entire copy of the blockchain. They validate the blocks that they receive, and propagate validated blocks to the network. They can also send their own transactions to the pool.\\n\\n## Light node\\nLight nodes don’t store the whole blockchain. They usually store block headers and a very small set of transactions. Light nodes can’t validate blocks and need to trust full nodes. Light nodes, however, can connect to other nodes, receive new blocks, and send the transactions.\\n\\n## Web “node”\\nWeb nodes are not nodes at all. They are wallets that connect to the centralized servers. They don’t store any parts of the blockchain. Web wallets can’t connect to other nodes, receive blocks, or send the transactions. They can only ask a server to do that and expect that the server will provide correct information. They trust entirely to the server that they are connected to. Mobile wallets that don’t store blockchain data also belong there.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmNMqRhHk3JyXgHvNtgrFwK8PAhL2yd2YQWhbfXEFmnTwW)\\n\\n\\n## Network\\nIn decentralized systems, nodes come and go. There isn’t any guarantee that some particular node will be online today or tomorrow. That fact heavily affects the methods of connecting to and interacting with nodes.\\n\\n## Peer discovery\\nPeer discovery is a process of getting to know other network participants. When a user launches a node for the first time, it doesn’t have a track of peers to connect. To interact with the network, it should find peers and keep them in memory.\\nThere are several methods of discovering other peers, including hardcoded addresses, user input, DNS lookup, and others.\\nThe most primitive way is to connect to the addresses that are hardcoded in the wallet program. These addresses represent nodes that were initially set up by developers to grow the network in the first few days or weeks. While this is a simple method, it is usually not very spread in mature networks. For example, \\n**hardcoded addresses**\\n in Bitcoin is used only as a last resort, when other methods don’t work.\\nUsers can also \\n**manually**\\n provide the list of nodes they got elsewhere. A user can either write them into a text file, provide as command-line arguments, or enter them via the graphic user interface.\\nAnother method to discover peers is a \\n**DNS lookup**\\n . There are DNS servers that keep lists of nodes. These lists are updated by maintainers of these servers. Usually, there are several DNS servers so if one of the servers go down others will still be serving.\\nOnce a node found at least one peer, he can connect it. If the connection is successful, they can \\n**exchange**\\n information about peers that they collected.\\nWhen discovered, node addresses are stored in a database to get them on the next computer launch. Nodes with newer client software version are preferred. Addresses of old, inactive nodes are removed.\\n\\n## Blockchain download\\nOnce a node is connected to other peers, it can start to download a blockchain block by block.\\nThe first way to do that is to simply let the node to download the blocks from other peers. It can be slow because it depends not only on your Internet connection speed but also on how broad the bandwidth of the peers is. But it is a decentralized method, meaning that it doesn’t depend on a single site or server.\\nAnother way to download blockchain data is to download it from some external source on the Internet. It can be some random website, torrent file, or an archive sent to you by your friend. That might be faster than downloading it via p2p-connection, but it is also centralized and requires to trust the source that you download it from. Not only that, many links that once led to the blockchain archive might be dead by now.\\nWhatever method the blockchain is downloaded, it should be validated, and that might take even longer time. The computer should validate each block from the genesis one. The validation process includes checking proof-of-work, ensuring that all transactions in a block are correct, checking that Merkle Tree root calculated correctly, etc. While the speed of downloading depends on bandwidth, the validation relies on the CPU power.\\nSometimes, it is possible to skip the process of the validation of the whole blockchain and just check those blocks that contain wallet transaction, i. e. transactions sent to or from the selected wallet. The availability of such light validation depends on the wallet software that you use.\\n\\n## Sending a transaction\\nWhen it comes to spreading new transactions and blocks, cryptocurrencies usually use something called \\n**Gossip protocol**\\n . It’s like many people spreading the gossip until everyone knows it.\\nIt starts with a node making a transaction to send money. After the transaction is signed, the node sends it to the neighbor nodes.\\nWhen these nodes receive the transaction, they will check it. If the transaction is properly structured (has the correct format, has a signature, etc) and is not a double spend, they will, in turn, send it to their peers.\\nOf course, a node might already have the transaction when its peer is trying to send it. Because of that, the nodes first send the hash of the transaction. If the receiving node has the transaction with that hash, it will not download it again. If the receiving node doesn’t have the transaction, it will download it and send it further.\\nEventually, all connected nodes, including miners, will receive the transaction.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmR2vq4RYzdkDsgcdwFUob8XyT4DcFeHLSqpuMQoccMcXM)\\n\\n\\n## Block propagation\\nMiners and mining pools that actively make blocks collect all incoming transactions. It is economically viable for them to include as many transactions as possible in the next block because they will receive all transaction fees.\\nAfter a miner or a mining pool found correct hash, he will send the block to his peers. After that, the process is the same as sending a transaction. Nodes that received the new block send it to their peers, and after some time, everyone has the block.\\nIn case of PoS systems, the process is almost the same. When it is time for a block producer to make a block, he collects all transactions, puts them into his block, and sends the block to the peers.\\n\\n## Achieving consensus\\nTo work properly, a decentralized system like a cryptocurrency should constantly try to achieve a consensus. This basically means that each node should have the same set of blocks and transactions, which are stored in the same order.\\nMost of the time, the consensus will be achieved without any problems. The correct transactions and blocks will spread, and incorrect ones will die off.\\nHowever, it is possible that at some stage, two blocks will point to the same parent block. In other words, the chain will be forked in two chains. \\n**Forks**\\n can happen both in PoW and PoS systems. In proof-of-work chains, two miners can find a hash at the same time, and both will refer to the same block, the one that was mined before. In proof-of-stake, a block producer can pick an older, not the last block as its parent.\\nTo resolve a fork, the whole network should agree on which fork will become the main one and which will die. The rule of thumb is “the longest chain wins”. In PoS chain, that simply means that eventually, one fork will be longer than other, by at least one block, and all honest nodes and block producers will work on that fork, and drop the other one. In PoW chain, the “longest” usually means “more proof-of-work done”, so the fork that wins is not the one that has the biggest block number, but the one that more miners work on.\\n\\n## Dealing with attacks\\nBut how to achieve consensus when there are fraudulent nodes try to overwrite the history or censor the network? There are three possible scenarios.\\nFirst, an attacker doesn’t have a majority. The majority is either in mining rig (PoW) or coins (PoS). In that case, his possibilities are quite limited. He can try to conduct a 51% attack but has a high chance of failure. He is also risking wasting money on electricity, mining computers, or getting a stake by buying coins.\\nSecond, an attacker controls a majority. In that situation, he can pretty much control the network. However, even if some authority will control the network, it will likely to lose money. The beauty of cryptocurrencies is that they were built with game theory principles in mind. In cryptocurrencies, having power always means having something at stake. It can be GPUs, ASICs, staked coins, or something else. The attack will likely harm many network participants, and it will affect the price. Mining rigs and staked coins owned by the attacker will lose in value if will be valuable at all.\\nIt may be dangerous for someone to control the majority of power without even trying to make an attack. If the fact will become known, it will spread quickly and likely affect the price.\\nThird, a majority of nodes behaves badly. In fact, the majority doesn’t even need to be coordinated by some person. Simply by behaving wrong, they would be unlikely to make a double spend, but they can stop the network. This is the very unlikely event, as the majority usually obey laws, though it is possible in theory. As in the second scenario, the misbehaving majority will likely be punished by market forces.\\n"}',
                            authorId:
                                '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                            dateCreated: '2018-11-29T20:25:40.320Z',
                            datePublished: '2018-11-29T20:25:43.566Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmWBJJJt641GFFPif6umEnYPSWgQR2qn24PnMNb2E4AjYt',
                            checkpoint:
                                'QmeeHjh7Me7siWSuoQFBXYbE7kWQZxaWcRBHcr9oagftw4',
                            tags: null,
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                name: 'Timur Badretdinov',
                                username: 'Destiner',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                name: 'Timur Badretdinov',
                                username: 'Destiner',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                resourceIdentifier: {
                                    id:
                                        '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                    name: 'Timur Badretdinov',
                                    username: 'Destiner',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            id: '5bb65f0f4f34080001731dc2',
                            name: 'Ethereum 101',
                            description:
                                'High level overview of all things Ethereum',
                            tags: ['SOLIDITY', 'Ethereum'],
                            background: null,
                            dateUpdated: '2019-02-13T10:26:29.806Z',
                            owner: {
                                id: '60e0fca78e5bf845d7af875288b1bfb010d61ac4',
                                name: 'Wil Barnes',
                                username: 'wil',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmQQCj8493FQLUmWGCQMWzny6euAQUwhSBToFZjPtAExbH',
                                resourceIdentifier: {
                                    id:
                                        '60e0fca78e5bf845d7af875288b1bfb010d61ac4',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            sections: [
                                {
                                    id: 'df467976-7f8f-42f8-8d82-0f29afe365cb',
                                    name: 'Ethereum 101',
                                    description: 'Ethereum 101',
                                    resourcesId: [
                                        {
                                            id:
                                                '67a81d8746ee4b49ba19447e8e2a983e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '48d5098292fd4f11b251d1b1814f0bba',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '1c2c9e3a3db0461584757a60ca2424a9',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '3eba08b801a44776a07607b9e046dd08',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'b282e90cb260459fb8a8cc6e24ae34fa',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '1f4196c3db7f41e5845f063dc1581a4e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'e4f66c6079e74a4a9b532148d3158188',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '7e79b6932f8a41a4bcbbd194fd2fcc3a',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'a7ac47d26eab4ce899a865619122d42e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '67a81d8746ee4b49ba19447e8e2a983e',
                                            version: 7,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '48d5098292fd4f11b251d1b1814f0bba',
                                            version: 4,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '1c2c9e3a3db0461584757a60ca2424a9',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '3eba08b801a44776a07607b9e046dd08',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'b282e90cb260459fb8a8cc6e24ae34fa',
                                            version: 3,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '1f4196c3db7f41e5845f063dc1581a4e',
                                            version: 4,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'e4f66c6079e74a4a9b532148d3158188',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '7e79b6932f8a41a4bcbbd194fd2fcc3a',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'a7ac47d26eab4ce899a865619122d42e',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                            ],
                            resourceIdentifier: {
                                type: 'COLLECTION',
                                id: '5bb65f0f4f34080001731dc2',
                                __typename: 'ResourceIdentifier',
                            },
                            __typename: 'CollectionDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '6479f4a2cb3446d790dd27e8aeb36f63',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Smart contracts are programs which govern the behaviour of accounts within the Ethereum state, and Solidity is an object-oriented, high-level language for implementing smart contracts. With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. Solidity was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM). Solidity is statically typed, supports inheritance, libraries and complex us',
                            id: '6479f4a2cb3446d790dd27e8aeb36f63',
                            version: 1,
                            title:
                                'An Introduction to Smart Contracts with Solidity',
                            content:
                                '{"markdown":"Smart contracts are programs which govern the behaviour of accounts within the Ethereum state, and Solidity is an object-oriented, high-level language for implementing smart contracts.\\n\\nWith Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets.\\n\\nSolidity was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM).\\n\\nSolidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.\\n\\n## An Introductory Smart Contract\\n\\nThe Solidity code below sets the value of a variable and exposes it for other contracts to access.\\n\\n### Storage Example\\n\\n```solidity\\npragma solidity >=0.4.0 <0.7.0;\\n\\ncontract SimpleStorage {\\n    uint storedData;\\n\\n    function set(uint x) public {\\n        storedData = x;\\n    }\\n\\n    function get() public view returns (uint) {\\n        return storedData;\\n    }\\n}\\n```\\n\\nThe first line defines that the source code is written for Solidity version 0.4.0 or anything newer that does not break functionality (up to, but not including, version 0.7.0). This is to ensure that the contract is not compilable with a new (breaking) compiler version, where it could behave differently. Pragmas are common instructions for compilers about how to treat the source code (e.g., [pragma once](https://en.wikipedia.org/wiki/Pragma_once)).\\n\\nA contract in the sense of Solidity is a collection of code (its **functions**) and data (its **state**) that resides at a specific address on the Ethereum blockchain. The line `uint storedData;` declares a state variable called `storedData` of type `uint` (unsigned integer of 256 bits). Think of it as a single slot in a database that can be queried and altered by calling functions of the code that manages the database. In the case of Ethereum, this is always the owning contract. And in this case, the functions set and get can be used to modify or retrieve the value of the variable.\\n\\nTo access a state variable, you do not need the prefix `this` as is common in other languages.\\n\\nThis contract does not do much apart from (due to the infrastructure built by Ethereum) allow anyone to store a single number that is accessible by anyone in the world without a (feasible) way to prevent you from publishing this number. Anyone could call `set` again with a different value and overwrite your number, but the number is still stored in the history of the blockchain. There are ways to impose access restrictions so that only you can alter the number.\\n\\n## Next Steps\\n\\nThis introduction and example was taken from [the official Solidity documentation](https://solidity.readthedocs.io/), which is your best resource. Recommended next steps are:\\n\\n-   [The more advanced subcurrency example](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#subcurrency-example)\\n-   [A selection of smart contract examples](https://solidity.readthedocs.io/en/latest/solidity-by-example.html)\\n-   [An in-depth guide to the language core concepts](https://solidity.readthedocs.io/en/latest/solidity-in-depth.html)\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-30T00:10:26.716Z',
                            datePublished: '2019-04-30T00:10:30.059Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmeN9SKhoubbXwfpSdprqKF8bmNVmW6JaBB99MdwuGtuLj',
                            },
                            contentHash:
                                'QmSXAzZk2YzuDvTGy8mQHy3pFjEP3QKKQYB7GXTakFshNd',
                            checkpoint:
                                'QmUatCmc2dGQXj7JyC6Pi3VhQLZ9mcBh5D22CimUXddbtw',
                            tags: ['ethereum', 'smart-contracts', 'solidity'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            id: '5b8e401ee727370001c942e3',
                            name: 'Full Stack dApp Tutorial Series',
                            description:
                                'Series of articles and tutorials aimed at experienced software engineers, introducing the web3 tech stack and available resources. Culminating in building your first dApp (decentralised application)',
                            tags: [
                                'dapp',
                                'embark',
                                'react',
                                'tutorial',
                                'truffle',
                                'solidity',
                                'remix',
                            ],
                            background:
                                'https://api.beta.kauri.io:443/ipfs/QmeBq9H9wPAYqZrxwc7gYFNz9V7uEiSpGZfyhJ3fhbt1Wn',
                            dateUpdated: '2019-03-11T15:31:46.571Z',
                            owner: {
                                id: '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                name: 'Josh Cassidy',
                                username: 'joshorig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                resourceIdentifier: {
                                    id:
                                        '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            sections: [
                                {
                                    id: '95cf58e0-022f-499a-85e7-b9d986190e4f',
                                    name: 'Introduction',
                                    description: '',
                                    resourcesId: [
                                        {
                                            id:
                                                '3dad5bb77afc46d09666cc87b49c6729',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '9a7d8927c9484f879d761981d70a42df',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '3dad5bb77afc46d09666cc87b49c6729',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '9a7d8927c9484f879d761981d70a42df',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: '802d161f-fd63-477e-8565-302629a44133',
                                    name:
                                        'Solidity - Your First Smart Contract',
                                    description: 'Solidity Basics',
                                    resourcesId: [
                                        {
                                            id:
                                                '7a27a1c1fbdc428b8058f14db1a227aa',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '124b7db1d0cf4f47b414f8b13c9d66e2',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '973c5f54c4434bb1b0160cff8c695369',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '7a27a1c1fbdc428b8058f14db1a227aa',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '124b7db1d0cf4f47b414f8b13c9d66e2',
                                            version: 9,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '973c5f54c4434bb1b0160cff8c695369',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: 'cdad4265-6a1d-46ee-b5e7-79bd39bbbae2',
                                    name: 'Building With Truffle',
                                    description:
                                        'Compiling, Testing, & Adding A Frontend With The Truffle Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                'cbc38bf09088426fbefcbe7d42ac679f',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'f95f956261494090be1aaa8227464773',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '86903f66d39d4379a2e70bd583700ecf',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                'cbc38bf09088426fbefcbe7d42ac679f',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'f95f956261494090be1aaa8227464773',
                                            version: 8,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '86903f66d39d4379a2e70bd583700ecf',
                                            version: 14,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: 'cf4265f9-27e0-406c-87f8-30443c5a346a',
                                    name: 'Building With Embark',
                                    description:
                                        'Compiling & Testing With The Embark Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                '13758d60f21648a1897fad1fa5b78237',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'e8f18d0643c14756b43d698122bba9d9',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '13758d60f21648a1897fad1fa5b78237',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'e8f18d0643c14756b43d698122bba9d9',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: '610a1908-d64d-423b-9214-7d1adfd5dfaa',
                                    name: 'Building With Populus',
                                    description:
                                        'Compiling, & Testing With The Populus Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                '21b6d5256bcd4a0bb23c84c75c1b1f76',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '55a5ce344a31434ab7c749da26b58119',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '21b6d5256bcd4a0bb23c84c75c1b1f76',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '55a5ce344a31434ab7c749da26b58119',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                            ],
                            resourceIdentifier: {
                                type: 'COLLECTION',
                                id: '5b8e401ee727370001c942e3',
                                __typename: 'ResourceIdentifier',
                            },
                            __typename: 'CollectionDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'af913a853eaf4db88627b3ff9572b770',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Vyper is a smart contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM). It aims to follow the similar simplicity, security and readability principles of Python and provides the following features: Bounds and overflow checking: On array accesses as well as on arithmetic level. Support for signed integers and decimal fixed point numbers Decidability: It should be possible to compute a precise upper bound for the gas consumption of any function call. Stron',
                            id: 'af913a853eaf4db88627b3ff9572b770',
                            version: 1,
                            title:
                                'An Introduction to Smart Contracts with Vyper',
                            content:
                                '{"markdown":"Vyper is a smart contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM).\\n\\nIt aims to follow the similar simplicity, security and readability principles of Python and provides the following features:\\n\\n-   **Bounds and overflow checking**: On array accesses as well as on arithmetic level.\\n-   **Support for signed integers and decimal fixed point numbers**\\n-   **Decidability**: It should be possible to compute a precise upper bound for the gas consumption of any function call.\\n-   **Strong typing**: Including support for units (e.g., timestamp, timedelta, seconds, wei, wei per second, meters per second squared).\\n-   **Small and understandable compiler code**\\n-   **Limited support for pure functions**: Anything marked constant is not allowed to change the state.\\n\\nAnd to follow similar principles, Vyper does not support:\\n\\n-   **Modifiers**\\n-   **Class inheritance**\\n-   **Inline assembly**\\n-   **Function overloading**\\n-   **Operator overloading**\\n-   **Recursive calling**\\n-   **Infinite-length loops**\\n-   **Binary fixed point**\\n\\n## Introductory Open Auction Example\\n\\nAs an introductory example of a smart contract written in Vyper, we begin with an open auction contract. All Vyper syntax is valid Python3 syntax, however not all Python3 functionality is available in Vyper.\\n\\nIn this contract, participants can submit bids during a limited time period. When the auction period ends, a predetermined beneficiary receives the amount of the highest bid.\\n\\n```python\\n# Open Auction\\n\\n# Auction params\\n# Beneficiary receives money from the highest bidder\\nbeneficiary: public(address)\\nauctionStart: public(timestamp)\\nauctionEnd: public(timestamp)\\n\\n# Current state of auction\\nhighestBidder: public(address)\\nhighestBid: public(wei_value)\\n\\n# Set to true at the end, disallows any change\\nended: public(bool)\\n\\n# Keep track of refunded bids so we can follow the withdraw pattern\\npendingReturns: public(map(address, wei_value))\\n\\n# Create a simple auction with `_bidding_time`\\n# seconds bidding time on behalf of the\\n# beneficiary address `_beneficiary`.\\n@public\\ndef __init__(_beneficiary: address, _bidding_time: timedelta):\\n    self.beneficiary = _beneficiary\\n    self.auctionStart = block.timestamp\\n    self.auctionEnd = self.auctionStart + _bidding_time\\n\\n# Bid on the auction with the value sent\\n# together with this transaction.\\n# The value will only be refunded if the\\n# auction is not won.\\n@public\\n@payable\\ndef bid():\\n    # Check if bidding period is over.\\n    assert block.timestamp < self.auctionEnd\\n    # Check if bid is high enough\\n    assert msg.value > self.highestBid\\n    # Track the refund for the previous high bidder\\n    self.pendingReturns[self.highestBidder] += self.highestBid\\n    # Track new high bid\\n    self.highestBidder = msg.sender\\n    self.highestBid = msg.value\\n\\n# Withdraw a previously refunded bid. The withdraw pattern is\\n# used here to avoid a security issue. If refunds were directly\\n# sent as part of bid(), a malicious bidding contract could block\\n# those refunds and thus block new higher bids from coming in.\\n@public\\ndef withdraw():\\n    pending_amount: wei_value = self.pendingReturns[msg.sender]\\n    self.pendingReturns[msg.sender] = 0\\n    send(msg.sender, pending_amount)\\n\\n# End the auction and send the highest bid\\n# to the beneficiary.\\n@public\\ndef endAuction():\\n    # It is a good guideline to structure functions that interact\\n    # with other contracts (i.e. they call functions or send Ether)\\n    # into three phases:\\n    # 1. checking conditions\\n    # 2. performing actions (potentially changing conditions)\\n    # 3. interacting with other contracts\\n    # If these phases are mixed up, the other contract could call\\n    # back into the current contract and modify the state or cause\\n    # effects (Ether payout) to be performed multiple times.\\n    # If functions called internally include interaction with external\\n    # contracts, they also have to be considered interaction with\\n    # external contracts.\\n\\n    # 1. Conditions\\n    # Check if auction endtime has been reached\\n    assert block.timestamp >= self.auctionEnd\\n    # Check if this function has already been called\\n    assert not self.ended\\n\\n    # 2. Effects\\n    self.ended = True\\n\\n    # 3. Interaction\\n    send(self.beneficiary, self.highestBid)\\n```\\n\\nThis example only has a constructor, two methods to call, and variables to manage the contract state. This is all we need for a basic implementation of an auction smart contract.\\n\\nLet’s get started!\\n\\n```python\\n# Auction params\\n# Beneficiary receives money from the highest bidder\\nbeneficiary: public(address)\\nauctionStart: public(timestamp)\\nauctionEnd: public(timestamp)\\n\\n# Current state of auction\\nhighestBidder: public(address)\\nhighestBid: public(wei_value)\\n\\n# Set to true at the end, disallows any change\\nended: public(bool)\\n```\\n\\nWe begin by declaring variables to keep track of our contract state. We initialize a global variable beneficiary by calling `public` on the datatype `address`. The beneficiary will be the receiver of money from the highest bidder. We also initialize the variables `auctionStart` and `auctionEnd` with the datatype `timestamp` to manage the open auction period and `highestBid` with datatype `wei_value`, the smallest denomination of ether, to manage auction state. The variable `ended` is a boolean to determine whether the auction is officially over.\\n\\nAll the variables are passed into the public function. By declaring the variable public, the variable is callable by external contracts. Initializing the variables without the public function defaults to a private declaration and thus only accessible to methods within the same contract. The public function additionally creates a ‘getter’ function for the variable, accessible through an external call such as `contract.beneficiary()`.\\n\\nNow, the constructor.\\n\\nThe contract is initialized with two arguments: `_beneficiary` of type `address` and `_bidding_time` with type `timedelta`, the time difference between the start and end of the auction. We store these two pieces of information into the contract variables `self.beneficiary` and `self.auctionEnd`. We have access to the current time by calling `block.timestamp`. `block` is an object available within any Vyper contract and provides information about the block at the time of calling. Similar to block, another important object available to us within the contract is `msg`, which provides information on the method caller.\\n\\nWith initial setup out of the way, lets look at how our users can make bids.\\n\\nThe `@payable` decorator allows a user to send some ether to the contract in order to call the decorated method. In this case, a user wanting to make a bid calls the `bid()` method while sending an amount equal to their desired bid (not including gas fees). When calling any method within a contract, we are provided with a built-in variable `msg` and we can access the public address of any method caller with `msg.sender`. Similarly, the amount of ether a user sends can be accessed by calling `msg.value`.\\n\\nWe first check whether the current time is before the auction’s end time using the `assert` function which takes any boolean statement. We also check to see if the new bid is greater than the highest bid. If the two assert statements pass, we can safely continue to the next lines; otherwise, the `bid()` method throws an error and reverts the transaction. If the two assert statements and the check that the previous bid is not equal to zero pass, we can safely conclude that we have a valid new highest bid. We send back the previous `highestBid` to the previous `highestBidder` and set our new `highestBid` and `highestBidder`.\\n\\nWith the `endAuction()` method, we check whether our current time is past the `auctionEnd` time we set upon initialization of the contract. We also check that `self.ended` had not previously been set to `True`. We do this to prevent any calls to the method if the auction had already ended, which could potentially be malicious if the check had not been made. We then officially end the auction by setting `self.ended` to `True` and sending the highest bid amount to the beneficiary.\\n\\n## Next Steps\\n\\nThis introduction and example was taken from [the official Vyper documentation](https://vyper.readthedocs.io/), which is your best resource. Recommended next steps are:\\n\\n-   [Vyper by example](https://vyper.readthedocs.io/en/latest/vyper-by-example.html)\\n-   [Structure of a contract](https://vyper.readthedocs.io/en/latest/structure-of-a-contract.html)\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-30T01:21:05.766Z',
                            datePublished: '2019-04-30T01:21:11.860Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmUUT6kMFq1jqXJQPKizRqq9ziGKSBejSjAG7yFjgPAotD',
                            },
                            contentHash:
                                'QmZy9DsHhcRGeR3QsnsRPinxQv56YdXoRirYu9wYANDjLk',
                            checkpoint:
                                'QmUatCmc2dGQXj7JyC6Pi3VhQLZ9mcBh5D22CimUXddbtw',
                            tags: ['ethereum', 'smart-contracts', 'vyper'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Token Standards',
                    description:
                        'Smart contracts all follow token standards, these are the ones you need to know.',
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '028ff6bf2fa0432191371e6d39398ba6',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'A History of Exchange We’re all familiar with currency exchanges. They come in various online and offline forms and are what people often use for trading one currency to another when speculating or traveling to a new country. Currency exchange has its roots in ancient times, the Byzantine government, for example, maintained a monopoly on currency exchange. Modern exchanges started during the 15th century when the Italian banking family Medici opened banks to exchange currencies in foreign nation',
                            id: '028ff6bf2fa0432191371e6d39398ba6',
                            version: 1,
                            title:
                                'Cute Kitties and Where to Find Them — An Introduction to Non-Fungible Tokens ',
                            content:
                                '{"markdown":"## A History of Exchange\\n\\nWe’re all familiar with currency exchanges. They come in various online and offline forms and are what people often use for trading one currency to another when speculating or traveling to a new country.\\n\\nCurrency exchange has its roots in ancient times, the Byzantine government, for example, maintained a monopoly on currency exchange. Modern exchanges started during the 15th century when the Italian banking family Medici opened banks to exchange currencies in foreign nations. There are ledgers dating back to 1704 in Amsterdam that show the existence of an active [Forex market](https://www.investopedia.com/terms/forex/f/forex-market.asp). Nowadays, [fiat](https://en.wikipedia.org/wiki/Fiat_money) exchanges are often performed through banks, brokers, and online.\\n\\nWith the advent of CryptoAssets, the world witnessed an abundance of new exchanges for exchanging fiat currencies to CryptoAssets or swapping one CryptoAsset to another. Some of these exchanges (i.e., [Binance](https://www.binance.com/en), [Coinbase](https://www.coinbase.com)) are centralized, while others (i.e., [IDEX](https://idex.market/), [Waves](https://wavesplatform.com)) are decentralized. While each approach has its limitations and fallibilities, one of the concerns with CryptoAssets is the vulnerability of token ownership and exchange as a result of centralization—vulnerabilities such as censorship and hacking. At the same time, decentralized exchanges have traditionally struggled with issues such as illiquidity and fees associated with requiring every new order or adjustment to go through the blockchain (on-chain transactions), resulting in slower transaction times and extra fees.\\n\\nProjects such as [0x](https://0x.org/) have provided a solution for some of the limitations of decentralized exchanges. By creating a standard protocol on the Ethereum blockchain, they allow third-party relayers to build decentralized exchanges that host orders off-chain and bring them on-chain to settle the order. As a result, it’s an ideal protocol for platforms such as video games that exchange digital collectibles, art, and other CryptoAssets.\\n\\nA collectible is an item that is often unique in characteristics and valued by collectors. The history of collecting special items date back to ancient history, and it’s also seen in other animals, such as Bowerbirds. Modern day collectors often collect items for their future value, but many do it as a hobby. There are items that are manufactured, specifically, to be collected. Cigarette cards in the late nineteenth century were one of the first manufactured collectibles, then came the era of sports cards representing favorite players, and in the 90’s the different designs of Beanie Babies. Digital collectibles are the most recent form of valued items.\\n\\n## Non-Fungible Tokens and Ethereum Improvement Proposals\\n\\nIn the early days of Ethereum, it wasn’t possible to create collectibles, because digital items were fungible and replicable, but thanks to an [Ethereum Improvement Proposal (EIP)](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md), and the [EIP-721 token standard proposal](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md), it became possible to create non-fungible digital items.\\n\\nThe Ethereum foundation has a process for suggesting modifications to the Ethereum protocol. Anyone wanting to change or add a feature to the protocol can do so through submitting an EIP. If the community approves an EIP, it’s incorporated into the protocol. EIP-721 allowed for the creation of Non-fungible Tokens (NFTs), an authentic digital scarcity that is verifiable within the network without needing any intermediaries, such as central exchanges.\\n\\n## ERC-721 Contracts\\n\\nHere is a basic example of an ERC-721 contract, borrowed from <https://gist.github.com/aunyks/2d148a77150247f6f9745286ff46fc53#file-erc721-definitions-sol>:\\n\\n```solidity\\ncontract ERC721 {\\n   // ERC20 compatible functions\\n   function name() constant returns (string name);\\n   function symbol() constant returns (string symbol);\\n   function totalSupply() constant returns (uint256 totalSupply);\\n   function balanceOf(address _owner) constant returns (uint balance);\\n   // Functions that define ownership\\n   function ownerOf(uint256 _tokenId) constant returns (address owner);\\n   function approve(address _to, uint256 _tokenId);\\n   function takeOwnership(uint256 _tokenId);\\n   function transfer(address _to, uint256 _tokenId);\\n   function tokenOfOwnerByIndex(address _owner, uint256 _index) constant returns (uint tokenId);\\n   // Token metadata\\n   function tokenMetadata(uint256 _tokenId) constant returns (string infoUrl);\\n   // Events\\n   event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\\n   event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\\n}\\n```\\n\\nFor a full overview of the fields and what they mean, read Gerald Nash’s essay on [The Anatomy of ERC-721](https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24). Here’s a brief overview of the main functions and events:\\n\\n- `name`: The full name of your token (e.g., MountainGoatMutineer)\\n- `symbol`: An abbreviation for your token (e.g., MGM)\\n- `totalSupply`: Returns the number of coins available on the ledger\\n- `balanceOf`: Shows how many tokens are on a particular address\\n- `ownerOf`: Returns the address of a token’s owner\\n- `approve`: Grants authority to another entity to transfer tokens on behalf of the owner\\n- `takeOwnership`: Acts like a withdraw function. It allows a new owner to withdraw tokens from another account and into their account.\\n- `transfer`: Allows the owner of a token to transfer their token to another user.\\n- `tokenOfOwnerByIndex`: Though optional, this function allows users to retrieve individual tokens by its index in the list of tokens they own\\n- `tokenMetadata`: Though optional, this function allows us to find information on an NFT (e.g., through an HTTP link or IPFS hash)\\n- `Transfer`: This event broadcasts the sending and receiving addresses, and the token ID that was transferred\\n- `Approval`: This event fires whenever another user is approved to take ownership of a token\\n\\nIn the words of the creators, the rationale for ERC-721 is that:\\n\\n> There are many proposed uses of Ethereum smart contracts that depend on tracking distinguishable assets. Examples of existing or planned NFTs are [LAND in Decentraland](https://market.decentraland.org), [the eponymous punks in CryptoPunks](https://www.larvalabs.com/cryptopunks), and in-game items using systems like [DMarket](https://dmarket.com) or [EnjinCoin](https://enjincoin.io). Future uses include tracking real-world assets, like real-estate (as envisioned by companies like [Ubitquity](https://www.ubitquity.io) or [Propy](https://propy.com). It is critical in each of these cases that these items are not \\"lumped together\\" as numbers in a ledger, but instead, each asset must have its ownership individually and atomically tracked.\\n\\n## NFTs and Games\\n\\nYou might be familiar with the game [CryptoKitties](https://www.cryptokitties.co/) where people can buy a unique Kittie with Ether, the native currency of the Ethereum protocol. Each Kittie is an NFT, meaning that each Kittie is unique in shape, characteristics, and thus value.\\n\\nIdeally, those who want to buy, sell, or exchange NFTs should be able to without relying on a central exchange to perform their transactions. In addition to problems such as censorship and hacking caused by centralization, people might want to exchange NFTs tens of times a year, buying, selling, exchanging, and so forth. Multiple intermediaries that take a cut each time a trade occurs wouldn’t be as fluid as a peer-to-peer asset trading experience. Another advantage offered by decentralization is that if a hostile state decides to impose its power on exchanges that operate in its country, it would have an easy time doing so with a centralized exchanges, but not with decentralized ones. By taking intermediaries out of the picture, we can solve the vulnerability of centralization and remove the rent-seeker in the middle. In practice, a digital game with various characters can use the 0x protocol to create an exchange that allows their gamers to trade with one another directly and sell them on the exchange for Ether.\\n\\nFor example, the [Origin project has partnered with Dig Star](https://medium.com/originprotocol/origin-metaps-to-build-a-decentralized-marketplace-for-non-fungible-tokens-nfts-387e5d29c437), a character creation game built on Ethereum to do something similar. Anyone can download the game and exchange digital characters on the Origin exchange. In the game, there is a mineral called “Cp” which only creatures traded on the exchange can mine. Gamers can sell the minerals they mine with them for Ether on the same ecosystem.\\n\\nAnother game called, [God’s Unchained](https://godsunchained.com/), is using 0x to sell players unique cards, including limited edition ones, while they’re on presale. Because the cards comply with ERC-721, players can prove the rarity of their cards, and trade them for Ether.\\n\\nHistorically, game publishers were a centralized authority that owned the objects players bought on the game, but that’s no longer the case. With NFTs, players can own the token and if the code permits, take it from one game to another. If the game shuts down, the players still have their token. 0x makes it possible for peer-to-peer transfers, the same as trading baseball cards with friends, but without strict digital-rights-management policies.\\n\\n## ERC-1155, the Future?\\n\\nWhile ERC-721 allows for a new class of assets to exist and give collectors the opportunity to collect digital items, it has some limitation. For this reason, developers have proposed [ERC-1155](https://github.com/ethereum/eips/issues/1155), perhaps the topic for an upcoming article."}',
                            authorId:
                                '6926c6f87259d725b9af60a375348715be04eda2',
                            dateCreated: '2019-03-12T13:21:45.345Z',
                            datePublished: '2019-03-12T13:22:06.391Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmYVfsjo9GmxR9BTRyRBYKrqjgLxgWtpwEv9i5XLtNkVz7',
                            checkpoint:
                                'QmPdEJy8FXXgR4ebuAgFTFcf6pqutAq8dtUsWxiE6G2hk5',
                            tags: ['erc721', 'nft'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '6926c6f87259d725b9af60a375348715be04eda2',
                                name: 'Shayan Shokrgozar',
                                username: 'Transcendent',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '6926c6f87259d725b9af60a375348715be04eda2',
                                name: 'Shayan Shokrgozar',
                                username: 'Transcendent',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                resourceIdentifier: {
                                    id:
                                        '6926c6f87259d725b9af60a375348715be04eda2',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '6926c6f87259d725b9af60a375348715be04eda2',
                                    name: 'Shayan Shokrgozar',
                                    username: 'Transcendent',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'b382103e9496409c90c495f35940887e',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Simple Summary A standard interface for non-fungible tokens, also known as deeds. Abstract The following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs. We considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (operators). NFTs can represent ownership over digital or physical assets. We considered a div',
                            id: 'b382103e9496409c90c495f35940887e',
                            version: 1,
                            title: 'ERC-721 Non-Fungible Token Standard',
                            content:
                                '{"markdown":"## Simple Summary\\n\\nA standard interface for non-fungible tokens, also known as deeds.\\n\\n## Abstract\\n\\nThe following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.\\n\\nWe considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (\\"operators\\"). NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more:\\n\\n- Physical property — houses, unique artwork\\n- Virtual collectables — unique pictures of kittens, collectable cards\\n- \\"Negative value\\" assets — loans, burdens and other responsibilities\\n\\nIn general, all houses are distinct and no two kittens are alike. NFTs are *distinguishable* and you must track the ownership of each one separately.\\n\\n## Motivation\\n\\nA standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum. We provide for simple ERC-721 smart contracts as well as contracts that track an *arbitrarily large* number of NFTs. Additional applications are discussed below.\\n\\nThis standard is inspired by the ERC-20 token standard and builds on two years of experience since EIP-20 was created. EIP-20 is insufficient for tracking NFTs because each asset is distinct (non-fungible) whereas each of a quantity of tokens is identical (fungible).\\n\\nDifferences between this standard and EIP-20 are examined below.\\n\\n## Specification\\n\\nThe key words \\"MUST\\", \\"MUST NOT\\", \\"REQUIRED\\", \\"SHALL\\", \\"SHALL NOT\\", \\"SHOULD\\", \\"SHOULD NOT\\", \\"RECOMMENDED\\", \\"MAY\\", and \\"OPTIONAL\\" in this document are to be interpreted as described in RFC 2119.\\n\\n**Every ERC-721 compliant contract must implement the `ERC721` and `ERC165` interfaces** (subject to \\"caveats\\" below):\\n\\n```solidity\\npragma solidity ^0.4.20;\\n\\n/// @title ERC-721 Non-Fungible Token Standard\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x80ac58cd.\\ninterface ERC721 /* is ERC165 */ {\\n    /// @dev This emits when ownership of any NFT changes by any mechanism.\\n    ///  This event emits when NFTs are created (`from` == 0) and destroyed\\n    ///  (`to` == 0). Exception: during contract creation, any number of NFTs\\n    ///  may be created and assigned without emitting Transfer. At the time of\\n    ///  any transfer, the approved address for that NFT (if any) is reset to none.\\n    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);\\n\\n    /// @dev This emits when the approved address for an NFT is changed or\\n    ///  reaffirmed. The zero address indicates there is no approved address.\\n    ///  When a Transfer event emits, this also indicates that the approved\\n    ///  address for that NFT (if any) is reset to none.\\n    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);\\n\\n    /// @dev This emits when an operator is enabled or disabled for an owner.\\n    ///  The operator can manage all NFTs of the owner.\\n    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);\\n\\n    /// @notice Count all NFTs assigned to an owner\\n    /// @dev NFTs assigned to the zero address are considered invalid, and this\\n    ///  function throws for queries about the zero address.\\n    /// @param _owner An address for whom to query the balance\\n    /// @return The number of NFTs owned by `_owner`, possibly zero\\n    function balanceOf(address _owner) external view returns (uint256);\\n\\n    /// @notice Find the owner of an NFT\\n    /// @dev NFTs assigned to zero address are considered invalid, and queries\\n    ///  about them do throw.\\n    /// @param _tokenId The identifier for an NFT\\n    /// @return The address of the owner of the NFT\\n    function ownerOf(uint256 _tokenId) external view returns (address);\\n\\n    /// @notice Transfers the ownership of an NFT from one address to another address\\n    /// @dev Throws unless `msg.sender` is the current owner, an authorized\\n    ///  operator, or the approved address for this NFT. Throws if `_from` is\\n    ///  not the current owner. Throws if `_to` is the zero address. Throws if\\n    ///  `_tokenId` is not a valid NFT. When transfer is complete, this function\\n    ///  checks if `_to` is a smart contract (code size > 0). If so, it calls\\n    ///  `onERC721Received` on `_to` and throws if the return value is not\\n    ///  `bytes4(keccak256(\\"onERC721Received(address,address,uint256,bytes)\\"))`.\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    /// @param data Additional data with no specified format, sent in call to `_to`\\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;\\n\\n    /// @notice Transfers the ownership of an NFT from one address to another address\\n    /// @dev This works identically to the other function with an extra data parameter,\\n    ///  except this function just sets data to \\"\\".\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;\\n\\n    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE\\n    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE\\n    ///  THEY MAY BE PERMANENTLY LOST\\n    /// @dev Throws unless `msg.sender` is the current owner, an authorized\\n    ///  operator, or the approved address for this NFT. Throws if `_from` is\\n    ///  not the current owner. Throws if `_to` is the zero address. Throws if\\n    ///  `_tokenId` is not a valid NFT.\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;\\n\\n    /// @notice Change or reaffirm the approved address for an NFT\\n    /// @dev The zero address indicates there is no approved address.\\n    ///  Throws unless `msg.sender` is the current NFT owner, or an authorized\\n    ///  operator of the current owner.\\n    /// @param _approved The new approved NFT controller\\n    /// @param _tokenId The NFT to approve\\n    function approve(address _approved, uint256 _tokenId) external payable;\\n\\n    /// @notice Enable or disable approval for a third party (\\"operator\\") to manage\\n    ///  all of `msg.sender`\'s assets\\n    /// @dev Emits the ApprovalForAll event. The contract MUST allow\\n    ///  multiple operators per owner.\\n    /// @param _operator Address to add to the set of authorized operators\\n    /// @param _approved True if the operator is approved, false to revoke approval\\n    function setApprovalForAll(address _operator, bool _approved) external;\\n\\n    /// @notice Get the approved address for a single NFT\\n    /// @dev Throws if `_tokenId` is not a valid NFT.\\n    /// @param _tokenId The NFT to find the approved address for\\n    /// @return The approved address for this NFT, or the zero address if there is none\\n    function getApproved(uint256 _tokenId) external view returns (address);\\n\\n    /// @notice Query if an address is an authorized operator for another address\\n    /// @param _owner The address that owns the NFTs\\n    /// @param _operator The address that acts on behalf of the owner\\n    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise\\n    function isApprovedForAll(address _owner, address _operator) external view returns (bool);\\n}\\n\\ninterface ERC165 {\\n    /// @notice Query if a contract implements an interface\\n    /// @param interfaceID The interface identifier, as specified in ERC-165\\n    /// @dev Interface identification is specified in ERC-165. This function\\n    ///  uses less than 30,000 gas.\\n    /// @return `true` if the contract implements `interfaceID` and\\n    ///  `interfaceID` is not 0xffffffff, `false` otherwise\\n    function supportsInterface(bytes4 interfaceID) external view returns (bool);\\n}\\n```\\n\\nA wallet/broker/auction application MUST implement the **wallet interface** if it will accept safe transfers.\\n\\n```solidity\\n/// @dev Note: the ERC-165 identifier for this interface is 0x150b7a02.\\ninterface ERC721TokenReceiver {\\n    /// @notice Handle the receipt of an NFT\\n    /// @dev The ERC721 smart contract calls this function on the recipient\\n    ///  after a `transfer`. This function MAY throw to revert and reject the\\n    ///  transfer. Return of other than the magic value MUST result in the\\n    ///  transaction being reverted.\\n    ///  Note: the contract address is always the message sender.\\n    /// @param _operator The address which called `safeTransferFrom` function\\n    /// @param _from The address which previously owned the token\\n    /// @param _tokenId The NFT identifier which is being transferred\\n    /// @param _data Additional data with no specified format\\n    /// @return `bytes4(keccak256(\\"onERC721Received(address,address,uint256,bytes)\\"))`\\n    ///  unless throwing\\n    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);\\n}\\n```\\n\\nThe **metadata extension** is OPTIONAL for ERC-721 smart contracts (see \\"caveats\\", below). This allows your smart contract to be interrogated for its name and for details about the assets which your NFTs represent.\\n\\n```solidity\\n/// @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x5b5e139f.\\ninterface ERC721Metadata /* is ERC721 */ {\\n    /// @notice A descriptive name for a collection of NFTs in this contract\\n    function name() external view returns (string _name);\\n\\n    /// @notice An abbreviated name for NFTs in this contract\\n    function symbol() external view returns (string _symbol);\\n\\n    /// @notice A distinct Uniform Resource Identifier (URI) for a given asset.\\n    /// @dev Throws if `_tokenId` is not a valid NFT. URIs are defined in RFC\\n    ///  3986. The URI may point to a JSON file that conforms to the \\"ERC721\\n    ///  Metadata JSON Schema\\".\\n    function tokenURI(uint256 _tokenId) external view returns (string);\\n}\\n```\\n\\nThis is the \\"ERC721 Metadata JSON Schema\\" referenced above.\\n\\n```json\\n{\\n    \\"title\\": \\"Asset Metadata\\",\\n    \\"type\\": \\"object\\",\\n    \\"properties\\": {\\n        \\"name\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"Identifies the asset to which this NFT represents\\"\\n        },\\n        \\"description\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"Describes the asset to which this NFT represents\\"\\n        },\\n        \\"image\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.\\"\\n        }\\n    }\\n}\\n```\\n\\nThe **enumeration extension** is OPTIONAL for ERC-721 smart contracts (see \\"caveats\\", below). This allows your contract to publish its full list of NFTs and make them discoverable.\\n\\n```solidity\\n/// @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x780e9d63.\\ninterface ERC721Enumerable /* is ERC721 */ {\\n    /// @notice Count NFTs tracked by this contract\\n    /// @return A count of valid NFTs tracked by this contract, where each one of\\n    ///  them has an assigned and queryable owner not equal to the zero address\\n    function totalSupply() external view returns (uint256);\\n\\n    /// @notice Enumerate valid NFTs\\n    /// @dev Throws if `_index` >= `totalSupply()`.\\n    /// @param _index A counter less than `totalSupply()`\\n    /// @return The token identifier for the `_index`th NFT,\\n    ///  (sort order not specified)\\n    function tokenByIndex(uint256 _index) external view returns (uint256);\\n\\n    /// @notice Enumerate NFTs assigned to an owner\\n    /// @dev Throws if `_index` >= `balanceOf(_owner)` or if\\n    ///  `_owner` is the zero address, representing invalid NFTs.\\n    /// @param _owner An address where we are interested in NFTs owned by them\\n    /// @param _index A counter less than `balanceOf(_owner)`\\n    /// @return The token identifier for the `_index`th NFT assigned to `_owner`,\\n    ///   (sort order not specified)\\n    function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256);\\n}\\n```\\n\\n### Caveats\\n\\nThe 0.4.20 Solidity interface grammar is not expressive enough to document the ERC-721 standard. A contract which complies with ERC-721 MUST also abide by the following:\\n\\n- Solidity issue #3412: The above interfaces include explicit mutability guarantees for each function. Mutability guarantees are, in order weak to strong: `payable`, implicit nonpayable, `view`, and `pure`. Your implementation MUST meet the mutability guarantee in this interface and you MAY meet a stronger guarantee. For example, a `payable` function in this interface may be implemented as nonpayble (no state mutability specified) in your contract. We expect a later Solidity release will allow your stricter contract to inherit from this interface, but a workaround for version 0.4.20 is that you can edit this interface to add stricter mutability before inheriting from your contract.\\n- Solidity issue #3419: A contract that implements `ERC721Metadata` or `ERC721Enumerable` SHALL also implement `ERC721`. ERC-721 implements the requirements of interface ERC-165.\\n- Solidity issue #2330: If a function is shown in this specification as `external` then a contract will be compliant if it uses `public` visibility. As a workaround for version 0.4.20, you can edit this interface to switch to `public` before inheriting from your contract.\\n- Solidity issues #3494, #3544: Use of `this.*.selector` is marked as a warning by Solidity, a future version of Solidity will not mark this as an error.\\n\\n*If a newer version of Solidity allows the caveats to be expressed in code, then this EIP MAY be updated and the caveats removed, such will be equivalent to the original specification.*\\n\\n## Rationale\\n\\nThere are many proposed uses of Ethereum smart contracts that depend on tracking distinguishable assets. Examples of existing or planned NFTs are LAND in Decentraland, the eponymous punks in CryptoPunks, and in-game items using systems like DMarket or EnjinCoin. Future uses include tracking real-world assets, like real-estate (as envisioned by companies like Ubitquity or Propy. It is critical in each of these cases that these items are not \\"lumped together\\" as numbers in a ledger, but instead each asset must have its ownership individually and atomically tracked. Regardless of the nature of these assets, the ecosystem will be stronger if we have a standardized interface that allows for cross-functional asset management and sales platforms.\\n\\n**\\"NFT\\" Word Choice**\\n\\n\\"NFT\\" was satisfactory to nearly everyone surveyed and is widely applicable to a broad universe of distinguishable digital assets. We recognize that \\"deed\\" is very descriptive for certain applications of this standard (notably, physical property).\\n\\n*Alternatives considered: distinguishable asset, title, token, asset, equity, ticket*\\n\\n**NFT Identifiers**\\n\\nEvery NFT is identified by a unique `uint256` ID inside the ERC-721 smart contract. This identifying number SHALL NOT change for the life of the contract. The pair `(contract address, uint256 tokenId)` will then be a globally unique and fully-qualified identifier for a specific asset on an Ethereum chain. While some ERC-721 smart contracts may find it convenient to start with ID 0 and simply increment by one for each new NFT, callers SHALL NOT assume that ID numbers have any specific pattern to them, and MUST treat the ID as a \\"black box\\". Also note that a NFTs MAY become invalid (be destroyed). Please see the enumerations functions for a supported enumeration interface.\\n\\nThe choice of `uint256` allows a wide variety of applications because UUIDs and sha3 hashes are directly convertible to `uint256`.\\n\\n**Transfer Mechanism**\\n\\nERC-721 standardizes a safe transfer function `safeTransferFrom` (overloaded with and without a `bytes` parameter) and an unsafe function `transferFrom`. Transfers may be initiated by:\\n\\n- The owner of an NFT\\n- The approved address of an NFT\\n- An authorized operator of the current owner of an NFT\\n\\nAdditionally, an authorized operator may set the approved address for an NFT. This provides a powerful set of tools for wallet, broker and auction applications to quickly use a *large* number of NFTs.\\n\\nThe transfer and accept functions\' documentation only specify conditions when the transaction MUST throw. Your implementation MAY also throw in other situations. This allows implementations to achieve interesting results:\\n\\n- **Disallow transfers if the contract is paused** — prior art, CryptoKitties deployed contract, line 611\\n- **Blacklist certain address from receiving NFTs** — prior art, CryptoKitties deployed contract, lines 565, 566\\n- **Disallow unsafe transfers** — `transferFrom` throws unless `_to` equals `msg.sender` or `countOf(_to)` is non-zero or was non-zero previously (because such cases are safe)\\n- **Charge a fee to both parties of a transaction** — require payment when calling `approve` with a non-zero `_approved` if it was previously the zero address, refund payment if calling `approve` with the zero address if it was previously a non-zero address, require payment when calling any transfer function, require transfer parameter `_to` to equal `msg.sender`, require transfer parameter `_to` to be the approved address for the NFT\\n- **Read only NFT registry** — always throw from `unsafeTransfer`, `transferFrom`, `approve` and `setApprovalForAll`\\n\\nFailed transactions will throw, a best practice identified in ERC-223, ERC-677, ERC-827 and OpenZeppelin\'s implementation of SafeERC20.sol. ERC-20 defined an `allowance` feature, this caused a problem when called and then later modified to a different amount, as on OpenZeppelin issue \\\\#438. In ERC-721, there is no allowance because every NFT is unique, the quantity is none or one. Therefore we receive the benefits of ERC-20\'s original design without problems that have been later discovered.\\n\\nCreating of NFTs (\\"minting\\") and destruction NFTs (\\"burning\\") is not included in the specification. Your contract may implement these by other means. Please see the `event` documentation for your responsibilities when creating or destroying NFTs.\\n\\nWe questioned if the `operator` parameter on `onERC721Received` was necessary. In all cases we could imagine, if the operator was important then that operator could transfer the token to themself and then send it -- then they would be the `from` address. This seems contrived because we consider the operator to be a temporary owner of the token (and transferring to themself is redundant). When the operator sends the token, it is the operator acting on their own accord, NOT the operator acting on behalf of the token holder. This is why the operator and the previous token owner are both significant to the token recipient.\\n\\n*Alternatives considered: only allow two-step ERC-20 style transaction, require that transfer functions never throw, require all functions to return a boolean indicating the success of the operation.*\\n\\n**ERC-165 Interface**\\n\\nWe chose Standard Interface Detection (ERC-165) to expose the interfaces that a ERC-721 smart contract supports.\\n\\nA future EIP may create a global registry of interfaces for contracts. We strongly support such an EIP and it would allow your ERC-721 implementation to implement `ERC721Enumerable`, `ERC721Metadata`, or other interfaces by delegating to a separate contract.\\n\\n**Gas and Complexity** (regarding the enumeration extension)\\n\\nThis specification contemplates implementations that manage a few and *arbitrarily large* numbers of NFTs. If your application is able to grow then avoid using for/while loops in your code (see CryptoKitties bounty issue \\\\#4). These indicate your contract may be unable to scale and gas costs will rise over time without bound.\\n\\nWe have deployed a contract, XXXXERC721, to Testnet which instantiates and tracks 340282366920938463463374607431768211456 different deeds (2^128). That\'s enough to assign every IPV6 address to an Ethereum account owner, or to track ownership of nanobots a few micron in size and in aggregate totalling half the size of Earth. You can query it from the blockchain. And every function takes less gas than querying the ENS.\\n\\nThis illustration makes clear: the ERC-721 standard scales.\\n\\n*Alternatives considered: remove the asset enumeration function if it requires a for-loop, return a Solidity array type from enumeration functions.*\\n\\n**Privacy**\\n\\nWallets/brokers/auctioneers identified in the motivation section have a strong need to identify which NFTs an owner owns.\\n\\nIt may be interesting to consider a use case where NFTs are not enumerable, such as a private registry of property ownership, or a partially-private registry. However, privacy cannot be attained because an attacker can simply (!) call `ownerOf` for every possible `tokenId`.\\n\\n**Metadata Choices** (metadata extension)\\n\\nWe have required `name` and `symbol` functions in the metadata extension. Every token EIP and draft we reviewed (ERC-20, ERC-223, ERC-677, ERC-777, ERC-827) included these functions.\\n\\nWe remind implementation authors that the empty string is a valid response to `name` and `symbol` if you protest to the usage of this mechanism. We also remind everyone that any smart contract can use the same name and symbol as *your* contract. How a client may determine which ERC-721 smart contracts are well-known (canonical) is outside the scope of this standard.\\n\\nA mechanism is provided to associate NFTs with URIs. We expect that many implementations will take advantage of this to provide metadata for each NFT. The image size recommendation is taken from Instagram, they probably know much about image usability. The URI MAY be mutable (i.e. it changes from time to time). We considered an NFT representing ownership of a house, in this case metadata about the house (image, occupants, etc.) can naturally change.\\n\\nMetadata is returned as a string value. Currently this is only usable as calling from `web3`, not from other contracts. This is acceptable because we have not considered a use case where an on-blockchain application would query such information.\\n\\n*Alternatives considered: put all metadata for each asset on the blockchain (too expensive), use URL templates to query metadata parts (URL templates do not work with all URL schemes, especially P2P URLs), multiaddr network address (not mature enough)*\\n\\n**Community Consensus**\\n\\nA significant amount of discussion occurred on the original ERC-721 issue, additionally we held a first live meeting on Gitter that had good representation and well advertised (on Reddit, in the Gitter #ERC channel, and the original ERC-721 issue). Thank you to the participants:\\n\\n- [@ImAllInNow](https://github.com/imallinnow) Rob from DEC Gaming / Presenting Michigan Ethereum Meetup Feb 7\\n- [@Arachnid](https://github.com/arachnid) Nick Johnson\\n- [@jadhavajay](https://github.com/jadhavajay) Ajay Jadhav from AyanWorks\\n- [@superphly](https://github.com/superphly) Cody Marx Bailey - XRAM Capital / Sharing at hackathon Jan 20 / UN Future of Finance Hackathon.\\n- [@fulldecent](https://github.com/fulldecent) William Entriken\\n\\nA second event was held at ETHDenver 2018 to discuss distinguishable asset standards (notes to be published).\\n\\nWe have been very inclusive in this process and invite anyone with questions or contributions into our discussion. However, this standard is written only to support the identified use cases which are listed herein.\\n\\n## Backwards Compatibility\\n\\nWe have adopted `balanceOf`, `totalSupply`, `name` and `symbol` semantics from the ERC-20 specification. An implementation may also include a function `decimals` that returns `uint8(0)` if its goal is to be more compatible with ERC-20 while supporting this standard. However, we find it contrived to require all ERC-721 implementations to support the `decimals` function.\\n\\nExample NFT implementations as of February 2018:\\n\\n- CryptoKitties -- Compatible with an earlier version of this standard.\\n- CryptoPunks -- Partially ERC-20 compatible, but not easily generalizable because it includes auction functionality directly in the contract and uses function names that explicitly refer to the assets as \\"punks\\".\\n- Auctionhouse Asset Interface -- The author needed a generic interface for the Auctionhouse ÐApp (currently ice-boxed). His \\"Asset\\" contract is very simple, but is missing ERC-20 compatibility, `approve()` functionality, and metadata. This effort is referenced in the discussion for EIP-173.\\n\\nNote: \\"Limited edition, collectible tokens\\" like Curio Cards and Rare Pepe are *not* distinguishable assets. They\'re actually a collection of individual fungible tokens, each of which is tracked by its own smart contract with its own total supply (which may be `1` in extreme cases).\\n\\nThe `onERC721Received` function specifically works around old deployed contracts which may inadvertently return 1 (`true`) in certain circumstances even if they don\'t implement a function (see Solidity DelegateCallReturnValue bug). By returning and checking for a magic value, we are able to distinguish actual affirmative responses versus these vacuous `true`s.\\n\\n## Test Cases\\n\\n0xcert ERC-721 Token includes test cases written using Truffle.\\n\\n## Implementations\\n\\n0xcert ERC721 -- a reference implementation\\n\\n- MIT licensed, so you can freely use it for your projects\\n- Includes test cases\\n- Active bug bounty, you will be paid if you find errors\\n\\nSu Squares -- an advertising platform where you can rent space and place images\\n\\n- Complete the Su Squares Bug Bounty Program to seek problems with this standard or its implementation\\n- Implements the complete standard and all optional interfaces\\n\\nERC721ExampleDeed -- an example implementation\\n\\n- Implements using the OpenZeppelin project format\\n\\nXXXXERC721, by William Entriken -- a scalable example implementation\\n\\n- Deployed on testnet with 1 billion assets and supporting all lookups with the metadata extension. This demonstrates that scaling is NOT a problem.\\n\\n## References\\n\\n**Standards**\\n\\n1. ERC-20 Token Standard. https://eips.ethereum.org/EIPS/eip-20\\n1. ERC-165 Standard Interface Detection. https://eips.ethereum.org/EIPS/eip-165\\n1. ERC-173 Owned Standard. https://eips.ethereum.org/EIPS/eip-173\\n1. ERC-223 Token Standard. https://eips.ethereum.org/EIPS/eip-223\\n1. ERC-677 `transferAndCall` Token Standard. https://eips.ethereum.org/EIPS/eip-677\\n1. ERC-827 Token Standard. https://eips.ethereum.org/EIPS/eip-827\\n1. Ethereum Name Service (ENS). https://ens.domains\\n1. Instagram -- What\'s the Image Resolution? https://help.instagram.com/1631821640426723\\n1. JSON Schema. https://json-schema.org/\\n1. Multiaddr. https://github.com/multiformats/multiaddr\\n1. RFC 2119 Key words for use in RFCs to Indicate Requirement Levels. https://www.ietf.org/rfc/rfc2119.txt\\n\\n**Issues**\\n\\n1. The Original ERC-721 Issue. https://github.com/ethereum/eips/issues/721\\n1. Solidity Issue \\\\#2330 -- Interface Functions are External. https://github.com/ethereum/solidity/issues/2330\\n1. Solidity Issue \\\\#3412 -- Implement Interface: Allow Stricter Mutability. https://github.com/ethereum/solidity/issues/3412\\n1. Solidity Issue \\\\#3419 -- Interfaces Can\'t Inherit. https://github.com/ethereum/solidity/issues/3419\\n1. Solidity Issue \\\\#3494 -- Compiler Incorrectly Reasons About the `selector` Function. https://github.com/ethereum/solidity/issues/3494\\n1. Solidity Issue \\\\#3544 -- Cannot Calculate Selector of Function Named `transfer`. https://github.com/ethereum/solidity/issues/3544\\n1. CryptoKitties Bounty Issue \\\\#4 -- Listing all Kitties Owned by a User is `O(n^2)`. https://github.com/axiomzen/cryptokitties-bounty/issues/4\\n1. OpenZeppelin Issue \\\\#438 -- Implementation of `approve` method violates ERC20 standard. https://github.com/OpenZeppelin/zeppelin-solidity/issues/438\\n1. Solidity DelegateCallReturnValue Bug. https://solidity.readthedocs.io/en/develop/bugs.html#DelegateCallReturnValue\\n\\n**Discussions**\\n\\n1. Reddit (announcement of first live discussion). https://www.reddit.com/r/ethereum/comments/7r2ena/friday_119_live_discussion_on_erc_nonfungible/\\n1. Gitter #EIPs (announcement of first live discussion). https://gitter.im/ethereum/EIPs?at=5a5f823fb48e8c3566f0a5e7\\n1. ERC-721 (announcement of first live discussion). https://github.com/ethereum/eips/issues/721#issuecomment-358369377\\n1. ETHDenver 2018. https://ethdenver.com\\n\\n**NFT Implementations and Other Projects**\\n\\n1. CryptoKitties. https://www.cryptokitties.co\\n1. 0xcert ERC-721 Token. https://github.com/0xcert/ethereum-erc721\\n1. Su Squares. https://tenthousandsu.com\\n1. Decentraland. https://decentraland.org\\n1. CryptoPunks. https://www.larvalabs.com/cryptopunks\\n1. DMarket. https://www.dmarket.io\\n1. Enjin Coin. https://enjincoin.io\\n1. Ubitquity. https://www.ubitquity.io\\n1. Propy. https://tokensale.propy.com\\n1. CryptoKitties Deployed Contract. https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#code\\n1. Su Squares Bug Bounty Program. https://github.com/fulldecent/su-squares-bounty\\n1. XXXXERC721. https://github.com/fulldecent/erc721-example\\n1. ERC721ExampleDeed. https://github.com/nastassiasachs/ERC721ExampleDeed\\n1. Curio Cards. https://mycuriocards.com\\n1. Rare Pepe. https://rarepepewallet.com\\n1. Auctionhouse Asset Interface. https://github.com/dob/auctionhouse/blob/master/contracts/Asset.sol\\n1. OpenZeppelin SafeERC20.sol Implementation. https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20/SafeERC20.sol\\n\\n## Copyright\\n\\nCopyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-16T04:50:52.413Z',
                            datePublished: '2019-04-16T04:50:56.291Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_url:
                                    'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md',
                                background:
                                    'https://api.kauri.io:443/ipfs/QmcGSuCmQPfGWD838Bu8GMJU2QRauEsBUR9DkdGE6BiJkH',
                            },
                            contentHash:
                                'QmXuHPSA4YpuECHUkieZaxXneNDXVoXSEd7NPBAY1nXi1y',
                            checkpoint:
                                'QmZMkjdgw5aBLWgEcg5BX9GTEHYcZi9MpnBGm6CvZgnr15',
                            tags: [
                                'ethereum',
                                'erc-721',
                                'token-standard',
                                'eip',
                                'erc721',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd3e24cbf13fd4af9892773552555c480',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Simple Summary A standard interface for tokens. Abstract The following standard allows for the implementation of a standard API for tokens within smart contracts. This standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party. Motivation A standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges. Specification Token Methods NOTES: - The',
                            id: 'd3e24cbf13fd4af9892773552555c480',
                            version: 1,
                            title: 'ERC-20 Token Standard',
                            content:
                                '{"markdown":"## Simple Summary\\n\\nA standard interface for tokens.\\n\\n\\n## Abstract\\n\\nThe following standard allows for the implementation of a standard API for tokens within smart contracts.\\nThis standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.\\n\\n\\n## Motivation\\n\\nA standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges.\\n\\n\\n## Specification\\n\\n## Token\\n### Methods\\n\\n**NOTES**:\\n - The following specifications use syntax from Solidity `0.4.17` (or above)\\n - Callers MUST handle `false` from `returns (bool success)`.  Callers MUST NOT assume that `false` is never returned!\\n\\n\\n#### name\\n\\nReturns the name of the token - e.g. `\\"MyToken\\"`.\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n\\n``` js\\nfunction name() public view returns (string)\\n```\\n\\n\\n#### symbol\\n\\nReturns the symbol of the token. E.g. \\"HIX\\".\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n``` js\\nfunction symbol() public view returns (string)\\n```\\n\\n\\n\\n#### decimals\\n\\nReturns the number of decimals the token uses - e.g. `8`, means to divide the token amount by `100000000` to get its user representation.\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n``` js\\nfunction decimals() public view returns (uint8)\\n```\\n\\n\\n#### totalSupply\\n\\nReturns the total token supply.\\n\\n``` js\\nfunction totalSupply() public view returns (uint256)\\n```\\n\\n\\n\\n#### balanceOf\\n\\nReturns the account balance of another account with address `_owner`.\\n\\n``` js\\nfunction balanceOf(address _owner) public view returns (uint256 balance)\\n```\\n\\n\\n\\n#### transfer\\n\\nTransfers `_value` amount of tokens to address `_to`, and MUST fire the `Transfer` event.\\nThe function SHOULD `throw` if the message caller\'s account balance does not have enough tokens to spend.\\n\\n*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.\\n\\n``` js\\nfunction transfer(address _to, uint256 _value) public returns (bool success)\\n```\\n\\n\\n\\n#### transferFrom\\n\\nTransfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the `Transfer` event.\\n\\nThe `transferFrom` method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf.\\nThis can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies.\\nThe function SHOULD `throw` unless the `_from` account has deliberately authorized the sender of the message via some mechanism.\\n\\n*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.\\n\\n``` js\\nfunction transferFrom(address _from, address _to, uint256 _value) public returns (bool success)\\n```\\n\\n\\n\\n#### approve\\n\\nAllows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again it overwrites the current allowance with `_value`.\\n\\n**NOTE**: To prevent attack vectors like the one [described here](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/) and discussed [here](https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729),\\nclients SHOULD make sure to create user interfaces in such a way that they set the allowance first to `0` before setting it to another value for the same spender.\\nTHOUGH The contract itself shouldn\'t enforce it, to allow backwards compatibility with contracts deployed before\\n\\n``` js\\nfunction approve(address _spender, uint256 _value) public returns (bool success)\\n```\\n\\n\\n#### allowance\\n\\nReturns the amount which `_spender` is still allowed to withdraw from `_owner`.\\n\\n``` js\\nfunction allowance(address _owner, address _spender) public view returns (uint256 remaining)\\n```\\n\\n\\n\\n### Events\\n\\n\\n#### Transfer\\n\\nMUST trigger when tokens are transferred, including zero value transfers.\\n\\nA token contract which creates new tokens SHOULD trigger a Transfer event with the `_from` address set to `0x0` when tokens are created.\\n\\n``` js\\nevent Transfer(address indexed _from, address indexed _to, uint256 _value)\\n```\\n\\n\\n\\n#### Approval\\n\\nMUST trigger on any successful call to `approve(address _spender, uint256 _value)`.\\n\\n``` js\\nevent Approval(address indexed _owner, address indexed _spender, uint256 _value)\\n```\\n\\n\\n\\n## Implementation\\n\\nThere are already plenty of ERC20-compliant tokens deployed on the Ethereum network.\\nDifferent implementations have been written by various teams that have different trade-offs: from gas saving to improved security.\\n\\n#### Example implementations are available at\\n- [OpenZeppelin implementation](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol)\\n- [ConsenSys implementation](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol)\\n\\n\\n## History\\n\\nHistorical links related to this standard:\\n\\n- Original proposal from Vitalik Buterin: https://github.com/ethereum/wiki/wiki/Standardized_Contract_APIs/499c882f3ec123537fc2fccd57eaa29e6032fe4a\\n- Reddit discussion: https://www.reddit.com/r/ethereum/comments/3n8fkn/lets_talk_about_the_coin_standard/\\n- Original Issue #20: https://github.com/ethereum/EIPs/issues/20\\n\\n\\n\\n## Copyright\\nCopyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-16T04:50:19.160Z',
                            datePublished: '2019-04-16T04:50:22.498Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_url:
                                    'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md',
                                background:
                                    'https://api.kauri.io:443/ipfs/QmcGSuCmQPfGWD838Bu8GMJU2QRauEsBUR9DkdGE6BiJkH',
                            },
                            contentHash:
                                'QmVQvhwoyDrRYVTKS7PwwrtKE22yAKrNEA948JTQhKDTXk',
                            checkpoint:
                                'QmZMkjdgw5aBLWgEcg5BX9GTEHYcZi9MpnBGm6CvZgnr15',
                            tags: [
                                'erc20',
                                'ethereum',
                                'erc-20',
                                'token-standard',
                                'eip',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'e05b1433dfa6434dba2788df96f423e9',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'ERC 20 Tokens are creating a rage in the cryptocurrency sector and you wouldn’t want to be left behind, would you? Anyone who is keen to know the functionality involved in an ERC-20 token creation and deployment is welcomed. Let’s get started. What is an ERC-20 Token? Ethereum Request For Comments 20(ERC 20) is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum’s network. A Token developed on Ethereum Blockchain is said to be an ERC-20 compliant only if i',
                            id: 'e05b1433dfa6434dba2788df96f423e9',
                            version: 1,
                            title: 'Develop your ERC-20 Token — explained!',
                            content:
                                '{"markdown":"ERC 20 Tokens are creating a rage in the cryptocurrency sector and you wouldn’t want to be left behind, would you? Anyone who is keen to know the functionality involved in an ERC-20 token creation and deployment is welcomed. Let’s get started.\\n \\n**What is an ERC-20 Token?**\\n \\n\\n![](https://api.kauri.io:443/ipfs/QmWa5PaKwACzkbbCdDDJbLgjuDGZEoJyjuB2QS9MV3oBqk)\\n\\nEthereum Request For Comments 20(ERC 20) is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum’s network.\\nA Token developed on Ethereum Blockchain is said to be an ERC-20 compliant only if it includes the basic functions defined by the protocol in its smart contract. The functions defined in the protocol are :\\n\\n```\\n// ERC Token Standard #20 Interface\\n// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n```\\n\\n\\n\\n```\\ncontract ERC20Interface {\\n    function totalSupply() public constant returns (uint);\\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\\n    function transfer(address to, uint tokens) public returns (bool success);\\n    function approve(address spender, uint tokens) public returns (bool success);\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\\n```\\n\\n\\n\\n```\\n    event Transfer(address indexed from, address indexed to, uint tokens);\\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\\n}\\n```\\n\\n\\nThe Ethereum community created this protocol so that a token can be shared, exchanged for other tokens, or transferred to a crypto-wallet as effortlessly as possible.\\n \\n**Things required to develop a Token.**\\n \\nProficiency in Solidity, the official language to write smart-contracts on Ethereum Blockchain. The only hackable module in your Blockchain Project is your smart contract, So one should give utmost importance to its development as we do at \\n[Unbox Innovation.](https://www.unboxinnovations.com/)\\n .\\nAlso this\\n\\n\\n\\n * Ethereum Address (Ropsten Network)\\n\\n * Some Ethereum (Ropsten Network)\\n\\n * A text editor (I.e. Sublime / Atom)\\n\\n * Solidity contract\\n \\n**Let’s jump into the code.**\\n \\nThe Ethereum community created these standards with three optional rules, and six mandatory.\\n \\n**Optional**\\n \\n\\n\\n\\n * Token Name\\n\\n * Symbol\\n\\n * Decimal (up to 18)\\n \\n**Mandatory**\\n \\n\\n\\n\\n * totalSupply: _identifies the total number of ERC-20 tokens created._ \\n\\n * balanceOf: _it returns the number of tokens a given address has in its account._ \\n\\n * transfer: _allows a certain number of tokens to be transferred from the total supply to a user account._ \\n\\n * transferFrom: _is the function that allows a user to transfer tokens to another user._ \\n\\n * approve : _checks a transaction against the total supply of tokens._ \\n\\n * allowance: _function checks the balance of the user’s account and will cancel the transaction if there are insufficient tokens._ \\nA sample smart contract implementing all the protocol is defined here. The comments will guide you when you are inside.\\n\\n<body><style>.gist .gist-file { margin-bottom: 0 !important; }.gist { text-rendering: auto; }</style><script charset=\\"utf-8\\" src=\\"https://gist.github.com/Yara1990/657a73c2c8c0be2039ac72934f914913.js\\"></script><script>var height = -1; var delayMs = 200;function notifyResize(height) {height = height ? height : document.documentElement.offsetHeight; var resized = false; if (window.donkey && donkey.resize) {donkey.resize(height); resized = true;}if (parent && parent._resizeIframe) {var obj = {iframe: window.frameElement, height: height}; parent._resizeIframe(obj); resized = true;}if (window.location && window.location.hash === \\"#amp=1\\" && window.parent && window.parent.postMessage) {window.parent.postMessage({sentinel: \\"amp\\", type: \\"embed-size\\", height: height}, \\"*\\");}if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.resize) {window.webkit.messageHandlers.resize.postMessage(height); resized = true;}return resized;}function maybeResize() {if (document.documentElement.offsetHeight != height && notifyResize()) {height = document.documentElement.offsetHeight;}delayMs = Math.min(delayMs * 2, 1000000); setTimeout(maybeResize, delayMs);}maybeResize();</script></body>\\n\\n\\n```\\npragma solidity ^0.4.18;\\n\\n// ----------------------------------------------------------------------------\\n// \'Banana\' token contract\\n//\\n// Deployed to : 0x5A86f0cafD4ef3ba4f0344C138afcC84bd1ED222\\n// Symbol      : BAN\\n// Name        : Banana Token\\n// Total supply: 100000000000000000000000000\\n// Decimals    : 18\\n//\\n// ----------------------------------------------------------------------------\\n\\n\\n// ----------------------------------------------------------------------------\\n// Safe maths\\n// ----------------------------------------------------------------------------\\ncontract SafeMath {\\n    function safeAdd(uint a, uint b) public pure returns (uint c) {\\n        c = a + b;\\n        require(c &gt;= a);\\n    }\\n    function safeSub(uint a, uint b) public pure returns (uint c) {\\n        require(b &lt;= a);\\n        c = a - b;\\n    }\\n    function safeMul(uint a, uint b) public pure returns (uint c) {\\n        c = a * b;\\n        require(a == 0 || c / a == b);\\n    }\\n    function safeDiv(uint a, uint b) public pure returns (uint c) {\\n        require(b &gt; 0);\\n        c = a / b;\\n    }\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// ERC Token Standard #20 Interface\\n// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n// ----------------------------------------------------------------------------\\ncontract ERC20Interface {\\n    function totalSupply() public constant returns (uint);\\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\\n    function transfer(address to, uint tokens) public returns (bool success);\\n    function approve(address spender, uint tokens) public returns (bool success);\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\\n\\n    event Transfer(address indexed from, address indexed to, uint tokens);\\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// Contract function to receive approval and execute function in one call\\n// ----------------------------------------------------------------------------\\ncontract ApproveAndCallFallBack {\\n    function receiveApproval(address from, uint256 tokens, address token, bytes data) public;\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// Owned contract\\n// ----------------------------------------------------------------------------\\ncontract Owned {\\n    address public owner;\\n    address public newOwner;\\n\\n    event OwnershipTransferred(address indexed _from, address indexed _to);\\n\\n    function Owned() public {\\n        owner = msg.sender;\\n    }\\n\\n    modifier onlyOwner {\\n        require(msg.sender == owner);\\n        _;\\n    }\\n\\n    function transferOwnership(address _newOwner) public onlyOwner {\\n        newOwner = _newOwner;\\n    }\\n    function acceptOwnership() public {\\n        require(msg.sender == newOwner);\\n        OwnershipTransferred(owner, newOwner);\\n        owner = newOwner;\\n        newOwner = address(0);\\n    }\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// ERC20 Token, with the addition of symbol, name and decimals and assisted\\n// token transfers\\n// ----------------------------------------------------------------------------\\ncontract BananaToken is ERC20Interface, Owned, SafeMath {\\n    string public symbol;\\n    string public  name;\\n    uint8 public decimals;\\n    uint public _totalSupply;\\n\\n    mapping(address =&gt; uint) balances;\\n    mapping(address =&gt; mapping(address =&gt; uint)) allowed;\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Constructor\\n    // ------------------------------------------------------------------------\\n    function BananaToken() public {\\n        symbol = \\"BAN\\";\\n        name = \\"Banana Token\\";\\n        decimals = 18;\\n        _totalSupply = 100000000000000000000000000;\\n        balances[0xa8112ac2f02fa71f737929d18671b72e8609b78d] = _totalSupply;\\n        Transfer(address(0), 0xa8112ac2f02fa71f737929d18671b72e8609b78d, _totalSupply);\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Total supply\\n    // ------------------------------------------------------------------------\\n    function totalSupply() public constant returns (uint) {\\n        return _totalSupply  - balances[address(0)];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Get the token balance for account tokenOwner\\n    // ------------------------------------------------------------------------\\n    function balanceOf(address tokenOwner) public constant returns (uint balance) {\\n        return balances[tokenOwner];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Transfer the balance from token owner\'s account to to account\\n    // - Owner\'s account must have sufficient balance to transfer\\n    // - 0 value transfers are allowed\\n    // ------------------------------------------------------------------------\\n    function transfer(address to, uint tokens) public returns (bool success) {\\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\\n        balances[to] = safeAdd(balances[to], tokens);\\n        Transfer(msg.sender, to, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Token owner can approve for spender to transferFrom(...) tokens\\n    // from the token owner\'s account\\n    //\\n    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n    // recommends that there are no checks for the approval double-spend attack\\n    // as this should be implemented in user interfaces\\n    // ------------------------------------------------------------------------\\n    function approve(address spender, uint tokens) public returns (bool success) {\\n        allowed[msg.sender][spender] = tokens;\\n        Approval(msg.sender, spender, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Transfer tokens from the from account to the to account\\n    //\\n    // The calling account must already have sufficient tokens approve(...)-d\\n    // for spending from the from account and\\n    // - From account must have sufficient balance to transfer\\n    // - Spender must have sufficient allowance to transfer\\n    // - 0 value transfers are allowed\\n    // ------------------------------------------------------------------------\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success) {\\n        balances[from] = safeSub(balances[from], tokens);\\n        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\\n        balances[to] = safeAdd(balances[to], tokens);\\n        Transfer(from, to, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Returns the amount of tokens approved by the owner that can be\\n    // transferred to the spender\'s account\\n    // ------------------------------------------------------------------------\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {\\n        return allowed[tokenOwner][spender];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Token owner can approve for spender to transferFrom(...) tokens\\n    // from the token owner\'s account. The spender contract function\\n    // receiveApproval(...) is then executed\\n    // ------------------------------------------------------------------------\\n    function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {\\n        allowed[msg.sender][spender] = tokens;\\n        Approval(msg.sender, spender, tokens);\\n        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Don\'t accept ETH\\n    // ------------------------------------------------------------------------\\n    function () public payable {\\n        revert();\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Owner can transfer out any accidentally sent ERC20 tokens\\n    // ------------------------------------------------------------------------\\n    function transferAnyERC20Token(address tokenAddress, uint tokens) public onlyOwner returns (bool success) {\\n        return ERC20Interface(tokenAddress).transfer(owner, tokens);\\n    }\\n}\\n\\n```\\n\\n\\nIf you find this useful, please share it with your crypto freaks in your network.\\nIf you don’t want to take the burden of doing all this, reach out to us at \\n**contact@unboxinnovations.com**\\n \\nOriginally published by me at :\\n [My Medium Blog](https://medium.com/@hargobindgupta/develop-your-erc-20-token-explained-f2437ef8329b)\\n"}',
                            authorId:
                                'a8112ac2f02fa71f737929d18671b72e8609b78d',
                            dateCreated: '2019-06-03T16:31:17.539Z',
                            datePublished: '2019-06-03T16:31:29.304Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_name: 'medium',
                                origin_url:
                                    'https://medium.com/@hargobindgupta/develop-your-erc-20-token-explained-7d5972581874',
                            },
                            contentHash:
                                'QmY58jzJzoEYFrzVc3nTFCSoPRCWDynpQSQtuni2iTuabb',
                            checkpoint:
                                'QmPH8h4UWwHC1TAcEULJdjozq2GJ3Wv4DsiYRHo7CUFNSf',
                            tags: [
                                'erc20',
                                'ethereum',
                                'blockchain',
                                'decentralized',
                                'hargobind',
                                'dlt',
                                'token',
                            ],
                            voteResult: {
                                sum: 2.0,
                                count: 2,
                                hasVoted: null,
                                quantity: { '1': 2 },
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                name: 'Hargobind Gupta',
                                username: 'hargobindgupta',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: 'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                name: 'Hargobind Gupta',
                                username: 'hargobindgupta',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                resourceIdentifier: {
                                    id:
                                        'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                    name: 'Hargobind Gupta',
                                    username: 'hargobindgupta',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [
                                    {
                                        author: {
                                            id:
                                                '3b1283d699a775829becd5625ed44859991ab32f',
                                            name: 'Raj Kumar Gupta',
                                            username: null,
                                            avatar: null,
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-06-04T06:10:48.077Z',
                                        body:
                                            'Thanks for the the explained tutorial.Waiting for more such content.',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                            name: 'Hargobind Gupta',
                                            username: 'hargobindgupta',
                                            avatar:
                                                'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-06-04T06:07:00.554Z',
                                        body:
                                            'Please comment if you are facing any issue while implementing.',
                                        __typename: 'CommentDTO',
                                    },
                                ],
                                totalPages: 1,
                                totalElements: 2,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Ethereum SDKs',
                    description:
                        'Use Ethereum with your programming language of choice',
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '60a36c1b17d645939f63415218dc24f9',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'Go Ethereum (or Geth) is the official Go implementation of the Ethereum protocol. The Go Ethereum GitHub repository holds source code for the Geth Ethereum client and other tools and libraries for developing DApps (decentralized applications). This guide walks through writing a riddle application in Go, using the Go Ethereum SDK and the Rinkeby testnet. You can find the sample code for this guide here. Why write DApps using Go? Writing a DApp typically involves two steps: Writing the contract co',
                            id: '60a36c1b17d645939f63415218dc24f9',
                            version: 2,
                            title: 'Creating a DApp in Go with Geth',
                            content:
                                '{"markdown":"Go Ethereum (or Geth) is the official Go implementation of the Ethereum protocol. The [Go Ethereum GitHub repository](https://github.com/ethereum/go-ethereum) holds source code for the Geth Ethereum client and other tools and libraries for developing DApps (decentralized applications).\\n\\nThis guide walks through writing a riddle application in Go, using the Go Ethereum SDK and the Rinkeby testnet. You can find the sample code for this guide [here](https://github.com/kauri-io/Content/tree/master/go-ethereum-guides/write-basic-quiz-dapp-in-go/quiz-dapp).\\n\\n## Why write DApps using Go?\\n\\nWriting a DApp typically involves two steps:\\n\\n1.  Writing the contract code in Solidity or a similar language.\\n2.  Writing the code that interacts with the deployed smart contract.\\n\\nThe Go Ethereum SDK allows us to write code for the second step in the Go programming language.\\n\\nThe code is written to interact with the smart contract usually performs tasks like serving up a user interface that allows the user to send calls and messages to a deployed contract. These are tasks where we don\'t need the resilience or distributed capacity of the blockchain or are too expensive (in terms of dollar and computational costs) to deploy to the Ethereum mainnet.\\n\\nGo allows us to write that application code with the same safety features that Solidity gives, plus other perks like:\\n\\n- An extensive library of tools to interact with the Ethereum network.\\n- Tools to transpile Solidity contract code to Go, allowing direct interaction with the contract ABI (Application Binary Interface) in a Go application.\\n- Allows us to write tests for contract code and application using Go\'s testing libraries and Go Ethereum\'s blockchain simulation library. Meaning unit tests that we can run without connecting to any Ethereum network, public or private.\\n\\n## Application structure\\n\\nIn this guide, we\'ll be writing a DApp that:\\n\\n1.  Publishes a question.\\n2.  Allows users to submit answers.\\n3.  Allows users to check if their answers are correct.\\n4.  If a user\'s answer is correct, record their address.\\n\\nTo do that, we need to:\\n\\n1.  Write a smart contract that stores a question, an answer, a list of users who answered the question correctly, and the methods to access them.\\n2.  Write a Go application that allows us to deploy a new contract and load an existing contract.\\n3.  Write a Go application that allows the user to:\\n    1.  Read the question.\\n    2.  Send an answer to the smart contract.\\n    3.  Check if the answer sent is correct.\\n    4.  If the answer sent is correct, record the user\'s account address.\\n\\n## Set up a development environment\\n\\nTo get started developing DApps with Go, first [install the Ethereum toolchain](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum).\\n\\nNext create a folder to contain the project, for this guide, we assume that the project location is `/go/geth-dapp-demo`.\\n\\n## Manage Go dependencies\\n\\nWe use [Go modules](https://github.com/golang/go/wiki/Modules) to manage dependencies for this project. To get starting using Go modules for this project:\\n\\nOpen the terminal navigate to the project folder, and in the project folder, run:\\n\\n```\\ngo mod init github.com/<github-username>/geth-dapp-demo\\n```\\n\\nEdit the resulting `go.mod` file to look like the following, and save the file:\\n\\n```\\nmodule github.com/<username>/geth-dapp-demo\\n\\nrequire (\\n    github.com/ethereum/go-ethereum v1.8.20\\n    github.com/joho/godotenv v1.3.0\\n)\\n```\\n\\nWhen building an application, Go automatically fills the `go.mod` file with the other dependencies needed. We can let Go take care of those for now. With the `go.mod` file in place, Go makes sure that we use `v1.8.20` of the Go Ethereum SDK whenever we run the `go run` or `go build` command.\\n\\n### Set up Rinkeby testnet endpoint on Infura.io\\n\\nTo keep this guide straightforward, we use the Ethereum API gateways provided by [Infura.io](https://infura.io) instead of running our own Ethereum node. To run a Geth node for development instead, read this [Ethereum 101 guide](https://beta.kauri.io/article/67a81d8746ee4b49ba19447e8e2a983e/v2).\\n\\n1.  Go to [Infura.io](https://infura.io) and sign up for an account.\\n2.  Go to the Dashboard and click on **CREATE NEW PROJECT**.\\n3.  Enter a name for the project, and click **CREATE** to set up a new project.\\n\\nThe newly created project should look like this:\\n\\n![New project on Infura.io](https://api.beta.kauri.io:443/ipfs/QmSXXdatWZMkp63Hu4BYtgmNHTp75TD3Mm2BGxauFBhkYT)\\n\\nWe\'ll come back to this later when we\'ve deployed the smart contract.\\n\\nFor now, we need the URL of our project\'s Ethereum API gateway endpoint. Select \\"RINKEBY\\" from the **ENDPOINT** dropdown menu, and take note of the URL that appears underneath it. It should look like this:\\n\\n    https://rinkeby.infura.io/v3/<PROJECT_ID>\\n\\n**IMPORTANT!:** Make sure that the endpoint used in the Go code points to the Rinkeby testnet. If we use an endpoint pointing to the Ethereum mainnet, we spend real Ether to test the application.\\n\\nCreate a file in the project folder named `.env`. **Do not** commit this file to Git or any other version control system (VCS). Edit the `.env` file and enter the project\'s Ethereum API gateway endpoint:\\n\\n```\\nGATEWAY=\\"https://rinkeby.infura.io/v3/<PROJECT_ID>\\"\\n```\\n\\nSave the file. We\'ll use this into our Go application later.\\n\\n**NOTE:** Using a third-party provider to connect to the Ethereum network means that we\'re trusting it with all transactions and any Ether sent through it. If we don\'t use a third-party provider, we have to run and host our own Ethereum API gateway, or rely on users to connect to their own Ethereum nodes.\\n\\n### Set up an Ethereum account\\n\\nWe need an Ethereum account to deploy our smart contract. To create a new Ethereum account, run the command below and follow the on-screen instructions:\\n\\n```\\ngeth --datadir . account new\\n```\\n\\nThis command creates a `keystore` folder in the current directory. In it, is a keystore file for the new account that looks like `UTC--<timestamp>--<ethereum_address>`. **Do not** commit the keystore to VCS.\\n\\nWe need this keystore file and the passphrase for it to deploy a smart contract. Save the location of the keystore file and the passphrase in the `.env` file created earlier:\\n\\n```\\nGATEWAY=\\"...\\"\\nKEYSTORE=\\"$HOME/.ethereum/keystore/UTC--2018-12-30T12-29-11.490098600Z--<etherem_address>\\"\\nKEYSTOREPASS=\\"<keystore_passphrase>\\"\\n```\\n\\nTo deploy a contract and make contract calls; we need our account to contain Rinkeby testnet Ether. Get testnet Ether for the account by going to <https://faucet.rinkeby.io> and following the instructions there.\\n\\n## Writing and compiling the smart contract\\n\\nWe\'re all set and ready to go! First, we write the smart contract:\\n\\n1.  Create a new folder in the project directory and name it `quiz`.\\n2.  In it, create a file named `quiz.sol` and add the following code:\\n\\n```solidity\\npragma solidity >=0.5.2 <0.6.0;\\n\\ncontract Quiz {\\n    string public question;\\n    bytes32 internal _answer;\\n    mapping (address => bool) internal _leaderBoard;\\n\\n    constructor(string memory _qn, bytes32 _ans) public {\\n        question = _qn;\\n        _answer = _ans;\\n    }\\n\\n    function sendAnswer(bytes32 _ans) public returns (bool){\\n        return _updateLeaderBoard(_answer == _ans);\\n    }\\n\\n    function _updateLeaderBoard(bool ok) internal returns (bool){\\n        _leaderBoard[msg.sender] = ok;\\n        return true;\\n    }\\n\\n    function checkBoard() public view returns (bool){\\n        return _leaderBoard[msg.sender];\\n    }\\n}\\n```\\n\\nWe\'ll cover what our smart contract code does briefly, for more information about writing smart contracts in Solidity, read [this guide](https://beta.kauri.io/article/124b7db1d0cf4f47b414f8b13c9d66e2/v5).\\n\\nFirst, we set the data types that we want to store on the contract.\\n\\n`string public question`: Stores the question that we want to ask the user. Setting this as `public` has Solidity automatically generate a getter function for it when the contract compiles. This allows us to read this variable\'s contents with a `contractInstance.question()` method. Because getters don\'t invoke code execution on the EVM, they don\'t cost gas to run.\\n\\n`bytes32 internal _answer`: Stores the answer to our question. We\'ve set an `internal` modifier, which means that this variable can only be accessed from within this contract.\\n\\n`mapping (address=>bool) internal _leaderBoard`: Stores a hash map of user accounts and a boolean value that tells us whether a given account has answered the question correctly. We\'ve also set this state variable as `internal` to prevent external callers from modifying its contents.\\n\\nNext, the `constructor` is called when we deploy the contract where we give it a question `_qn` and an answer `_ans`.\\n\\nWe take `_qn` as a string because we mean for it to be easily readable by anyone interacting with the contract.\\n\\nOur answer `_ans` is set as a fixed slice of 32 bytes (`bytes32`) because we want to store it as a `keccak256` hash. Hashing the value of `_ans` obscures it, making it unreadable in the contract source or the transaction logs.\\n\\n`sendAnswer()` allows us to send an answer to the contract. The answer sent to the contract must be a 32-byte keccak256 hash, which we compare to the value of `_answer` stored on the contract. If the values match, we update our `leaderBoard` to show that the account that makes this function call has answered correctly.\\n\\n`_updateLeaderBoard()` takes a true/false value and sets the entry on the `_leaderBoard` mapping for our user\'s account to that value. It\'s an `internal` function, which prevents external callers from arbitrarily modifying the `_leaderBoard` mapping.\\n\\n`checkBoard()` checks if the contract recorded that the user answered correctly. The current user\'s Ethereum account is set by our `KEYSTORE` environment variable in [Set up an Ethereum account](#set-up-an-ethereum-account)\\n\\nNow that we\'ve got our Solidity contract fleshed out, we need to compile it to an ABI JSON specification and a contract binary. Then, we\'ll generate a Go binding file from those files, and import it into our Go DApp.\\n\\nWe\'ll use `solc` and `abigen` to do this. Run the following command to compile the contract:\\n\\n```\\nsolc --abi --bin quiz.sol -o build\\n```\\n\\nThis command creates a `build` folder that contains the files `Quiz.abi` and `Quiz.bin`.\\n\\nNext, generate the Go binding file. In the \\"quiz\\" directory, run:\\n\\n```\\nabigen --abi=\\"build/Quiz.abi\\" --bin=\\"build/Quiz.bin\\" --pkg=quiz --out=\\"quiz.go\\"\\n```\\n\\nThis command generates a Go file that contains bindings for the smart contract which we can import into our Go code.\\n\\n## The Go Code\\n\\n### Connect to Rinkeby network and get account balance\\n\\nWe\'ll start writing our Go DApp by initializing a connection to the Rinkeby network, using the Infura.io gateway endpoint that we [set up earlier](#set-up-rinkeby-testnet-endpoint-on-infuraio).\\n\\nIn the project root directory, create a new `main.go` file and add the following code:\\n\\n```\\npackage main\\n\\nimport (\\n    \\"context\\"\\n    \\"log\\"\\n    \\"fmt\\"\\n\\n    \\"github.com/ethereum/go-ethereum\\"\\n    \\"github.com/joho/godotenv\\"\\n)\\n\\nvar myenv map[string]string\\n\\nconst envLoc = \\".env\\"\\n\\nfunc loadEnv() {\\n    var err error\\n    if myenv, err = godotenv.Read(envLoc); err != nil {\\n        log.Printf(\\"could not load env from %s: %v\\", envLoc, err)\\n    }\\n}\\n\\nfunc main(){\\n    loadEnv()\\n\\n    ctx := context.Background()\\n\\n    client, err := ethclient.Dial(os.Getenv(\\"GATEWAY\\"))\\n    if err != nil {\\n        log.Fatalf(\\"could not connect to Ethereum gateway: %v\\\\n\\", err)\\n    }\\n    defer client.Close()\\n\\n    accountAddress := common.HexToAddress(\\"<enter_ethereum_address>\\")\\n    balance, _ := client.BalanceAt(ctx, accountAddress, nil)\\n    fmt.Printf(\\"Balance: %d\\\\n\\",balance)\\n}\\n```\\n\\nReplace `<enter_ethereum_address>` with the address of the Ethereum account from the [Set up an Ethereum account](#set-up-an-ethereum-account) step.\\n\\nHere, we:\\n\\nFirst load data from the `.env` file into a map `myenv` using the `godotenv` package, which we set as a dependency in our `go.mod` file.\\n\\nWe can then access values set in our `.env` file with `myenv[\\"KEYNAME\\"]`. For example, access the `GATEWAY` value with `myenv[\\"GATEWAY\\"]`.\\n\\nNotice that we\'ve also written a function `loadEnv()` that we can invoke at the beginning of every function scope. By placing a `loadEnv()` call at the start of every function that uses environment variables, we make sure that we catch any updates to our `.env` file while our application is running.\\n\\nNext we set up a connection to our Infura.io Rinkeby gateway by calling `ethclient.Dial(\\"<gateway_endpoint>\\")`. This works for both TCP (HTTP/S) and IPC (`<datadir>/geth.ipc`) endpoints. Then get the balance of our Ethereum account by calling `client.GetBalance(ctx, accountAddress, nil)` to convert our Ethereum address from a hex string like `48fddc985ecc605127f1a1c098c817778187637c` to the `common.Address` type before passing it to `GetBalance()` and print the result of `GetBalance()`.\\n\\nTest the application by running `go run main.go` in the terminal. If it prints the balance of the Ethereum account, the application has successfully loaded configuration from the `.env` file and sent a message call to the Rinkeby network.\\n\\nNow that we know that our `ethclient.Dial()` call works, we won\'t need the `GetBalance()` call. Remove it from `main()`, so that your main() block looks like this:\\n\\n```\\nfunc main(){\\n    loadEnv()\\n\\n    ctx := context.Background()\\n\\n    client, err := ethclient.Dial(os.Getenv(\\"GATEWAY\\"))\\n    if err != nil {\\n        log.Fatalf(\\"could not connect to Ethereum gateway: %v\\\\n\\", err)\\n    }\\n    defer client.Close()\\n\\n}\\n```\\n\\n### Create session\\n\\nSessions are wrappers that allow us to make contract calls without having to pass around authorization credentials and call parameters constantly. A session wraps:\\n\\n- a contract instance,\\n- a `bind.CallOpts` struct that contains options for making contract calls,\\n- a `bind.TransactOpts` struct that contains authorization credentials and parameters for creating a valid Ethereum transaction.\\n\\nCreating a session allows us to make calls on a contract instance like this:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\nsession.TransactOpts = auth\\n\\n// This calls the contract method sendAnswer(),\\n// which returns the question that we\'ve set\\n// for our deployed contract.\\nsession.SendAnswer(answer)\\nsession.Question()\\n```\\n\\nAs opposed to having to pass in a `bind.CallOpts` or `bind.TransactOpts` struct each time we make a contract call or a transaction:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\ncontractInstance.SendAnswer(&bind.TransactOpts{\\n        From: auth.From,\\n        Nonce: nil,           // nil uses nonce of pending state\\n        Signer: auth.Signer,\\n        Value: big.NewInt(0),\\n        GasPrice: nil,        // nil automatically suggests gas price\\n        GasLimit: 0,          // 0 automatically estimates gas limit\\n    },\\n    answer,\\n    )\\ncontractInstance.Question(&bind.CallOpts{\\n    Pending: true,\\n    From: auth.From,\\n    Context: context.Background(),\\n})\\ncontractInstance.CheckBoard(&bind.CallOpts{\\n    Pending: true,\\n    From: auth.From,\\n    Context: context.Background(),\\n})\\n```\\n\\nInstead, we do it once when we create a new session:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\nsession := quiz.QuizSession{\\n    Contract: contractInstance,\\n    CallOpts: bind.CallOpts{\\n        Pending: true,        // Acts on pending state if set to true\\n        From: auth.From,\\n        Context: context.Background(),\\n    },\\n    TransactOpts: bind.TransactOpts{\\n        From: auth.From,\\n        Nonce: nil,           // nil uses nonce of pending state\\n        Signer: auth.Signer,\\n        Value: big.NewInt(0),\\n        GasPrice: nil,        // nil automatically suggests gas price\\n        GasLimit: 0,          // 0 automatically estimates gas limit\\n    },\\n}\\n\\nsession.SendAnswer(answer)\\nsession.Question()\\nsession.CheckBoard()\\n```\\n\\n**NOTE:** `bind.NewTransactor()` returns a `bind.TransactOpts` struct with the `From` and `Signer` fields filled in with information from the keystore file, and the other fields filled in with safe defaults. We can use it as-is for transactions. For example `contractInstance.SendAnswer(auth, answer)` also works for our above example.\\n\\nLet\'s create a `NewSession()` function that creates a new usable session and returns it, add this to the bottom of your `main.go` file:\\n\\n```\\nfunc NewSession(ctx context.Context) (session quiz.QuizSession) {\\n    loadEnv()\\n    keystore, err := os.Open(myenv[\\"KEYSTORE\\"])\\n    if err != nil {\\n        log.Printf(\\n            \\"could not load keystore from location %s: %v\\\\n\\",\\n            myenv[\\"KEYSTORE\\"],\\n            err,\\n        )\\n    }\\n    defer keystore.Close()\\n\\n    keystorepass := myenv[\\"KEYSTOREPASS\\"]\\n    auth, err := bind.NewTransactor(keystore, keystorepass)\\n    if err != nil {\\n        log.Printf(\\"%s\\\\n\\", err)\\n    }\\n\\n    // Return session without contract instance\\n    return quiz.QuizSession{\\n        TransactOpts: *auth,\\n        CallOpts: bind.CallOpts{\\n            From:    auth.From,\\n            Context: ctx,\\n        },\\n    }\\n}\\n```\\n\\nHere, we:\\n\\n- Load our environment variables from `.env`.\\n- Read from our keystore file.\\n- Get our keystore passphrase from the environment variable `KEYSTOREPASS`.\\n- Create a new transactor with a `bind.NewTransactor()` call.\\n- Form and return a new `quiz.QuizSession` struct with our newly created transactor and a `CallOpts` struct with some defaults.\\n\\nWe can then create a new session in `main()`:\\n\\n```\\nfunc main(){\\n    // ...\\n    session := NewSession(context.Background())\\n}\\n```\\n\\nWe didn\'t specify a value for the `Contract` field in the session that we\'re returning from `NewSession()`. We\'ll do that on the returned `session` after we\'ve obtained a contract instance which we when we deploy a new contract on the blockchain or when we load an existing contract.\\n\\n### Deploy and load the contract\\n\\nNow that we\'ve created a new session, we need to assign it a contract instance.\\n\\nWe get a contract instance by deploying a contract or loading an existing contract from a contract address.\\n\\nWe\'ll write two functions to perform these tasks:\\n\\n```\\n// NewContract deploys a contract if no existing contract exists\\nfunc NewContract(session quiz.QuizSession, client *ethclient.Client, question string, answer string) (quiz.QuizSession) {\\n    loadEnv()\\n\\n    // Hash answer before sending it over Ethereum network.\\n    contractAddress, tx, instance, err := quiz.DeployQuiz(&session.TransactOpts, client, question, stringToKeccak256(answer))\\n    if err != nil {\\n        log.Fatalf(\\"could not deploy contract: %v\\\\n\\", err)\\n    }\\n    fmt.Printf(\\"Contract deployed! Wait for tx %s to be confirmed.\\\\n\\", tx.Hash().Hex())\\n\\n    session.Contract = instance\\n    updateEnvFile(\\"CONTRACTADDR\\", contractAddress.Hex())\\n    return session\\n}\\n\\n// LoadContract loads a contract if one exists\\nfunc LoadContract(session quiz.QuizSession, client *ethclient.Client) quiz.QuizSession {\\n    loadEnv()\\n\\n    addr := common.HexToAddress(myenv[\\"CONTRACTADDR\\"])\\n    instance, err := quiz.NewQuiz(addr, client)\\n    if err != nil {\\n        log.Fatalf(\\"could not load contract: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n    }\\n    session.Contract = instance\\n    return session\\n}\\n\\n// Utility functions\\n\\n// stringToKeccak256 converts a string to a keccak256 hash of type [32]byte\\nfunc stringToKeccak256(s string) [32]byte {\\n    var output [32]byte\\n    copy(output[:], crypto.Keccak256([]byte(s))[:])\\n    return output\\n}\\n\\n// updateEnvFile updates our env file with a key-value pair\\nfunc updateEnvFile(k string, val string) {\\n    myenv[k] = val\\n    err := godotenv.Write(myenv, envLoc)\\n    if err != nil {\\n        log.Printf(\\"failed to update %s: %v\\\\n\\", envLoc, err)\\n    }\\n}\\n```\\n\\nBoth `NewContract()` and `LoadContract()` create a contract instance, which we then assign to the `Contract` in the session with `session.Contract = instance`. We then return the session.\\n\\n#### Deploy a new contract\\n\\nOur `NewContract()` function takes as parameters:\\n\\n- `session quiz.QuizSession`: a session, which we initialized in [Create session](#create-session).\\n- `client *ethclient.Client`: the client object, which we initialized in `main()`.\\n- `question string`: a string containing the question we want the user to answer.\\n- `answer string`: the answer to the question, which we take as a string parameter.\\n\\nWe have to find a way to pass strings to our contract as the `question` and `answer` parameters, but we don\'t want to hardcode our answer or commit a file containing the answer to VCS. If we do, a user looking at the contract source or our DApp source code would be able to find the expected value for `answer` stored as plain text.\\n\\nWe also don\'t want to send the value of `answer` to the contract as plain text, because the contents of all transactions broadcasted to the network are logged as part of the transaction\'s payload. Any values sent as plain text would appear as-is when viewing the transaction\'s payload.\\n\\nSee an example of this at [`0x445d51fc29741b261f392936970b3c842e922dec841023ca40e248b9d3a2ba19`](https://rinkeby.etherscan.io/tx/0x445d51fc29741b261f392936970b3c842e922dec841023ca40e248b9d3a2ba19) on the Rinkeby network.\\n\\n![Answer stored as plain text](https://api.beta.kauri.io:443/ipfs/QmNZf2x1NDCWzSWvqus3dDeDmcUtp4U4GVpH6pKR9m8Z3z)\\n\\nTo get around this, we do two things:\\n\\nWe\'re already loading values from a `.env` file, so we can use that to store our `question` and `answer` values.\\n\\nAdd a `QUESTION` and an `ANSWER` key-value pair. Make the following changes to the `.env`:\\n\\n```\\nGATEWAY=\\"...\\"\\nKEYSTORE=\\"...\\"\\nKEYSTOREPASS=\\"...\\"\\nQUESTION=\\"this is a question\\"\\nANSWER=\\"this is the answer\\"\\n```\\n\\nAfter we\'ve done that, we can load the `question` and `answer` values in our code using `myenv[\\"QUESTION\\"]` and `myenv[\\"ANSWER\\"]` respectively.\\n\\nNext, encode the value of `answer` as a Keccak256 hash before sending it as part of the `session.DeployQuiz()` call. We can use the utility function `stringToKeccak256()` that converts a given string to keccak256 hash of type `[32]byte`.\\n\\nWe can now run `quiz.DeployQuiz()` and obtain a contract address `contractAddress`, a transaction object `tx`, and a contract instance `instance`. We assign the contract instance to `session.Contract` and return the now fully-formed session.\\n\\nWe also print the address of the transaction, which the user can look up on [Etherscan](https://rinkeby.etherscan.io) to check the progress of the transaction.\\n\\nFinally, we need to save the address of the deployed contract. We save it to our `.env` file by using the `godotenv.Write()` method. Here, we use another utility function `updateEnvFile()` to help us do this. `updateEnvFile()` does the following:\\n\\n1.  Adds a key `CONTRACTADDR` to our `myenv` map, and assigns the contract address hex to it.\\n2.  Calls `godotenv.Write(myenv, envLoc)` to write the updated `myenv` map to our `.env` file.\\n\\n#### Load an existing contract\\n\\nThe `LoadContract()` function also takes a `session` and `client` instance as parameters. Then, it attempts to load an existing contract by looking for a `CONTRACTADDR` entry in the `.env` file.\\n\\nIf a `CONTRACTADDR` doesn\'t exist in the `.env` file, we won\'t know where to locate our contract on the blockchain, so exit the function.\\n\\nOtherwise, call `quiz.NewQuiz()` to create a new contract instance and assign it to `session.Contract`.\\n\\n#### Deploy if the contract doesn\'t exist\\n\\nWe only want to call `NewContract()` if we don\'t already have an existing contract on the blockchain.\\n\\nTo do this, we write `if` statements to make sure that `NewContract()` is only called when `CONTRACTADDR` is not set in our `.env` file, and run `LoadContract()` only if we can find a non-empty `CONTRACTADDR` value:\\n\\n```\\nfunc main() {\\n    // ...\\n    // Load or Deploy contract, and update session with contract instance\\n    if myenv[\\"CONTRACTADDR\\"] == \\"\\" {\\n        session = NewContract(session, client, myenv[\\"QUESTION\\"], myenv[\\"ANSWER\\"])\\n    }\\n\\n    // If we have an existing contract, load it; if we\'ve deployed a new contract, attempt to load it.\\n    if myenv[\\"CONTRACTADDR\\"] != \\"\\" {\\n        session = LoadContract(session, client)\\n    }\\n}\\n```\\n\\n**NOTE:** Once we do this, the DApp attempts to load a contract from the value of `CONTRACTADDR` in the `.env` file as long as that value is not an empty string (`\\"\\"`). To force the DApp to deploy a new contract, remove the `CONTRACTADDR` entry in the `.env` file, or set it to an empty string (`\\"\\"`).\\n\\n### Interact with the contract\\n\\nNow that we have a contract instance to work with, we can use it to make contract calls.\\n\\nAny function or state variable marked as `public` in the `quiz.go` file generated with `abigen` is made available in `quiz.go` as methods we can call on a contract instance.\\n\\nFor example, because we have this line of code in `quiz.sol`:\\n\\n```\\nfunction sendAnswer(bytes32 _ans) public returns (bool)\\n```\\n\\nImporting `quiz.go` in our Go DApp allows us to call:\\n\\n```\\ncontractInstance.SendAnswer(&bind.CallOpts, answer)\\n```\\n\\nRemember that we want to do [the following things](#structure-of-our-application) with our Go DApp:\\n\\n- Read the question.\\n- Send an answer to the smart contract.\\n- Check if the answer sent is correct.\\n- If the answer sent is correct, record the user\'s account address.\\n\\nTo perform these tasks, we add the following functions to the bottom of the `main.go` file:\\n\\n```\\n//// Contract interaction\\n\\n// ErrTransactionWait should be returned/printed when we encounter an error that may be a result of the transaction not being confirmed yet.\\nconst ErrTransactionWait = \\"if you\'ve just started the application, wait a while for the network to confirm your transaction.\\"\\n\\n// readQuestion prints out question stored in contract.\\nfunc readQuestion(session quiz.QuizSession) {\\n    qn, err := session.Question()\\n    if err != nil {\\n        log.Printf(\\"could not read question from contract: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n        return\\n    }\\n    fmt.Printf(\\"Question: %s\\\\n\\", qn)\\n    return\\n}\\n\\n// sendAnswer sends answer to contract as a keccak256 hash.\\nfunc sendAnswer(session quiz.QuizSession, ans string) {\\n    // Send answer\\n    txSendAnswer, err := session.SendAnswer(stringToKeccak256(ans))\\n    if err != nil {\\n        log.Printf(\\"could not send answer to contract: %v\\\\n\\", err)\\n        return\\n    }\\n    fmt.Printf(\\"Answer sent! Please wait for tx %s to be confirmed.\\\\n\\", txSendAnswer.Hash().Hex())\\n    return\\n}\\n\\n// checkCorrect makes a contract message call to check if\\n// the current account owner has answered the question correctly.\\nfunc checkCorrect(session quiz.QuizSession) {\\n    win, err := session.CheckBoard()\\n    if err != nil {\\n        log.Printf(\\"could not check leaderboard: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n        return\\n    }\\n    fmt.Printf(\\"Were you correct?: %v\\\\n\\", win)\\n    return\\n}\\n```\\n\\nHere, we write three helper functions to wrap our contract calls:\\n\\n- `readQuestion(session quiz.QuizSession)` reads the question we stored on our deployed smart contract, and prints it out.\\n- `sendAnswer(session quiz.QuizSession, ans string)` takes an answer as a string, encodes it as a keccak256 hash, and sends it to the smart contract.\\n- `checkCorrect(session quiz.QuizSession)` checks if the current user is recorded on our smart contract as having sent a correct answer.\\n\\nNow, we can call these functions in `main()` to interact with a deployed smart contract.\\n\\n### Write a simple CLI\\n\\nNext, we\'ll write a bare-bones command-line interface (CLI) to allow our user to:\\n\\n1.  Read the question.\\n2.  Send an answer.\\n3.  Check if their answer was correct.\\n\\nTo implement this, add the following to the bottom of the `main()` block:\\n\\n```\\n// Loop to implement simple CLI\\nfor {\\n    fmt.Printf(\\n        \\"Pick an option:\\\\n\\" + \\"\\" +\\n            \\"1\\\\. Show question.\\\\n\\" +\\n            \\"2\\\\. Send answer.\\\\n\\" +\\n            \\"3\\\\. Check if you answered correctly.\\\\n\\" +\\n            \\"4\\\\. Exit.\\\\n\\",\\n    )\\n\\n    // Reads a single UTF-8 character (rune)\\n    // from STDIN and switches to case.\\n    switch readStringStdin() {\\n    case \'1\':\\n        readQuestion(session)\\n        break\\n    case \'2\':\\n        fmt.Println(\\"Type in your answer\\")\\n        sendAnswer(session, readStringStdin())\\n        break\\n    case \'3\':\\n        checkCorrect(session)\\n        break\\n    case \'4\':\\n        fmt.Println(\\"Bye!\\")\\n        return\\n    default:\\n        fmt.Println(\\"Invalid option. Please try again.\\")\\n        break\\n    }\\n}\\n```\\n\\nThen, add the following helper function to the bottom of the `main.go` file:\\n\\n```\\n// readStringStdin reads a string from STDIN and strips any trailing \\\\n characters from it.\\nfunc readStringStdin() string {\\n    reader := bufio.NewReader(os.Stdin)\\n    inputVal, err := reader.ReadString(\'\\\\n\')\\n    if err != nil {\\n        log.Printf(\\"invalid option: %v\\\\n\\", err)\\n        return \\"\\"\\n    }\\n\\n    output := strings.TrimSuffix(inputVal, \\"\\\\n\\") // Important!\\n    return output\\n}\\n```\\n\\nWhen we run the Go DApp with `go run main.go` in the terminal, `readStringStdin()` calls `bufio.NewReader(io.Stdin)`, which pauses the program and waits for the user to enter a value on the command line. It then takes that input, processes it, and returns it as a value that the Go application can use.\\n\\nWe implement the CLI using an infinite `for` loop that does the following:\\n\\n1.  Prints out quick instructions for using the CLI.\\n2.  Enters a `switch` statement that reads from user input on the command line, and executes a given `case` for the appropriate `rune` it receives.\\n3.  When the user selects an option, the code for that `case` runs and returns to the top of the `for` loop when `break` is called.\\n\\n## Running the application\\n\\nCongrats! We\'ve finished the quiz DApp!\\n\\nBefore testing the application, check that the `.env` file contains the values that the Go DApp needs to run. It should look something like this:\\n\\n```\\nGATEWAY=\\"https://rinkeby.infura.io/v3/<project_id>\\"\\nKEYSTORE=\\"/keystore/UTC--2019-01-14T13-58-48.439126200Z--<ethereum_address>\\"\\nKEYSTOREPASS=\\"\\"\\nQUESTION=\\"this is a question\\"\\nANSWER=\\"this is the answer\\"\\n```\\n\\nTo run the Go DApp, enter in the terminal:\\n\\n```\\ngo run main.go\\n```\\n\\nAlternatively, build and run the Go DApp by running:\\n\\n```\\ngo build main.go\\n./main\\n```\\n\\n## Limitations\\n\\nOur DApp is a simple example of what we can do with smart contracts and a Go DApp. Because we tried to keep the example straightforward, our DApp has a few limitations:\\n\\nOur DApp doesn\'t know if a transaction is completed or not. That\'s why we need separate functions to send an answer to the blockchain, and another to check if the answer was correct. We can implement this by having a process listen to any events on the blockchain at our contract address, but this is outside the scope of this guide.\\n\\nOur user can\'t just run the DApp, and it works. They need to specify a keystore file, and make sure that they have a deployed contract ready to interact with. We can correct this by adding to our CLI options that allow the user to enter values that configure these parameters.\\n\\nOur DApp assumes that the user who runs it is the same person who (1) deploys the contract, and (2) answers the question. Ideally, the DApp that deploys the contract and the DApp that interacts with the contract should be separate."}',
                            authorId:
                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                            dateCreated: '2019-02-03T10:32:39.542Z',
                            datePublished: '2019-02-03T10:32:43.572Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.beta.kauri.io:443/ipfs/QmfCaFUvx94wo9BD1HvntsbxbiaLcDZCSHJpQt3dT7GCoU',
                            },
                            contentHash:
                                'QmNwRw3MevQE5zb8fPYiDgg4y2nSfUbkDmW4X8sGZQKxv8',
                            checkpoint:
                                'QmbC5NWuGroaxeSnVnt7dqzDbaxNP5BH8Dwy1w1BAYFtwV',
                            tags: [
                                'Golang',
                                'Go-programming-language',
                                'DApp',
                                'Geth',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                name: 'Zed',
                                username: null,
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: 'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                name: 'Zed',
                                username: null,
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                resourceIdentifier: {
                                    id:
                                        'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                    name: 'Zed',
                                    username: null,
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [
                                    {
                                        author: {
                                            id:
                                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                            name: 'Zed',
                                            username: null,
                                            avatar:
                                                'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-18T12:59:02.075Z',
                                        body:
                                            '[edit] *Other issues could be caused by an issue with the version of Solc [...]',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                            name: 'Zed',
                                            username: null,
                                            avatar:
                                                'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-18T12:57:38.138Z',
                                        body:
                                            'Discussed issue above privately: the code should work as is. \n\n"Out of gas" issues can be resolved by manually tweaking the `bind.TransactOpts` that you pass into your session. The guide uses the defaults as prescribed by the Ethereum documentation, but may not work because they depend on the gas costs on the Ethereum network to remain fairly stable.\n\nCould be an issue with the version of Solc used, or the Geth node config. Most fuss-free way of completing the tutorial is (1) using go modules to lock in dependencies, (2) using Infura.io as your Geth gateway, so we avoid Geth node config issues for now.\n\n',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                '8015599c1b2fd65d8411865bb80d4d52bf12b516',
                                            name: null,
                                            username: null,
                                            avatar: null,
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-12T13:42:44.177Z',
                                        body:
                                            'Hi there,\n\nTried to deploy smart contract using go native binding. The deployment is successful and the transaction status shows in block chain as 0x1. However, while accessing the storage, the value set through constructor was not getting displayed. Also, the transaction to set the storage throws error (in go program) and fails( 0x0 status in geth console)\n\n#### System information\n\nGeth version: 1.8.12-stable ( Quorum)\nOS & Version: Linux/ubuntu\nCommit hash : NA\n\n#### Expected behaviour\n1. Transaction for setting storage value should success\n2. As the smart contract deployment is successful (txn status shows as 0x1), the value set in constructor should be fetched successfully from geth console as well as from go program.\n\n#### Actual behaviour\n1. Transactions fails from go program with error - "2019/07/12 10:11:54 could not send answer to contract: failed to estimate gas needed: gas required exceeds allowance or always failing transaction"\n2. While fetching value of storage from go program, it shows  " could not read question from contract: abi: unmarshalling empty output".\nIf I do same from geth console with my deployment address, it shows empty value - 0x0\n\n#### Steps to reproduce the behaviour\n1. Generate the go binding for below smart contract -  \n\ncontract Quiz {\n    string public question;\n    bytes32 public answer;\n    mapping (address => bool) public leaderBoard;\n\n    constructor(string memory _qn, bytes32 _ans) public {\n        question = _qn;\n        answer = _ans;\n    }\n\n    function sendAnswer(bytes32 _ans) public returns (bool){\n        return updateLeaderBoard(answer == _ans);\n    }\n\n    function updateLeaderBoard(bool ok) public returns (bool){\n        leaderBoard[msg.sender] = ok;\n        return true;\n    }\n\n    function checkBoard() public view returns (bool){\n        return leaderBoard[msg.sender];\n    }\n}\n\n2.  Go program used to access the smart contract \n\npackage main\n\nimport (\n   "geth-dapp-demo/quiz"\n    "context"\n    "log"\n    "fmt"\n    "os"\n    "strings"\n    "bufio"\n    //"errors"\n    //"crypto/Keccak256"\n    "github.com/ethereum/go-ethereum/crypto"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/ethclient"\n    "github.com/joho/godotenv"\n    "github.com/ethereum/go-ethereum/accounts/abi/bind"\n)\nvar myenv map[string]string\n\nconst envLoc = ".env"\n// ErrTransactionWait should be returned/printed when we encounter an error that may be a result of the transaction not being confirmed yet.\nconst ErrTransactionWait = "if you\'ve just started the application, wait a while for the network to confirm your transaction."\n\n\nfunc loadEnv() {\n    var err error\n    if myenv, err = godotenv.Read(envLoc); err != nil {\n        log.Printf("could not load env from %s: %v", envLoc, err)\n    }\n}\n\nfunc main(){\n    loadEnv()\n\n    ctx := context.Background()\n\n  //   client, err := ethclient.Dial(os.Getenv("GATEWAY"))\n    client, err := ethclient.Dial("/home/ubuntu/test/quorum-examples/examples/7nodes/qdata/dd1/geth.ipc")\n    if err != nil {\n        log.Fatalf("could not connect to Ethereum gateway: %v\\n", err)\n    }\n    defer client.Close()\n\n    //accountAddress := common.HexToAddress("0xF6cc1cba1BE28d9fEB2be11534ECf7FEE8bFE1CE")\n    //balance, _ := client.BalanceAt(ctx, accountAddress, nil)\n    //fmt.Printf("Balance: %d\\n",balance)\n\n   session := NewSession(ctx)\n\n\n\n// Load or Deploy contract, and update session with contract instance\n    if myenv["CONTRACTADDR"] == "" {\n        session = NewContract(session, client, "name", "satya")\n    }\n\n    // If we have an existing contract, load it; if we\'ve deployed a new contract, attempt to load it.\n    if myenv["CONTRACTADDR"] != "" {\n        session = LoadContract(session, client)\n    }\n\n\n\n// Loop to implement simple CLI\n    for {\n       fmt.Printf(\n        "Pick an option:\\n" + "" +\n            "1. Show question.\\n" +\n            "2. Send answer.\\n" +\n            "3. Check if you answered correctly.\\n" +\n            "4. Exit.\\n",\n    )\n\n    // Reads a single UTF-8 character (rune)\n    // from STDIN and switches to case.\n    runes := []rune(readStringStdin())\n    switch runes[0] {\n    case \'1\':\n        readQuestion(session)\n        break\n    case \'2\':\n        fmt.Println("Type in your answer")\n        sendAnswer(session, readStringStdin())\n        break\n    case \'3\':\n        checkCorrect(session)\n        break\n    case \'4\':\n        fmt.Println("Bye!")\n        return\n    default:\n        fmt.Println("Invalid option. Please try again.")\n        break\n    }\n}\n\n}\n\nfunc NewSession(ctx context.Context) (session quiz.QuizSession) {\n    loadEnv()\n    keystore, err := os.Open(myenv["KEYSTORE"])\n    if err != nil {\n        log.Printf(\n            "could not load keystore from location %s: %v\\n",\n            myenv["KEYSTORE"],\n            err,\n        )\n    }\n    defer keystore.Close()\n\n    keystorepass := myenv["KEYSTOREPASS"]\n    auth, err := bind.NewTransactor(keystore, keystorepass)\n    if err != nil {\n        log.Printf("%s\\n", err)\n    }\n\n    // Return session without contract instance\n    return quiz.QuizSession{\n        TransactOpts: *auth,\n        CallOpts: bind.CallOpts{\n            From:    auth.From,\n            Context: ctx,\n        },\n    }\n}\n\n// NewContract deploys a contract if no existing contract exists\nfunc NewContract(session quiz.QuizSession, client *ethclient.Client, question string, answer string) (quiz.QuizSession) {\n    loadEnv()\n\n    // Hash answer before sending it over Ethereum network.\n    contractAddress, tx, instance, err := quiz.DeployQuiz(&session.TransactOpts, client, question, stringToKeccak256(answer))\n    if err != nil {\n        log.Fatalf("could not deploy contract: %v\\n", err)\n    }\n    fmt.Printf("Contract deployed! Wait for tx %s to be confirmed.\\n", tx.Hash().Hex())\n\n    session.Contract = instance\n    updateEnvFile("CONTRACTADDR", contractAddress.Hex())\n    return session\n}\n\n// LoadContract loads a contract if one exists\nfunc LoadContract(session quiz.QuizSession, client *ethclient.Client) quiz.QuizSession {\n    loadEnv()\n\n    addr := common.HexToAddress(myenv["CONTRACTADDR"])\n    instance, err := quiz.NewQuiz(addr, client)\n    if err != nil {\n        log.Fatalf("could not load contract: %v\\n", err)\n       log.Println(ErrTransactionWait)\n    }\n    session.Contract = instance\n    return session\n}\n\n// Utility functions\n\n// stringToKeccak256 converts a string to a keccak256 hash of type [32]byte\nfunc stringToKeccak256(s string) [32]byte {\n    var output [32]byte\n    copy(output[:], crypto.Keccak256([]byte(s))[:])\n    return output\n}\n\n// updateEnvFile updates our env file with a key-value pair\nfunc updateEnvFile(k string, val string) {\n    myenv[k] = val\n    err := godotenv.Write(myenv, envLoc)\n    if err != nil {\n        log.Printf("failed to update %s: %v\\n", envLoc, err)\n    }\n}\n\n\n// readQuestion prints out question stored in contract.\nfunc readQuestion(session quiz.QuizSession) {\n    qn, err := session.Question()\n    if err != nil {\n        log.Printf("could not read question from contract: %v\\n", err)\n        log.Println(ErrTransactionWait)\n        return\n    }\n    fmt.Printf("Question: %s\\n", qn)\n    return\n}\n\n// sendAnswer sends answer to contract as a keccak256 hash.\nfunc sendAnswer(session quiz.QuizSession, ans string) {\n    // Send answer\n    txSendAnswer, err := session.SendAnswer(stringToKeccak256(ans))\n    if err != nil {\n        log.Printf("could not send answer to contract: %v\\n", err)\n        return\n    }\n    fmt.Printf("Answer sent! Please wait for tx %s to be confirmed.\\n", txSendAnswer.Hash().Hex())\n    return\n}\n\n// checkCorrect makes a contract message call to check if\n// the current account owner has answered the question correctly.\nfunc checkCorrect(session quiz.QuizSession) {\n    win, err := session.CheckBoard()\n    if err != nil {\n        log.Printf("could not check leaderboard: %v\\n", err)\n        log.Println(ErrTransactionWait)\n        return\n    }\n    fmt.Printf("Were you correct?: %v\\n", win)\n    return\n}\n\n// readStringStdin reads a string from STDIN and strips any trailing \\n characters from it.\nfunc readStringStdin() string {\n    reader := bufio.NewReader(os.Stdin)\n    inputVal, err := reader.ReadString(\'\\n\')\n    if err != nil {\n        log.Printf("invalid option: %v\\n", err)\n        return ""\n    }\n\n    output := strings.TrimSuffix(inputVal, "\\n") // Important!\n    return output\n}\n\n3. Smart contract Deployment shows success message:\n\n4. However, the value is not set properly\n\n\n\n',
                                        __typename: 'CommentDTO',
                                    },
                                ],
                                totalPages: 1,
                                totalElements: 3,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'b54334b0695342c1bbe161c4c4467b50',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. You can execute this tutorial as a workbook, or download a simplified sample here The purpose of this sample is the following: Understanding how to create contract deployment, function and event definitions to interact with a smart contracts Creating an account object using a private key, this will allow to sign transactions offline. Deploying a smart contract (the s',
                            id: 'b54334b0695342c1bbe161c4c4467b50',
                            version: 1,
                            title: 'Smart contracts integration with Nethereum',
                            content:
                                '{"markdown":"The purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\n> You can execute this tutorial as a [workbook](https://nethereum.readthedocs.io/en/latest/Nethereum.Workbooks/docs/nethereum-smartcontrats-gettingstarted.workbook), or download a simplified sample [here](https://github.com/Nethereum/Nethereum.CQS.SimpleTokenTransfer)\\n\\nThe purpose of this sample is the following:\\n\\n* Understanding how to create contract deployment, function and event definitions to interact with a smart contracts\\n\\n* Creating an account object using a private key, this will allow to sign transactions \\"offline\\".\\n\\n* Deploying a smart contract (the sample provided is the standard ERC20 token contract)\\n\\n* Making a call to a smart contract (in this scenario get the balance of an account)\\n\\n* Sending a transaction to the smart contract (in this scenario transferring balance)\\n\\n* Estimating the gas cost of a contract transaction\\n\\n* Gas Price, Nonces and Sending Ether to smart contracts\\n\\n* Signing online / offline transaction function messages and deployment messages\\n\\n* Extension methods for Deployment and Function messages\\n\\n* Retrieving the state of a smart contract from a previous block\\n\\n### Pre-Conditions\\n\\nIn this tutorial we are going to interact with the ERC20 standard token contract. The smart contract provides a standard way to create a new token, transfer it to another account and query the balance of any account. This standard interface allows the interoperability of smart contracts providing the same signature and applications that integrate with it.\\n\\n![Constructor, transfer, balance and event of ERC20](https://github.com/Nethereum/Nethereum.Workbooks/raw/master/docs/screenshots/simpleERC20.png)\\n\\nA full sample of the smart contract can be found [here](https://nethereum.readthedocs.io/en/latest/Nethereum.Workbooks/docs/StandardToken.sol)\\n\\nFirst of all, we need to declare our namespaces, and contract definition to interact with the smart contract. In this scenario we are only interested in the Deployment, Transfer function and BalanceOf Function of the ERC20 smart contract.\\n\\nAdd a reference to the nuget package \\"Nethereum.Web3\\"\\n\\n```csharp\\n#r \\"Nethereum.Web3\\"\\n```\\n\\n```csharp\\n#r \\"Nethereum.Accounts\\"\\n```\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.ABI.FunctionEncoding.Attributes;\\nusing Nethereum.Contracts.CQS;\\nusing Nethereum.Util;\\nusing Nethereum.Web3.Accounts;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.Contracts;\\nusing Nethereum.Contracts.Extensions;\\nusing System.Numerics;\\n```\\n\\nTo deploy a contract we will create a class inheriting from the ContractDeploymentMessage, here we can include our compiled byte code and other constructor parameters.\\n\\nAs we can see below the StandardToken deployment message includes the compiled bytecode of the ERC20 smart contract and the constructor parameter with the “totalSupply” of tokens.\\n\\nEach parameter is described with an attribute Parameter, including its name \\"totalSupply\\", type \\"uint256\\" and order.\\n\\n```csharp\\npublic class StandardTokenDeployment : ContractDeploymentMessage\\n{\\n\\n            public static string BYTECODE = \\"0x60606040526040516020806106f5833981016040528080519060200190919050505b80600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550806000600050819055505b506106868061006f6000396000f360606040523615610074576000357c010000000000000000000000000000000000000000000000000000000090048063095ea7b31461008157806318160ddd146100b657806323b872dd146100d957806370a0823114610117578063a9059cbb14610143578063dd62ed3e1461017857610074565b61007f5b610002565b565b005b6100a060048080359060200190919080359060200190919050506101ad565b6040518082815260200191505060405180910390f35b6100c36004805050610674565b6040518082815260200191505060405180910390f35b6101016004808035906020019091908035906020019091908035906020019091905050610281565b6040518082815260200191505060405180910390f35b61012d600480803590602001909190505061048d565b6040518082815260200191505060405180910390f35b61016260048080359060200190919080359060200190919050506104cb565b6040518082815260200191505060405180910390f35b610197600480803590602001909190803590602001909190505061060b565b6040518082815260200191505060405180910390f35b600081600260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905061027b565b92915050565b600081600160005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015801561031b575081600260005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410155b80156103275750600082115b1561047c5781600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a381600160005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600260005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055506001905061048656610485565b60009050610486565b5b9392505050565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104c6565b919050565b600081600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015801561050c5750600082115b156105fb5781600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061060556610604565b60009050610605565b5b92915050565b6000600260005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905061066e565b92915050565b60006000600050549050610683565b9056\\";\\n\\n    public StandardTokenDeployment() : base(BYTECODE){}\\n\\n    [Parameter(\\"uint256\\", \\"totalSupply\\")]\\n    public BigInteger TotalSupply { get; set; }\\n}\\n```\\n\\nWe can call the functions of smart contract to query the state of a smart contract or do any computation, which will not affect the state of the blockchain.\\n\\nTo do so we will need to create a class which inherits from \\"FunctionMessage\\". First we will decorate the class with a \\"Function\\" attribute, including the name and return type.\\n\\nEach parameter of the the function will be a property of the class, each of them decorated with the \\"Parameter\\" attribute, including the smart contract name, type and parameter order.\\n\\nFor the ERC20 smart contract, the \\"balanceOf\\" function definition, provides the query interface to get the token balance of a given address. As we can see this function includes only one parameter \\"\\\\_owner\\", of the type \\"address\\".\\n\\n```csharp\\n[Function(\\"balanceOf\\", \\"uint256\\")]\\npublic class BalanceOfFunction : FunctionMessage\\n{\\n    [Parameter(\\"address\\", \\"_owner\\", 1)]\\n    public string Owner { get; set; }\\n}\\n```\\n\\nAnother type of smart contract function will be correspondent to a transaction that will change the state of the smart contract (or smart contracts).\\n\\nFor example The \\"transfer\\" function definition for the ERC20 smart contract, includes the parameters “\\\\_to” address parameter as a string, and the “\\\\_value” or TokenAmount we want to transfer.\\n\\nIn a similar way to the \\"balanceOf\\" function, all the parameters include the solidity type, parameter name and parameter order.\\n\\nNote: When working with functions, it is very important to have the parameters types, and function name correct as all of these make the signature of the function.\\n\\n```csharp\\n[Function(\\"transfer\\", \\"bool\\")]\\npublic class TransferFunction : FunctionMessage\\n{\\n    [Parameter(\\"address\\", \\"_to\\", 1)]\\n    public string To { get; set; }\\n\\n    [Parameter(\\"uint256\\", \\"_value\\", 2)]\\n    public BigInteger TokenAmount { get; set; }\\n}\\n```\\n\\nFinally smart contracts also have events. Events in smart contracts write the blockchain log, providing a way to retrieve further information of any smart contract interaction occurred.\\n\\nTo create an Event definition, we need to create a class that inherits from IEventDTO, decorated with the Event attribute.\\n\\nThe Transfer Event, similar to the Function it also includes the parameters with the name, order and type. But also a boolean value indicating if the parameter is indexed or not.\\n\\nIndexed parameters will allow us later on to query the blockchain for those values.\\n\\n```csharp\\n[Event(\\"Transfer\\")]\\npublic class TransferEventDTO : IEventDTO\\n{\\n    [Parameter(\\"address\\", \\"_from\\", 1, true)]\\n    public string From { get; set; }\\n\\n    [Parameter(\\"address\\", \\"_to\\", 2, true)]\\n    public string To { get; set; }\\n\\n    [Parameter(\\"uint256\\", \\"_value\\", 3, false)]\\n    public BigInteger Value { get; set; }\\n}\\n```\\n\\n### Instantiating Web3 and the Account\\n\\nA simple way to run this sample is to use one of the pre-configured private chains which can be found https://github.com/Nethereum/TestChains (Geth, Parity, Ganache) using the Account “0x12890d2cce102216644c59daE5baed380d84830c” with private key “0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7“, or alternatively use your own testchain with your own account / private key.\\n\\nTo create an instance of web3 we first provide the url of our testchain and the private key of our account. When providing an Account instantiated with a  private key all our transactions will be signed by Nethereum.\\n\\n```csharp\\nvar url = \\"http://localhost:8545\\";\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\nvar account = new Account(privateKey);\\nvar web3 = new Web3(account, url);\\n```\\n\\n### Deploying the Contract\\n\\nThe next step is to deploy our Standard Token ERC20 smart contract, in this scenario the total supply (number of tokens) is going to be 100,000.\\n\\nFirst we create an instance of the StandardTokenDeployment with the TotalSupply amount.\\n\\n```csharp\\nvar deploymentMessage = new StandardTokenDeployment\\n{\\n    TotalSupply = 100000\\n};\\n```\\n\\nThen we create a deployment handler using our contract deployment definition and simply deploy the contract using the deployment message. We are auto estimating the gas, getting the latest gas price and nonce so nothing else is set anything on the deployment message.\\n\\nFinally, we wait for the deployment transaction to be mined, and retrieve the contract address of the new contract from the receipt.\\n\\n```csharp\\nvar deploymentHandler = web3.Eth.GetContractDeploymentHandler<StandardTokenDeployment>();\\nvar transactionReceipt = await deploymentHandler.SendRequestAndWaitForReceiptAsync(deploymentMessage);\\nvar contractAddress = transactionReceipt.ContractAddress;\\n```\\n\\n### Interacting with the Contract\\n\\nOnce we have deployed the contract, we can start interaction with the contract.\\n\\n#### Querying\\n\\nTo retrieve the balance of an address we can create an instance of the BalanceFunction message and set the parameter as our account \\"Address\\", because we are the \\"owner\\" of the Token the full balance has been assigned to us.\\n\\n```csharp\\nvar balanceOfFunctionMessage = new BalanceOfFunction()\\n{\\n    Owner = account.Address,\\n};\\n\\nvar balanceHandler = web3.Eth.GetContractQueryHandler<BalanceOfFunction>();\\nvar balance = await balanceHandler.QueryAsync<BigInteger>(contractAddress, balanceOfFunctionMessage);\\n```\\n\\nTo retrieve the balance, we will create a QueryHandler and finally using our contract address and message retrieve the balance amount.\\n\\n##### Multiple return types or complex objects\\n\\nFunctions of smart contracts can return one or multiple values in a single call. To decode the return values, we use a FunctionOutputDTO.\\n\\nFunction outputs are classes which are decorated with a FunctionOutput attribute and implement the interface IFunctionOutputDTO.\\n\\nAn example of this is the following implementation that can be used to return the single value of the Balance on the ERC20 smart contract.\\n\\n```csharp\\n [FunctionOutput]\\n public class BalanceOfOutputDTO : IFunctionOutputDTO\\n {\\n      [Parameter(\\"uint256\\", \\"balance\\", 1)]\\n      public BigInteger Balance { get; set; }\\n }\\n```\\n\\nIf we were going to return multiple values we could have something like:\\n\\n```csharp\\n [FunctionOutput]\\n public class BalanceOfOutputMultipleDTO : IFunctionOutputDTO\\n {\\n      [Parameter(\\"uint256\\", \\"balance1\\", 1)]\\n      public BigInteger Balance1 { get; set; }\\n\\n      [Parameter(\\"uint256\\", \\"balance2\\", 2)]\\n      public BigInteger Balance2 { get; set; }\\n\\n      [Parameter(\\"uint256\\", \\"balance1\\", 3)]\\n      public BigInteger Balance3 { get; set; }\\n }\\n```\\n\\nWhen querying the chain we will use the following method instead:\\n\\n```csharp\\nvar balance = await balanceHandler.QueryDeserializingToObjectAsync<BalanceOfOutputDTO>( balanceOfFunctionMessage, contractAddress);\\n```\\n\\n#### Querying previous state of the smart contract\\n\\nAnother great feature of the Ethereum blockchain is the capability to retrieve the state of a smart contract from a previous block.\\n\\nFor example, we could get the balance of the owner at the time of deployment by using the block number, in which the contract was deployed.\\n\\n```csharp\\nvar balance = await balanceHandler.QueryDeserializingToObjectAsync<BalanceOfOutputDTO>( balanceOfFunctionMessage, contractAddress, new Nethereum.RPC.Eth.DTOs.BlockParameter(transactionReceipt.BlockNumber));\\n```\\n\\n#### Transfer\\n\\nMaking a transfer will change, the state of the blockchain, so in this scenario we will need to create a TransactionHandler using the TransferFunction definition.\\n\\nIn the transfer message, we will include the receiver address \\"To\\", and the \\"TokenAmount\\" to transfer.\\n\\nThe final step is to Send the request wait for the receipt to be “mined” and included in the blockchain.\\n\\nAnother option will be not to wait (poll) for the transaction to mined and just retrieve the transaction hash.\\n\\n```csharp\\nvar receiverAddress = \\"0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe\\";\\nvar transferHandler = web3.Eth.GetContractTransactionHandler<TransferFunction>();\\nvar transfer = new TransferFunction()\\n{\\n    To = receiverAddress,\\n    TokenAmount = 100\\n};\\nvar transactionReceipt = await transferHandler.SendRequestAndWaitForReceiptAsync(contractAddress, transfer);\\n```\\n\\n##### Transferring Ether to a smart contract\\n\\nA function or deployment transaction can send Ether to the smart contract. The FunctionMessage and DeploymentMessage have the property \\"AmountToSend\\".\\n\\nSo if the \\"transfer\\" function accepts also Ether, we will set it this way.\\n\\n```csharp\\ntransfer.AmountToSend = Nethereum.Web3.Web3.Convert.ToWei(1);\\n```\\n\\nThe GasPrice is set in \\"Wei\\" which is the lowest unit in Ethereum, so in the scenario above we have converted 1 Ether to Wei.\\n\\n##### Gas Price\\n\\nNethereum sets automatically the GasPrice if not provided by using the clients \\"GasPrice\\" call, which provides the average gas price from previous blocks.\\n\\nIf you want to have more control of the GasPrice these can be set in both FunctionMessages and DeploymentMessages.\\n\\n```csharp\\n  transfer.GasPrice =  Nethereum.Web3.Web3.Convert.ToWei(25, UnitConversion.EthUnit.Gwei);\\n```\\n\\nThe GasPrice is set in \\"Wei\\" which is the lowest unit in Ethereum, so if we are used to the usual \\"Gwei\\" units, this will need to be converted using the Nethereum Convertion utilities.\\n\\n##### Estimating Gas\\n\\nNethereum does an automatic estimation of the total gas necessary to make the function transaction by calling the \\"EthEstimateGas\\" internally with the \\"CallInput\\".\\n\\nIf wanted this can be done manually, using the TransactionHandler and the \\"transfer\\" transaction FucntionMessage.\\n\\n```csharp\\n var estimate = await transferHandler.EstimateGasAsync(contractAddress, transfer);\\n transfer.Gas = estimate.Value;\\n```\\n\\n##### Nonces\\n\\nEach account transaction has a Nonce associated with it, this is the order and unique number for that transaction. This allows each transaction to be differentiate it from each other, but also ensure transactions are processed on the same order.\\n\\nNethereum calculates the Nonce automatically for all Transactions by retrieving the latest count of the transactions from the chain. Also internally manages at Account level an in memory counter on the nonces, to allow for situations in which we want to send multiple transactions before giving time to the Ethereum client to update its internal counter.\\n\\nNevertheless it might be scenarios, we want to supply our Nonce, for example if we want to sign the transaction completely offline.\\n\\n```csharp\\ntransfer.Nonce = 2;\\n```\\n\\n##### Signing a Function / Deployment message online / offline\\n\\nThe TransactionHandler also provides a mechanism to sign the Function and Deployments messages, provided we use an Account and/or ExternalAccount\\n\\n```csharp\\nvar signedTransaction = await transferHandler.SignTransactionAsync(ContractAddress, transfer);\\n```\\n\\nNethereum internally calls the Ethereum client to set the GasPrice, Nonce and estimate the Gas, so if want to sign the transaction for the contract completely offline we will need to set those values before hand.\\n\\n```csharp\\ntransfer.Nonce = 2;\\ntransfer.Gas = 21000;\\ntransfer.GasPrice =  Nethereum.Web3.Web3.Convert.ToWei(25, UnitConversion.EthUnit.Gwei);\\nvar signedTransaction = await transferHandler.SignTransactionAsync(ContractAddress, transfer);\\n```\\n\\n##### Extension methods for Functions and Deployment Messages\\n\\nThere are a number of extensions that can simplify the interaction with Function messages and Deployment messages.\\n\\nThese are under the namespace\\n\\n```csharp\\nusing Nethereum.Contracts.Extensions;\\n```\\n\\nSome of the extension methods are the following:\\n\\n**SetGasPriceFromGwei** which sets the GasPrice and converts it to Wei.\\n\\n**CreateCallInput** creates the call input which can be used to query or estimate transactions.\\n\\n**CreateTransactionInput** creates the transaction input which can be used to send or sign the raw transaction\\n\\n**DecodeInput** decodes the data of a transaction into a FunctionMessage\\n\\n**DecodeTransactionToFunctionMessage** decodes the full transaction into a FunctionMessage\\n\\n**GetCallData** returns the encoded call data with all the function and parameter information to be send to Ethereum\\n\\n**DecodeTransactionToDeploymentMessage** decodes the full transaction into DeploymentMessage\\n\\n**GetSwarmAddressFromByteCode** using the bytecode of a DeploymentMessage finds the swarm address included\\n\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n\\n"}',
                            authorId:
                                '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                            dateCreated: '2019-04-24T16:12:13.045Z',
                            datePublished: '2019-04-24T16:12:24.396Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmSydezx29qnek9MTBk29bj4wXFyh3WqMbEq295UV996Zs',
                            checkpoint:
                                'Qma6YKVoeMeF9B2SGXqAyoksjNzgqzvbwwnrA6X4MhBJhH',
                            tags: ['smart-contract', 'dotnet', 'nethereum'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'feb122418c014c8bb7010063263d0a20',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. This document also exists as a Workbook , find more about workbooks installation requirements here Nethereum provides methods to sign messages in an Ethereum compatible format. The following is a quick guide to signing a string with Nethereum and verifying a signature using various methods. Ethereum signing basics In the Ethereum context, signing a message allows us',
                            id: 'feb122418c014c8bb7010063263d0a20',
                            version: 2,
                            title: 'Signing messages with Nethereum',
                            content:
                                '{"markdown":"\\n\\nThe purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\nThis document also exists as a [ Workbook ](https://github.com/Nethereum/Nethereum.Workbooks/blob/master/docs/nethereum-signing-messages.workbook), find more about workbooks installation requirements  [here](https://docs.microsoft.com/en-us/xamarin/tools/workbooks/install)\\n\\nNethereum provides methods to sign messages in an Ethereum compatible format. The following is a quick guide to signing a string with Nethereum and verifying a signature using various methods.\\n\\n## Ethereum signing basics\\n\\nIn the Ethereum context, signing a message allows us to verify that a piece of data was signed by a specific account, in other terms, it\'s a way to prove to a smart contract/human that an account approved a message.\\n\\nSigning a message with a private key does not require interacting with the Ethereum network. It can be done completely offline, hence the following code can be run without a testchain.\\n\\nNethereum provides with a class that can be used to sign or verify messages: `EthereumMessageSigner`.\\nLet\'s now explore how to use `EthereumMessageSigner` with two very common scenarios in the Ethereum context.\\n\\n## Signing messages and verifying signatures with Nethereum\\n\\nLet\'s first reference our assemblies and namespaces:\\n\\n```csharp\\n#r \\"Nethereum.Web3\\"\\n```\\n\\n```csharp\\n#r \\"Nethereum.ABI\\"\\n```\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.Util;\\nusing System.Collections.Generic;\\nusing System.Text;\\nusing Nethereum.Signer;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.ABI.Encoders;\\n```\\n\\nNow let\'s declare elements that we will in every of our examples:\\n\\n**address** declares the signer\'s account address:\\n\\n```csharp\\nvar address = \\"0x12890d2cce102216644c59dae5baed380d84830c\\";\\n```\\n\\n**msg1** declares the content of the message itself, here is a simple string:\\n\\n```csharp\\nvar msg1 = \\"wee test message 18/09/2017 02:55PM\\";\\n```\\n\\n**privatekey** declares the private key of the signer’s **account**:\\n\\n```csharp\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\n```\\n\\n**signer1** creates an instance of the **EthereumMessageSigner** object:\\n\\n```csharp\\nvar signer1 = new EthereumMessageSigner();\\n```\\n\\n### 1-Encoding and signing a message using EncodeUTF8AndSign:\\n\\nThe most common scenario when signing a message goes as follows:\\n\\nA message needs to be signed, it\'s most likely a string and hence can be encoded in UTF8 and then signed, therefore we will use `EncodeUTF8AndSign`\\n\\n`EncodeUTF8AndSign` requires two arguments:\\n\\n* The message itself\\n\\n* The signing account\'s private key\\n\\n```csharp\\nvar signature1 = signer1.EncodeUTF8AndSign(msg1, new EthECKey(privateKey));\\n```\\n\\n### 2- Verifying a signed message encoded in UTF8 using EncodeUTF8AndEcRecover:\\n\\nThe Ethereum signature verification process is a bit different from classical digital signatures, here the output of a signature verification is not the message (or the message hash) but the signer\'s address, since the address is a part of the public key hash.\\nVerification is successful if the recovered address is equal to the provided address, which can only happen if the signer is the owner of the account\'s private key.\\n\\nIn this case the **EncodeUTF8AndEcRecover** method is used to verify the signer\'s address of a message encoded in UTF8:\\n\\n**addressRec1** evaluates to the signer\'s address, thus proving the validity of the message.\\n\\n```csharp\\nvar addressRec1 = signer1.EncodeUTF8AndEcRecover(msg1, signature1);\\n```\\n\\n### 3-Hashing and signing a message using **HashAndSign**:\\n\\nIn some cases, hashing data and then signing it might be more relevant, i.e. when dealing with a large file.\\n\\n**HashAndSign** enables you to do this in one go:\\n\\n```csharp\\nvar msg2 = \\"test\\";\\nvar signer2 = new EthereumMessageSigner();\\nvar signature2 = signer2.HashAndSign(msg2,\\n                \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\");\\n```\\n\\n### 4-Verifying a hashed message using **HashAndEcRecover**:\\n\\nWhen receiving a signature that has been made with a hashed file it\'s necessary to start by hashing the file we want to verify and then recover the address that signed it.\\n\\n**HashAndEcRecover** enables you to do this in one single step:\\n\\n```csharp\\nvar addressRec2 = signer2.HashAndEcRecover(msg2, signature2);\\n```\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n"}',
                            authorId:
                                '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                            dateCreated: '2019-04-30T22:08:48.198Z',
                            datePublished: '2019-06-06T15:21:08.755Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmUWoti4Lr95GRAapp9HFuEnzmzozjA1CTNrSBF1GT5jV2',
                            checkpoint:
                                'QmdWth1LFV9sDU42AcKgPQFeCzSQTknbPRbA2WRmqmzCjH',
                            tags: [
                                'ethereum',
                                'encryption',
                                '-net',
                                'nethereum',
                                'tutorial',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                name: 'Josh Cassidy',
                                username: 'joshorig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                    name: 'Josh Cassidy',
                                    username: 'joshorig',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd7e05d0b1d2e4161a0118df91cb67b89',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. This document also exists as a Workbook, find more about workbooks installation requirements here. What are nonces? The nonce is an important component of a transaction, it is an attribute of a an address that represents the number of transactions sent by that address. Nonces act as counters that keeps track of the number of transactions sent by an account. Nonces ha',
                            id: 'd7e05d0b1d2e4161a0118df91cb67b89',
                            version: 2,
                            title: 'Managing nonces with Nethereum',
                            content:
                                '{"markdown":"The purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\nThis document also exists as a [Workbook](https://github.com/Nethereum/Nethereum.Workbooks/blob/master/docs/nethereum-managing-nonces.workbook), find more about workbooks installation requirements  [here](https://docs.microsoft.com/en-us/xamarin/tools/workbooks/install).\\n\\n## What are nonces?\\n\\nThe nonce is an important component of a transaction, it is an attribute of a an address that represents the number of transactions sent by that address. Nonces act as counters that keeps track of the number of transactions sent  by an account.\\n\\nNonces have two functions:\\n1- Allowing to choose the order in which transactions will be executed.\\n2- Avoiding replay attacks.\\n\\nIn case 1, nonces enable to choose the order in which transactions will be executed by simply assigning nonces reflecting the order in which we want them processed (`0`for the first `1` for the second, etc...).\\nIn case 2, nonces prevent an attacker from copying one of our transactions and resending it until the account is drained (replay attack). Nonces make each transaction unique: there can only be one single transaction with a specific nonce, once it\'s confirmed it cannot be \\"replayed\\".\\n\\nFor more details on transactions and nonces, we recommend [this article](https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#the-transaction-nonce) (and more generally, the [Ethereum Book](https://github.com/ethereumbook/ethereumbook))\\n\\n## Common errors when working with nonces\\n\\nEach node will process transactions from a specific account in a strict order according to the value of its nonce, hence the nonce value needs to be incremented precisely.\\n\\nKeeping track of nonces is straightforward if all transactions originate from a single source/wallet handling the account, but things can get complicated if the account is managed by concurrent processes.\\nWhen several wallets handle transactions for the same account, duplicates and gaps can happen, resulting in transactions being cancelled or held off.\\n\\nErrors can also occur when Geth or Parity clients update their pending transactions queue too slowly.\\n\\nTwo main errors can occur with nonces:\\n\\nError 1/ Reusing nonce: if we send two transactions with the same nonce from the same account, one of the two will be rejected.\\n\\nError 2/ Gaps: if we leave a gap between the nonces that are attributed to two consecutive transactions, the last transaction will not be processed until this gap is closed.\\n\\nLet\'s take an example with a first transaction that would have nonce `123` and a second transaction with nonce `126`. In that example, the transaction with nonce `126` wouldn\'t be processed until transactions with nonces `124` and `125` are sent.\\n\\n## How Nethereum helps managing nonces\\n\\nNethereum simplifies nonce management thanks to the `NonceService`.\\nThe `NonceService` keeps track of pending transactions thus preventing the errors mentionned above the below demonstrates how to leverage it.\\n\\n## Prerequisites:\\n\\nIn order to run the code in this workbook, we recommended the following setup:\\nFirst, download the test chain matching your environment from <https://github.com/nethereum/testchains>\\n\\nStart a geth chain (geth-clique-linux\\\\\\\\, geth-clique-windows\\\\\\\\ or geth-clique-mac\\\\\\\\) using **startgeth.bat** (windows) or **startgeth.sh** (mac/linux). the chain is setup with the proof of authority consensus and will start the mining process immediately.\\n\\n```csharp\\n#r \\"nethereum.web3\\"\\n```\\n\\n```csharp\\n#r \\"nethereum.Accounts\\"\\n```\\n\\nThen we will need to add `using` statements:\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.Web3.Accounts;\\nusing Nethereum.Web3.Accounts.Managed;\\nusing Nethereum.Signer;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.KeyStore;\\nusing Nethereum.Hex.HexConvertors;\\nusing Nethereum.Hex.HexTypes;\\nusing Nethereum.RPC.NonceServices;\\nusing Nethereum.RPC.TransactionReceipts;\\nusing System.Threading.Tasks;\\nusing Nethereum.RPC.Eth.Transactions;\\nusing Nethereum.RPC.Eth.DTOs;\\n```\\n\\n## Usage\\n\\nIn most cases, Nethereum takes care of incrementing the `nonce` automatically (unless you need to sign a raw transaction manually, we\'ll explain that in the next chapter).\\n\\nOnce you have loaded your private keys into your account, if Web3 is instantiated with that account, all the transactions will be made using the `TransactionManager`, Contract deployment or Functions will be signed offline using the latest nonce.\\n\\nExample:\\nThis example shows what happens to the `nonce` value when we send a transaction with a Nethereum account:\\n\\nWe first need to create an instance of an account, then use it to instantiate a `web3` object.\\n\\nLet\'s first declare our new `Account`:\\n\\n```csharp\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\nvar account = new Nethereum.Web3.Accounts.Account(privateKey);\\n```\\n\\n* `web3` is the Web3 instance using the new `account` as constructor\\n\\n```csharp\\nvar web3 = new Web3(account);\\n```\\n\\nWe can now create an instance of the NonceService that will help us keep track of transaction.\\\\\\nPlease note: when using the TransactionManager the NonceService is started automatically. The below is mostly for the sake of demontration.\\n\\n```csharp\\naccount.NonceService = new InMemoryNonceService(account.Address, web3.Client);\\n```\\n\\nLet\'s now examine what happens to the `nonce` value before and after we send a transaction:\\n\\n### Before a transaction is sent:\\n\\nThe `NonceService` keeps track of all transactions, including the ones still pending, making it easy to assign the right nonce to a transaction about to be sent.\\n\\nHere is how to return the current number of transaction for the `account` we declared earlier:\\n\\n```csharp\\nvar currentNonce = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(account.Address, BlockParameter.CreatePending());\\n```\\n\\n`actualNonce` includes the total number of transactions including the pending transactions which have been submitted but are yet to be confirmed.\\n\\nIt is also possible to return the next nonce that needs to be assigned to a future transaction, this nonce will be determined by the \\\\`NonceService\\\\` using the current nonce plus the pending transactions sent by our account:\\n\\n```csharp\\nvar futureNonce = await account.NonceService.GetNextNonceAsync();\\n```\\n\\nNow, let\'s send a simple transaction, the right nonce will be automatically assigned to it by the `TransactionManager`:\\n\\n```csharp\\nvar recipientAddress = \\"0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae\\";\\nvar transaction = await web3.TransactionManager.SendTransactionAsync(account.Address, recipientAddress, new HexBigInteger(1));\\n```\\n\\n#### After a transaction has been sent\\n\\nFinally, using the NonceService, we can check if our transaction count has changed:\\n\\n```csharp\\ncurrentNonce = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(account.Address, BlockParameter.CreatePending());\\n```\\n\\nAs the above code demonstrates, the `nonce` was automatically incremented, thanks to the use of `TransactionManager`.\\n\\n## Sending a transaction with an arbitrary nonce\\n\\nThere are scenarios where we might want to supply a Nonce manually, for example if we want to sign a transaction completely offline. Here is how to verify the number of transactions sent by an account:\\n\\nLet\'s first create an object instance of `TransactionSigner`\\n\\n```csharp\\nvar OfflineTransactionSigner = new TransactionSigner();\\n```\\n\\nWe can now declare a variable representing the next nonce for our upcoming transaction:\\n\\n```csharp\\nfutureNonce = await account.NonceService.GetNextNonceAsync();\\n```\\n\\nFinally, let’s sign our transaction offline:\\n\\n```csharp\\nvar encoded = OfflineTransactionSigner.SignTransaction(privateKey, recipientAddress, 10,futureNonce);\\n```\\n\\nAnd finally, send our transaction:\\n\\n```csharp\\nvar txId = await web3.Eth.Transactions.SendRawTransaction.SendRequestAsync(\\"0x\\" + encoded);\\n```\\n\\n\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n"}',
                            authorId:
                                '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                            dateCreated: '2019-06-05T07:25:18.318Z',
                            datePublished: '2019-06-06T14:47:44.237Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmWd7tbNZGVBYVTvTySUryEZmap3XysWaMuKvViXvzb5Ku',
                            checkpoint:
                                'QmdWth1LFV9sDU42AcKgPQFeCzSQTknbPRbA2WRmqmzCjH',
                            tags: [
                                'ethereum',
                                'nethereum',
                                'nonce',
                                'transaction',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                                name: 'Chris Ward',
                                username: 'ChrisChinchilla',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmf3VwAmcivMAFzRoDJgzJ3hgrjAEKvDh3i7Lm8zAoQnw3',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                                    name: 'Chris Ward',
                                    username: 'ChrisChinchilla',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/Qmf3VwAmcivMAFzRoDJgzJ3hgrjAEKvDh3i7Lm8zAoQnw3',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: 'Fixed broken link',
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
            ],
            resourceIdentifier: {
                type: 'COLLECTION',
                id: '5cb55c871325f2000141df73',
                __typename: 'ResourceIdentifier',
            },
            __typename: 'CollectionDTO',
        },
    },
    dataPresent: true,
}
