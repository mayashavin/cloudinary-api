import { STORAGE_TYPES, RESOURCE_TYPES } from "../constants";

export type StorageType = typeof STORAGE_TYPES[keyof typeof STORAGE_TYPES]

export type ResourceType = typeof RESOURCE_TYPES[keyof typeof RESOURCE_TYPES]

export interface Asset {
  publicId: string,
  assetId: string,
  format: string,
  secureUrl: string,
  type: StorageType,
  version: string | number,
  height: number,
  width: number,
  eager: Object[],
  placeholder: boolean,
  tags: string[],
  originalFilename: string,
  overwritten: boolean,
  resourceType: 
}