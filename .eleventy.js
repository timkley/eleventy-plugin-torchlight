const {makeConfig, makeCache} = require('@torchlight-api/torchlight-cli/lib/config')
const torchlight = require('@torchlight-api/torchlight-cli/lib/torchlight.js').default
const highlight = require('@torchlight-api/torchlight-cli/lib/commands/highlight.js').default

module.exports = (eleventyConfig, options) => {
    eleventyConfig.on('afterBuild', () => {
        const config = makeConfig('')

        if (!config.length) {
            config.token = process.env.TORCHLIGHT_TOKEN
            config.highlight = {
                input: '_site'
            }
        }

        const cache = makeCache(config)

        torchlight.init(config, cache)
        highlight(torchlight)
    })
}
