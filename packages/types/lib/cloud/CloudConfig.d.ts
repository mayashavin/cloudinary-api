import { ResourceType } from "./ResourceType";
import { StorageType } from "./StorageType";

export interface CloudConfig {
  apiKey?: string;
  apiSecret?: string;
  cloudName?: string;
  cname?: string;
  privateCdn?: boolean;
  resourceType?: ResourceType;
  secure?: boolean;
  secureDistribution?: string;
  storageType?: StorageType;
  shorten?: string;
  urlSuffix?: string;
  useRootPath?: boolean;
  cdnSubdomain?: boolean;
  version?: string | number;
  signature?: string;
  forceVersion?: boolean;
  authToken?: Object;
}