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
  audioCodec: 'ac',
  audioFrequency: 'af',
  background: 'b',
  bitRate: 'br',
  color: 'co',
  colorSpace: 'cs',
  customFunction: 'fn',
  defaultImage: 'd',
  delay: 'dl',
  density: 'dn',
  duration: 'du',
  dpr: 'dpr',
  // else: '',
  // endIf: '',
  endOffset: 'eo', //to remove
  // fallbackContent: '',
  format: 'f',
  // flags: 'fl',
  gravity: 'g',
  // fps: 'fps',
  // htmlHeight: '',
  // htmlWidth: '',
  keyframeInterval: 'ki',
  ocr: 'ocr',
  // offset: '',
  opacity: 'o',
  overlay: 'l',
  page: 'pg',
  // poster: '',
  prefix: 'p',
  quality: 'q',
  radius: 'r',
  // sourceTypes,
  // sourceTransformation,
  startOffset: 'so',
  streamingProfile: 'sp',
  transformation: 't',
  underlay: 'u',
  videoCodec: 'vc',
  videoSampling: 'vs',
  zoom: 'z'
}

export { RESIZE_TYPES } from './resize'
export { ArithmeticExpression } from './arithmetic'
export { ConditionOperators, ConditionalParams } from './condition'
export { ROTATION_MODES } from './rotation'