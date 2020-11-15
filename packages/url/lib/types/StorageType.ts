import { STORAGE_TYPES } from "../constants";

type StorageTypeKeys = keyof typeof STORAGE_TYPES

export type StorageType = typeof STORAGE_TYPES[StorageTypeKeys]