import { RESOURCE_TYPES } from '@cld-apis/utils'
import { CldOptions, CloudConfig } from '@cld-apis/types'
import { url, extractPublicId } from './url'
import { transform, toTransformationStr } from './transformers'

let config = {}

export const getConfig = () => Object.freeze(config)

export const setConfig = (options: CloudConfig) => config = {
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

export { extractPublicId, Transformer }

export default buildUrl