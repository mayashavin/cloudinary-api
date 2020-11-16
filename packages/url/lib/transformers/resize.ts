export type ResizeType = 'imaggaScale' | 'imaggaCrop' | 'crop' | 'fill' | 'scale' | 'minimumPad' | 'fit' | 'pad' | 'limitFit' | 'thumbnail' | 'limitFill' | 'minimumFit' | 'limitPad' | 'fillPad'

export interface Resize {
  type?: ResizeType, 
  width?: number | string, 
  height?: number | string,
  aspectRatio?: string,
}

export const resize = ({ type, width, height, aspectRatio }: Resize) => {
  const w = width ? `w_${width}` : ''
  const h = height ? `h_${height}` : ''
  const crop = type ? `c_${type}` : ''
  const ar = aspectRatio ? `ar_${aspectRatio}` : ''

  return [ crop, w, h, ar ].filter(Boolean).join()
}