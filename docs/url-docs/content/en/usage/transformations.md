---
title: Transformations
description: "Supported transformation fields"
position: 5
category: Usage
version: 1
---

To transform and optimize your images and videos on delivery, you can pass the following fields to `options.transformations` in each build url method call or `options` in `Transformer.transform` call.

<alert type="info">

For more detailed information on each transformation, see [Cloudinary Image transformation documentation](https://cloudinary.com/documentation/image_transformation_reference).

</alert>

## Basic transformations

### `resize`

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

### `background`

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

### `effect`

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

### `radius`

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

### `gravity`

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

### `rotate`

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

### `dpr`

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

### `overlay`

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

### `format`

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

### `quality`

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
    opacity: 30,
  },
});
```

### `if`

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

### `condition`

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

### `flags`

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

### `colorSpace`

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

### `chaining`

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

## Image transformation

### `border`

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

### `opacity`

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

### `underlay`

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

### `customFunction`

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

### `color`

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

### `defaultImage`

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

### `density`

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

### `page`

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

### `rawTransformation`

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

### `transformation`

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

### `position`

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

### `variables`

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

### `zoom`

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

## Video-only transformations

<alert type="info">

For a detailed list of transformations for video and examples, see [Video Transformation API](https://cloudinary.com/documentation/video_transformation_reference)

</alert>

### `audioCodec`

- Type: `AudioCodec`
- Accepted values: `none`, `aac`, `vorbis`, `mp3`, `opus`

Control the audio codec or remove the audio channel.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("dog", {
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

### `audioFrequency`

- Type: `String` | `Number`

Control audio sample frequency.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    audio_frequency: 44100,
  },
});
```

### `bitRate`

- Type: `String` | `Number`

Control the video bitrate in bits per second. Support the following codec: h264, h265 (MPEG-4); vp8, vp9 (WebM).

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    bitRate: "500k",
  },
});
```

### `delay`

- Type: `Number`

Control time delay between frames in an animated asset (.gif), in milliseconds.

```js
import { buildImageUrl } from "cloudinary-build-url";

const url = buildImageUrl("non-exist", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    delay: 20,
  },
});
```

### `fps`

- Type: `FPS` (`number` or `FPSType`)

Control the range of acceptable frames per second and ensure the delivered video is with a certain fps level. If passing as `FPSType`, the `FPSType.min` is required to define the minimum range for FPS to start,

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    fps: {
      min: 25
      max: 30
    }
  },
});
```

### `keyframeInterval`

- Type: `Number`

A real positive number that set the key frame interval of the video (in secs).

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    keyframeInterval: 0.15,
  },
});
```

### `offset`

- Type: `Offset`
  - `start`
    - Type: `Number`
    - The starting offset of the video to keep after trimming, or when an overlay starts displaying.
  - `end`
    - Type: `Number`
    - The ending offset of the video to keep after trimming, or when an overlay finishes displaying
  - `duration`
    - Type: `Number` | `String`
    - The duration in seconds or percent of a video to dislay.

Define the offset for the video to be trimmed of display an overlay.

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    offset: {
      start: 2,
      end: 10,
      duration: "35%",
    },
  },
});
```

### `videoCodec`

- Type: `String`

The video codec (with video profile and level if relevant)

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    videoCodec: "h264:baseline:3.1",
  },
});
```

### `videoSampling`

- Type: `String` | `Number`

Relevant when converting videos to animated GIF or WebP format.

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("woman-sample", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    videoSampling: "2.3s",
  },
});
```

### `streamingProfile`

- Type: `String`

The name of streaming profile to apply to an HLS or MPEG-DASH adaptive bitrate streaming video. It can be from the [predefined list](https://cloudinary.com/documentation/video_manipulation_and_delivery#predefined_streaming_profiles), or custom-defined.

```js
import { buildVideoUrl } from "cloudinary-build-url";

const url = buildVideoUrl("dog", {
  cloud: {
    cloudName: "demo",
  },
  transformations: {
    streamingProfile: "full_hd",
  },
});
```

<alert type="info">

For a detailed list of transformations for video and examples, see [Video Transformation API](https://cloudinary.com/documentation/video_transformation_reference)

</alert>
