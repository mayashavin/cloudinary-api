---
title: Setup
description: 'How to set up the builder'
position: 2
category: Guide
---

## Installation

Add `cloudinary-builder-url` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add cloudinary-builder-url
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install cloudinary-builder-url
  ```

  </code-block>
</code-group>

## Configure

You can provide a *global* configuration for Cloudinary builder by using `setConfig()` method.

```js
import { setConfig } from 'cloudinary-builder-url'

setConfig({
  cloudName: 'your-cloud-name',
})
```

See [Options](/options) section for all available options to initialize Cloudinary builder. 

And that's it 🎉!

Now you can start [building optimized delivery urls](/usage/buildUrl) for your images and videos with Cloudinary.

