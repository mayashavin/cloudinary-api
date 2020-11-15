import { RESOURCE_TYPES } from './constants'
import { CldOptions } from './types/CldOptions'
import { url, extractPublicId } from './url'

let config = {}

export const getConfig = () => Object.freeze(config)

export const setConfig = (options:CldOptions) => config = {
  ...config,
  ...options
} 

export const buildUrl =  (pubicId: string, options:CldOptions):string => url(pubicId, {
  ...config,
  ...options,
})

export const buildImageUrl = (pubicId: string, options: CldOptions):string => buildUrl(pubicId, {
  ...options,
  resourceType: RESOURCE_TYPES.IMAGE
})

export const buildVideoUrl = (pubicId: string, options: CldOptions):string => buildUrl(pubicId, {
  ...options,
  resourceType: RESOURCE_TYPES.VIDEO
})

export { RESOURCE_TYPES, extractPublicId }
