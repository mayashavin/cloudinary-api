import { ColorSpace, VColorSpace } from '../../constants/colorSpace'

export type ColorSpace = typeof ColorSpace[keyof typeof ColorSpace]

export type VColorSpace = typeof VColorSpace[keyof typeof VColorSpace]