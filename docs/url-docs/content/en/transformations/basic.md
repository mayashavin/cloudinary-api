---
title: Basic
description: "Supported transformation fields for both images and videos"
position: 7
category: Transformations
version: 1
---
To transform and optimize your images and videos on delivery, you can pass the following fields to `options.transformations` in each build url method call or `options` in `Transformer.transform` call.

The list below is **basic** transformations for both videos and images. See [additional image-only fields](/transformations/image) for image handling, or [video-only fields](/transformations/video) for video handling.

<alert type="info">

You can use pre-defined constants for some transformation fields from `@cld-apis/utils` package.

</alert>

## `resize`

- Type: `Resize`
  - `width`: `number | string`
    - Target width
  - `height`: `number | string`
    - Target height
  - `type`: `string`
    - Mode to determine how to fit the image/video into the desired size.
    - Accepted value for `type`: `imaggaScale` | `imaggaCrop` | `crop` | `fill` | `scale` | `minimumPad` | `fit` | `pad` | `limitFit` | `thumbnail` | `limitFill` | `minimumFit` | `limitPad` | `fillPad`
  - `aspectRatio`: `string`
    - To determine how the asset is adjusted to the new size.

To resize an image/video according a certain width, height, aspect ratio and the desired crop mode.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    resize: {
      type: "scale",
      width: 500,
      height: 500,
      aspectRatio: "1.5",
    },
  },
});
```

See [Resize type](https://cloudinary.com/documentation/image_transformation_reference#crop_parameter) for more information.

## `background`

- Type: `String`

The background color to apply when using pad crop mode or converting to `.jpg` format.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    background: "#fffff",
    format: "jpg",
  },
});
```

## `effect`

- Type: `Effect` or `VEffect` (for video)
- An available effect or array of effects to apply to asset.

Apply a filter or an effect on the desired asset. See[Effects for images](https://cloudinary.com/documentation/image_transformation_reference#effect_parameter) or [Effects for videos](https://cloudinary.com/documentation/video_transformation_reference#adding_video_effects) for the full list of syntax and available effects.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    effect: {
      name: "grayscale",
    },
  },
});
```

## `radius`

- Type: `String` | `Number`
- Accepted value: `max` for circular corner, or any pixels.

Round the specified corners of the desired image. If pass only a number or `max`, all corners will be applied. The syntax for other use cases is as below:

- Using 2 values: `top_left_bottom_right_radius:top_right_bottom_left_radius`(Example: `20:40`)
- Using 3 values: `top_left:top_right_bottom_left:bottom_right` (Example: `20:30:40`)
- Using 4 values: `top_left:top_right:bottom_left:bottom_right` (Example: `20:0:40:40`)

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    radius: "20:0:40:40",
  },
});
```

## `gravity`

- Type: `String`

Detemine which part of the image to cropped or to place the overlay. See [Gravity documentation](https://cloudinary.com/documentation/image_transformation_reference#gravity_parameter) for list of accepted values and syntax.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    //apply AI to detect the main subject in the image.
    gravity: "auto:subject",
  },
});
```

## `rotate`

- Type: `Rotation`
- Accepted values: any degree number, or `auto_right` | `auto_left` | `ignore` | `vflip` | `hflip`

To rotate or flip a given asset by certain degrees, or automatically based on orientation.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    rotate: 90,
  },
});
```

<alert type="info">

You can use import `ROTATION_MODES` from `cloudinary-build-url` to choose the desired rotation mode.

</alert>

## `dpr`

- Type: `String` | `Number`

The target device pixel ratio for the asset. `auto` means automatically matching the DPR settings in user's device.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    dpr: "2.0",
  },
});
```

## `overlay`

- Type: `String`

Create a layer over the base image. This can be use with `position.x`, `position.y`, `gravity` to customize the position of the overlay.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("face_top", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    gravity: "north",
    overlay: "text:default_style:Hello+World",
  },
});
```

## `format`

- Type: `String`
- Default: `auto`

Force format conversion of the desired asset to the given format.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    format: "png",
  },
});
```

## `quality`

- Type: `String` | `Number`
- Default: `auto`

Control the compression quality of the target asset. Scale: 1 to 100 (%)

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    quality: 10,
  },
});
```

## `if`

<badge>Deprecated</badge>

- Type: `String`

.**Deprecated in 0.1.0. Please use `condition` instead.**

Apply the transformation only if a condition is met.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    if: "w_gt_300",
    effect: {
      name: "e_oil_paint",
    },
  },
});
```

## `condition`

<badge>v0.1.0+</badge>

- Type: `Condition`
  * `if` - `required`
    * Type: `ConditionExpression`
      - `expression` - `Expression[]`
        - `characteristic` - A string or array of strings with image characteristics
        - `operator` - Conditional operators ()
        - `value` - Value of the expression (`String` or `Number`)
      - `transformations` - `TransformerOption[]`
        - A set of transformations to apply when condition is met.
        - `Required`
  * `else`
    * `transformations` - `TransformerOption[]`
      - A set of transformations to apply when condition is met.
      - `Required`

Apply the transformation only if a condition is met.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    condition: {
      if: {
        expression: {
          characteristic: "width",
          operator: "greaterThan",
          value: 300
        },
        transformations: [{
          effect: {
            name: "e_oil_paint",
          }
        }]
      }
    },
  },
});
```

## `flags`

<badge>v0.1.0+</badge>

- Type: `Flag` | `VFlag` (video)

One of more flags to alter the default transformation behavior. See [Flags for Images](https://cloudinary.com/documentation/image_transformation_reference#flags_parameter) and [Flags for Videos](https://cloudinary.com/documentation/video_transformation_reference#video_transformation_flags) for more information.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    flags: "cutter",
  },
});
```

## `colorSpace`

- Type: `String`

Color space to use for the delivery image url. See [Color space Documentation](https://cloudinary.com/documentation/image_transformation_reference#color_space_parameter) for accepted values details.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    colorSpace: "srgb",
  },
});
```

## `chaining`

- Type: `TransfomerOption[]` | `TransformerVideoOption[]` (video)

An array of group transformations to apply to the asset.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("example", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    resize: {
      width: 500,
      type: "scale",
      height: 500,
    },
    chaining: [
      {
        effect: {
          name: "grayscale",
        },
      },
    ],
  },
});
```
