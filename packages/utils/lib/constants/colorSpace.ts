export const ColorSpace = {
  sRGB: 'srgb',
  noCMYK: 'no_cmyk',
  keepCMYK: 'keep_cmyk'
} as const

export const VColorSpace = {
  ...ColorSpace,
  tinySRGB: 'tinysrgb',
  copy: 'copy'
} as const