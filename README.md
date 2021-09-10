# eleventy-plugin-torchlight

This is a plugin for the static site generator [Eleventy](https://11ty.dev) to syntax highlight your code blocks with [torchlight.dev](https://torchlight.dev).

## Prerequisites

To use this plugin you need to be registered on [torchlight.dev](https://torchlight.dev) and have obtained an API key.

## Installation

```bash
npm install eleventy-plugin-torchlight #or
yarn add eleventy-plugin-torchlight
```

Then, include it in your `.eleventy.js` config file:

```js
const torchlight = require('eleventy-plugin-torchlight');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(torchlight);
};
```

## Configuration

Run `npx torchlight init` to initialize a default torchlight config. If you don't create a config yourself this plugin assumes this defaults to match 11ty's
defaults:

```
{
    token: process.env.TORCHLIGHT_TOKEN,
    highlight: {
        input: '_site'
    }
}
```

> If you create a new config remember to update the config to match the input path of Eleventy!

To verify everything works you can run Eleventy like this to pass the token as environment variable:

```
TORCHLIGHT_TOKEN=your_token npm run start
```

Your code should now be highlighted.

If you are for example using Netflify you can add the token via your site's settings so it's available during the build.

### Cache

Torchlight uses a cache to prevent highlighting code blocks that don't have changed.  
By default it uses a [file based cache](https://torchlight.dev/docs/clients/cli#cache) which created a directory called `cache`.

Make sure you add this folder to your `.eleventyignore` file so it doesn't trigger rebuilds after highlighting your output files.

## Credits

Thanks to [@5t3ph](https://twitter.com/5t3ph) for her [eleventy-plugin-template](https://github.com/5t3ph/eleventy-plugin-template)
and [Aaron Francis](https://twitter.com/aarondfrancis) for [Torchlight](https://torchlight.dev).
