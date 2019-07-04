export default({
  monolithApi: process.env.MONOLITH_API,
  monolithExternalApi: process.env.MONOLITH_EXTERNAL_API,
  gateway: "api.kauri.io",
  gethBlockchain: process.env.GETH_BLOCKCHAIN,
  KauriCommunityId: process.env.KAURI_COMMUNITY_ID,
  analyticsTokens: {
    mixpanel: "7d83001be784f09b212b9b3274e41530",
    ga: "UA-112179323-1",
  },
})