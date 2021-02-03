import { ResourceType } from "../cloud/ResourceType";
import { StorageType } from "../cloud/StorageType";

export type ResponseError = {
  message: string;
  http_code: number
}

export type ResourceOptions = {
  resourceType?: ResourceType;
  type?: StorageType;
}

export type SingleDeleteOptions = ResourceOptions & {
  invalidate?: boolean;
}

export type RenameOptions = ResourceOptions & {
  toType: StorageType;
  overwrite: boolean;
}

export type AccessMode = 'public' | 'authenticated';

export type AccessControlType = 'token' | 'anonymous'

export type AccessControl = {
  type: AccessControlType;
  start?: string;
  end?: string;
}

export type ResponsiveBreakpointOption = {
  createDerived: boolean;
  format?: string;
  transformation?: string;
  maxWidth?: number;
  minWidth?: number;
  bytesStep?: number;
  maxImages?: number
}

export type AssetOptions = {
  tags?: string[]
  context?: string[]
  colors?: boolean
  faces?: boolean;
  qualityAnalysis?: boolean;
  accessibilityAnalysis?: boolean;
  cinemagraphAnalysis?: boolean;
  imageMetadata?: boolean;
  phash?: boolean
  responsiveBreakpoints?: ResponsiveBreakpointOption[]
  autoTagging?: number;
  categorization?: string;
  detection?: string;
  ocr?: string;
  exif?: boolean;
}

export type ManupulationOptions = {
  eager?: string[];
  eageAsync?: boolean;
  eagerNotificationUrl?: string
  transformation?: string
  format?: string;
  customCoordinates?: string[]
  faceCoordinates?: string[]
  backgroundRemoval?: 'cloudinary_ai' | 'pixelz'
  rawConvert?: 'apose' | 'google_speech' | 'extract_text'
}

export type UploadOptions = ResourceOptions & ManupulationOptions & AssetOptions & {
  publicId?: string;
  folder?: string;
  useFilename?: boolean;
  uniqueFilename?: boolean;
  accessControl?: AccessControl;
  accessMode?: AccessMode;
  discardOriginalFilename?: boolean;
  overwrite?: boolean;
  allowedFormats?: string[];
  async?: boolean;
  backup?: boolean;
  eval?: string;
  headers?: string;
  invalidate?: boolean;
  moderation?: string;
  notificationUrl?: string;
  proxy?: string;
  returnDeleteToken?: boolean;
}
