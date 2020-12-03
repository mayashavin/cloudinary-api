
import { cleanText, toString } from './utils'
import { ResizeType, CloudConfig, TransformerOption, SocialCard, SocialImage, SocialText, TextArea  } from '@cld-apis/types'
import { buildImageUrl, getConfig } from '.'

const DEFAULTS = {
  TAGLINE: {
    font: 'arial',
    placementDirection: 'north_west',
    size: 48,
    position: {
      y: 445
    },
  },
  TITLE: {
    font: 'arial',
    placementDirection: 'south_west',
    size: 64,
    position: {
      y: 254
    },
  },
  
  IMAGE: {
    width: 1280,
    height: 669,
    cropMode: 'fill'
  },
  TEXT: {
    width: 760,
    color: '000000',
    cropMode: 'fit',
    position: {
      x: 480
    }
  }
}

const buildSocialTextTransformations = (options: SocialText, defaultOpts: TextArea = DEFAULTS.TEXT):TransformerOption => {
  if (!options.value) return {}

  const textOverlay = toString([toString([options.font || defaultOpts.font, options.size || defaultOpts.size], '_'), options.extraConfig], '')
  const overlay = toString(['text', textOverlay, cleanText(options.value)])
  const color = toString(['rgb', options.color || defaultOpts.color || DEFAULTS.TEXT.color])
  const position = options.position || defaultOpts.position || {}

  return {
    resize: {
      width: defaultOpts.width || DEFAULTS.TEXT.width,
      type: DEFAULTS.TEXT.cropMode as ResizeType
    },
    gravity: options.placementDirection || defaultOpts.placementDirection,
    position: {
      x: position.x || DEFAULTS.TEXT.position.x,
      y: position.y,
    },
    overlay,
    color
  }
}

export const buildSocialCard = (options: SocialCard, cloud?: CloudConfig) => {
  const image:SocialImage = options.image
  const tagLineTransformations:TransformerOption = options.tagline ? buildSocialTextTransformations(options.tagline, {
    ...(DEFAULTS.TAGLINE as any),
    ...(options.text || {}),
  }) : {}
  const titleTransformations:TransformerOption = buildSocialTextTransformations(options.title, {
    ...(DEFAULTS.TITLE as any),
    ...(options.text || {}),
  })

  const transformations:TransformerOption = {
    resize: {
      width: image.width || DEFAULTS.IMAGE.width,
      height: image.height || DEFAULTS.IMAGE.height,
      type: image.cropMode || DEFAULTS.IMAGE.cropMode as ResizeType
    },
    gravity: image.resizeFocus,
    chaining: [titleTransformations, tagLineTransformations ]
  }

  return buildImageUrl(image.publicId, {
    cloud: {
      ...getConfig(),
      ...cloud
    },
    transformations
  })
}
