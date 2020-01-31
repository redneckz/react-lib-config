# react-lib-config

Common configuration to bundle, lint and test React libraries.
Based on Rollup, Babel, ESLint, Jest.

[![NPM Version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]

## How-to

1. Install: `$ npm install @redneckz/react-lib-config`
2. Configure Rollup, Babel, ESLint, Jest: `$ react-lib-init`
3. Declare some meta and add some scripts to lint, test, build and publish your library

```json
{
  "name": "@redneckz/test-package",
  "version": "0.0.0",
  "main": "lib/index.js",
  "module": "es/index.js",
  "browser": "dist/index.min.js",
  "files": ["src", "lib", "es", "dist"],
  "peerDependencies": {
    "react": "^16.10.0-0"
  },
  "devDependencies": {
    "react": "16.10.0",
    "@redneckz/react-lib-config": "0.0.9"
  },
  "scripts": {
    "prepublish": "npm run build",
    "prebuild": "npm run eslint && npm run jest && npm run clean",
    "build": "npm run build:commonjs && npm run build:es && npm run build:umd && npm run build:umd:min",
    "build:commonjs": "cross-env NODE_ENV=cjs react-lib-build",
    "build:es": "cross-env NODE_ENV=es react-lib-build",
    "build:umd": "cross-env NODE_ENV=development react-lib-build",
    "build:umd:min": "cross-env NODE_ENV=production react-lib-build",
    "clean": "rimraf lib es dist coverage",
    "pretest": "npm run eslint",
    "test": "npm run jest && npm run coveralls",
    "eslint": "eslint \"src/**/*.js?(x)\" --cache --cache-location \"./.cache\"",
    "jest": "cross-env NODE_ENV=test jest",
    "coveralls": "coveralls < coverage/lcov.info"
  }
}
```

# License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://badge.fury.io/js/%40redneckz%2Freact-lib-config.svg
[npm-url]: https://www.npmjs.com/package/%40redneckz%2Freact-lib-config
[build-image]: https://cloud.drone.io/api/badges/redneckz/react-lib-config/status.svg
[build-url]: https://cloud.drone.io/redneckz/react-lib-config
