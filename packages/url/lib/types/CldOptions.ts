
export interface CldOptions {
/**Configurations */
  apiKey?: string,
  apiSecret?: string,
  cloudName: string,
  cname?: string,
  privateCdn?: boolean,
  resourceType?: string,
  secure?: boolean,
  secureDistribution?: string,
  type?: string,
  shorten?: string,
  urlSuffix?: string,
  useRootPath?: boolean,
  cdnSubdomain?: boolean,
  version?: string | number,
  signature?: string,
/**Transformations */
  fetchFormat?: string,
  format?: string
}
