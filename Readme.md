
# metalsmith-simple-navigation

  A [Metalsmith](http://metalsmith.io) plugin that creates a simple array of files to use for navigation

## Installation

    $ npm install metalsmith-simple-navigation

## CLI Usage

Install via npm and then add the `metalsmith-excerpts` key to your `metalsmith.json` plugin, like so:

```json
{
  "plugins": {
    "metalsmith-simple-navigation": true
  } 
}
```

## Javascript Usage

```js
var simpleNav = require('metalsmith-simple-navigation');

metalsmith.use(simpleNav());
```

## Usage

Array is attached to metalsmith's metadata and the default name for it is `nav`

## License

MIT