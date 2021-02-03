---
title: Setup
description: 'How to set up the builder'
position: 2
category: Guide
version: 1
---

## Installation

Add `cloudinary-build-url` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add cloudinary-build-url
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install cloudinary-build-url
  ```

  </code-block>
</code-group>

## TypeScript Support

`cloudinary-build-url` supports TypeScript. To use the same types defined in the library, install `@cld-apis/types` as your devDependencies.

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add -D @cld-apis/types
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm i -D @cld-apis/types
  ```

  </code-block>
</code-group>

## Configure

You can provide a *global* configuration for Cloudinary builder by using `setConfig()` method.

```js
import { setConfig } from 'cloudinary-build-url'

setConfig({
  cloudName: 'your-cloud-name',
})
```

See [Options](/options) section for all available options to initialize Cloudinary builder. 

And that's it 🎉!

Now you can start [building optimized delivery urls](/usage/buildUrl) for your images and videos with Cloudinary.
