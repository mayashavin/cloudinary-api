---
title: Image
description: "Supported transformation fields for image"
position: 8
category: Transformations
version: 1
---
To transform and optimize your images and videos on delivery, you can pass the following fields to `options.transformations` in each build url method call or `options` in `Transformer.transform` call.

The list below is **image-only** transformations to pass along with other [basic transformation fields](/transformations/basic).

<alert type="info">

For more detailed information on each transformation, see [Cloudinary Image transformation documentation](https://cloudinary.com/documentation/image_transformation_reference).

</alert>

## `border`

- Type: `Border`
  - `width`: `string` | `number`
  - `type`: `string`. Default: `solid`
  - `color`: `string`. Default: `black`

Add border around the desired asset.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    border: {
      type: "solid",
      color: "red",
      width: 2,
    },
  },
});
```

## `opacity`

- Type: `Number`

Adjust the opacity of the desired image. Scale: 0 to 100 (%).

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    opacity: 30,
  },
});
```

## `underlay`

- Type: `String`

Create a layer below a partial-transparent image. This can be use with `position.x`, `position.y`, `gravity` to customize the position of the underlay.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("smartphone.png", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    underlay: "site",
  },
});
```

## `customFunction`

- Type: `CustomFunction`
  - `type`: `wasm` | `remote`
  - `source`: `string`

Call a custom function on Cloudinary side. See [Custom Functions](https://cloudinary.com/documentation/custom_functions) for more details.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    customFunction: {
      type: "wasm",
      source: "example.wasm",
    },
  },
});
```

## `color`

- Type: `String`

Color to use when text captions, shadow effect and colorize effect are in use.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    color: "red",
    effect: {
      name: "colorize:50",
    },
  },
});
```

## `defaultImage`

- Type: `String`

A public id (with extension) of a placeholder image to use if the target asset doesn't exist.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("non-exist", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    defaultImage: "avatar.png",
  },
});
```

## `density`

- Type: `Number`

To define the density when converting a vector file to image format.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("multi_page_pdf", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    dpi: 150,
  },
});
```

## `page`

- Type: `String`

To generate an image from a specified page or layer of multi-layer (multi-page) asset.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("multi_page_pdf", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    page: "2",
    gravity: "north",
    resize: {
      width: 80,
      height: 80,
      type: "fill",
    },
    format: "jpg",
  },
});
```

## `rawTransformation`

- Type: `String`

The entire transformation string (including chained one) to apply to the asset.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    rawTransformation: "l_my_image,o_90/w_400,c_fill",
  },
});
```

## `transformation`

- Type: `String`

A pre-defined named transformation to apply to the asset

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    transformation: "media_lib_thumb",
  },
});
```

## `position`

- Type: `Position`
  - `x`
    - Type: `number`
    - Horizontal coordinate for cropping, placing overlay and applying regional effects.
  - `y`
    - Type: `Number`
    - Vertical coordinate for cropping, placing overlay and applying regional effects.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('face-top', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    position: {
      x: 130,
      y: 340
    }
    resize: {
      width: 80,
      height: 80,
      type: 'crop'
    }
  }
})
```

## `variables`

- Type: `Variable` | `Variable[]`

User-defined variables for keeping value assignment separate from the transformation definition. It can be used with [arithmetic expression](https://cloudinary.com/documentation/user_defined_variables#arithmetic_expressions) for computing complex transformation value.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("woman-sample", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    variables: {
      name: "$bcolor",
      value: "red",
    },
    border: {
      width: 5,
      color: "$bcolor",
    },
  },
});
```

<alert type="info">

For more details on use cases with variables, check out [User defined variable Examples](https://cloudinary.com/documentation/user_defined_variables#use_case_examples)

</alert>

## `zoom`

- Type: `String`
- Default: `1.0`

Use together with `resize.type: 'crop'` or `resize.type: 'thumb'` to decide how much of original image/video surronding the face to keep using face detection.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("woman-sample", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    zoom: "0.75",
    gravity: "face",
    resize: {
      width: 50,
      height: 50,
      type: "thumb",
    },
  },
});
```
