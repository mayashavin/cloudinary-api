import { ResourceType } from "./ResourceType";
import { StorageType } from "./StorageType";
import { Resize } from './transformation/Resize'
import { Border } from './transformation/Border'
import { CustomFunction } from './transformation/CustomFunc'
import { Offset } from './transformation/Offset'
import { Position } from './transformation/Position'
import { Effect } from './transformation/Effect'
import { ROTATION_MODES } from '../constants/rotation'
import { Gravity } from "./transformation/Gravity";
import { Variable } from "./transformation/Variable";

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
  rotate?: Rotation,
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
  gravity?: Gravity,
  if?: string,
  flags?: Flag,
  opacity?: number | string,
  overlay?: string,
  page?: string,
  prefix?: string,
  quality?: string,
  radius?: Radius,
  rawTransformation?: string,
  transformation?: string,
  chaining?: TransformerOption[],
  underlay?: string,
  variables?: Variable | Variable[],
  position?: Position,
  zoom?: number | string
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

