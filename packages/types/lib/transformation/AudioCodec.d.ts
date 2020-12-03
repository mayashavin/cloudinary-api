import { AudioCodecTypes } from '@cld-apis/utils'

export type AudioCodec = typeof AudioCodecTypes[keyof typeof AudioCodecTypes]