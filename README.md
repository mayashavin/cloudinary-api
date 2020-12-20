# Cloudinary tree-shakable API

> A set of lighter packages for using Cloudinary

## `cloudinary-build-url`

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Build URL for images and videos based on configurations.

[📖&nbsp; Documentation](https://cloudinary-build-url.netlify.app)

[💻&nbsp; Codebase](https://github.com/mayashavin/cloudinary-api/tree/main/packages/url)

[✊&nbsp; Coding coverage status](https://mayashavin.github.io/cloudinary-api/)

```
import { buildUrl } from 'cloudinary-build-url'

const src = buildUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
      height: 500,
      aspectRatio: "16:9"
    }
  }
})

console.log(src)
```

## Supporting packages

### `@cld-apis/utils`

Constants for transformations used in Cloudinary APIs, and other helper functionalities.

### `@cld-apis/types`

Defined types used in `cloudinary-build-url` for TypeScript

## Vue-cli plugin - `vue-cli-plugin-cloudinary-api`

Cloudinary API plugin for Vue-cli created projects

Maintained by [Maya Shavin](https://github.com/mayashavin)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/cloudinary-build-url/latest.svg
[npm-version-href]: https://npmjs.com/package/cloudinary-build-url
[npm-downloads-src]: https://img.shields.io/npm/dt/cloudinary-build-url.svg
[npm-downloads-href]: https://npmjs.com/package/cloudinary-build-url
[codecov-src]: https://codecov.io/gh/mayashavin/cloudinary-api/branch/main/graph/badge.svg?token=S8V8GIDYPC
[codecov-href]: https://codecov.io/gh/mayashavin/cloudinary-api
[license-src]: https://img.shields.io/npm/l/cloudinary-build-url.svg
[license-href]: https://npmjs.com/package/cloudinary-build-url
