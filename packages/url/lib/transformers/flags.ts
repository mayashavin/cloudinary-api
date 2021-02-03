import type { Flag, VFlag } from "@cld-apis/types"

export const flags = (value?: Flag | VFlag ):string => {
  if (!value || value.length === 0) return ''

  const flagValue = typeof value === 'string' ? value : value.join(':')

  return `fl_${flagValue}`
}