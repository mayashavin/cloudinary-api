import { ColorSpace, VColorSpace } from '@cld-apis/utils'

export type ColorSpace = typeof ColorSpace[keyof typeof ColorSpace]

export type VColorSpace = typeof VColorSpace[keyof typeof VColorSpace]