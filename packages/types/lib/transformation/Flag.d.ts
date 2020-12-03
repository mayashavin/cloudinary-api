import { Flags, VFlags } from '@cld-apis/utils'

export type FlagType = typeof Flags[keyof typeof Flags]

export type VFlagType = typeof VFlags[keyof typeof VFlags]

export type Flag = FlagType | FlagType[]

export type VFlag = VFlagType | VFlagType[]