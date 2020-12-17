---
title: Plugin for Vue CLI
description: Easy way to build url in Vue apps
position: 12
category: Vue
---

To set up Cloudinary url builder easily in Vue projects, you can use the dedicated plugin for Vue Cli.

<alert type="info">

The plugin supports **both** Vue 2x and 3x.

</alert>

## Setup

1. Install the plugin by running the following command

  ```bash
  vue add vue-cli-plugin-cloudinary-api`
  ```

2. Provide your Cloudinary cloud Name and select the type(s) of media (image/video or both) you want to build url for in the prompts.

3. A new file `cloudinary.js` will be added to `src/plugins/` directory in your project, with all the initial setup details you provide. You can also modify its configurations manually per need.

That's it 🎉! You can start generating url for your images within your Vue apps.

## Usage

Once installed, the plugin will inject global instance `$imageUrl` for image url builder, or `$videoUrl` for video url builder. You can access it by calling `this.$imageUrl` or `this.$videoUrl` per component.

### `$imageUrl(publicId, { cloud, transformations })`

See [build image url documentation](/usage/buildUrl#buildimageurlpublicid-options) for more details on the accepting parameters.

```vue
<template>
  <img :src="src" alt="example" />
</template>
<script>
export default {
  data() {
    return {
      src: this.$imageUrl('example', {
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
    }
  }
}
</script>
```

### `$videoUrl(publicId, { cloud, transformations })`

See [build video url documentation](/usage/buildUrl#buildvideourlpublicid-options) for more details on the accepting parameters.

```vue
<template>
  <video controls>
    <source :src="src" type="video/mp4">
  </video>
</template>
<script>
export default {
  data() {
    return {
      src: this.$videoUrl('dog', {
        cloud: {
          cloudName: 'demo',
        },
        transformations: {
          resize: {
            type: 'scale',
            width: 500,
          },
          format: 'mp4'
        }
      })
    }
  }
}
</script>
```

<alert type="info">

See [Transformations](/transformations/basic) for more details on the supported transformation property for modifying the media asset.

</alert>
