---
title: Transformations
description: 'Supported transformation fields'
position: 5
category: Usage
version: 1
---

To transform and optimize your images and videos on delivery, you can pass the following fields to `options.transformations` in each build url method call or `options` in `Transformer.transform` call.

<alert type="info">

For more detailed information on each transformation, see [Cloudinary Image transformation documentation](https://cloudinary.com/documentation/image_transformation_reference).

</alert>

## General transformations

### `resize`

* Type: `Resize`
  * `width`: `number | string`
    * Target width
  * `height`: `number | string`
    * Target height
  * `type`: `string`
    * Mode to determine how to fit the image/video into the desired size.
    * Accepted value for `type`: `imaggaScale` | `imaggaCrop` | `crop` | `fill` | `scale` | `minimumPad` | `fit` | `pad` | `limitFit` | `thumbnail` | `limitFill` | `minimumFit` | `limitPad` | `fillPad`
  * `aspectRatio`: `string`
    * To determine how the asset is adjusted to the new size.

To resize an image/video according a certain width, height, aspect ratio and the desired crop mode.

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
      aspectRatio: '1.5'
    }
  }
})
```

See [Resize type](https://cloudinary.com/documentation/image_transformation_reference#crop_parameter) for more information.

### `rotation`

* Type: `Rotation`
* Accepted values: any degree number, or `auto_right` | `auto_left` | `ignore` | `vflip` | `hflip`

To rotate or flip a given asset by certain degrees, or automatically based on orientation.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    rotate: 90
  }
})
```

<alert type="info">

You can use import `ROTATION_MODES` from `cloudinary-build-url` to choose the desired rotation mode.

</alert>

### `background`

* Type: `String`

The background color to apply when using pad crop mode or converting to `.jpg` format.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    background: '#fffff',
    format: 'jpg',
  }
})
```

### `border`

* Type: `Border`
  * `width`: `string` | `number`
  * `type`: `string`. Default: `solid`
  * `color`: `string`. Default: `black`

Add border around the desired asset.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    border: {
      type: 'solid',
      color: 'red',
      width: 2
    }
  }
})
```

### `effect`

* Type: `Effect`
* An available effect or array of effects to apply to asset.

Apply a filter or an effect on the desired asset. See[Effects](https://cloudinary.com/documentation/image_transformation_reference#effect_parameter) for the full list of syntax and available effects.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    effect: 'grayscale'
  }
})
```

### `radius`

* Type: `String` | `Number`
* Accepted value: `max` for circular corner, or any pixels.

Round the specified corners of the desired image. If pass only a number or `max`, all corners will be applied. The syntax for other use cases is as below:

* Using 2 values: `top_left_bottom_right_radius:top_right_bottom_left_radius`(Example: `20:40`)
* Using 3 values: `top_left:top_right_bottom_left:bottom_right` (Example: `20:30:40`)
* Using 4 values: `top_left:top_right:bottom_left:bottom_right` (Example: `20:0:40:40`)

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    radius: '20:0:40:40' 
  }
})
```

### `gravity`

* Type: `String`

Detemine which part of the image to cropped or to place the overlay. See [Gravity documentation](https://cloudinary.com/documentation/image_transformation_reference#gravity_parameter) for list of accepted values and syntax.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    //apply AI to detect the main subject in the image.
    gravity: 'auto:subject'
  }
})
```

### `opacity`

* Type: `Number`

Adjust the opacity of the desired image. Scale: 0 to 100 (%).

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    opacity: 30
  }
})
```

### `dpr`

* Type: `String` | `Number`

The target device pixel ratio for the asset. `auto` means automatically matching the DPR settings in user's device.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    dpr: '2.0'
  }
})
```

### `overlay`

* Type: `String`

Create a layer over the base image. This can be use with `position.x`, `position.y`, `gravity` to customize the position of the overlay.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('face_top', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    gravity: 'north',
    overlay: 'text:default_style:Hello+World'
  }
})
```

### `underlay`

* Type: `String`

Create a layer below a partial-transparent image. This can be use with `position.x`, `position.y`, `gravity` to customize the position of the underlay.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('smartphone.png', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    underlay: 'site'
  }
})
```

### `format`

* Type: `String`
* Default: `auto`

Force format conversion of the desired asset to the given format.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    format: 'png'
  }
})
```

### `quality`

* Type: `String`
* Default: `auto`

Control the compression quality of the target asset. Scale: 1 to 100 (%)

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    opacity: 30
  }
})
```

### `if`

* Type: `String`

Apply the transformation only if a condition is met.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    if: 'w_gt_300',
    effect: 'e_oil_paint'
  }
})
```

### `flags`

* Type: `String`

One of more flags to alter the default transformation behavior. See [Flags](https://cloudinary.com/documentation/image_transformation_reference#flags_parameter) for more information.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    flags: 'cutter'
  }
})
```

### `customFunction`

* Type: `CustomFunction`
  * `type`: `wasm` | `remote`
  * `source`: `string`

Call a custom function on Cloudinary side. See [Custom Functions](https://cloudinary.com/documentation/custom_functions) for more details.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    customFunction: {
      type: 'wasm',
      source: 'example.wasm'
    }
  }
})
```

### `color`

* Type: `String`

Color to use when text captions, shadow effect and colorize effect are in use.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    color: 'red',
    effect: 'colorize:50'
  }
})
```

### `colorSpace`

* Type: `String`

Color space to use for the delivery image url. See [Color space Documentation](https://cloudinary.com/documentation/image_transformation_reference#color_space_parameter) for accepted values details.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    colorSpace: 'srgb'
  }
})
```

### `defaultImage`

* Type: `String`

A public id (with extension) of a placeholder image to use if the target asset doesn't exist.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('non-exist', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    defaultImage: 'avatar.png'
  }
})
```

### `delay`

* Type: `Number`

Control time delay between frames in an animated asset (.gif), in milliseconds.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('non-exist', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    delay: 20
  }
})
```

### `density`

* Type: `Number`

To define the density when converting a vector file to image format.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('multi_page_pdf', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    dpi: 150
  }
})
```

### `page`

* Type: `String`

To generate an image from a specified page or layer of multi-layer (multi-page) asset.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('multi_page_pdf', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    page: '2',
    gravity: 'north',
    resize: {
      width: 80,
      height: 80,
      type: 'fill'
    },
    format: 'jpg'
  }
})
```

### `rawTransformation`

* Type: `String`

The entire transformation string (including chained one) to apply to the asset.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    rawTransformation: 'l_my_image,o_90/w_400,c_fill'
  }
})
```

### `transformation`

* Type: `String`

A pre-defined named transformation to apply to the asset

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    transformation: 'media_lib_thumb'
  }
})
```

### `chaining`

* Type: `TransfomerOption[]`

An array of group transformations to apply to the asset.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    resize: {
      width: 500,
      type: 'scale',
      height: 500,
    },
    chaining: [{
      effect: 'grayscale'
    }]
  }
})
```

### `position`

* Type: `Position`
  * `x`
    * Type: `number`
    * Horizontal coordinate for cropping, placing overlay and applying regional effects.
  * `y`
    * Type: `Number`
    * Vertical coordinate for cropping, placing overlay and applying regional effects.

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

### `zoom`

* Type: `String`
* Default: `1.0`

Use together with `resize.type: 'crop'` or `resize.type: 'thumb'` to decide how much of original image/video surronding the face to keep using face detection.

```js
import { buildImageUrl } from 'cloudinary-build-url'

const url = buildImageUrl('woman-sample', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    zoom: "0.75",
    gravity: "face",
    resize: {
      width: 50,
      height: 50,
      type: 'thumb'
    }
  }
})
```

<!-- ## Video-only transformations

### `audioCodec`

### `audioFrequency`

### `bitRate`

### `fps`

### `keyframeInterval`

### `offset`

### `poster`

### `sourceTypes`

### `videoCodec`

### `duration`

### `videoSampling`

### `fallbackContent`

### `ocr` -->
