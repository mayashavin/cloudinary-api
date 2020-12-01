import { ResourceType } from "./ResourceType";
import { StorageType } from "./StorageType";
import { Resize } from './transformation/Resize'
import { Border } from './transformation/Border'
import { CustomFunction } from './transformation/CustomFunc'
import { Offset } from './transformation/Offset'
import { Position } from './transformation/Position'
import { Effect, VEffect } from './transformation/Effect'
import { ROTATION_MODES } from '../constants/rotation'
import { Gravity } from "./transformation/Gravity";
import { Variable } from "./transformation/Variable";
import { Condition } from "./transformation/Condition";
import { VFlag } from "./transformation/Flag";
import { ColorSpace, VColorSpace } from "./transformation/ColorSpace";
import { AudioCodec, FPS } from "./transformation";

export type Radius = number | string

export type Flag = string | string[]

export type Rotation = number | typeof ROTATION_MODES[keyof typeof ROTATION_MODES]

export interface CldOptions {
  cloud?: CloudConfig,
  transformations?: TransformerOption | TransformerVideoOption
}

export interface CloudConfig {
  apiKey?: string,
  apiSecret?: string,
  cloudName?: string,
  cname?: string,
  privateCdn?: boolean,
  resourceType?: ResourceType,
  secure?: boolean,
  secureDistribution?: string,
  storageType?: StorageType,
  shorten?: string,
  urlSuffix?: string,
  useRootPath?: boolean,
  cdnSubdomain?: boolean,
  version?: string | number,
  signature?: string,
  forceVersion?: boolean
}

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
