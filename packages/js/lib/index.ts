import { RESOURCE_TYPES } from './constants'
import { url } from './url'

let config = {}

export const getConfig = () => Object.freeze(config)

export const setConfig = (options) => config = {
  ...config,
  ...options
} 

export const buildUrl =  (pubicId: string, options) => url(pubicId, {
  ...config,
  ...options,
})

export const buildImageUrl = (pubicId: string, options) => buildUrl(pubicId, {
  ...options,
  resourceType: RESOURCE_TYPES.IMAGE
})

export const buildVideoUrl = (pubicId: string, options) => buildUrl(pubicId, {
  ...options,
  resourceType: RESOURCE_TYPES.VIDEO
})

export { RESOURCE_TYPES }
