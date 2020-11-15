import { RESOURCE_TYPES } from "../constants";

type ResourceTypeKeys = keyof typeof RESOURCE_TYPES

export type ResourceType = typeof RESOURCE_TYPES[ResourceTypeKeys]