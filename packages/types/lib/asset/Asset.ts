
import { ResourceType } from '../cloud/ResourceType'
import { StorageType } from '../cloud/StorageType'

export interface Asset {
  publicId: string,
  assetId: string,
  format: string,
  secureUrl: string,
  type: StorageType,
  version: string | number,
  height: number,
  width: number,
  eager?: Object[],
  placeholder?: boolean,
  tags?: string[],
  originalFilename: string,
  overwritten?: boolean,
  resourceType: ResourceType
}