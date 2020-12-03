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

export const VIDEO_SOURCE_TYPES = {
  WEBM: 'webm', 
  MP4: 'mp4',
  OGV: 'ogv'
} as const