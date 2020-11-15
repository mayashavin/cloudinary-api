# `cloudinary-build-url`

> The lighter URL builder API for Cloudinary with all features in TypeScript.

By default, `f_auto` (auto format per browser) and `q_auto` (auto quality per device) are enabled. And all the urls are generated as secured HTTPS format, unless user states otherwise.

## Usage

### Build a delivery url for image

```
import { buildUrl } from 'cloudinary-build-url'

const src = buildUrl('example', {
  cloudName: 'demo',
  crop: 'scale',
  width: 500,
  height: 500,
})

console.log(src)
```

Or

```
import { setConfig, buildUrl } from 'cloudinary-build-url'

// Set configuration for Cloudinary
setConfig({
  cloudName: 'demo'
})

// Build URL
const src = buildUrl('example', {
  crop: 'scale',
  width: 500,
  height: 500,
})

console.log(src)
```

### Build a delivery URL for video

```
import { buildVideoUrl } from 'cloudinary-build-url'

const src = buildVideoUrl('dog', {
  cloudName: 'demo',
  crop: 'scale',
  width: 500,
  height: 500,
})

console.log(src)
```

