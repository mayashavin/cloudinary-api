# Cloudinary tree-shakable API

> A set of lighter packages for using Cloudinary

## `cloudinary-build-url`

Build URL for images and videos based on configurations.

[Documentation](https://github.com/mayashavin/cloudinary-api/tree/main/packages/url)

```
import { buildUrl } from 'cloudinary-build-url'

const src = buildUrl('example', {
  cloud: {
    cloudName: 'demo',
  },
  transformations: {
    resize: {
      type: 'scale',
      width: 500,
      height: 500,
    }
  }
})

console.log(src)
```
