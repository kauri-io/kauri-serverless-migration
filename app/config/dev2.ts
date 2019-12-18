import uppyConfig from './uppy'

export default {
    gateway: 'api.dev2.kauri.io',
    KauriCommunityId: '5d2c6edefe402500014349f5',
    uppyConfig,
    analyticsTokens: {
        mixpanel: '627c5ccb5bf7da1d079aef2efaa807c2',
        ga: 'UA-112179323-4',
    },
    testingAccounts: [
        'b282635ffc0ea4d6984f6b50e9dab90de1d03ce2',
        '5765d2d2fafb930132d72651f3f28c86371379b1',
        '27e77e164bc02788f347213b0a3e9a9a0cdf8d7a',
    ],
    environment: 'production',
    appId: 'kauri',
    clientId: 'kauri-gateway',
    cloudImageId: 'asdgvdoyen',
    useCloudImage: false,
    debug: false,
    ipfsGateway: 'https://ipfs.infura.io/ipfs/',
}
