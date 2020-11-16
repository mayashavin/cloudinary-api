---
title: Build Url
description: How to build delivery url with Cloudinary
position: 4
category: Usage
---

To generate delivery urls with transformations for assets using Cloudinary, you can use the following methods:

## `buildUrl(publicId, options)`

* `publicId`
  * Type: `String`
  * **Required**
  * Path to the asset stored in Cloudinary, or the full Cloudinary asset URL.
* `options`
  * Type: `CldOptions`
  * Consists two fields: `cloud` and `transformation`. See [the options parameter](#the-options-parameter) for more details.

Generate delivery URL for an asset with `publicId` and given `options`, including `options.cloud` extra configurations, and `options.transformations` - the transformations to apply.

```js
import { buildUrl } from 'cloudinary-build-url'

const url = buildUrl('example', {
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
```

## `buildImageUrl(publicId, options)`

* `publicId`
  * Type: `String`
  * **Required**
  * Path to the image stored in Cloudinary, or the full Cloudinary image URL.
* `options`
  * Type: `CldOptions`
  * Consists two fields: `cloud` and `transformation`. See [the options parameter](#the-options-parameter) for more details.

Generate delivery URL for an image with `publicId` and given `options`, including `options.cloud` extra configurations, and `options.transformations` - the transformations to apply.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
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
```

<alert type="info">

To fetch a remote image using Cloudinary, you can set `cloud.storageType` to `fetch`.

See [Fetch Remote example](/examples/advanced#display-a-remote-image-via-cloudinary) for more details.

</alert>

## `buildVideoUrl(publicId, options)`

* `publicId`
  * Type: `String`
  * **Required**
  * Path to the video stored in Cloudinary, or the full Cloudinary video URL.
* `options`
  * Type: `CldOptions`
  * Consists two fields: `cloud` and `transformation`. See [the options parameter](#the-options-parameter) for more details.

Generate delivery URL for a video with `publicId` and given `options`, including `options.cloud` extra configurations, and `options.transformations` - the transformations to apply.

```js
import { buildVideoUrl } from 'cloudinary-build-url'

const url = buildVideoUrl('dog', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
    }
  }
})
```

## The `options` parameter

This is the Object containing configurations and transformations you wish to apply to an asset when generating the delivery URL. It includes two fields:

### `options.cloud`

Type: `CloudConfig`

The extra configuration to apply specifically on the target asset, besides the global configurations given by the call `setConfig()`. See [Options](/options#cloudinary-options) for the full list of accepted properties.

```js
{
  cloud: {
    cloudName: 'your-cloud-name'
    secure: false,
    resourceType: 'image',
    storageType: 'upload'
  }
}
```

### `options.transformations`

Type: `TransformerOption`

The transformations to apply to the asset on delivery, such as format optimization, resizing, adding border, etc...

```js
{
  transformations: {
    //Resize the image
    resize: {
      width: 500,
      height: 500,
      type: 'scale'
    },
    border: {
      type: 'dotted',
      width: 1,
      color: 'red'
    }
  }
}
```

See [Transformations](/usage/transformations)  section for more details on the accepted transformation fields.