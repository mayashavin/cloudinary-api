import { RESOURCE_TYPES, STORAGE_TYPES } from './constants'
import { CldOptions, CloudConfig } from './types/CldOptions'
import { url, extractPublicId } from './url'

let config = {}

export const getConfig = () => Object.freeze(config)

export const setConfig = (options:CloudConfig) => config = {
  ...config,
  ...options
} 

export const buildUrl =  (pubicId: string, { cloud = {}, transformations = {} }: CldOptions):string => {
  const cloudConfig = {
    ...config,
    ...cloud
  }
  return url(pubicId, cloudConfig, transformations)
}

export const buildImageUrl = (pubicId: string, { cloud = {}, transformations = {} }: CldOptions):string => buildUrl(pubicId, {
  cloud: {
    ...cloud,
    resourceType: RESOURCE_TYPES.IMAGE
  },
  transformations
})

export const buildVideoUrl = (pubicId: string,  { cloud = {}, transformations = {} }: CldOptions):string => buildUrl(pubicId, {
  cloud: {
    ...cloud,
    resourceType: RESOURCE_TYPES.VIDEO
  },
  transformations
})

export { RESOURCE_TYPES, extractPublicId, STORAGE_TYPES }