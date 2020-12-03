import { RESOURCE_TYPES, UPLOAD_PREFIX } from "../constants"
import { ResourceType } from "../types/Asset"
const EXCEPTIONS = ['file', 'cloudName', 'resourceType', 'apiKey', 'signature']

export const clearBlank = () => {}

export const toRequestParamString = (options) => {
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const paramOptions = {
    ...options,
    timestamp
  }

  return Object.keys(paramOptions).sort().reduce((str, field) => {
    if (EXCEPTIONS.includes(field)) return str

    const separation = str ? `&` : ''
    const value = paramOptions[field]

    return `${str}${separation}${field}=${value}`
  }, '')
}

export const createSignature = (params: string = '', apiSecret: string = '') => {
  if (!apiSecret) throw Error('apiSecret is required for uploading')
  const computed = `${params}${apiSecret}`
  const sha256 = require('crypto-js/sha256')
  
  return '' + sha256(computed)
}

export const buildApiUrl = (cloudName: string, resourceType: ResourceType = RESOURCE_TYPES.AUTO) => {
  if (!cloudName) throw Error('cloudName is required for uploading')

  return `${UPLOAD_PREFIX}/v1_1/${cloudName}/${resourceType}/upload`
}

