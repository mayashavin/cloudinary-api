---
title: Methods
description: 'Helper methods for Cloudinary APIs'
position: 15
category: "@cld-apis/utils"
version: 1
---

`@cld-apis/utils` provides a set of common methods to help using Cloudinary APIs, or being used in between different Cloudinary APIs.

### toSnakeCase(obj)

* `obj` - `Object`

Returns a new object whose properties' names are converted to *snake_case*.

```js

import { toSnakeCase } from '@cld-apis/utils'

const obj = toSnakeCase({
  cloudName: '123',
  myCamelCase: 'myCamelCase',
})

console.log(obj)
// { cloud_name: '123', my_camel_case: 'myCamelCase' }
```

### colorify(color, prefix)

* `color`
  * Type: `String`
  * `required`
  * A valid CSS color string (named color, 3-4 digit HEX color or 6-8 digit for RGBA color)
* `prefix`
  * Type: `String`
  * Default: `rgb:`

Returns a converted color string with the prefix if needed. By default it returns the color mapped according to Cloudinary standards for color transformation.

```js

import { colorify } from '@cld-apis/utils'

console.log(colorify('#ffffff')) // rgb:ffffff
```