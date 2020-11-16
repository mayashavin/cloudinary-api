# Cloudinary tree-shakable API

> A set of lighter packages for using Cloudinary

## `cloudinary-build-url`

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Build URL for images and videos based on configurations.

[📖&nbsp;Documentation](https://cloudinary-build-url.netlify.app)

[💻&nbsp;Code](https://github.com/mayashavin/cloudinary-api/tree/main/packages/url)

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

Maintained by [Maya Shavin](https://github.com/mayashavin)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/cloudinary-build-url/latest.svg
[npm-version-href]: https://npmjs.com/package/cloudinary-build-url

[npm-downloads-src]: https://img.shields.io/npm/dt/cloudinary-build-url.svg
[npm-downloads-href]: https://npmjs.com/package/cloudinary-build-url

[codecov-src]: https://img.shields.io/codecov/c/github/mayashavin/cloudinary-build-url.svg
[codecov-href]: https://codecov.io/gh/mayashavin/cloudinary-build-url

[license-src]: https://img.shields.io/npm/l/cloudinary-build-url.svg
[license-href]: https://npmjs.com/package/cloudinary-build-url