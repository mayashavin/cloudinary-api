import { STORAGE_TYPES } from "@cld-apis/utils";

type StorageTypeKeys = keyof typeof STORAGE_TYPES

export type StorageType = typeof STORAGE_TYPES[StorageTypeKeys]