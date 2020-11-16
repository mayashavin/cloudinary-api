# Cloudinary tree-shakable API

> A set of lighter packages for using Cloudinary

## `cloudinary-build-url`

Build URL for images and videos based on configurations.

[📖 Documentation](https://cloudinary-build-url.netlify.app)
[💻 Code](https://github.com/mayashavin/cloudinary-api/tree/main/packages/url)

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
      aspectRatio: "16:9"
    }
  }
})

console.log(src)
```
