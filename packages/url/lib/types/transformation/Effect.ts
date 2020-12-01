import {
  Brightness,
  BlurEffect,
  ColorAdjustment,
  ColorChannel,
  ColorFilter,
  Colorblind,
  Contrast,
  PixelateEffect
} from '../../constants/effects'

export type BrightnessEffect = typeof Brightness[keyof typeof Brightness]
export type BlurEffect = typeof BlurEffect[keyof typeof BlurEffect]
export type AdjustmentEffect = typeof ColorAdjustment[keyof typeof ColorAdjustment]
export type ColorChanelEffect = typeof ColorChannel[keyof typeof ColorChannel]
export type FilterEffect = typeof ColorFilter[keyof typeof ColorFilter]
export type ColorblindEffect = typeof Colorblind[keyof typeof Colorblind]
export type ContrastEffect = typeof Contrast[keyof typeof Contrast]
export type PixelateEffect = typeof PixelateEffect[keyof typeof PixelateEffect]

export type Effect = {
  name: BrightnessEffect | BlurEffect | AdjustmentEffect | ColorChanelEffect | FilterEffect | ColorblindEffect | ContrastEffect | PixelateEffect,
  value?: number | string | string[] | number[]
}