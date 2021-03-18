# gatsby-plugin-quantcast-tag

Gatsby plugin to add a [Quantcast][quantcast] tracking tag onto a site.

## Install

`npm install --save gatsby-plugin-quantcast-tag`

## How to use

```js
// gatsby-config.js

module.exports = {
  plugins: [
    // This plugin should only appear in your gatsby-config.js file once.
    {
      resolve: 'gatsby-plugin-quantcast-tag',
      options: {
        // Quantcast account ID to associate tracking.
        accountId: 'sampletAccountId',

        // If true, add tracking code to head. Otherwise, tracking code is
        // added to the bottom of body.
        head: false,
      },
    },
  ],
}
```

[quantcast]: https://www.quantcast.com/
