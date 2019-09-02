const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const plugins = [withCss]
if (process.env.BUNDLE_ANALYZE) {
    plugins.push([
        withBundleAnalyzer,
        {
            analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
            analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: "static",
                    reportFilename: "./bundles/server.html",
                },
                browser: {
                    analyzerMode: "static",
                    reportFilename: "./bundles/client.html",
                },
            },
        },
    ]);
}

const nextConfig = {
    env: {
        config: process.env.config,
    },
    target: "serverless"
}


module.exports = withPlugins(plugins, nextConfig);
