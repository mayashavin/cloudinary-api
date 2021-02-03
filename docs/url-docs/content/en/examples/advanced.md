---
title: Advanced
description: 'Advanced examples to use Cloudinary url builder'
position: 11
category: Examples
---

## Display a remote image via Cloudinary

Let's fetch the below remote image via Cloudinary:

![A remote image example with Cloudinary](https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)

And display it as `200x200` in size, round and auto-cropping avatar:

![A fetched and optimized image](https://res.cloudinary.com/mayashavin/image/fetch/c_fill,f_auto,g_auto:subject,h_200,q_auto,w_200,r_max/https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)

```js
import { setConfig, buildImageUrl } from 'cloudinary-build-url'
import { STORAGE_TYPES, RESIZE_TYPES, Gravity } from '@cld-apis/utils'

setConfig({
  cloudName: 'your-cloud-name',
})

const url = buildImageUrl('paste-the-copied-path', {
  cloud: {
    storageType: STORAGE_TYPES.FETCH
  },
  transformations: {
    resize: {
      type: RESIZE_TYPES.FILL,
      width: 200,
      height: 200,
    },
    radius: 'max',
    gravity: Gravity.Subject
  }
})
```