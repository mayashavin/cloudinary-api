export const SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
} as const

export const STORAGE_TYPES = {
  UPLOAD: 'upload',
  FETCH: 'fetch',
  PRIVATE: 'private',
  AUTHENTICATED: 'authenticated',
  SPRITE: 'sprite',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
  VIMEO: 'vimeo'
} as const

export const RESOURCE_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
  RAW: 'raw'
} as const

export const DEFAULT_VIDEO_SOURCE_TYPES = {
  WEBM: 'webm', 
  MP4: 'mp4',
  OGV: 'ogv'
} as const

export const TRANSFORMERS = {
  angle: 'a',
  rotate: 'a',
  background: 'b',
  color: 'co',
  colorSpace: 'cs',
  customFunction: 'fn',
  defaultImage: 'd',
  density: 'dn',
  dpr: 'dpr',
  opacity: 'o',
  format: 'f',
  gravity: 'g',  
  overlay: 'l',
  page: 'pg',
  prefix: 'p',
  quality: 'q',
  radius: 'r',
  // sourceTypes,
  // sourceTransformation,
  bitRate: 'br',
  keyframeInterval: 'ki',
  audioCodec: 'ac',
  audioFrequency: 'af',
  delay: 'dl',
  ocr: 'ocr',
  streamingProfile: 'sp',
  transformation: 't',
  underlay: 'u',
  videoCodec: 'vc',
  videoSampling: 'vs',
  zoom: 'z'
}

export { RESIZE_TYPES } from './resize'
export { ROTATION_MODES } from './rotation'