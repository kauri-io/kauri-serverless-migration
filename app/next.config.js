const withCss = require("@zeit/next-css");

module.exports = withCss({
    env: {
        config: process.env.config,
    },
    target: "serverless"
})
