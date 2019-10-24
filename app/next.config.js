const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
  })

const plugins = [withCss, withBundleAnalyzer]

const nextConfig = {
    env: {
        config: process.env.config,
    },
    target: "serverless"
}


module.exports = withPlugins(plugins, nextConfig);
