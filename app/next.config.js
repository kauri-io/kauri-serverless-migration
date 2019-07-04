const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
    env: {
        config: process.env.config
    },
    target: 'serverless'
})