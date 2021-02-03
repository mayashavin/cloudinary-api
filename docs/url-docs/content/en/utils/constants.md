---
title: Constants
description: 'Available constants for transformations and Cloudinary APIs'
position: 14
category: "@cld-apis/utils"
version: 1
---

To make it easier to use Cloudinary transformations, `@cld-apis/utils` provides a set of constants of common-use variables, and pre-defined values for specific transformations.

## `RESOURCE_TYPES`

Available types of resource for uploading in Cloudinary.

## `STORAGE_TYPES`

Storage/Delivery type of the asset stored in Cloudinary.

## `RESIZE_TYPES`

All the accepted cropping types when resizing an image/video.

## `ROTATION_MODES`

Available pre-defined modes for rotating an image/video.

## Effects

Pre-defined effects for transformations.

### `ArtisticFilters`

A set of accepted artistic filters when `effect.name` is `art`.

```js
import { ArtisticFilters } from '@cld-apis/utils'
import { buildImageUrl } from 'cloudinary-build-url'

const src = buildImageUrl('example', {
  transformations: {
    effect: {
      name: 'art',
      value: ArtisticFilters.Aurora
    }
  }
})
```

### `BlurEffects`

Available blur effects for `effect.name`.

### `PixelateEffects`

Available pixelate effects for `effect.name`.

### `Colorblind`

Available colorblind effects for `effect.name` to support a11y (accessibility).

### `Brightness`

Available brightness effects for `effect.name`.

### `Contrast`

Available contrast effects for `effect.name`.

### `ColorChannel`

Available color modification for effect.

### `ColorFilter`

Available color filtering effects.

### `ColorAdjustment`

Available color adjustment effects.

## Flags

Available flags to use with `flags`.

## Gravity

Available pre-defined gravity position for cropping, focusing using smart AI.

## Compass

Available pre-defined focusing direction for resizing images.

## NamedColors

Named colors that can be accepted for Cloudinary color transformations.