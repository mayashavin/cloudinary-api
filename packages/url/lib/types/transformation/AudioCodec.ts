import { AudioCodecTypes } from '../../constants/audioCodec'

export type AudioCodec = typeof AudioCodecTypes[keyof typeof AudioCodecTypes]