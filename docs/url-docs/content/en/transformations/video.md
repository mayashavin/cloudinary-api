---
title: Video
description: "Supported transformation fields for video"
position: 8
category: Transformations
version: 1
---
To transform and optimize your images and videos on delivery, you can pass the following fields to `options.transformations` in each build url method call or `options` in `Transformer.transform` call.

The list below is **video-only** transformations to pass along with other [basic transformation fields](/transformations/basic).

<alert type="info">

For a detailed list of transformations for video and examples, see [Video Transformation API](https://cloudinary.com/documentation/video_transformation_reference)

</alert>

## `audioCodec`

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

## `audioFrequency`

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

## `bitRate`

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

## `delay`

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

## `fps`

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

## `keyframeInterval`

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

## `offset`

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

## `videoCodec`

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

## `videoSampling`

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

## `streamingProfile`

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
