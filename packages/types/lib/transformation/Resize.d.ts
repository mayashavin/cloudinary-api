import { RESIZE_TYPES } from '@cld-apis/utils'

export type ResizeType = number | typeof RESIZE_TYPES[keyof typeof RESIZE_TYPES]

export type Resize = {
  type?: ResizeType, 
  width?: number | string, 
  height?: number | string,
  aspectRatio?: string,
}