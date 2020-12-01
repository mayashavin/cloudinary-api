export const Prefix = '$' as const

export const StringBound = '!' as const

export const ValueAssignable = {
  context: "ctx",
  structureMetadata: "md"
} as const

export const Formats = {
  integer: 'to_i',
  float: 'to_f'
} as const
