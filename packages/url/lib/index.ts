import { RESOURCE_TYPES, STORAGE_TYPES, ROTATION_MODES } from './constants'
import { CldOptions, CloudConfig } from './types/CldOptions'
import { url, extractPublicId } from './url'

import { transform, toTransformationStr } from './transformers'

let config = {}

export const getConfig = () => Object.freeze(config)

export const setConfig = (options:CloudConfig) => config = {
  ...config,
  ...options
} 

export const buildUrl =  (publicId: string, { cloud = {}, transformations = {} }: CldOptions):string => {
  const cloudConfig = {
    ...config,
    ...cloud
  }
  return url(publicId, cloudConfig, transformations)
}

export const buildImageUrl = (publicId: string, { cloud = {}, transformations = {} }: CldOptions):string => buildUrl(publicId, {
  cloud: {
    ...cloud,
    resourceType: RESOURCE_TYPES.IMAGE
  },
  transformations
})

export const buildVideoUrl = (publicId: string,  { cloud = {}, transformations = {} }: CldOptions):string => buildUrl(publicId, {
  cloud: {
    ...cloud,
    resourceType: RESOURCE_TYPES.VIDEO
  },
  transformations
})

type TransformerType = { transform: typeof transform, toString: typeof toTransformationStr }

const Transformer:TransformerType = { transform, toString: toTransformationStr }

export { RESOURCE_TYPES, extractPublicId, STORAGE_TYPES, ROTATION_MODES, Transformer }

export type { CldOptions, TransformerOption, TransformerVideoOption, CloudConfig } from './types/CldOptions'
export type { Resize, ResizeType, Border, CustomFunction, Position, Effect, Rotation, Flag, Offset, Radius, Gravity  } from './types/transformation'
export type { ResourceType } from './types/ResourceType'
export type { StorageType } from './types/StorageType'

export default buildUrl