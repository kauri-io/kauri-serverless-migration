import uppyConfig from './uppy'

export default {
    gateway: 'api.kauri.io',
    KauriCommunityId: '5d2c6edefe402500014349f5',
    uppyConfig,
    analyticsTokens: {
        mixpanel: '7d83001be784f09b212b9b3274e41530',
        ga: 'UA-112179323-1',
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
    useCloudImage: true,
    debug: false,
    ipfsGateway: 'https://ipfs.infura.io/ipfs/',
}
