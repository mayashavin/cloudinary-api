import { RESOURCE_TYPES } from "@cld-apis/utils";

type ResourceTypeKeys = keyof typeof RESOURCE_TYPES

export type ResourceType = typeof RESOURCE_TYPES[ResourceTypeKeys]