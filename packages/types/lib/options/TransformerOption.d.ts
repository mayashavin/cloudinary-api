import { AudioCodec, Border, ColorSpace, Condition, CustomFunction, Effect, Flag, FPS, Gravity, Offset, Position, Radius, Resize, Rotation, Variable, VColorSpace, VEffect, VFlag } from "../transformation"

export type TransformerBaseOptions = {
  resize?: Resize,
  gravity?: Gravity,
  background?: string,
  overlay?: string,
  colorSpace?: ColorSpace | VColorSpace,
  format?: string,
  quality?: string | number,
  rotate?: Rotation,
  radius?: Radius,
  dpr?: string | number,
  fetchFormat?: string,
}

export interface TransformerOption extends TransformerBaseOptions {
  border?: Border | string,
  flags?: Flag,
  effect?: Effect,
  color?: string,
  customFunction?: CustomFunction,
  defaultImage?: string,
  density?: number,
  condition?: Condition,
  opacity?: number | string,
  page?: string,
  prefix?: string,
  rawTransformation?: string,
  transformation?: string,
  chaining?: TransformerOption[],
  underlay?: string,
  variables?: Variable | Variable[],
  position?: Position,
  zoom?: number | string
}

export interface TransformerVideoOption extends VideoSettings, AudioSettings, TransformerBaseOptions {
  offset?: Offset,
  videoSampling?: string | number,
  chaining?: TransformerVideoOption[],
  delay?: number,
  flags?: VFlag,
  effect?: VEffect
}

export type VideoSettings = {
  videoCodec?: string,
  fps?: FPS,
  streamingProfile?: string,
  bitRate?: string | number,
  keyframeInterval?: number,
}

export type AudioSettings = {
  audioCodec?: AudioCodec,
  audioFrequency?:string | number,
}