import { ResourceType } from "./ResourceType";
import { StorageType } from "./StorageType";
import { Resize } from '../transformers/resize'
import { Border } from '../transformers/border'
import { CustomFunction } from '../transformers/customFunc'
import { Offset } from '../transformers/video/offset'
import { Position } from '../transformers/position'
import { Effect } from '../transformers/effect'
import { ROTATION_MODES } from '../constants'

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

export interface TransformerOption {
  rotation?: Rotation,
  background?: string,
  border?: Border | string,
  effect?: Effect,
  color?: string,
  resize?: Resize,
  colorSpace?: string,
  customFunction?: CustomFunction,
  defaultImage?: string,
  delay?: number,
  density?: number,
  dpr?: string | number,
  else?: string,
  endIf?: string,
  format?: string,
  fetchFormat?: string,
  gravity?: string,
  if?: string,
  flags?: Flag,
  opacity?: number,
  overlay?: string,
  page?: string,
  prefix?: string,
  quality?: string,
  radius?: Radius,
  rawTransformation?: string,
  transformation?: string,
  chaining?: TransformerOption[],
  underlay?: string,
  variable?: string,
  variables?: string,
  position?: Position,
  zoom?: number
}

export interface TransformerVideoOption extends TransformerOption{
  audioCodec?: string,
  audioFrequency?:string,
  bitRate?: string | number,
  fps?: string,
  keyframeInterval?: string,
  offset?: Offset
  poster?: string,
  sourceTypes?: string[],
  videoCodec?: string,
  duration?: string | number,
  videoSampling?: string
  fallbackContent?: string,
  ocr?: string,
}

