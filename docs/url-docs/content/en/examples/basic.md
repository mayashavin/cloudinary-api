---
title: Basic
description: 'Basic examples to use Cloudinary url builder'
position: 7
category: Examples
---

## Display a Cloudinary-stored image as avatar

You can easily generate a version of your image as a `200x200` in size, round and auto-cropping avatar, with the following steps:

1. Get your asset's `publicId` by clicking on "Link" icon in [Cloudinary Console](https://cloudinary.com/console).

  ![Copy link icon in Cloudinary](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/copyurl)

  Or you can click on the "Settings" icon

  ![Select Settings](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/settings_select)

  Then select "Copy Url"

  ![Select Copy Url](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/copy_url)

2. Use the copied path and generate the asset url as avatar

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('paste-the-copied-path', {
  cloud: {
    cloudName: 'your-cloud-name',
  },
  transformations: {
    resize: {
      type: 'fill',
      width: 200,
      height: 200,
    },
    radius: 'max',
    gravity: 'auto:subject'
  }
})
```