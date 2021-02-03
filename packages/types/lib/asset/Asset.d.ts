import { ResourceType } from '../cloud/ResourceType'
import { StorageType } from '../cloud/StorageType'
import { AccessControlType, AccessMode } from '../options/api'

export interface Asset {
  publicId: string,
  assetId: string,
  format: string,
  secureUrl: string,
  type: StorageType,
  version: number,
  height: number,
  width: number,
  eager?: Object[],
  placeholder?: boolean,
  tags?: string[],
  originalFilename: string,
  overwritten?: boolean,
  resourceType: ResourceType;
  signature: string;
  createdAt: string;
  pages?: number;
  bytes: number;
  etag?: string;
  url: string;
  accessMode: AccessMode;
  moderation?: Array<string>;
  accessControl: AccessControlType;
  context?: Object;
  metadata?: Object;
}

