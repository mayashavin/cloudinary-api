---
title: Extract Public Id
description: How to extract Cloudinary asset's public Id
position: 5
category: Usage
fullscreen: true
---

Public Id of a Cloudinary asset is the path to that asset stored in Cloudinary,  `path-to-image` as shown below:

![URL format](https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto/v1597083188/articles/cloudinary_url_format)

<alert type="info">

Public Id doesn't include asset extension or format. For example: an image `example.jpg` will have public Id `example`.

</alert>

You can easily extract the target public Id using the following method:

## `extractPublicId(link)`

* `link`:
  * Type: `String`
  * Cloudinary asset URL.

```js
import { extractPublicId } from 'cloudinary-build-url'

const publicId = extractPublicId(
    "http://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
  ) //sample
```
