import type { Effect, VEffect } from '@cld-apis/types'
import { toString } from '../utils'

export const effect = (obj: Effect | VEffect):string => {
  const isString = typeof obj === 'string'

  if (!obj || (!isString && !obj.name)) return ''

  if (isString || !obj.value) return `e_${obj.name || obj}`

  const value = Array.isArray(obj.value) ? obj.value.join(':') : obj.value
  const effectValue = toString([obj.name, value])

  return `e_${effectValue}`
}