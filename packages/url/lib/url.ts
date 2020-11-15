import { RESOURCE_TYPES, SEO_TYPES, STORAGE_TYPES } from "./constants"
import { CldOptions } from './types/CldOptions'

const SHARED_CDNS:string[] = ["cloudinary-a.akamaihd.net", "res.cloudinary.com"]

//eslint-disable-next-line
const CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video|raw)\/)?(?:(upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/

export const extractPublicId = (link: string):string => {
  if (!link) return ''

  const parts = CLOUDINARY_REGEX.exec(link)

  return parts && parts.length > 2 ? parts[parts.length - 2] : link
} 

export const getSignature = (signature?: string) => {
  if (!signature) return ''

  //s--signature--
  const isFormatted = signature.indexOf('s--') === 0 && signature.endsWith('--')

  return isFormatted ? signature : `s--${signature}--`
}

const doesPathNeedVersion = (publicId: string) => !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//)

export const encodePublicId = (publicId: string):string => encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/')

export const getVersion = (publicId: string, { forceVersion = false, version = 1} : { forceVersion?: boolean, version?: string | number }) => {
  //No need version: url, version included
  const needVersion = doesPathNeedVersion(publicId) && forceVersion

  return needVersion ? `v${version}` : ''
}

export const getSubDomain = (publicId: string, { cdnSubdomain = false, cname } : { cdnSubdomain?: boolean, cname?: string }) => {
  if (!cname) return `res${cdnSubdomain ? `-${publicId}` : ''}`

  return cdnSubdomain ? `` : ''
}

export const getPrefix = (publicId: string, { 
  cloudName, 
  privateCdn = false, 
  cdnSubdomain = false, 
  secureDistribution, 
  cname, 
  secure = true, 
}: { 
  cloudName: string, 
  privateCdn?: boolean, 
  cdnSubdomain?: boolean, 
  secureDistribution?: string, 
  cname?: string, 
  secure?: boolean, 
}):string => {
  const hasSecureDistribution = secure && secureDistribution && !SHARED_CDNS.includes(secureDistribution)
  const protocol = `http${secure ? 's' : ''}://`
  const cdn = privateCdn && !hasSecureDistribution ? `${cloudName}-` : ''
  const accountPath = privateCdn ? '' : `/${cloudName}`
  const subDomain = hasSecureDistribution ? '' : getSubDomain(publicId, { cdnSubdomain, cname })
  const host = hasSecureDistribution ? secureDistribution : (cname || '.cloudinary.com')

  return `${protocol}${cdn}${subDomain}${host}${accountPath}`
}

export const getResourceType = ({
  resourceType = RESOURCE_TYPES.IMAGE,
  type = STORAGE_TYPES.UPLOAD,
  urlSuffix,
  useRootPath,
  shortern
}: {
  resourceType?: string,
  type?: string,
  urlSuffix?: string,
  useRootPath?: boolean,
  shortern?: boolean
}):string => {
  const isUploadImage = resourceType === RESOURCE_TYPES.IMAGE && type === STORAGE_TYPES.UPLOAD
  const useRootForNonUploadedImages = useRootPath && !isUploadImage
  const shortenForUploadedImages = shortern && isUploadImage
  const typePath = `${resourceType}/${type}`

  if (useRootForNonUploadedImages) { throw new Error("Root path only supported for image/upload") }

  if (useRootPath) return `${shortenForUploadedImages ? 'iu': ''}`

  if (urlSuffix) {
    const seo = SEO_TYPES[typePath]

    if (seo) { return seo }

    throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(', ')}`)
  }

  return typePath
}

const isUrl = (str) => str && !!str.match(/^https?:\//)

const isFetchRemote = (type?: string) => type === 'fetch'

const makeUrl = (str: string) => {
  const midPath = str.startsWith('/') ? '' : '/'

  return `${document.location.protocol}//${document.location.host}${str.startsWith('?') ? document.location.pathname : midPath}${str}`
}

const convertPublicIdToUrl = (publicId: string, type?: string) => !isUrl(publicId) && isFetchRemote(type) ? makeUrl(publicId) : publicId

export const getPathToAsset = (publicId: string, { urlSuffix = '', format = '' } : { urlSuffix?: string, format?: string }):string => {
  if (isUrl(publicId)) return encodePublicId(publicId)

  const publicIdWithFormat = publicId.replace(/\.[^/.]+$/, format || '')
  const path = [publicIdWithFormat, urlSuffix].filter(Boolean).join('/')

  return encodePublicId(path)
}

export const url = (publicId: string, options: CldOptions):string => {
  if (!options.cloudName) {
    throw Error('cloudName is required!')
  }

  //If publicId is cloudinary url, strip to get the publicId and version.
  const _publicId = isUrl(publicId) ? extractPublicId(publicId) : publicId
  
  //1. Get version
  const version:string = getVersion(_publicId, options)
  //2. Get Prefix
  const prefix:string = getPrefix(_publicId, options)
  //3. Get Signature
  const signature:string = getSignature(options.signature)
  //4. Get Resource type
  const typePath:string = getResourceType(options)
  //5. Get path
  const pathToAsset:string = getPathToAsset(_publicId, options)
  //6. Encode everything with %20 for whitespace

  const fetchFormat = options.fetchFormat || (isFetchRemote(options.type) ? options.format : 'auto') || 'auto'

  const $options = {
    quality: 'auto',
    ...options,
    fetchFormat
  }

  //build the transformations
  const { toTransformationStr, transform } = require('./transformers')

  const trans:string = toTransformationStr(transform($options))

  return [prefix, typePath, signature, trans, version, pathToAsset].filter(Boolean).join('/').replace(' ', '%20')
}

export default url