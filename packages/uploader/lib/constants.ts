import { RESOURCE_TYPES } from "@cld-apis/utils"

export const UPLOAD_PREFIX = "https://api.cloudinary.com" as const

export const UploadResourceTypes = {
  ...RESOURCE_TYPES,
  AUTO: 'auto'
} as const

export type UploadResourceType = typeof UploadResourceTypes[keyof typeof UploadResourceTypes]