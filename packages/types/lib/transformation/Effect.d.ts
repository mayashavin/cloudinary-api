import {
  Brightness,
  BlurEffects,
  ColorAdjustment,
  ColorChannel,
  ColorFilter,
  Colorblind,
  Contrast,
  PixelateEffects,
  VideoEffects
} from '@cld-apis/utils'

export type BrightnessEffect = typeof Brightness[keyof typeof Brightness]
export type BlurEffect = typeof BlurEffects[keyof typeof BlurEffects]
export type AdjustmentEffect = typeof ColorAdjustment[keyof typeof ColorAdjustment]
export type ColorChanelEffect = typeof ColorChannel[keyof typeof ColorChannel]
export type FilterEffect = typeof ColorFilter[keyof typeof ColorFilter]
export type ColorblindEffect = typeof Colorblind[keyof typeof Colorblind]
export type ContrastEffect = typeof Contrast[keyof typeof Contrast]
export type PixelateEffect = typeof PixelateEffects[keyof typeof PixelateEffects]
export type VideoEffect = typeof VideoEffects[keyof typeof VideoEffects]

export type Effect = {
  name: BrightnessEffect | BlurEffect | AdjustmentEffect | ColorChanelEffect | FilterEffect | ColorblindEffect | ContrastEffect | PixelateEffect,
  value?: number | string | string[] | number[]
}

export type VEffect = {
  name: BrightnessEffect | BlurEffect | AdjustmentEffect | ColorChanelEffect | FilterEffect | ContrastEffect | PixelateEffect | VideoEffect,
  value?: number | string | string[] | number[]
}