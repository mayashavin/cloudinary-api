import { Flag, VFlag } from "../types/transformation/Flag"

export const flags = (value?: Flag | VFlag ):string => {
  if (!value || value.length === 0) return ''

  const flagValue = typeof value === 'string' ? value : value.join(':')

  return `fl_${flagValue}`
}