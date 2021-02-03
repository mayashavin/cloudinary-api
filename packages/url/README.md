# `cloudinary-build-url`

[![Netlify Status](https://api.netlify.com/api/v1/badges/c64e43df-e77d-44fb-a0e0-5ca79f8ef188/deploy-status)](https://app.netlify.com/sites/cloudinary-build-url/deploys)
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

![Cloudinary URL Builder](https://res.cloudinary.com/mayashavin/image/upload/v1605534519/logos/logo-light.png)(https://cloudinary-build-url.netlify.app)

> The lighter URL builder API for Cloudinary with all features in TypeScript.

By default, `f_auto` (auto format per browser) and `q_auto` (auto quality per device) are enabled. And all the urls are generated as secured HTTPS format, unless user states otherwise.

[📖&nbsp;Documentation](https://cloudinary-build-url.netlify.app)

## Installation

```bash
yarn add cloudinary-build-url
```

or 

```bash
npm i cloudinary-build-url
```

## Use with TypeScript

In order to start using the lib with TypeScript, please install `@cld-apis/types` as devDependencies.

```bash
npm i -D @cld-apis/types

#OR

yarn add -D @cld-apis/types
```

## Usage

### Build a delivery url for image

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
    }
  }
})

console.log(src)
```

Or

```
import { setConfig, buildUrl } from 'cloudinary-build-url'

// Set configuration for Cloudinary
setConfig({
  cloudName: 'demo'
})

// Build URL
const src = buildUrl('example', {
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
      height: 500,
    }
  }
})

console.log(src)
```

### Build a delivery URL for video

```
import { buildVideoUrl } from 'cloudinary-build-url'

const src = buildVideoUrl('dog', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
      height: 500,
    }
  }
})

console.log(src)
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/cloudinary-build-url/latest.svg
[npm-version-href]: https://npmjs.com/package/cloudinary-build-url

[npm-downloads-src]: https://img.shields.io/npm/dt/cloudinary-build-url.svg
[npm-downloads-href]: https://npmjs.com/package/cloudinary-build-url

[codecov-src]: https://codecov.io/gh/mayashavin/cloudinary-api/branch/main/graph/badge.svg?token=S8V8GIDYPC
[codecov-href]: https://codecov.io/gh/mayashavin/cloudinary-api

[license-src]: https://img.shields.io/npm/l/cloudinary-build-url.svg
[license-href]: https://npmjs.com/package/cloudinary-build-url
