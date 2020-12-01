---
title: Transformer
description: 'Generate the set of Cloudinary transformations'
position: 6
category: Usage
version: 1
---

In addition to the build URL API, the package exposes an instance of `Transformer`, which can be used to calculate transformations independently.

## `Transformer.transform(options)`

* `options`:
  * Type: `TransformerOption`
  * **Required**
  * Object contains all the accepted transformation keys and values to to generate.
* Output:
  * Type: `Transformation`

Returns an array of mapped transformation params according to Cloudinary format.

```js
import { Transformer } from 'cloudinary-build-url 

const transArr = Transformer.transform({
  resize: {
    width: 500,
    height: 500,
    type: 'thumb'
  },
  gravity: 'auto',
  chaining: [{
    effect: {
      name: 'grayscale'
    }
  }]
})

console.log(transArr)
//['c_thumb','w_500', 'h_500', 'g_auto', ['e_grayscale']]
```

See [Transformations](/usage/transformations) for more details on accepted properties for `options`.

## `Transformer.toString(transformations)`

* `transformations`:
  * Type: `Transformation`
  * Array of transformation params according to Cloudinary format.
* Output:
  * Type: `String`

Returns a string that contains all the given transformations, separated by `,` or `/` and ready to inject to Cloudinary image URL.

```js
import { Transformer } from 'cloudinary-build-url'

const trans = Transformer.toString([
    'c_thumb',
    'w_500',
    'h_500',
    'g_auto',
    [ 'e_grayscale' ]
  ])

console.log(trans)
//'c_thumb,w_500,h_500,g_auto/e_grayscale'
```

See [Image Transformation API](https://cloudinary.com/documentation/image_transformation_reference) for more details on how to compute transformation params.